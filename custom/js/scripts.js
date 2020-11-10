/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

// fetching resources for graphs when page is loading
myLanguages = {};

// chart 2
function makeLanguagesChart() {
	var languagesChart = new Chart(document.getElementById('languagesChart'), {
		type: 'horizontalBar',
		data: {
			labels: myLanguages.languageLabels,
			datasets: [{
				label: 'Usage',
				data: myLanguages.languageData,
				barThickness: 8,
				backgroundColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
				borderColor: getComputedStyle(document.body).getPropertyValue('--color-one'),
				borderWidth: 1,
				hoverBackgroundColor: getComputedStyle(document.body).getPropertyValue('--color-one').trim(),
				hoverBorderColor: getComputedStyle(document.body).getPropertyValue('--color-one').trim()
			}]
		},
		options: {
			tooltips: {
				displayColors: false,
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.datasets[tooltipItem.datasetIndex].label || '';
	
						if (label) {
							label += ': ';
						}
						label += String(tooltipItem.xLabel) + "%";
						return label;
					}
				}
			},
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
						display: false,
						labelString: "Usage",
					},
					gridLines: {
						display:false
					},
				}]
			},
			title: {
				display: true,
				text: 'Top languages used',
				fontStyle: 'normal'
			},
		}
	});
}

// changing to light theme
function applyDay() {
	document.documentElement.setAttribute("data-theme", "day");
	localStorage.setItem("data-theme", "day");
	$(document).find(".toggler").find(".far").removeClass("fa-star").removeClass("fa-moon").addClass("fa-sun");
	$(document).find(".navbar").removeClass("navbar-dark").addClass("navbar-light");
}

// changing to dark theme
function applyNight() {
	document.documentElement.setAttribute("data-theme", "night");
	localStorage.setItem("data-theme", "night");
	$(document).find(".toggler").find(".far").removeClass("fa-sun").removeClass("fa-star").addClass("fa-moon");
	$(document).find(".navbar").removeClass("navbar-light").addClass("navbar-dark");
}

// changing to star theme
function applyStar() {
	document.documentElement.setAttribute("data-theme", "star");
	localStorage.setItem("data-theme", "star");
	$(document).find(".toggler").find(".far").removeClass("fa-moon").removeClass("fa-sun").addClass("fa-star");
	$(document).find(".navbar").removeClass("navbar-light").addClass("navbar-dark");
}

document.onreadystatechange = function() { 
	// load previously saved theme if any
	var storedTheme = localStorage.getItem("data-theme");
	if ((storedTheme === "day") || (!storedTheme) || (storedTheme === "light")) {
		applyDay();
	} else if (storedTheme === "night") {
		applyNight();
	} else if (storedTheme === "star") {
		applyStar();
	}
	console.log("applied theme");
	console.log(storedTheme);
	if ((window.location.pathname === '/') || (window.location.pathname === '/archive')) {
		if ((document.readyState !== "complete")) { 
			document.querySelector("body").style.visibility = "hidden"; 
			document.querySelector(".page-loader").style.visibility = "visible"; 
			if (window.location.pathname === '/') {
				Chart.defaults.global.defaultBorderColor = getComputedStyle(document.body).getPropertyValue('--color-one').trim();
				// get language stats
				$.ajax({
					type: 'GET',
					url: 'https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/6ff18132-5c70-4a8f-9174-2d1ef0b7cab6.json',
					dataType: 'jsonp',
					async: false,
					success: function(response) {
						console.log("l success");
						var languageLabels = [];
						var languageData = [];
						var l;
						if (response.data.length > 5) {
							l = 5
						} else {
							l = response.data.length;
						}
						for (var i = 0; i < l; i ++) {
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
			strings: ["music.","art.","words."],
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
			$(this).prev(".collapse-heading").find(".far").addClass("fa-angle-up").removeClass("fa-angle-down");
		});		
		
		
		// Toggle plus minus icon on show hide of collapse element
		$(".collapse").on('show.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
		}).on('hide.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
		});
		
		// initial theme settings before toggle
		if (window.location.pathname === '/') {
			Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
			Chart.defaults.global.defaultFontStyle = 'normal';
			Chart.defaults.global.defaultBorderColor = getComputedStyle(document.body).getPropertyValue('--color-one').trim();
			Chart.defaults.global.defaultFontSize = 10;
		}
		
		$(".toggler").click(function(){
			if (document.documentElement.getAttribute('data-theme') === "day") {
				applyNight();
			} else if (document.documentElement.getAttribute('data-theme') === "night") {
				applyStar();
			} else if (document.documentElement.getAttribute('data-theme') === "star") {
				applyDay();
			}
			console.log("switched theme");
			console.log(document.documentElement.getAttribute('data-theme'));
			Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
			
			// clear previous chart and make it again with updated config
			document.getElementById('chart-2').innerHTML = '<canvas id="languagesChart"></canvas>'
			makeLanguagesChart();
			
			// change font colors of all graph
			Chart.defaults.global.defaultFontColor = getComputedStyle(document.body).getPropertyValue('--font-secondary').trim();
			
			// finally update charts
			// languagesChart.update();
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