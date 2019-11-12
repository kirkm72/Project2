const express = require("express"),
  baseball = require("../models/app");

const router = express.Router();

router.route("/").get(function(req, res) {
  baseball.allTeams(function(data) {
    let teamsObj = {
      teams: data
    };
    console.log(teamsObj);
    res.render("index", teamsObj);
  });
});

router.route("/batter/:id").get(function(req, res) {
  baseball.selectBatter(req.params.id, function(data) {
    let playersObj = {
      players: data
    };
    console.log(playersObj);
    res.render("index", playersObj);
  });
});

module.exports = router;
