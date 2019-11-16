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

router.route("/api/home/team/:id").get(function(req, res) {
  let team_id = req.params.id;
  baseball.allplayers(team_id, function(data) {
    let playersObj = {
      homePlayers: data
    };


    res.json(playersObj.homePlayers);

  });
});

router.route("/api/away/team/:id").get(function(req, res) {
  let team_id = req.params.id;
  baseball.allplayers(team_id, function(data) {
    let playersObj = {
      awayPlayers: data
    };

    res.json(playersObj.awayPlayers);

  });
});




 router.route("/batter/hits/:id").post(function(req, res) {
   baseball.selectHits(req.params.id, function(data) {
     console.log(data)
   })
 })

 router.route("/batter/outs/:id").post(function(req, res) {
   baseball.selectOuts(req.params.id, function(data) {
     console.log(data)
   })
 })


module.exports = router;
