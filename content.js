var total = 0,
	session = 0,
	last = window.pageYOffset;

chrome.runtime.sendMessage({ action: 'load', onTumblr: true }, function(response) {
	total = response.data.total;
	session = response.data.session;
});

$(function(){
	$('body').append('<div id="runnr" data-session="true"><img src="' + chrome.extension.getURL("img/runner.png") + '" />' +
		'<div class="balloon"><span class="msg"></span><span class="triangle"></span></div>' +
		'<span class="runnr-session">0.000</span><span class="km">km</span></div>');

	$(window).on('scroll', function() {
		var now = window.pageYOffset,
			px = now - last;
		last = now;
		if (px < 0) return;
		session += px*0.000001;
		update_counter();

		chrome.runtime.sendMessage({ action: 'update', session: session }, function(response) {
			if (!response.data) return;
			$('.msg').html(chrome.i18n.getMessage('achievementUnlocked') + response.data);
			$('.balloon').addClass('show');
			window.setTimeout(function(){
				$('.balloon').removeClass('show');
				$('.msg').html('');
			}, 5000);
		});
	});

	$('#runnr').on('click', function(){
		$('.runnr-session').toggleClass('total');
		update_counter();
	});

	function update_counter(){
		var aux = ($('.runnr-session').hasClass('total')) ? total + session : session;
		$('.runnr-session').html((aux.toFixed(3)).toLocaleString());
	}
});