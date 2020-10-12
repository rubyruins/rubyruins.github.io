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
			$(this).prev(".collapse-heading").find(".fa").addClass("fa-minus").removeClass("fa-plus");
		});		
		// Toggle plus minus icon on show hide of collapse element
		$(".collapse").on('show.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fa").removeClass("fa-plus").addClass("fa-minus");
		}).on('hide.bs.collapse', function(){
			$(this).prev(".collapse-heading").find(".fa").removeClass("fa-minus").addClass("fa-plus");
		});

		// toggle themes, navbar icons and charts
		$(".toggler").click(function(){
			$(this).find(".far").toggleClass("fa-sun").toggleClass("fa-moon");
			$(document).find(".navbar").toggleClass("navbar-light").toggleClass("navbar-dark");
			var theme = document.documentElement.getAttribute('data-theme');
			console.log(theme);
			if (theme) {
				$(document).find(".waka").empty().append('<figure><embed src="https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/f57f3bc7-3c85-4686-a637-7c39d74c3f3c.svg"></embed></figure>');
				$(document).find(".github").empty().append('<img src="https://ghchart.rshah.org/9E2AD0/rubyruins" alt="Github"></img>')
			} else {
				$(document).find(".waka").empty().append('<figure><embed src="https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/a0acf27e-6ddd-4129-8c6f-dbd1d1d3b6b1.svg"></embed></figure>');
				$(document).find(".github").empty().append('<img src="https://ghchart.rshah.org/2977B8/rubyruins" alt="Github"></img>')
			}
			if (!theme) {
				document.documentElement.setAttribute("data-theme", "dark");
			} else {
				console.log("should be set to null");
				document.documentElement.removeAttribute("data-theme");
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
		if ($(window).scrollTop() > 10) {
			$('nav').addClass('floatingNav', 1000);
		} else {
			$('nav').removeClass('floatingNav', 1000);
		}
	});