
html_img = "url('img/html5.png')"
css_img = "url('img/css.png')"

var anim_duration = 5;

var l_esperado = 10;
var l_interpolation = 0;

var r_esperado = 10;
var r_interpolation = 0;

function cambiar_izquierdo(event){	

	var l_elapsed = Math.floor( event.originalEvent.elapsedTime )	

	if (l_esperado == l_elapsed){
		l_interpolation++;
		
		if (l_interpolation % 2 == 0)
			$('#left').css('background-image', html_img);
		else
			$('#left').css('background-image', css_img);

		l_esperado = l_elapsed + anim_duration*2;
		
	}
}

function cambiar_derecho(event){	

	var r_elapsed = Math.floor( event.originalEvent.elapsedTime )	

	if (r_esperado == r_elapsed){
		r_interpolation++;

		if (r_interpolation % 2 == 0)
			$('#right').css('background-image', css_img);
		else
			$('#right').css('background-image', html_img);

		r_esperado = r_elapsed + anim_duration*2;
		
	}
}

$(function(){
	
	$('#left').on('animationiteration', cambiar_izquierdo);
	$('#right').on('animationiteration', cambiar_derecho);

	$('#left').on('webkitAnimationIteration', cambiar_izquierdo);
	$('#right').on('webkitAnimationIteration', cambiar_derecho);

	$('#left').on('oanimationiteration', cambiar_izquierdo);
	$('#right').on('oanimationiteration', cambiar_derecho);

	$('#left').on('MSAnimationIteration', cambiar_izquierdo);
	$('#right').on('MSAnimationIteration', cambiar_derecho);
})
