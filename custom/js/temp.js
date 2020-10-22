/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

$(document).ready(function(){
	
	// typing effect
	function newTyped(){}$(function(){$("#typed").typed({
		strings: ["music","art","words"],
		typeSpeed:90,
		backDelay:700,
		contentType:"html",
		loop:!0,
		resetCallback:function() {
			newTyped()
		}
	}),
	$(".reset").click(function(){
		$("#typed").typed("reset")
	})});
	
	
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".collapse-heading").find(".fas").addClass("fa-angle-up").removeClass("fa-angle-down");
	});		
	
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
	});
	
	
	// toggle themes, navbar icons and charts
	var storedTheme = localStorage.getItem("data-theme");
	if(storedTheme === "dark"){
		applyDark();
	} else if ((storedTheme === "light") || (!storedTheme)) {
		applyLight();
	}
	
	function applyLight() {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("data-theme", "light");
		$(document).find(".toggler").find(".far").addClass("fa-sun").removeClass("fa-moon");
		$(document).find(".navbar").addClass("navbar-light").removeClass("navbar-dark");
	}
	
	function applyDark() {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("data-theme", "dark");
		$(document).find(".toggler").find(".far").removeClass("fa-sun").addClass("fa-moon");
		$(document).find(".navbar").removeClass("navbar-light").addClass("navbar-dark");
	}
	
	// initial theme settings before toggle
	$(document).find(".github").attr("src", "https://ghchart.rshah.org/" + String(getComputedStyle(document.body).getPropertyValue('--color-one').replace("#", "").trim()) + "/rubyruins");
	Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
	Chart.defaults.global.defaultFontStyle = 'normal';
	
	$(".toggler").click(function(){
		
		var theme = document.documentElement.getAttribute('data-theme');
		console.log(theme);
		if (theme === "dark") {
			applyLight();
		} else {
			applyDark();
		}
		
		// change colors of contribution graph
		$(document).find(".github").attr("src", "https://ghchart.rshah.org/" + String(getComputedStyle(document.body).getPropertyValue('--color-one').replace("#", "").trim()) + "/rubyruins");
		
		// change border of activity graph
		activityChart.data.datasets[0].borderColor[0] = getComputedStyle(document.body).getPropertyValue('--color-one');
		
		// change font colors of all graph
		Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
		
		// finally update charts
		activityChart.update();
		languagesChart.update();
	});
	makeActivityChart()
	// fetch activity
	function getActivity() {
		var activity = [];
		
		$.ajax({
			type: 'GET',
			url: 'https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/2b857162-c165-4543-a59c-ef903fff3b5a.json',
			dataType: 'jsonp',
			async: false,
			success: function(response) {
				activity.push(response.data);
				activity = activity[0];
				console.log("success");
				console.log(activity);
				activityLabels = []
				activityData = []
				for (var i = 0; i < activity.length; i++ ) {
					activityLabels.push(activity[i].range.date); 
					activityData.push(activity[i].grand_total.total_seconds);
				}
				console.log(activityLabels, activityData);
				
			},
		});
	}
	
	function getLanguages() {
        var myLanguages = [];
		$.ajax({
			type: 'GET',
			url: 'https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/d5e271f0-8ea7-4d6e-a5da-6bb2a78e3fd4.json',
			dataType: 'jsonp',
			success: function(response) {
                myLanguages.push(response.data);
                myLanguages = myLanguages[0];
                console.log("success");
                console.log(myLanguages);
			},
		});
	}
	
	getActivity();
	// getLanguages();
	
	console.log("I am here");
	// console.log(activity);
	
	// chart 1
	function makeActivityChart() {
		var activityChart = new Chart(document.getElementById('activityChart'), {
			type: 'line',
			data: {
				labels: [new Date(2017, 8, 16), new Date(2017, 8, 17), new Date(2017, 8, 18)],
				datasets: [{
					label: 'Hours per day',
					data: [8853.996287, 0, 6224.196075],
				backgroundColor: [
					'transparent'
				],
				borderColor: [
					getComputedStyle(document.body).getPropertyValue('--color-one')
				],
				borderWidth: 2.5
			}]
		},
		options: {
			hover: {
				mode: 'point',
				intersect: true
			},
			title: {
				display: true,
				text: 'Coding activity this week',
				fontStyle: 'normal'
			},
			legend: {
				display: false,
			},
			scales: {
				xAxes: [{
					type: 'time',
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Date",
					}
				}],
				yAxes: [{
					// type: 'time',
					// time: {
					// 	unit: 'hour'
					// },
					ticks: {
						beginAtZero: true,
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Page Views",
					}
				}]
			}
		}
	});
}


// chart 2
function makeLanguagesChart() {
	var languagesChart = new Chart(document.getElementById('languagesChart'), {
		type: 'bar',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			title: {
				display: true,
				text: 'Languages used this month',
				fontStyle: 'normal'
			},
			legend: {
				display: false,
			}
		}
	});
}

// initialise isotope
var iso = new Isotope( '.isotopeGrid', {
	itemSelector: '.element-item',
	layoutMode: 'fitRows'
});


// filter functions
var filterFns = {};


// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
	if ( !matchesSelector( event.target, 'button' ) ) {
		return;
	}
	var filterValue = event.target.getAttribute('data-filter');
	// use matching filter function
	// change classes on clicking the button
	filterValue = filterFns[ filterValue ] || filterValue;
	iso.arrange({ filter: filterValue });
	var allButtons = $(document).find('.filter-buttons');
	for (var i = 0; i < allButtons.length; i++) {
		if (allButtons[i].getAttribute("data-filter") === filterValue) {
			$(allButtons[i]).addClass("filter-buttons-click");
			$(allButtons[i]).addClass("is-checked");
		} else {
			$(allButtons[i]).removeClass("filter-buttons-click");
			$(allButtons[i]).removeClass("is-checked");
		}
	}
});		
});


// floating navbar
$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$('nav').addClass('floatingNav', 1000);
	} else {
		$('nav').removeClass('floatingNav', 1000);
	}
});