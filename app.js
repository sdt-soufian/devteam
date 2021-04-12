$(window).on('load', function(){
	var x = 0
	var slider = [$('#slider1'), 
	$('#slider2'), 
	$('#slider3'),
	$('#slider4'),
	$('#slider5')]
    setInterval(function(){
		/*slider[x].animate({left: '1px'}, 2000)
		console.log(x)*/
		slider[x]
		.fadeIn()
		.siblings()
		.fadeOut()
		x++
		if(x > slider.length-1){
	        x = 0
		}
	}, 3500)
	$('.btn').on('click', 'button', function(){
		console.log($(this).attr('id'))
		if($(this).attr('id') == 'right'){
			slider[x++]
		    .fadeIn()
		    .siblings()
		    .fadeOut()
			console.log(x)
		}
		else if($(this).attr('id') == 'left'){
			slider[x--]
		    .fadeIn()
		    .siblings()
		    .fadeOut()
			console.log(x)
		}
		if(x > slider.length-1 || x==0){
			x = 0
		}
	})
})