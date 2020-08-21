$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/classTask.feature");
formatter.feature({
  "name": "Class Task Step",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@classtask"
    }
  ]
});
formatter.scenario({
  "name": "Testing youtube",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@classtask"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"youtube\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify title is \"YouTube\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iVerifyTitleIsYouTube(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Trending\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing amazon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@classtask"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"amazon\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify title is \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iVerifyTitleIsYouTube(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Gift Cards\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing chase bank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@classtask"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"ChaseBank\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify title is \"Credit Card, Mortgage, Banking, Auto | Chase Online | Chase.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iVerifyTitleIsYouTube(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"ATM \u0026 branch\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});