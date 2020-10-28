const { model } = require('../database/db')
const { Review } = require('../models/Models')
const validationMessage = require('./validationMessage')
module.exports = {
  /**
   * Get review by title along with comments, users, tags, and some movie data
   */
  getReviews: async (req, res) => {
    let title = false
    if (Object.keys(req.query).length) {
      if (req.query.title)
        title = req.query.title
      else {
        res.status(400).json({
          success: false,
          message: 'Bad request'
        })
        return
      }
    }

    async function getTagCommentUser(review) {
      return Promise.all([
        require('../models/Review-Tag').findAll({
          include: {
            model: require('../models/Tag')
          },
          where: {
            review_id: review.review_id
          }
        }),
        require('../models/Comment').findAll({
          where: {
            review_id: review.review_id
          },
          include: require('../models/User')
        })
      ])
    }

    Review.findAll({
      include: [require('../models/User')],
      where: {
        title: title
      }
    }).then(reviews => {
      if (reviews.length) {
        const review = reviews[0]
        getTagCommentUser(review).then(values => {
          review.tags = values[0][0]['tags'] || []
          review.comments = values[1] || []

          // delete review.user._previousDataValues 
          // delete review.user._options
          // delete review._previousDataValues 
          // delete review._options

          sendReview(review)
        }).catch(err => console.log(err))
        //  res.status(200).json(reviews)
      } else {
        console.log('hol')
        const https = require('https')
        const { API } = require('../config/app-config')

        https.request('https://api.themoviedb.org/3/search/movie?api_key=' + API.key
          + '&language=en-US&query=' + req.query.title + '&page=1&include_adult=false',
          (request => {
            let movies = ''
            request.on('data', (data) => movies += data)
            request.on('end', () => {
              const { results } = JSON.parse(movies)
              res.status(200).json(results[0])
            })
          }))
          .on('error', err => {
            res.status(500).json({ success: false, message: "Request could not be processed" })
          }).end()
      }

    })
      .catch((err) => {
        console.log(err)
        res.status(500).json({
          success: false,
          message: "The request could not be processed"
        })
      })

    function sendReview(review) {
      const https = require('https')
      const { API } = require('../config/app-config')
      https.get('https://api.themoviedb.org/3/movie/' + review.movie_id + '?api_key='
        + API.key + '&language=en-US',
        (request => {
          let movie = ''
          request
            .on('data', (data) => movie += data)
            .on('end', () => {
              movie = JSON.parse(movie)
              review.img = movie.poster_path,
                review.overview = movie.overview,
                review.releaseDate = movie.release_date
              // console.log(review)
              res.status(200).json(review)
            })
        })
      ).on('err', err => {
        res.status(500).json({
          success: false,
          message: 'API couldn not be reached'
        })
      })
    }
  },

  /**
   * Store new review
   */
  storeReview: async (req, res) => {

    const review = Review.build(req)
    const err = await validationMessage(review)
    if (err) {
      res.status(422).send(err)
    } else {
      review.save()
        .then(result => {
          res.status(200).redirect('/login')
        })
        .catch(err => { res.status(422).send(err) })
    }
  },

  /**
   * Get movies whose titles match someway the input text
   */
  searchMovie: (req, res) => {

    const https = require('https')
    const { API } = require('../config/app-config')

    https.request('https://api.themoviedb.org/3/search/movie?api_key=' + API.key
      + '&language=en-US&query=' + req.params.title_text + '&page=1&include_adult=false',
      (request => {
        let movies = ''
        request.on('data', (data) => movies += data)
        request.on('end', () => {
          const { results } = JSON.parse(movies)
          const resultObjs = []
          results.forEach(result => {
            resultObjs.push({
              id: result.id,
              title: result.title,
              img: 'https://image.tmdb.org/t/p/original' + result.poster_path
            })
          })
          res.status(200).json(resultObjs)
        })
      }))
      .on('error', err => {
        res.status(500).json({ success: false, message: "Request could not be processed" })
      }).end()
  },


  /**
   * Get Review by ID
   * @return {json} Used or error message
   */
  getReviewById: (req, res) => {
    Review.findOne({
      where: {
        review_id: req.params.review_id
      }
    })
      .then((review) => {
        review
          ? res.status(200).json(review)
          : res.status(422).json({
            success: false,
            message: "Review not found"
          })
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "The request could not be processed"
        })
      })
  },

  /**
   * Update Review
   */
  updateReview: async (req, res) => {
    await Review.update(
      req.body, {
      where: {
        review_id: req.params.review_id
      }
    })
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Review updated successfully"
        })
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "The request could not be processed"
        })
      })
  }
}