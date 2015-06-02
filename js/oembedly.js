$(document).ready( function() {

	$.ajax({
		url      : "providers.json",
		dataType : "text",
		success  : function ( data ) {

			var json = $.parseJSON( data );
			$.each(json, function (i, providers_list) {
				$("ul.providers-list").append(
					$("<li></li>").addClass("provider").append(
						$("<img>",{src: "providers/"+providers_list+'.png'})
					)
				)
			});

		}
	});

});
