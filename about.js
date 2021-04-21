$(window).on('load', function(){
	var ID = [$('#about-page'), $('#soufian'), $('#chaimae'), $('#issam')]
	var cmpt = 0
	$('.btn-about').on('click', 'button', function(){
		if($(this).val() == 1){
			cmpt++
			if(cmpt == ID.length){
				cmpt = 0
			}
			ID[cmpt]
		    .animate({left: '1px'}, 1500)
		    .siblings()
		    .animate({left: `${-1*100}%`}, 1500)
		}
		else if($(this).val() == 0){
			ID[cmpt]
			.animate({left: `${-1*100}%`}, 1500)
		    .prev()
		    .animate({left: '1px'}, 1500)
		    cmpt--
		    if(cmpt < 0){
		    	cmpt = 0
		    	ID[cmpt]
		        .animate({left: '1px'}, 1500)
		    }
		}
	})
	$('.menu').click(function(){
		$('.navigation').slideToggle('slow')
	})
})