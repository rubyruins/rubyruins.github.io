/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

	$(document).ready(function(){

		// typing effect
		function newTyped(){}$(function(){$("#typed").typed({
			strings: ["music","art","words"],
			typeSpeed:90,backDelay:700,contentType:"html",loop:!0,resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")}
		)});


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
			$(document).find(".toggler").find(".far").addClass("fa-sun").removeClass("fa-moon");
			$(document).find(".navbar").addClass("navbar-light").removeClass("navbar-dark");
			$(document).find(".github").attr("src", "https://ghchart.rshah.org/9E2AD0/rubyruins");
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("data-theme", "light");
		}

		function applyDark() {
			$(document).find(".toggler").find(".far").removeClass("fa-sun").addClass("fa-moon");
			$(document).find(".navbar").removeClass("navbar-light").addClass("navbar-dark");
			$(document).find(".github").attr("src", "https://ghchart.rshah.org/2977B8/rubyruins");
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("data-theme", "dark");
		}

		$(".toggler").click(function(){
			var theme = document.documentElement.getAttribute('data-theme');
			console.log(theme);
			if (theme === "dark") {
				applyLight();
			} else {
				applyDark();
			}
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
		filtersElem.addEventListener( 'click', function( event ) {
			// only work with buttons
			if ( !matchesSelector( event.target, 'button' ) ) {
				return;
			}
			var filterValue = event.target.getAttribute('data-filter');
			// use matching filter function
			filterValue = filterFns[ filterValue ] || filterValue;
			iso.arrange({ filter: filterValue });
		});
		

		// change is-checked class on buttons
		var buttonGroups = document.querySelectorAll('.button-group');
		for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
			var buttonGroup = buttonGroups[i];
			radioButtonGroup( buttonGroup );
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