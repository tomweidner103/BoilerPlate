const router = require("express").Router();
const User = require("../db/models/User");

//gets user

router.get('/me', (req, res, next) => {
    res.json(req.user);
  });

// checks user and password

router.put("/login", (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) res.status(401).send("User not found");
      else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send("Incorrect password");
      } else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

// signs up a user

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.status(201).json(user);
      });
    })
    .catch(next);
});

//logs out user

router.delete('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy()
    res.sendStatus(204);
  });

module.exports = router;
