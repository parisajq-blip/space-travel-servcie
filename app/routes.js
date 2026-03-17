//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/question', function (req, res) {

    let celestialObject = req.session.data.celestialObject;

    if (celestialObject == "Moon") {
        res.redirect('full-name-moon');
    } else {
        res.redirect('full-name-mars');
    }
})
