
$(document).ready(() => {
  
  
  let home_team_id,
    away_team_id,
    inning = 0,
    mainPage = $("body");
  //mainPage.css("background-image", backgrounds[0] + "top center no-repeat");

  async function startMatch(inning) {
    await atBats(); //1st inning
    await atBats(); //2nd inning
    // await atBats(); //3rd inning
    // await atBats(); //4th inning
    // await atBats(); //5th inning
    // await atBats(); //6th inning
    // await atBats(); //7th inning
    // await atBats(); //8th inning
    // await atBats(); //9th inning
    return;
  }


  function atBats() {
    inning += 1;
    mainPage.css("background-image", backgrounds[0]);
    let 
      visOuts = 0,
      visHits = 0,
      visScoreInning = 0,
      homeOuts = 0,
      homeHits = 0,
      homeScoreInning = 0,
      isTop = true;

    return new Promise((res, rej) => {
      console.log(`inning: ${inning}`);
      // On-click Out
      $(".out-btn").on("click", function() {
        let player_id = $(this).parent()[0].dataset["player_id"];
        $("#batter-card").hide();
        // Post out to season_bats_stats
        $.ajax({
          url: `batter/outs/${player_id}`,
          type: "post"
        }).then(function(data) {
          console.log(`Player ID: ${player_id} updated`);
        });

        if (isTop) {
          visOuts++;
          console.log(`visouts: ${visOuts}`);
          if (visOuts >= 3) {
            $(`#visScore${inning}`).unbind();
            isTop = false;
            mainPage.css("background-image", backgrounds[0]);
          }
        } else if (!isTop) {
          homeOuts++;
          console.log(`homeouts: ${homeOuts}`);
          if (homeOuts >= 3) {
            $(`#homeScore${inning}`).unbind();
            isTop = true;
            mainPage.css("background-image", backgrounds[0]);
            console.log("resolving promise");
            res();
          }
        }
      });

      //On-click hit
      $(".hit-btn").on("click", function() {
        let player_id = $(this).parent()[0].dataset["player_id"];
        mainPage.css("background-image", backgrounds[0]);

        $("#batter-card").hide();
        // Post hit to season_bats_stats
        $.ajax({
          url: `batter/hits/${player_id}`,
          type: "post"
        }).then(function(data) {
          console.log(`Player ID: ${player_id} updated`);
        });

        if (isTop) {
          visHits += 1;
          console.log(`visHits: ${visHits}`);
          switch (true) {
            case visHits === 1:
              console.log("one on");
              mainPage.css("background-image", backgrounds[visHits]);
              break;
            case visHits === 2:
              console.log("two one");
              mainPage.css("background-image", backgrounds[visHits]);
              break;
            case visHits === 3:
              mainPage.css("background-image", backgrounds[visHits]);
              break;
            default:
              mainPage.css("background-image", backgrounds[3]);
          }


          if (visOuts < 3) {
            if (visHits >= 4) {
              visScoreInning += 1;
              $(`#visScore${inning}`).val(visScoreInning);
              //gif
              console.log(`vis score: ${visScoreInning}`);
            }
          }
        } else if(!isTop) {
          homeHits++;
          mainPage.css("background-image", backgrounds[0]);
          console.log(`homeHits: ${homeHits}`);

          switch (true) {
            case homeHits === 1:
              console.log("one on");
              mainPage.css("background-image", backgrounds[homeHits]);
              break;
            case homeHits === 2:
              console.log("two one");
              mainPage.css("background-image", backgrounds[homeHits]);
              break;
            case homeHits === 3:
              mainPage.css("background-image", backgrounds[homeHits]);
              break;
            default:
              mainPage.css("background-image", backgrounds[3]);
          }

          if (homeOuts < 3) {
            if (homeHits >= 4) {
              homeScoreInning += 1;
              $(`#homeScore${inning}`).val(homeScoreInning);
              //gif
              console.log(`home score: ${homeScoreInning}`);
            }
          }
        }
      });
    });
  }

  const backgrounds = new Array( //array of background images
    "url(../images/diamondEmpty.jpg)",
    "url(../images/diamond1stBase.jpg)",
    "url(../images/diamond2ndBase.jpg)",
    "url(../images/diamond3rdBase.jpg)"
  );

  $("#batter-card").hide();
  // Select Team for home
  $(".home-team-btn").on("click", function() {
    $("#home-roster").empty();

    let id = $(this).data("home-id");
    home_team_id = id;
    $(`.${id}`).hide();
    $("#home-team-drop").hide();

    $.ajax(`/api/home/team/${id}`, {
      type: "GET"
    }).then(function(data) {
      data
        .reduce(
          function(table, row) {
            $(`<tr>
            <th scope="row" class="player" id="${row.player_id}">${
              row.jersey_number
            }</th>
            <td>${row.player_name}</td>
            <td>${row.position}</td>
            <td>${row.handness}</td>
            <td>${row.bat_avg}</td>

            <td><button class="player-at-bat-btn" id="ht-player-${
              row.player_id
            }" disable="false"
                data-name="${row.player_name}"
                data-pos="${row.position}"
                data-ros="${row.jersey_number}"
                data-hand="${row.handness}"
                data-bat_avg="${row.bat_avg}"
                data-player_id="${row.player_id}">Bat</button></td>
            </tr>`).appendTo(table);

            return table;
          },
          $(`<table class="table table-bordered table-striped mb-0">
                <thead>
                <tr>
                    <th scope="col">Roster</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Hand</th>
                    <th scope="col">Avg</th>
                    <th scope="col">At Bat</th>
                </tr>
                </thead>
                <tbody id="home-roster"></tbody>
            </table>`)
        )
        .appendTo($("#home-roster"));
    });
  });
  // Select Team for away
  $(".away-team-btn").on("click", function() {
    $("#away-roster").empty();
    let id = $(this).data("away-id");
    away_team_id = id;

    $(`.${id}`).hide();
    $("#away-team-drop").hide();

    $.ajax(`/api/away/team/${id}`, {
      type: "GET"
    }).then(function(data) {
      data
        .reduce(
          function(table, row) {
            $(`<tr>
                <td><button class="player-at-bat-btn" id="at-player-${
                  row.player_id
                }" disable="false"
                  data-name="${row.player_name}"
                  data-pos="${row.position}"
                  data-ros="${row.jersey_number}"
                  data-hand="${row.handness}"
                  data-bat_avg="${row.bat_avg}"
                  data-player_id="${row.player_id}">Bat</button></td>
                </td>
                <th scope="row">${row.jersey_number}</th>
                <td>${row.player_name}</td>
                <td>${row.position}</td>
                <td>${row.handness}</td>
                <td>${row.bat_avg}</td>
                
              </tr>`).appendTo(table);

            return table;
          },
          $(`<table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">At Bat</th>
                      <th scope="col">Roster</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Hand</th>
                      <th scope="col">Avg</th>
                      
                    </tr>
                  </thead>
                  <tbody id="home-roster"></tbody>
                </table>`)
        )
        .appendTo($("#away-roster"));
    });
  });
  //start match
  $("#start-match").on("click", function() {
    if ($(this).text() === "Start Match") {
      console.log("game started");

      //Resquest gif
      let url = `https://api.giphy.com/v1/gifs/search?q=baseball&api_key=efON0kuaf67AQ7xZbpJnftqbH8mQgHwh$&limit=10`;
      $.ajax({
        url,
        method: 'GET'
      }).then(function(response){
        
        let result = response.data;
        console.log(result);

        // for(let i = 0; i < result.length; i++){
        //   let imgAnimate = result[i].images['original']['url'];
        //   $('<gif-jumbo').attr({
        //     
        //     src: animate,
        //   });
       
        // }
      }) 

      
      startMatch(inning).then(function() {
        console.log("Match OVER");
      });

      $(this)
        .attr("disable", true)
        .text("End Game");
    } else {
      console.log("game ended");

      var newMatch = {
        home: home_team_id,
        away: away_team_id,
        homeScore: Number.parseInt($("#resultHome").text()),
        awayScore: Number.parseInt($("#resultVis").text())
      };

      /*Post Match*/
      $.ajax("/api/match", {
        type: "POST",
        data: newMatch
      }).then(function() {
        console.log("new match");
      });

      $(this)
        .attr("disable", true)
        .text("Start Game");
    }
  });

  // Select Batter
  $(document).on("click", ".player-at-bat-btn", function(e) {
    let isAtBat = e.target.getAttribute("disable");
    console.log(isAtBat);
    if (isAtBat === "false") {
      let dataSet = $(this)[0].dataset;
      $("#batter-card").show();
      $("#batter-card-name").text(dataSet["name"]);
      $("#batter-card-bat_avg").text(`Batting Average: ${dataSet["bat_avg"]}`);
      $("#batter-card-roster").text(dataSet["ros"]);
      $("#batter-card-pos").text(`Position: ${dataSet["pos"]}`);
      $("#batter-card-hand").text(`Bats: ${dataSet["hand"]}`);
      $("#batter-card").attr("data-player_id", `${dataSet["player_id"]}`);
    }
    //e.currentTarget.attributes['disable'] = true;
  });

  //Sum up the scores on the scoreboard
  $(".visScore").on("change", function() {
    var currentValue = parseInt($(this).val());
    visTotalSum += currentValue;
    $("#resultVis").text(visTotalSum);
  });

  $(".homeScore").on("change", function() {
    var currentValue = parseInt($(this).val());
    homeTotalSum += currentValue;
    $("#resultHome").text(homeTotalSum);
  });
});
