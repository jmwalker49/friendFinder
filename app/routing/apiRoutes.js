// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on survey, answers, etc.
// ===============================================================================

var surveyData = require("../data/surveyData");
var answersData = require("../data/answersData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  
  });

  app.get("/api/answers", function(req, res) {
    res.json(answersData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {
      surveyData.push(req.body);
      res.json(true);
    });

  app.post("/api/answers", function(req, res) {
      answersData.push(req.body.answers);
      res.json(false);


    });

}