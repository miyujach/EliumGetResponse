(function ($) {

	window.EliumGetResponse = function(url, target, options){
		var options = typeof options !== "undefined" ? options : {};


		var defaultOptions = {
			type: "GET",
			dataType: "html",
			event: "click"
		};

		if(typeof options !== "undefined"){
			settings = $.extend({}, defaultOptions, options);
		}else{
			settings = defaultOptions;
		}

		target = $(target);           


		$(target).on(settings.event, function(){

			console.log("settings :::: " +url);

			$.ajax({
				url : url,
				type : settings.type,
				dataType : settings.dataType,
				success : function(responseAjax, statut){ // success est toujours en place, bien sûr !
					console.log("Statut : " + statut);
					return response = "responseAjax"
				},

				error : function(resultat, statut){
					console.log(resultat)
					console.log("Erreur : " + statut);
					return response =  resultat + " + " + statut
				}

			}); 
		});


	}
}(jQuery));
