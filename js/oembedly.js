$(document).ready( function() {

	$.ajax({
		url      : "providers.json",
		dataType : "text",
		success  : function ( data ) {

			var json = $.parseJSON( data );
			$.each(json, function (i, provider_name) {
				$("ul.providers-list").append(
					$("<li></li>").addClass("provider").append(
						$("<a></a>").addClass(provider_name).append(
							function () {
								$.ajax({
									url      : "providers/"+provider_name+".json",
									dataType : "text",
									success  : function ( info ) {
										var json = $.parseJSON( info );
										$("."+provider_name).append(
											$("<img>",{src: "providers/"+provider_name+".png"})
										).append(
											$("<p></p>").addClass(provider_name).html(json.name)
										);
										$("a."+provider_name).attr({
											href: "providers/"+provider_name+".json",
											title: json.name
										})
									}
								});
							}
						)
					)
				)
			});

		}
	});

});
