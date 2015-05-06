/**
 * @author jo.castillo
 */

$(window).load(function() {// makes sure the whole site is loaded
	$('#status').fadeOut();
	// will first fade out the loading animation
	$('#preloader').delay(700).fadeOut('slow');
	// will fade out the white DIV that covers the website.
	$('body').delay(700).css({
		'overflow' : 'visible'
	});
});

$(document).ready(function() {

	var blocks = $('.block');

	$('.menu li a').on('click', function() {
		blocks.slideUp();
		var block = $('.block[data-id-block="' + $(this).attr('id') + '"]');
		block.fadeIn();
		if (block.find('#map_canvas').length === 1) {
			initialize();
		}
	});
	
	$.each($('.indicator'), function(index, element){
		loadIndicators($(element));
	})
	
	$.each($('.bar'), function(index, element){
		loadBar($(element));
	})
	
		
 

})

 


function loadIndicators(element){
	'use strict';
	var amount = element.data("indicator"),
		counter = 0, context;
		context = element.children('span');
	
	function check() {
		context.text(counter)
		if (counter <= amount) {
			counter ++;
			setTimeout(check, 50);
		}
	}
	check();
}


function loadBar(element){
	var barWidth = element.data('indicator'),
		totalTime=2500;
		
	element.find('span').text(barWidth)
	
	element.velocity({width:barWidth+ '%', opacity:1}, {duration:3500});
	
	var amount = element.data("indicator"),
		counter = 0,
		context = element.children('span');
	console.log(totalTime/amount)
	function check() {
		context.text(counter)
		if (counter < barWidth) {
			counter ++;
			setTimeout(check, totalTime/amount);
		}
	}
	check();
	
	
}




function initialize() {
	var mapOptions = {
		center : new google.maps.LatLng(-34.397, 150.644),
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

