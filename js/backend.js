
py_img = "url('img/pylogo.png')"
dj_img = "url('img/dj-logo.png')"

var l_interpolation = 0;

var r_interpolation = 0;

function cambiar_izquierdo(event){	

	var l_elapsed = Math.floor( event.originalEvent.elapsedTime )	

	
	l_interpolation++;
	
	if (l_interpolation % 2 == 0)
		$('#left').css('background-image', py_img);
	else
		$('#left').css('background-image', dj_img);

	l_esperado = l_elapsed + anim_duration;
		
	
}

function cambiar_derecho(event){	

	var r_elapsed = Math.floor( event.originalEvent.elapsedTime )	
	
	r_interpolation++;

	if (r_interpolation % 2 == 0)
		$('#right').css('background-image', dj_img);
	else
		$('#right').css('background-image', py_img);

	r_esperado = r_elapsed + anim_duration;
		
	
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
