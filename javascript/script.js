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
		$(".projectBox").css("opacity", ".2");
		$("h2").css("opacity", ".6");
		$(".projectBox a").css("opacity", ".2");
		$(id).css("opacity", "1");
		$(h).css("opacity", "1");
		$(a).css("opacity", "1");
		if (id == ".allProjects") {
			$(".projectBox").css("opacity", "1");
			$("h2").css("opacity", "1");
			$(".projectBox a").css("opacity", "1");
		}
	});

})(jQuery);
