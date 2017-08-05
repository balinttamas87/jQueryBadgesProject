$(function() {

  $.ajax({
	url: "https://www.codeschool.com/users/balinttamas87.json",
	dataType: "jsonp",
	success: function(response) {
		var completedCoursesArr = response.courses.completed;
		for (var i = 0; i < completedCoursesArr.length; i++) {
			$("#badges").append("<div class='course'></div>");
		}
	}
  });

});
