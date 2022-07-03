s(document).ready(funtional) {(

var $hamburger = s(".hamburger");
	$hamburger.on("click", function(e){
		$hamburger.toggleClass("is-active");
		s('#nav').togglClass('active');
	});
});