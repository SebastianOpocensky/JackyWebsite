/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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
				usePopupCaption: false,
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

			// About Section (Hauptseite)
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.about-section');
				const image = document.querySelector('.about-image');
				const heading = document.querySelector('.about-heading');
				const text = document.querySelector('.about-text');

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
			});

			//Intro Section

			document.addEventListener("DOMContentLoaded", () => {
			const introTexts = document.querySelectorAll(".intro-text");

			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target); // Nur einmal animieren
				}
				});
			}, {
				threshold: 0.1
			});

			introTexts.forEach(text => observer.observe(text));
			});


			// Experience Section 
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.experience-section');
				const image = document.querySelector('.experience-image');
				const heading = document.querySelector('.experience-heading');
				const text = document.querySelector('.experience-text');

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
			});

			// DAY AT THE VILLA Section 
			document.addEventListener('DOMContentLoaded', () => {
				const section = document.querySelector('.day-section');
				const image = document.querySelector('.day-image');
				const heading = document.querySelector('.day-heading');
				const text = document.querySelector('.day-text');

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
			});

			// EVERYTHING AT A GLACE Section 
			document.addEventListener("DOMContentLoaded", () => {
				const leftBox = document.querySelector('.glance-box.left');
				const rightBox = document.querySelector('.glance-box.right');

				// Funktion um zu prüfen, ob ein Element im Viewport ist
				function isInViewport(element) {
					const rect = element.getBoundingClientRect();
					return (
					rect.top < window.innerHeight && rect.bottom >= 0
					);
				}

				function handleScrollAnimation() {
					if (window.innerWidth > 768) {
					if (isInViewport(leftBox)) {
						leftBox.classList.add('show');
						leftBox.classList.remove('hidden');
					}
					if (isInViewport(rightBox)) {
						rightBox.classList.add('show');
						rightBox.classList.remove('hidden');
					}
					} else {
					// Auf mobilen Geräten direkt anzeigen
					leftBox.classList.add('show');
					rightBox.classList.add('show');
					}
				}

				window.addEventListener('scroll', handleScrollAnimation);
				window.addEventListener('resize', handleScrollAnimation);
				handleScrollAnimation(); // Initial aufrufen
			});

	
			// Packages & Pricing Section 
			document.addEventListener("DOMContentLoaded", () => {
			const elementsToAnimate = document.querySelectorAll(
				".packages-intro, .packages-image, .packages-text"
			);

			function isInViewport(el) {
				const rect = el.getBoundingClientRect();
				return rect.top < window.innerHeight && rect.bottom >= 0;
			}

			function animateOnScroll() {
			if (window.innerWidth > 768) {
			elementsToAnimate.forEach((el) => {
				if (isInViewport(el) && !el.classList.contains("show")) {
				el.classList.add("show");
				el.classList.remove("hidden-left", "hidden-right", "hidden-bottom");
				}
			});
			} else {
			elementsToAnimate.forEach((el) => {
				if (!el.classList.contains("show")) {
				el.classList.add("show");
				el.classList.remove("hidden-left", "hidden-right", "hidden-bottom");
				}
			});
			}
		}

		// Debounce function to limit event frequency
		function debounce(func, wait) {
			let timeout;
			return function () {
			clearTimeout(timeout);
			timeout = setTimeout(func, wait);
			};
		}

		const debouncedAnimateOnScroll = debounce(animateOnScroll, 100);

		window.addEventListener("scroll", debouncedAnimateOnScroll);
		window.addEventListener("resize", debouncedAnimateOnScroll);
		animateOnScroll(); // Initial call
			});


			// MEET YOUR HOSTS Section
			function animateOnScroll() {
				const animatedElements = document.querySelectorAll('.from-left, .from-right');

				const isMobile = window.innerWidth <= 768;

				if (isMobile) return; // Keine Animation auf Mobilgeräten

				animatedElements.forEach(el => {
					const rect = el.getBoundingClientRect();
					if (rect.top < window.innerHeight - 100) {
						el.classList.add('show');
					}
				});
			}

			window.addEventListener('scroll', animateOnScroll);
			window.addEventListener('load', animateOnScroll);



			//Old (deleted) Slider (but has attributes for afterlanding section)

			document.querySelectorAll('.packages-image.slider').forEach(slider => {
				const slides = slider.querySelector('.slides');
				const imgs = slides.querySelectorAll('img');
				let index = 0;
				slides.style.transform = `translateX(-${index * 100}%)`;

				slider.querySelector('.prev').addEventListener('click', () => {
					index = (index > 0) ? index - 1 : imgs.length - 1;
					slides.style.transform = `translateX(-${index * 100}%)`;
				});

				slider.querySelector('.next').addEventListener('click', () => {
					index = (index < imgs.length - 1) ? index + 1 : 0;
					slides.style.transform = `translateX(-${index * 100}%)`;
				});
			});

			document.addEventListener('DOMContentLoaded', () => {
				const button = document.getElementById('mein-button');
			});


			
			document.addEventListener("DOMContentLoaded", () => {
			if (window.innerWidth > 768) {
				const observerOptions = {
					threshold: 0.1
				};

				const revealOnScroll = (entries, observer) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
							observer.unobserve(entry.target);
						}
					});
				};

				const observer = new IntersectionObserver(revealOnScroll, observerOptions);

				document.querySelectorAll(".retreat-text").forEach(el => {
					observer.observe(el);
				});
			}
		});

		//Neuer (active) Slider

			const slides = document.querySelectorAll('.slide');
			const dots = document.querySelectorAll('.nav-dot');
			let current = 0;
			let interval = setInterval(nextSlide, 8000); // 8 Sekunden

			function showSlide(index) {
				slides.forEach((slide, i) => {
				slide.classList.toggle('active', i === index);
				dots[i].classList.toggle('active', i === index);
				});
				current = index;
			}

			function nextSlide() {
				const next = (current + 1) % slides.length;
				showSlide(next);
			}

			dots.forEach(dot => {
				dot.addEventListener('click', () => {
				clearInterval(interval);
				showSlide(parseInt(dot.dataset.index));
				interval = setInterval(nextSlide, 5000);
				});
			});



})(jQuery);