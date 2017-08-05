$(function() {

  $.ajax({
	url: "https://www.codeschool.com/users/balinttamas87.json",
	dataType: "jsonp",
	success: function(response) {
		var completedCoursesArr = response.courses.completed;
		var currentCompletedCourseTitle = "";
		var sourceOfCurrentBadgeImage = "";
		var currentCourseUrl = "";
		for (var i = 0; i < completedCoursesArr.length; i++) {
			currentCompletedCourseTitle = completedCoursesArr[i].title;
			sourceOfCurrentBadgeImage = completedCoursesArr[i].badge;
			currentCourseUrl = completedCoursesArr[i].url;
			$("#badges").append("<div class='course'>" + 
									"<h3>" + currentCompletedCourseTitle + "</h3>" + 
									"<img src=" + sourceOfCurrentBadgeImage + " alt='badgeImage'/>" +
									"<a class='btn btn-primary' href=" + currentCourseUrl +  '"' + " target='_blank'>See Course</a>" +
								"</div>");
		}
	}
  });

});
