$(function() {

  $.ajax({
	url: "https://www.codeschool.com/users/balinttamas87.json",
	dataType: "jsonp",
	success: function(response) {
		var completedCoursesArr = response.courses.completed;
		var currentCompletedCourseTitle = "";
		for (var i = 0; i < completedCoursesArr.length; i++) {
			currentCompletedCourseTitle = completedCoursesArr[i].title;
			$("#badges").append("<div class='course'><h3>" + currentCompletedCourseTitle + "</h3></div>");

		}
	}
  });

});
