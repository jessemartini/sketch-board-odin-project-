var number = 16;

$(document).ready(function(){
	defaultGrid(number);
	$(".grid").mouseenter(function(){
		$(this).css('background-color', '#ffffff');
	});

	$("#defaultButton").click(function(){
		newGrid();
		$('.grid').mouseenter(function() {
			$(this).css('background-color', '#ffffff');
		})
	});

	$("#trailButton").click(function(){
		newGrid();
		$('.grid').hover(function(){
			$(this).css('opacity', '0');
			$(this).fadeTo('slow', 1);

		})

	});
	$("#randomButton").click(function(){
		newGrid();
		$('.grid').mouseenter(function(){
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			$(this).css('background-color', hue);

		})
	});
	$('#opacityButton').click(function(){
		newGrid();
		$('.grid').mouseenter(function(){
			var opacity = $(this).css('opacity');
			if (opacity > 0.1){
				$(this).css('opacity' , opacity - 0.1);
			} else {
				$(this).css('opacity', '0');
			}
		})
	});

	$("#clickButton").click(function(){
		newGrid();
		$('.grid').click(function(){
			$(this).css('background-color', '#ffffff');
		})

	})
	$('#resetButton').click(function(){
		$('.grid').css('background-color', '#036');
		$('.grid').css('opacity', '1');
	})
})
function defaultGrid(n){
	var boxSize	= (960/n);
	for( var j = 1 ; j <= n; j++){
		for (var i = 1 ; i <= n ; i++){	
		$('.sketchboard').append("<div class = 'grid'></div>");
		}
	}
	$('.grid').height(boxSize);
	$('.grid').width(boxSize);
}

function newGrid(){
	var number2 = prompt("How manny grid do you want?");
	defaultGrid(number2);
	$('.grid').css('background-color', '#036');
	$('.grid').css('opacity', '1');
	$('.grid').unbind();
}
