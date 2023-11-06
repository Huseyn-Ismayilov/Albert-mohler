
$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});


// var content_box = new Swiper(".content_box .slider1", {
// 	freeMode: true,
// 	slidesPerView: "auto",
// 	spaceBetween: 25,

// 	navigation: {
// 		nextEl: ".content_box .next_arrow ",
// 		prevEl: ".content_box .prev_arrow",
// 	},
// 	// pagination: {
// 	// 	el: ".hero .swiper-pagination",
// 	// },
// 	// autoplay: {
// 	// 	delay: 2000,
// 	// 	disableOnInteraction: false,
// 	// },
// });


// var content_box2 = new Swiper(".content_box .slider2", {
// 	freeMode: true,
// 	slidesPerView: "auto",
// 	spaceBetween: 25,

// 	navigation: {
// 		nextEl: ".content_box .next_arrow ",
// 		prevEl: ".content_box .prev_arrow",
// 	},
// 	// pagination: {
// 	// 	el: ".hero .swiper-pagination",
// 	// },
// 	// autoplay: {
// 	// 	delay: 2000,
// 	// 	disableOnInteraction: false,
// 	// },
// });


$('.result .head .tags .tag .close_btn').click(function () {
	$(this).parent().hide()
});



// // Player
// document.getElementById("track").load();


// /* upload audio file */
// function handleFiles(event) {
// 	var files = event.target.files;
// 	$("#track").attr("src", URL.createObjectURL(files[0]));
// 	document.getElementById("track").load();
// 	console.log(event);
// 	$("div.player").toggleClass('d-none');
// 	$(".file-upload-wrapper").toggleClass('d-none');
// }
// document.getElementById("audiofile").addEventListener("change", handleFiles, false);

// $('#track').each(function (index, audio) {
// 	$(audio).on('canplay', function () {
// 		console.log(audio.duration);
// 		$("#duration")[0].innerHTML = sec2time(audio.duration);
// 		$("#timeslieder")[0].max = audio.duration * 1000;
// 	});
// });

// /* start button */
// $("#start").click(function () {
// 	$("#track")[0].play();
// 	$(this).toggleClass('d-none');
// 	$("#pause").toggleClass('d-none');
// });
// /* pause button */
// $("#pause").click(function () {
// 	$("#track")[0].pause();
// 	$(this).toggleClass('d-none');
// 	$("#start").toggleClass('d-none');
// });
// /* reset button */
// $("#reset").click(function () {
// 	$("#track")[0].load();
// 	$("#start").toggleClass('d-none');
// 	$("#pause").toggleClass('d-none');
// });
// $(".player .play_btn").click(function () {
// 	$(this).toggleClass('active')
// });
// /* timeupdate log */
// $("#track")[0].addEventListener('timeupdate', function () {
// 	var currentTimeSec = this.currentTime;
// 	var currentTimeMs = this.currentTime * 1000;
// 	$("#currentTime")[0].innerHTML = sec2time(currentTimeSec);
// 	$("#timeslieder")[0].value = currentTimeMs;
// 	initRangeEl();
// 	var arrayTime = [sec2time(currentTimeSec), currentTimeMs];
// 	console.log(currentTimeMs);
// }, false);

// function sec2time(timeInSeconds) {
// 	var pad = function (num, size) {
// 		return ('000' + num).slice(size * -1);
// 	},
// 		time = parseFloat(timeInSeconds).toFixed(3),
// 		hours = Math.floor(time / 60 / 60),
// 		minutes = Math.floor(time / 60) % 60,
// 		seconds = Math.floor(time - minutes * 60),
// 		milliseconds = time.slice(-3);
// 	return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
// }


// /* timeline slieder */
// function valueTotalRatio(value, min, max) {
// 	return ((value - min) / (max - min)).toFixed(2);
// }

// function getLinearGradientCSS(ratio, leftColor, rightColor) {
// 	return [
// 		'-webkit-gradient(',
// 		'linear, ',
// 		'left top, ',
// 		'right top, ',
// 		'color-stop(' + ratio + ', ' + leftColor + '), ',
// 		'color-stop(' + ratio + ', ' + rightColor + ')',
// 		')'
// 	].join('');
// }

// function updateRangeEl(rangeEl) {
// 	var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
// 	rangeEl.style.backgroundImage = getLinearGradientCSS(ratio, 'rgba(96, 96, 54, 1)', '#fffcfc');
// }

// function initRangeEl() {
// 	var rangeEl = document.getElementById("timeslieder");
// 	updateRangeEl(rangeEl);
// 	rangeEl.addEventListener("input", function (e) {
// 		updateRangeEl(e.target);
// 	});
// }

// $("#timeslieder")[0].addEventListener("input", function (e) {
// 	updateRangeEl(e.target);
// 	this.value = e.target.value;
// 	$("#track")[0].currentTime = e.target.value / 1000;
// });


(function ($) {

	$.fn.audioPlayer = function () {


		return this.each(function (options) {

			var $this = $(this),
				settings = $.extend({
					file: "/this/is/the/audio/file.mp3"
				}, options);

			if ($this.data('file')) {
				settings.file = ($this).data('file');
			}

			var audioPlayerMarkup = '<div class="play_btn">                                        <div id="start" data-play="" class="control-icon icon_start">                                            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">                                                <path d="M38 19.75C38 30.2891 29.4648 38.75 19 38.75C8.46094 38.75 0 30.2891 0 19.75C0 9.28516 8.46094 0.75 19 0.75C29.4648 0.75 38 9.28516 38 19.75ZM13.0625 13.2188V26.2812C13.0625 26.9492 13.3594 27.543 13.9531 27.8398C14.4727 28.2109 15.2148 28.1367 15.7344 27.8398L26.4219 21.3086C26.9414 21.0117 27.3125 20.418 27.3125 19.75C27.3125 19.1562 26.9414 18.5625 26.4219 18.2656L15.7344 11.7344C15.2148 11.3633 14.4727 11.3633 13.9531 11.7344C13.3594 12.0312 13.0625 12.625 13.0625 13.2188Z" fill="currentColor"></path>                                            </svg>                                        </div>                                        <div data-pause="" class="icon_stop control-icon pause" id="pause">                                            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">                                                <path d="M38 19.75C38 30.2891 29.4648 38.75 19 38.75C8.46094 38.75 0 30.2891 0 19.75C0 9.28516 8.46094 0.75 19 0.75C29.4648 0.75 38 9.28516 38 19.75ZM13.0625 13.2188V26.2812C13.0625 26.9492 13.3594 27.543 13.9531 27.8398C14.4727 28.2109 15.2148 28.1367 15.7344 27.8398L26.4219 21.3086C26.9414 21.0117 27.3125 20.418 27.3125 19.75C27.3125 19.1562 26.9414 18.5625 26.4219 18.2656L15.7344 11.7344C15.2148 11.3633 14.4727 11.3633 13.9531 11.7344C13.3594 12.0312 13.0625 12.625 13.0625 13.2188Z" fill="currentColor"></path>                                                <rect x="5" y="5" width="29" height="29" rx="14.5" fill="currentColor"></rect>                                                <rect x="12.25" y="9.53125" width="4.53125" height="19.9375" rx="1" fill="white"></rect>                                                <rect x="21.3125" y="9.53125" width="4.53125" height="19.9375" rx="1" fill="white"></rect>                                            </svg>                                        </div>                                    </div></svg></span> <span data-elapsed class="audio-time">00:00</span><div class="indicator-container"><div class="indicator-bar-empty"><div class="indicator-bar-full"></div></div><div data-playhead class="playhead"></div></div><span data-duration class="audio-time">0:00</span>';
			$this.prepend(audioPlayerMarkup);
			$this.prepend('<audio></audio>');
			var audioFile = $this.children('audio').get(0);
			audioFile.setAttribute('src', settings.file);
			audioFile.setAttribute('preload', 'meta');
			audioFile.setAttribute('volume', '0.8');

			console.log($this);
			console.log('file:', audioFile);

			//indicator-bar changes color to indicate percentage loaded
			audioFile.addEventListener('progress', function () {
				if (audioFile.duration > 0) {
					$this.find('.indicator-bar-full').css('width', function () {
						var totalBuffered = audioFile.buffered.end(audioFile.buffered.length - 1);
						var percentLoaded = parseInt(((totalBuffered / audioFile.duration) * 100), 10) + '%';
						return percentLoaded;
					});
				}
			});



			//is audioFile sufficiently buffered?
			audioFile.addEventListener('canplay', function () {
				console.log(settings.file + ' sufficiently loaded.');

				var m = Math.floor(audioFile.duration / 60);
				var s = Math.floor(audioFile.duration % 60);

				if (s < 10) {
					s = '0' + s;
				}

				$this.find('span[data-duration]').text(m + ':' + s);
			});

			//Play function
			$this.find('[data-play]').on('click', function () {
				audioFile.play();
				console.log('play clicked');
			});

			//Pause function
			$this.find('[data-pause]').on('click', function () {
				audioFile.pause();
			});

			var $playHead = $this.find('div[data-playhead]'),
				$elapsedSpan = $this.find('span[data-elapsed]');

			// //Playhead tracks with timeupdate
			audioFile.addEventListener('timeupdate', function () {
				$playHead.css('margin-left', function () {
					var progressPercentage = parseInt(((audioFile.currentTime / audioFile.duration) * 100), 10) + '%';
					return progressPercentage;
				});

				var m = Math.floor(audioFile.currentTime / 60);
				var s = Math.floor(audioFile.currentTime % 60);

				if (m < 10) {
					m = '0' + m;
				}

				if (s < 10) {
					s = '0' + s;
				}

				$elapsedSpan.text(m + ':' + s);
			});

			//Clicking indicator-bar moves playhead and updates current time
			$this.find('.indicator-container').on('click', function (event) {
				var clickLocation = (event.pageX - $(this).offset().left) / (this).offsetWidth;
				audioFile.currentTime = clickLocation * audioFile.duration;
			});

			//Dragging the playhead updates current time
			$playHead.on('mousedown', function (event) {

				$(this).parent().addClass('draggable');
				$(this).parent().on('mousemove', function (event) {
					var clickLocation = (event.pageX - $(this).offset().left) / (this).offsetWidth;
					audioFile.currentTime = clickLocation * audioFile.duration;
				});

				$(document).on('mouseup', function () {
					$playHead.parent().off('mousemove');
				});

			});

			//Fallback order: HTML5, then Flash, then "you can download the MP3"
		});
	};

})(jQuery);



$('.audio-player').audioPlayer();




$('.audio_box .play_btn').click(function () {
	$(this).toggleClass('active');
});










$('.search_bar > .btn').click(function () {
	$(this).toggleClass('active');
	$(this).parent().find('.bar').toggleClass('opened');
});

