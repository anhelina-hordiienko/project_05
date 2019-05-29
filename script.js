/*$(document).ready(function() {
	$(".portfolio .content").mouseenter(function(){
		$(".content img").after('<div class="toolsContainer"><img src="img/zoom.png" alt="zoom" class="zoom"><div class="otherTools"><img src="img/polaroid.png" alt="polaroid"><img src="img/link.png" alt="link"><img src="img/info.png" alt="info"><img src="img/like.png" alt="like"></div></div>');
	});
	$(document).on("mouseleave", ".toolsContainer", function(){
        $(".toolsContainer").remove();
    });
});
*/
$(document).ready(function() {
	$(".portfolio .content").hover(
		function(){
			$(this).append('<div class="toolsContainer"><img src="img/zoom.png" alt="zoom" class="zoom"><div class="otherTools"><img src="img/polaroid.png" alt="polaroid"><img src="img/link.png" alt="link"><img src="img/info.png" alt="info"><img src="img/like.png" alt="like"></div></div>');
		},
		function(){
			$(".toolsContainer").remove()
		}
	);
});