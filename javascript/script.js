(function($) { "use strict";

	console.log("js loaded");

	$("h4").click(function(){
		$("h4").removeClass("active")
		this.classList.add("active");
		var id = $(this).attr("id");
		id = "."+id;
		var h = id+" h2";
		var a = id+" a";
		console.log(id);
		console.log(h);
		console.log(a);
		$(".projectBox").css("display", "none");
		$("h2").css("display", "none");
		$(".projectBox a").css("display", "none");
		$(id).css("display", "flex");
		$(h).css("display", "flex");
		$(a).css("display", "flex");
		if (id == ".allProjects") {
			$(".projectBox").css("display", "flex");
			$("h2").css("display", "flex");
			$(".projectBox a").css("display", "flex");
		}
	});

})(jQuery);
