
html_img = "url('img/html5.png')"
css_img = "url('img/css.png')"

$(function(){

	var right_c = 0
	var right_i = 0

	var left_c = 0
	var left_i = 0
	
	$('#left').on('animationiteration', function(event){
		left_c++;

		if (left_c % 2 == 0){
			left_i++;
			if (left_i % 2 == 0)
				$('#left').css('background-image', html_img);
			else
				$('#left').css('background-image', css_img);
			
		}
		
	});

	$('#right').on('animationiteration', function(event){
		right_c++;

		if (right_c % 2 == 0){
			right_i++;
			if (right_i % 2 == 0)
				$('#right').css('background-image', css_img);
			else
				$('#right').css('background-image', html_img);
			
		}
		
	});
})
