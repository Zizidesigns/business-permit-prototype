//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Business name validation
router.post('/business-name', function (req, res) {

  const businessName = req.session.data['businessName']

  if (!businessName) {
    return res.render('business-name', {
      error: true
    })
  }

  res.redirect('/business-address')
})