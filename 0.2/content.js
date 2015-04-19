$(function(){
	var total = 0,
		last = 0,
		now = 0,
		px,
		actions = {};

	$('body').append('<div id="runnr" data-total="true"><img src="' + chrome.extension.getURL("img/runner.png") + '" /><div class="balloon"><span class="msg"></span><span class="triangle"></span></div><span class="runnr-total"></span><span class="km">km</span></div>');

	chrome.runtime.sendMessage({action: 'load'}, function(response) {
		total = response.data;
		$('.runnr-total').html((total.toFixed(3)).toLocaleString());

		$(window).on('scroll', function() {
			last = now;
			now = window.pageYOffset;
			px = now - last;
			if (px < 0) return;
			total += px*0.0000005;
			$('.runnr-total').html((total.toFixed(3)).toLocaleString());

			chrome.runtime.sendMessage({action: 'update', total: total}, function(response) {
				if (!response.data) return;
				$('.msg').html(chrome.i18n.getMessage('achievementUnlocked') + response.data);
				$('.balloon').addClass('show');
				window.setTimeout(function(){
					$('.balloon').removeClass('show');
					$('.msg').html('');
				}, 2000);
			});
		});
	});	
});