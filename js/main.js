function displayPackages(responsePackages){
  debugger;
  var source = $("#packageTemplate").html();
  var template = Handlebars.compile(source);
  var output = template(responsePackages);
  $("#packages").append(output);
}

Handlebars.registerHelper('addCohortButton', function(cohort) {
  var buttonText, buttonClass;
  buttonClass = cohort.full ? 'closed btn btn-default' : 'open btn btn-primary';
  buttonText = cohort.full ? 'Class Full' : 'Add Class';

  return new Handlebars.SafeString(
    "<button class='" + buttonClass + "'>" + buttonText + "</button>"
  );
});
