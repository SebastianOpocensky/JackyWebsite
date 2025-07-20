/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const enableGridAnimation = false;

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
    $window.on('load', function() {
        setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);

	// Fallback: Remove is-preload after a maximum of 5 seconds
    setTimeout(function() {
        if ($body.hasClass('is-preload')) {
            $body.removeClass('is-preload');
        }
    }, 5000);

    // Additional check on scroll to ensure the class is removed
    $window.on('scroll', function() {
        if ($body.hasClass('is-preload')) {
            $body.removeClass('is-preload');
        }
    });

        // Menu toggle for dropdown
        $('#menuToggle').on('click', function () {
            $('#dropdownMenu').toggleClass('hidden visible');
        });

        // Close dropdown when clicking outside
        $(document).on('click', function (event) {
            if (!$(event.target).closest('#menuToggle, #dropdownMenu').length) {
                $('#dropdownMenu').removeClass('visible').addClass('hidden');
            }
        });
    });

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.content.box.right')
						.scrollex({
							top:        '30vh',
							bottom:     '30vh',
							delay:      50,
							initialize: function() { $(this).removeClass('visible'); },
							terminate:  function() { $(this).removeClass('visible'); },
							enter:      function() { $(this).addClass('visible'); },
							leave:      function() { $(this).removeClass('visible'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

				// Content box right.
					$('.content.box.right')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});


			// Mission Section (Hauptseite)
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.mission-section');
				const image = document.querySelector('.mission-image');
				const heading = document.querySelector('.mission-heading');
				const text = document.querySelector('.mission-text');
				const button = document.querySelector(".collapsible-button2");
				const content = document.querySelector(".collapsible-content2");
				

				// Funktion, um zu prüfen, ob ein Element im Sichtfeld ist
				function isInViewport(element) {
					const rect = element.getBoundingClientRect();
					const windowHeight = window.innerHeight || document.documentElement.clientHeight;
					return (
						rect.top >= -rect.height && // Sektion nicht komplett oben außerhalb
						rect.bottom <= windowHeight + rect.height // Sektion nicht komplett unten außerhalb
					);
				}

				// Scroll-Event-Listener
				window.addEventListener('scroll', () => {
					if (isInViewport(section)) {
						// Elemente einfahren lassen, wenn im Sichtfeld
						image.classList.add('active');
						heading.classList.add('active');
						text.classList.add('active');
					} else {
						// Elemente ausfahren lassen, wenn außerhalb des Sichtfelds
						image.classList.remove('active');
						heading.classList.remove('active');
						text.classList.remove('active');
					}
				});

				// Initiale Prüfung, falls die Sektion bereits sichtbar ist
				if (isInViewport(section)) {
					image.classList.add('active');
					heading.classList.add('active');
					text.classList.add('active');
				} else {
					image.classList.remove('active');
					heading.classList.remove('active');
					text.classList.remove('active');
				}

				//Mission Section Collabsible Text
				button.addEventListener("click", function () {
					const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

					if (isOpen) {
						content.style.maxHeight = "0px";
						button.innerHTML = "<strong>READ MORE</strong>";

						// Button wieder zurück an seine ursprüngliche Position (überhalb von .collapsible-content)
						content.parentNode.insertBefore(button, content);
					} else {
						content.appendChild(button);
						button.innerHTML = "<strong>READ LESS</strong>";

						setTimeout(() => {
							content.style.maxHeight = content.scrollHeight + "px";
						}, 10);
					}
				});

			});

			document.addEventListener('DOMContentLoaded', () => {
				const readMoreLink = document.getElementById('read-more-toggle');
				const extraText = document.querySelector('.mission-text.extra-text');

				if (readMoreLink && extraText) {
					readMoreLink.addEventListener('click', (e) => {
						e.preventDefault(); // Verhindert Navigation

						const isVisible = extraText.classList.contains('show');

						if (!isVisible) {
							extraText.classList.add('show'); // Macht den Text sichtbar
							setTimeout(() => {
								extraText.classList.add('active'); // Startet die Animation
							}, 10); // Kleiner Timeout für flüssige Animation
							readMoreLink.textContent = 'Read less';
						} else {
							extraText.classList.remove('active'); // Animation rückgängig
							setTimeout(() => {
								extraText.classList.remove('show'); // Text ausblenden
							}, 800); // Warte, bis die Animation abgeschlossen ist (0.8s)
							readMoreLink.textContent = 'Read more';
						}
					});
				}
			});


			// About Section (Hauptseite)
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.about-section');
				const image = document.querySelector('.about-image');
				const heading = document.querySelector('.about-heading');
				const text = document.querySelector('.about-text');
				const button = document.querySelector(".collapsible-button");
				const content = document.querySelector(".collapsible-content");
				
				

				// Funktion, um zu prüfen, ob ein Element im Sichtfeld ist
				function isInViewport(element) {
					const rect = element.getBoundingClientRect();
					return (
						rect.top >= 0 &&
						rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
					);
				}

				// Scroll-Event-Listener
				window.addEventListener('scroll', () => {
					if (isInViewport(section)) {
						image.classList.add('active');
						heading.classList.add('active');
						text.classList.add('active');
					}
				});

				// Initiale Prüfung, falls die Sektion bereits sichtbar ist
				if (isInViewport(section)) {
					image.classList.add('active');
					heading.classList.add('active');
					text.classList.add('active');
				}


				const readMoreLinkAbout = document.getElementById('read-more-toggle-about');
				const extraTextAbout = document.querySelector('.about-text.extra-text');

				if (readMoreLinkAbout && extraTextAbout) {
					readMoreLinkAbout.addEventListener('click', (e) => {
						e.preventDefault();
						const isVisible = extraTextAbout.classList.contains('show');

						if (!isVisible) {
							extraTextAbout.classList.add('show');
							setTimeout(() => {
								extraTextAbout.classList.add('active');
							}, 10);
							readMoreLinkAbout.textContent = 'READ LESS';
						} else {
							extraTextAbout.classList.remove('active');
							setTimeout(() => {
								extraTextAbout.classList.remove('show');
							}, 800);
							readMoreLinkAbout.textContent = 'READ MORE';
						}
					});
				}

				//About Section Collabsible Text
				button.addEventListener("click", function () {
					const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

					if (isOpen) {
						content.style.maxHeight = "0px";
						button.innerHTML = "<strong>READ MORE</strong>";

						// Button wieder zurück an seine ursprüngliche Position (überhalb von .collapsible-content)
						content.parentNode.insertBefore(button, content);
					} else {
						content.appendChild(button);
						button.innerHTML = "<strong>READ LESS</strong>";

						setTimeout(() => {
							content.style.maxHeight = content.scrollHeight + "px";
						}, 10);
					}
				});
			});
			
	
			// Retreat Sektion (Hauptseite)
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.retreat-section');
				const animatedElements = document.querySelectorAll('.retreat-heading, .retreat-text, .retreat-button, .retreat-image');

				// Funktion, um zu prüfen, ob ein Element im Sichtbereich ist
				function checkVisibility() {
					const sectionTop = section.getBoundingClientRect().top;
					const windowHeight = window.innerHeight;

					// Wenn die Sektion zu 50% im Sichtbereich ist
					if (sectionTop < windowHeight * 0.5) {
						animatedElements.forEach(element => {
							element.classList.add('visible');
						});
					}
				}

				// Prüfe beim Scrollen und initial beim Laden
				window.addEventListener('scroll', checkVisibility);
				checkVisibility(); // Prüfe sofort, falls die Sektion schon sichtbar ist
			});


			document.addEventListener("DOMContentLoaded", function () {
				const items = document.querySelectorAll(".image-text-item");

				// Nur Animation auf Desktop-Geräten aktivieren
				if (window.innerWidth > 768) {
					const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("animate-in");
						}
						});
					},
					{ threshold: 0.2 }
					);

					items.forEach((item) => observer.observe(item));
				} else {
					// Mobil: Klassen direkt setzen, ohne Observer
					items.forEach((item) => {
					item.classList.add("animate-in");
					});
				}
				});

			 //Offers Grid Items fly in animation
			document.addEventListener("DOMContentLoaded", () => {
				const items = document.querySelectorAll(".grid-item");

				const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target); // Nur einmal animieren
					}
					});
				},
				{ threshold: 0.2 }
				);

				items.forEach(item => observer.observe(item)); 
			});

			


			

})(jQuery);