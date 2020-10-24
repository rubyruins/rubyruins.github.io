/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

// fetching resources for graphs when page is loading
myActivity = {};
myLanguages = {};

// chart 1
function makeActivityChart() {
	var activityChart = new Chart(document.getElementById('activityChart'), {
		type: 'bar',
		data: {
			labels: myActivity.activityLabels,
			datasets: [{
				label: 'Hours spent',
				data: myActivity.activityData,
				backgroundColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
				borderColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
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
					time: {
						unit: 'day',
					},
					displayFormats: {
						day: 'MMM D'
					},
					ticks: {
						callback: function(value, index, values) {
							return String(new Date(value)).charAt(0);
						}
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Day of week",
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
					display: true,
					scaleLabel: {
						display: false,
						labelString: "Hours per day",
					},
					gridLines: {
						display:false
					}
				}]
			}
		}
	});
}

// chart 2
function makeLanguagesChart() {
	var languagesChart = new Chart(document.getElementById('languagesChart'), {
		type: 'horizontalBar',
		data: {
			labels: myLanguages.languageLabels,
			datasets: [{
				label: 'Language',
				data: myLanguages.languageData,
				backgroundColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
				borderColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
				borderWidth: 1
			}]
		},
		options: {
			legend: {
				display: false
			},
			hover: {
				mode: 'point',
				intersect: true
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					},
					scaleLabel: {
						display: false,
						labelString: "Language",
					},
					gridLines: {
						display:false
					},
				}],
				xAxes: [{
					ticks: {
						callback: function(value, index, values) {
							return value + '%';
						}
					},
					scaleLabel: {
						display: true,
						labelString: "Usage",
					},
					gridLines: {
						display:false
					},
				}]
			},
			title: {
				display: true,
				text: 'Languages used this month',
				fontStyle: 'normal'
			},
		}
	});
}

// changing to light theme
function applyLight() {
	document.documentElement.setAttribute("data-theme", "light");
	localStorage.setItem("data-theme", "light");
	$(document).find(".toggler").find(".fas").addClass("fa-sun").removeClass("fa-moon");
	$(document).find(".navbar").addClass("navbar-light").removeClass("navbar-dark");
}

// changing to dark theme
function applyDark() {
	document.documentElement.setAttribute("data-theme", "dark");
	localStorage.setItem("data-theme", "dark");
	$(document).find(".toggler").find(".fas").removeClass("fa-sun").addClass("fa-moon");
	$(document).find(".navbar").removeClass("navbar-light").addClass("navbar-dark");
}

document.onreadystatechange = function() { 
	// load previously saved theme if any
	var storedTheme = localStorage.getItem("data-theme");
	if(storedTheme === "dark"){
		applyDark();
	} else if ((storedTheme === "light") || (!storedTheme)) {
		applyLight();
	}
	if ((window.location.pathname === '/') || (window.location.pathname === '/archive')) {
		if ((document.readyState !== "complete")) { 
			document.querySelector("body").style.visibility = "hidden"; 
			document.querySelector(".page-loader").style.visibility = "visible"; 
			if (window.location.pathname === '/') {
				Chart.defaults.global.defaultBorderColor = getComputedStyle(document.body).getPropertyValue('--color-one').trim();
				// get activity stats
				$.ajax({
					type: 'GET',
					url: 'https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/2b857162-c165-4543-a59c-ef903fff3b5a.json',
					dataType: 'jsonp',
					async: false,
					success: function(response) {
						console.log("a success");
						var activityLabels = [];
						var activityData = [];
						for (var i = 0; i < response.data.length; i ++) {
							activityData.push(parseFloat((response.data[i].grand_total.total_seconds/3600).toFixed(2))); 
							var d = (new Date(response.data[i].range.date).toLocaleString().split(' ')[0]).replace(",", "");
							d = d.split("/");
							d = String(d[2]) + "-" + String(d[0]) + "-" + String(d[1]);
							activityLabels.push(d);
						}
						myActivity.activityLabels = activityLabels;
						myActivity.activityData = activityData;
						console.log(myActivity);
						makeActivityChart();
					},
				});
				// get language stats
				$.ajax({
					type: 'GET',
					url: 'https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/d5e271f0-8ea7-4d6e-a5da-6bb2a78e3fd4.json',
					dataType: 'jsonp',
					async: false,
					success: function(response) {
						console.log("l success");
						var languageLabels = [];
						var languageData = [];
						for (var i = 0; i < response.data.length; i ++) {
							languageLabels.push(response.data[i].name); 
							languageData.push(response.data[i].percent);
						}
						myLanguages.languageLabels = languageLabels;
						myLanguages.languageData = languageData;
						console.log(myLanguages);
						makeLanguagesChart();
					},
				});
			}
		} else { 
			document.querySelector(".page-loader").style.display = "none"; 
			document.querySelector("body").style.visibility = "visible"; 
		} 
	}
}; 

$(document).ready(function(){
	
	// smooth scroll navbar
	$('.nav-item a').click(function(e) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: parseInt($(targetHref).offset().top - 50)
		}, 500);
		console.log($(targetHref).offset().top);
		e.preventDefault();
	});
	
	// typing effect
	function newTyped(){}$(function(){
		$("#typed").typed({
			strings: ["music","art","words"],
			typeSpeed:90,
			backDelay:700,
			contentType:"html",
			loop:!0,
			resetCallback:function(){
				newTyped()
			}}),
			$(".reset").click(function(){
				$("#typed").typed("reset")
			})
		});
		
		
		// Toggle icon for collapse element which is open by default
		$(".collapse.show").each(function(){
			$(this).prev(".collapse-heading").find(".fas").addClass("fa-angle-up").removeClass("fa-angle-down");
		});		
		
		
		// Toggle plus minus icon on show hide of collapse element
		$(".collapse").on('show.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
		}).on('hide.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
		});
		
		// initial theme settings before toggle
		if (window.location.pathname === '/') {
			$(document).find(".github").attr("src", "https://ghchart.rshah.org/" + String(getComputedStyle(document.body).getPropertyValue('--color-one').replace("#", "").trim()) + "/rubyruins");
			Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
			Chart.defaults.global.defaultFontStyle = 'normal';
			Chart.defaults.global.defaultBorderColor = getComputedStyle(document.body).getPropertyValue('--color-one').trim();
			Chart.defaults.global.defaultFontSize = 10;
		}
		
		$(".toggler").click(function(){
			var theme = document.documentElement.getAttribute('data-theme');
			console.log(theme);
			if (theme === "dark") {
				applyLight();
			} else {
				applyDark();
			}
			Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
			
			// clear previous chart and make it again with updated config
			document.getElementById('chart-1').innerHTML = '<canvas id="activityChart"></canvas>'
			document.getElementById('chart-2').innerHTML = '<canvas id="languagesChart"></canvas>'
			makeActivityChart();
			makeLanguagesChart();
			
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
		
		
		// initialise isotope
		var iso = new Isotope( '.isotopeGrid', {
			itemSelector: '.element-item',
			layoutMode: 'fitRows'
		});
		
		
		// filter functions
		var filterFns = {};
		
		
		// bind filter button click
		var filtersElem = document.querySelector('.filters-button-group');
		if (filtersElem) {
			filtersElem.addEventListener('click', function(event) {
				if (!matchesSelector( event.target, 'button' ) ) {
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
		}
	});
	
	
	// floating navbar
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('nav').addClass('floatingNav', 1000);
		} else {
			$('nav').removeClass('floatingNav', 1000);
		}
	});