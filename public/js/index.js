// const backgrounds = new Array( //array of background images
//   "url(../images/diamondEmpty.jpg)",
//   "url(../images/diamond1stBase.jpg)",
//   "url(../images/diamond2ndBase.jpg)",
//   "url(../images/diamond3rdBase.jpg)"
// );

// var mainPage = $("body");
// //mainPage.css("background-image", backgrounds[0] + "top center no-repeat");


// let ids = [];

// // The API object contains methods for each kind of request we'll make
// var API = {
//   getBatter: function(id) {
//     return $.ajax({
//       url: "batter/" + id,
//       type: "get"
//     });
//   },
//   updateHits: function (id) {
//     return $.ajax({
//       url: "batter/hits/" + id,
//       type: "get"
//     });
//   },
//   updateOuts: function (id) {
//     return $.ajax({
//       url: "batter/outs/" + id,
//       type: "get"
//     });
//   }
// };

// $("#hitbutton").on("click", function () {
//   console.log("hit");
 
//   $("#batterbox").empty()
//   //no need for logic to keep the baserunner indicator with bases loaded as current increments beyond
//   // the array length and will not change the image. Image change will occur when inning changes side
//   API.updateHits(ids[ids.length - 1]).then(function (data) {
//     console.log(data);
//   });
// });
// $("#outbutton").on("click", function () {
//   console.log("out");
//   $("#batterbox").empty();
//   API.updateOuts(ids[ids.length - 1]).then(function (data) {
//     console.log(data);
//   });
// });

// $(".player").on("click", function () {
//   $("#batterbox").empty();
//   ids.push(this.id);
//   API.getBatter(this.id).then(function (data) {
//     $("#batterbox").append(data);
//   });
// });

