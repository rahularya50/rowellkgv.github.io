$(document).ready(function(){
	$("#events-content").hide();
	$("#contact-content").hide();
	$("#pastSites-content").hide();
	$("#home").click(function(){
		$("#events-content").fadeOut("fast",function(){
			$("#contact-content").fadeOut("fast",function(){
				$("#pastSites-content").fadeOut("fast",function(){
					$("#home-content").fadeIn();
				});
				
			});
		});
	});
	$("#events").click(function(){
		$("#contact-content").fadeOut("fast",function(){
			$("#home-content").fadeOut("fast",function(){
				$("#pastSites-content").fadeOut("fast",function(){
					$("#events-content").fadeIn();
				});
				
			});
		});
	});
	$("#contact").click(function(){
		$("#events-content").fadeOut("fast",function(){
			$("#home-content").fadeOut("fast",function(){
				$("#pastSites-content").fadeOut("fast",function(){
					$("#contact-content").fadeIn();
				});
			});
		});
	});
	$("#pastSites").click(function(){
		$("#events-content").fadeOut("fast",function(){
			$("#home-content").fadeOut("fast",function(){
				$("#contact-content").fadeOut("fast",function(){
					$("#pastSites-content").fadeIn();
				});
			});
		});
	});
});