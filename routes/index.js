var express = require('express');
var router = express.Router();

// We create a new variable for prizes
var prizes = require('mongoose').model('prizes');

/* Create prize page. */
router.get('/createPrize', function (req, res) {
  res.render('createPrize');
});

/* Stores a new prize in the DB */
router.post('/postNewPrize', function (req, res) {

  // We create a new variable following the prize Scheme
  var newPrize = new prizes({
    'units': req.param('units'),
    'title': req.param('title'),
    'description': req.param('description'),
    'prize': req.param('prize'),
    'coin': req.param('coin')
  });

  console.log(newPrize);

  // We store the prize
  newPrize.save(
    function (err, prize) {
      if (err) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write('We couldn\'t save the prize.');
        res.end();
      } else {
        res.redirect('/prizesList');
      }
    }
  );
});

/* Shows the prizes list. */
router.get('/prizesList', function (req, res) {
  prizes.find({},
    function (err, prize) {
      if (err) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write('No prizes found.');
        res.end();
      } else {
        res.render(
          'prizesList', {
            'prizes': prize
          }
        );
      }
    }
  );
});

/* Deletes a prizes */
router.get('/removePrize/:id', function (req, res) {
  prizes.remove({
      _id: req.params.id
    },
    function (err) {
      if (err) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=UTF-8'
        });
        res.write('Failed removing the prize.');
        res.end();
      } else {
        res.redirect('/prizesList');
      }
    }
  );
});

module.exports = router;