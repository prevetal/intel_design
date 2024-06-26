WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// My projects slider
	const myProjectsSliders = [],
		myProjects = document.querySelectorAll('.my_projects .swiper')

	myProjects.forEach((el, i) => {
		el.classList.add('my_projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 20
				},
				768: {
					slidesPerView: 'auto',
					spaceBetween: 24
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 100
				}
			}
		}

		myProjectsSliders.push(new Swiper('.my_projects_s' + i, options))
	})


	// Projects slider
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				480: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 30
				},
				1280: {
					spaceBetween: 40
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				480: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 30
				},
				1280: {
					spaceBetween: 40
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('.mob_menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('.mob_menu .close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('.mob_menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// 'Up' button
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label .path').innerText = el.value)
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}
})



window.addEventListener('scroll', function () {
	// 'Up' button
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Map
async function initMap() {
	await ymaps3.ready

	const { YMap, YMapDefaultSchemeLayer } = ymaps3

	const map = new YMap(document.getElementById('map'), {
		location: {
			center: [55.796319, 49.134765],
			zoom: 12
		},
		mode: 'vector'
	})

	const layer = new YMapDefaultSchemeLayer({
		customization: [
			{
				"tags": "country",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#8a766a"
					},
					{
						"zoom": 0,
						"opacity": 0.8
					},
					{
						"zoom": 1,
						"opacity": 0.8
					},
					{
						"zoom": 2,
						"opacity": 0.8
					},
					{
						"zoom": 3,
						"opacity": 0.8
					},
					{
						"zoom": 4,
						"opacity": 0.8
					},
					{
						"zoom": 5,
						"opacity": 1
					},
					{
						"zoom": 6,
						"opacity": 1
					},
					{
						"zoom": 7,
						"opacity": 1
					},
					{
						"zoom": 8,
						"opacity": 1
					},
					{
						"zoom": 9,
						"opacity": 1
					},
					{
						"zoom": 10,
						"opacity": 1
					},
					{
						"zoom": 11,
						"opacity": 1
					},
					{
						"zoom": 12,
						"opacity": 1
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "country",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#564c48"
					},
					{
						"zoom": 0,
						"opacity": 0.15
					},
					{
						"zoom": 1,
						"opacity": 0.15
					},
					{
						"zoom": 2,
						"opacity": 0.15
					},
					{
						"zoom": 3,
						"opacity": 0.15
					},
					{
						"zoom": 4,
						"opacity": 0.15
					},
					{
						"zoom": 5,
						"opacity": 0.15
					},
					{
						"zoom": 6,
						"opacity": 0.25
					},
					{
						"zoom": 7,
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"opacity": 0.47
					},
					{
						"zoom": 9,
						"opacity": 0.44
					},
					{
						"zoom": 10,
						"opacity": 0.41
					},
					{
						"zoom": 11,
						"opacity": 0.38
					},
					{
						"zoom": 12,
						"opacity": 0.35
					},
					{
						"zoom": 13,
						"opacity": 0.33
					},
					{
						"zoom": 14,
						"opacity": 0.3
					},
					{
						"zoom": 15,
						"opacity": 0.28
					},
					{
						"zoom": 16,
						"opacity": 0.25
					},
					{
						"zoom": 17,
						"opacity": 0.25
					},
					{
						"zoom": 18,
						"opacity": 0.25
					},
					{
						"zoom": 19,
						"opacity": 0.25
					},
					{
						"zoom": 20,
						"opacity": 0.25
					},
					{
						"zoom": 21,
						"opacity": 0.25
					}
				]
			},
			{
				"tags": "region",
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"color": "#6d5d54",
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"color": "#6d5d54",
						"opacity": 1
					},
					{
						"zoom": 7,
						"color": "#6d5d54",
						"opacity": 1
					},
					{
						"zoom": 8,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 9,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 10,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 11,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 12,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 13,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 17,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 18,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 19,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 20,
						"color": "#8a766a",
						"opacity": 1
					},
					{
						"zoom": 21,
						"color": "#8a766a",
						"opacity": 1
					}
				]
			},
			{
				"tags": "region",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#564c48"
					},
					{
						"zoom": 0,
						"opacity": 0.15
					},
					{
						"zoom": 1,
						"opacity": 0.15
					},
					{
						"zoom": 2,
						"opacity": 0.15
					},
					{
						"zoom": 3,
						"opacity": 0.15
					},
					{
						"zoom": 4,
						"opacity": 0.15
					},
					{
						"zoom": 5,
						"opacity": 0.15
					},
					{
						"zoom": 6,
						"opacity": 0.25
					},
					{
						"zoom": 7,
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"opacity": 0.47
					},
					{
						"zoom": 9,
						"opacity": 0.44
					},
					{
						"zoom": 10,
						"opacity": 0.41
					},
					{
						"zoom": 11,
						"opacity": 0.38
					},
					{
						"zoom": 12,
						"opacity": 0.35
					},
					{
						"zoom": 13,
						"opacity": 0.33
					},
					{
						"zoom": 14,
						"opacity": 0.3
					},
					{
						"zoom": 15,
						"opacity": 0.28
					},
					{
						"zoom": 16,
						"opacity": 0.25
					},
					{
						"zoom": 17,
						"opacity": 0.25
					},
					{
						"zoom": 18,
						"opacity": 0.25
					},
					{
						"zoom": 19,
						"opacity": 0.25
					},
					{
						"zoom": 20,
						"opacity": 0.25
					},
					{
						"zoom": 21,
						"opacity": 0.25
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#8a766a"
					},
					{
						"zoom": 0,
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"opacity": 1
					},
					{
						"zoom": 7,
						"opacity": 1
					},
					{
						"zoom": 8,
						"opacity": 1
					},
					{
						"zoom": 9,
						"opacity": 1
					},
					{
						"zoom": 10,
						"opacity": 1
					},
					{
						"zoom": 11,
						"opacity": 1
					},
					{
						"zoom": 12,
						"opacity": 1
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#564c48"
					},
					{
						"zoom": 0,
						"opacity": 0.15
					},
					{
						"zoom": 1,
						"opacity": 0.15
					},
					{
						"zoom": 2,
						"opacity": 0.15
					},
					{
						"zoom": 3,
						"opacity": 0.15
					},
					{
						"zoom": 4,
						"opacity": 0.15
					},
					{
						"zoom": 5,
						"opacity": 0.15
					},
					{
						"zoom": 6,
						"opacity": 0.25
					},
					{
						"zoom": 7,
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"opacity": 0.47
					},
					{
						"zoom": 9,
						"opacity": 0.44
					},
					{
						"zoom": 10,
						"opacity": 0.41
					},
					{
						"zoom": 11,
						"opacity": 0.38
					},
					{
						"zoom": 12,
						"opacity": 0.35
					},
					{
						"zoom": 13,
						"opacity": 0.33
					},
					{
						"zoom": 14,
						"opacity": 0.3
					},
					{
						"zoom": 15,
						"opacity": 0.28
					},
					{
						"zoom": 16,
						"opacity": 0.25
					},
					{
						"zoom": 17,
						"opacity": 0.25
					},
					{
						"zoom": 18,
						"opacity": 0.25
					},
					{
						"zoom": 19,
						"opacity": 0.25
					},
					{
						"zoom": 20,
						"opacity": 0.25
					},
					{
						"zoom": 21,
						"opacity": 0.25
					}
				]
			},
			{
				"tags": {
					"any": "landcover",
					"none": "vegetation"
				},
				"stylers": [
					{
						"hue": "#3e3937"
					}
				]
			},
			{
				"tags": "vegetation",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 1,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 2,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 3,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 4,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 5,
						"color": "#59524f",
						"opacity": 0.1
					},
					{
						"zoom": 6,
						"color": "#59524f",
						"opacity": 0.2
					},
					{
						"zoom": 7,
						"color": "#3e3937",
						"opacity": 0.3
					},
					{
						"zoom": 8,
						"color": "#3e3937",
						"opacity": 0.4
					},
					{
						"zoom": 9,
						"color": "#3e3937",
						"opacity": 0.6
					},
					{
						"zoom": 10,
						"color": "#3e3937",
						"opacity": 0.8
					},
					{
						"zoom": 11,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 12,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 13,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#393433",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 17,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 18,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 19,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 20,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 21,
						"color": "#332f2e",
						"opacity": 1
					}
				]
			},
			{
				"tags": "park",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 1,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 2,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 3,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 4,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 5,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 6,
						"color": "#3e3937",
						"opacity": 0.2
					},
					{
						"zoom": 7,
						"color": "#3e3937",
						"opacity": 0.3
					},
					{
						"zoom": 8,
						"color": "#3e3937",
						"opacity": 0.4
					},
					{
						"zoom": 9,
						"color": "#3e3937",
						"opacity": 0.6
					},
					{
						"zoom": 10,
						"color": "#3e3937",
						"opacity": 0.8
					},
					{
						"zoom": 11,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 12,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 13,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#393433",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#332f2e",
						"opacity": 0.9
					},
					{
						"zoom": 17,
						"color": "#332f2e",
						"opacity": 0.8
					},
					{
						"zoom": 18,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 19,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 20,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 21,
						"color": "#332f2e",
						"opacity": 0.7
					}
				]
			},
			{
				"tags": "national_park",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 1,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 2,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 3,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 4,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 5,
						"color": "#3e3937",
						"opacity": 0.1
					},
					{
						"zoom": 6,
						"color": "#3e3937",
						"opacity": 0.2
					},
					{
						"zoom": 7,
						"color": "#3e3937",
						"opacity": 0.3
					},
					{
						"zoom": 8,
						"color": "#3e3937",
						"opacity": 0.4
					},
					{
						"zoom": 9,
						"color": "#3e3937",
						"opacity": 0.6
					},
					{
						"zoom": 10,
						"color": "#3e3937",
						"opacity": 0.8
					},
					{
						"zoom": 11,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 12,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 13,
						"color": "#3e3937",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#393433",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#332f2e",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 17,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 18,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 19,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 20,
						"color": "#332f2e",
						"opacity": 0.7
					},
					{
						"zoom": 21,
						"color": "#332f2e",
						"opacity": 0.7
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#3e3937"
					},
					{
						"zoom": 1,
						"color": "#3e3937"
					},
					{
						"zoom": 2,
						"color": "#3e3937"
					},
					{
						"zoom": 3,
						"color": "#3e3937"
					},
					{
						"zoom": 4,
						"color": "#3e3937"
					},
					{
						"zoom": 5,
						"color": "#3e3937"
					},
					{
						"zoom": 6,
						"color": "#3e3937"
					},
					{
						"zoom": 7,
						"color": "#3e3937"
					},
					{
						"zoom": 8,
						"color": "#3e3937"
					},
					{
						"zoom": 9,
						"color": "#3e3937"
					},
					{
						"zoom": 10,
						"color": "#3e3937"
					},
					{
						"zoom": 11,
						"color": "#3e3937"
					},
					{
						"zoom": 12,
						"color": "#3e3937"
					},
					{
						"zoom": 13,
						"color": "#3e3937"
					},
					{
						"zoom": 14,
						"color": "#393433"
					},
					{
						"zoom": 15,
						"color": "#332f2e"
					},
					{
						"zoom": 16,
						"color": "#332f2e"
					},
					{
						"zoom": 17,
						"color": "#332f2e"
					},
					{
						"zoom": 18,
						"color": "#332f2e"
					},
					{
						"zoom": 19,
						"color": "#332f2e"
					},
					{
						"zoom": 20,
						"color": "#332f2e"
					},
					{
						"zoom": 21,
						"color": "#332f2e"
					}
				]
			},
			{
				"tags": "sports_ground",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 1,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 2,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 3,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 4,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 5,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 6,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 7,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 8,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 9,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 10,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 11,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 12,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 13,
						"color": "#4c4643",
						"opacity": 0
					},
					{
						"zoom": 14,
						"color": "#47413f",
						"opacity": 0
					},
					{
						"zoom": 15,
						"color": "#413c3a",
						"opacity": 0.5
					},
					{
						"zoom": 16,
						"color": "#403b39",
						"opacity": 1
					},
					{
						"zoom": 17,
						"color": "#3f3a38",
						"opacity": 1
					},
					{
						"zoom": 18,
						"color": "#3e3a38",
						"opacity": 1
					},
					{
						"zoom": 19,
						"color": "#3d3937",
						"opacity": 1
					},
					{
						"zoom": 20,
						"color": "#3c3836",
						"opacity": 1
					},
					{
						"zoom": 21,
						"color": "#3b3735",
						"opacity": 1
					}
				]
			},
			{
				"tags": "terrain",
				"elements": "geometry",
				"stylers": [
					{
						"hue": "#4c4643"
					},
					{
						"zoom": 0,
						"opacity": 0.3
					},
					{
						"zoom": 1,
						"opacity": 0.3
					},
					{
						"zoom": 2,
						"opacity": 0.3
					},
					{
						"zoom": 3,
						"opacity": 0.3
					},
					{
						"zoom": 4,
						"opacity": 0.3
					},
					{
						"zoom": 5,
						"opacity": 0.35
					},
					{
						"zoom": 6,
						"opacity": 0.4
					},
					{
						"zoom": 7,
						"opacity": 0.6
					},
					{
						"zoom": 8,
						"opacity": 0.8
					},
					{
						"zoom": 9,
						"opacity": 0.9
					},
					{
						"zoom": 10,
						"opacity": 1
					},
					{
						"zoom": 11,
						"opacity": 1
					},
					{
						"zoom": 12,
						"opacity": 1
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "geographic_line",
				"elements": "geometry",
				"stylers": [
					{
						"color": "#b2aca9"
					}
				]
			},
			{
				"tags": "land",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#4c4643"
					},
					{
						"zoom": 1,
						"color": "#4c4643"
					},
					{
						"zoom": 2,
						"color": "#4c4643"
					},
					{
						"zoom": 3,
						"color": "#4c4643"
					},
					{
						"zoom": 4,
						"color": "#4c4643"
					},
					{
						"zoom": 5,
						"color": "#494441"
					},
					{
						"zoom": 6,
						"color": "#47413f"
					},
					{
						"zoom": 7,
						"color": "#443f3c"
					},
					{
						"zoom": 8,
						"color": "#413c3a"
					},
					{
						"zoom": 9,
						"color": "#413c3a"
					},
					{
						"zoom": 10,
						"color": "#413c3a"
					},
					{
						"zoom": 11,
						"color": "#413c3a"
					},
					{
						"zoom": 12,
						"color": "#413c3a"
					},
					{
						"zoom": 13,
						"color": "#413c3a"
					},
					{
						"zoom": 14,
						"color": "#3e3a38"
					},
					{
						"zoom": 15,
						"color": "#3b3735"
					},
					{
						"zoom": 16,
						"color": "#3b3735"
					},
					{
						"zoom": 17,
						"color": "#3a3634"
					},
					{
						"zoom": 18,
						"color": "#3a3634"
					},
					{
						"zoom": 19,
						"color": "#3a3533"
					},
					{
						"zoom": 20,
						"color": "#393533"
					},
					{
						"zoom": 21,
						"color": "#393432"
					}
				]
			},
			{
				"tags": "residential",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 7,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 9,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 10,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 11,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 12,
						"color": "#4c4643",
						"opacity": 0.5
					},
					{
						"zoom": 13,
						"color": "#4c4643",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#47413f",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#413c3a",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#403b39",
						"opacity": 1
					},
					{
						"zoom": 17,
						"color": "#3f3a38",
						"opacity": 1
					},
					{
						"zoom": 18,
						"color": "#3e3a38",
						"opacity": 1
					},
					{
						"zoom": 19,
						"color": "#3d3937",
						"opacity": 1
					},
					{
						"zoom": 20,
						"color": "#3c3836",
						"opacity": 1
					},
					{
						"zoom": 21,
						"color": "#3b3735",
						"opacity": 1
					}
				]
			},
			{
				"tags": "locality",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#4c4643"
					},
					{
						"zoom": 1,
						"color": "#4c4643"
					},
					{
						"zoom": 2,
						"color": "#4c4643"
					},
					{
						"zoom": 3,
						"color": "#4c4643"
					},
					{
						"zoom": 4,
						"color": "#4c4643"
					},
					{
						"zoom": 5,
						"color": "#4c4643"
					},
					{
						"zoom": 6,
						"color": "#4c4643"
					},
					{
						"zoom": 7,
						"color": "#4c4643"
					},
					{
						"zoom": 8,
						"color": "#4c4643"
					},
					{
						"zoom": 9,
						"color": "#4c4643"
					},
					{
						"zoom": 10,
						"color": "#4c4643"
					},
					{
						"zoom": 11,
						"color": "#4c4643"
					},
					{
						"zoom": 12,
						"color": "#4c4643"
					},
					{
						"zoom": 13,
						"color": "#4c4643"
					},
					{
						"zoom": 14,
						"color": "#47413f"
					},
					{
						"zoom": 15,
						"color": "#413c3a"
					},
					{
						"zoom": 16,
						"color": "#403b39"
					},
					{
						"zoom": 17,
						"color": "#3f3a38"
					},
					{
						"zoom": 18,
						"color": "#3e3a38"
					},
					{
						"zoom": 19,
						"color": "#3d3937"
					},
					{
						"zoom": 20,
						"color": "#3c3836"
					},
					{
						"zoom": 21,
						"color": "#3b3735"
					}
				]
			},
			{
				"tags": {
					"any": "structure",
					"none": [
						"building",
						"fence"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"opacity": 0.9
					},
					{
						"zoom": 0,
						"color": "#4c4643"
					},
					{
						"zoom": 1,
						"color": "#4c4643"
					},
					{
						"zoom": 2,
						"color": "#4c4643"
					},
					{
						"zoom": 3,
						"color": "#4c4643"
					},
					{
						"zoom": 4,
						"color": "#4c4643"
					},
					{
						"zoom": 5,
						"color": "#4c4643"
					},
					{
						"zoom": 6,
						"color": "#4c4643"
					},
					{
						"zoom": 7,
						"color": "#4c4643"
					},
					{
						"zoom": 8,
						"color": "#4c4643"
					},
					{
						"zoom": 9,
						"color": "#4c4643"
					},
					{
						"zoom": 10,
						"color": "#4c4643"
					},
					{
						"zoom": 11,
						"color": "#4c4643"
					},
					{
						"zoom": 12,
						"color": "#4c4643"
					},
					{
						"zoom": 13,
						"color": "#4c4643"
					},
					{
						"zoom": 14,
						"color": "#47413f"
					},
					{
						"zoom": 15,
						"color": "#413c3a"
					},
					{
						"zoom": 16,
						"color": "#403b39"
					},
					{
						"zoom": 17,
						"color": "#3f3a38"
					},
					{
						"zoom": 18,
						"color": "#3e3a38"
					},
					{
						"zoom": 19,
						"color": "#3d3937"
					},
					{
						"zoom": 20,
						"color": "#3c3836"
					},
					{
						"zoom": 21,
						"color": "#3b3735"
					}
				]
			},
			{
				"tags": "building",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#4c4643"
					},
					{
						"zoom": 0,
						"opacity": 0.7
					},
					{
						"zoom": 1,
						"opacity": 0.7
					},
					{
						"zoom": 2,
						"opacity": 0.7
					},
					{
						"zoom": 3,
						"opacity": 0.7
					},
					{
						"zoom": 4,
						"opacity": 0.7
					},
					{
						"zoom": 5,
						"opacity": 0.7
					},
					{
						"zoom": 6,
						"opacity": 0.7
					},
					{
						"zoom": 7,
						"opacity": 0.7
					},
					{
						"zoom": 8,
						"opacity": 0.7
					},
					{
						"zoom": 9,
						"opacity": 0.7
					},
					{
						"zoom": 10,
						"opacity": 0.7
					},
					{
						"zoom": 11,
						"opacity": 0.7
					},
					{
						"zoom": 12,
						"opacity": 0.7
					},
					{
						"zoom": 13,
						"opacity": 0.7
					},
					{
						"zoom": 14,
						"opacity": 0.7
					},
					{
						"zoom": 15,
						"opacity": 0.7
					},
					{
						"zoom": 16,
						"opacity": 0.9
					},
					{
						"zoom": 17,
						"opacity": 0.6
					},
					{
						"zoom": 18,
						"opacity": 0.6
					},
					{
						"zoom": 19,
						"opacity": 0.6
					},
					{
						"zoom": 20,
						"opacity": 0.6
					},
					{
						"zoom": 21,
						"opacity": 0.6
					}
				]
			},
			{
				"tags": "building",
				"elements": "geometry.outline",
				"stylers": [
					{
						"color": "#615a56"
					},
					{
						"zoom": 0,
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"opacity": 0.5
					},
					{
						"zoom": 7,
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"opacity": 0.5
					},
					{
						"zoom": 9,
						"opacity": 0.5
					},
					{
						"zoom": 10,
						"opacity": 0.5
					},
					{
						"zoom": 11,
						"opacity": 0.5
					},
					{
						"zoom": 12,
						"opacity": 0.5
					},
					{
						"zoom": 13,
						"opacity": 0.5
					},
					{
						"zoom": 14,
						"opacity": 0.5
					},
					{
						"zoom": 15,
						"opacity": 0.5
					},
					{
						"zoom": 16,
						"opacity": 0.5
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": {
					"any": "urban_area",
					"none": [
						"residential",
						"industrial",
						"cemetery",
						"park",
						"medical",
						"sports_ground",
						"beach",
						"construction_site"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 1,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 2,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 3,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 4,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 5,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 6,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 7,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 8,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 9,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 10,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 11,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 12,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 13,
						"color": "#56504d",
						"opacity": 1
					},
					{
						"zoom": 14,
						"color": "#504a47",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#494341",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#423d3b",
						"opacity": 0.67
					},
					{
						"zoom": 17,
						"color": "#3b3735",
						"opacity": 0.33
					},
					{
						"zoom": 18,
						"color": "#3b3735",
						"opacity": 0
					},
					{
						"zoom": 19,
						"color": "#3b3735",
						"opacity": 0
					},
					{
						"zoom": 20,
						"color": "#3b3735",
						"opacity": 0
					},
					{
						"zoom": 21,
						"color": "#3b3735",
						"opacity": 0
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "poi",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "outdoor",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "park",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "cemetery",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "beach",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "medical",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "shopping",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "commercial_services",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "food_and_drink",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.icon",
				"types": "point",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "point",
				"stylers": [
					{
						"color": "#705f57"
					}
				]
			},
			{
				"tags": "entrance",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					},
					{
						"hue": "#28221f"
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#2b2521"
					},
					{
						"secondary-color": "#705f57"
					}
				]
			},
			{
				"tags": "country",
				"elements": "label.text.fill",
				"stylers": [
					{
						"opacity": 0.8
					},
					{
						"color": "#9a928d"
					}
				]
			},
			{
				"tags": "country",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "region",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#9a928d"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "region",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "district",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#9a928d"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "district",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#9a928d"
					}
				]
			},
			{
				"tags": {
					"any": "admin",
					"none": [
						"country",
						"region",
						"locality",
						"district",
						"address"
					]
				},
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.text.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#bfb9b5"
					},
					{
						"zoom": 1,
						"color": "#bfb9b5"
					},
					{
						"zoom": 2,
						"color": "#bfb9b5"
					},
					{
						"zoom": 3,
						"color": "#bfb9b5"
					},
					{
						"zoom": 4,
						"color": "#bfb9b5"
					},
					{
						"zoom": 5,
						"color": "#c1bbb7"
					},
					{
						"zoom": 6,
						"color": "#c3bdba"
					},
					{
						"zoom": 7,
						"color": "#c5bfbc"
					},
					{
						"zoom": 8,
						"color": "#c7c2be"
					},
					{
						"zoom": 9,
						"color": "#c9c4c1"
					},
					{
						"zoom": 10,
						"color": "#cbc6c3"
					},
					{
						"zoom": 11,
						"color": "#cbc6c3"
					},
					{
						"zoom": 12,
						"color": "#cbc6c3"
					},
					{
						"zoom": 13,
						"color": "#cbc6c3"
					},
					{
						"zoom": 14,
						"color": "#cbc6c3"
					},
					{
						"zoom": 15,
						"color": "#cbc6c3"
					},
					{
						"zoom": 16,
						"color": "#cbc6c3"
					},
					{
						"zoom": 17,
						"color": "#cbc6c3"
					},
					{
						"zoom": 18,
						"color": "#cbc6c3"
					},
					{
						"zoom": 19,
						"color": "#cbc6c3"
					},
					{
						"zoom": 20,
						"color": "#cbc6c3"
					},
					{
						"zoom": 21,
						"color": "#cbc6c3"
					}
				]
			},
			{
				"tags": "locality",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "polyline",
				"stylers": [
					{
						"color": "#bfb9b5"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.outline",
				"types": "polyline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "road",
				"elements": "geometry.fill.pattern",
				"types": "polyline",
				"stylers": [
					{
						"scale": 1
					},
					{
						"color": "#90857f"
					}
				]
			},
			{
				"tags": "road",
				"elements": "label.text.fill",
				"types": "point",
				"stylers": [
					{
						"color": "#c3b7b1"
					}
				]
			},
			{
				"tags": "structure",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#6c6460"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "structure",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "address",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#6c6460"
					},
					{
						"zoom": 0,
						"opacity": 0.9
					},
					{
						"zoom": 1,
						"opacity": 0.9
					},
					{
						"zoom": 2,
						"opacity": 0.9
					},
					{
						"zoom": 3,
						"opacity": 0.9
					},
					{
						"zoom": 4,
						"opacity": 0.9
					},
					{
						"zoom": 5,
						"opacity": 0.9
					},
					{
						"zoom": 6,
						"opacity": 0.9
					},
					{
						"zoom": 7,
						"opacity": 0.9
					},
					{
						"zoom": 8,
						"opacity": 0.9
					},
					{
						"zoom": 9,
						"opacity": 0.9
					},
					{
						"zoom": 10,
						"opacity": 0.9
					},
					{
						"zoom": 11,
						"opacity": 0.9
					},
					{
						"zoom": 12,
						"opacity": 0.9
					},
					{
						"zoom": 13,
						"opacity": 0.9
					},
					{
						"zoom": 14,
						"opacity": 0.9
					},
					{
						"zoom": 15,
						"opacity": 0.9
					},
					{
						"zoom": 16,
						"opacity": 0.9
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "address",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "landscape",
				"elements": "label.text.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#9a928d",
						"opacity": 1
					},
					{
						"zoom": 1,
						"color": "#9a928d",
						"opacity": 1
					},
					{
						"zoom": 2,
						"color": "#9a928d",
						"opacity": 1
					},
					{
						"zoom": 3,
						"color": "#9a928d",
						"opacity": 1
					},
					{
						"zoom": 4,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 7,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 9,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 10,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 11,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 12,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 13,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 14,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 15,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 16,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 17,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 18,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 19,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 20,
						"color": "#6c6460",
						"opacity": 0.5
					},
					{
						"zoom": 21,
						"color": "#6c6460",
						"opacity": 0.5
					}
				]
			},
			{
				"tags": "landscape",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"zoom": 0,
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"opacity": 0
					},
					{
						"zoom": 5,
						"opacity": 0
					},
					{
						"zoom": 6,
						"opacity": 0
					},
					{
						"zoom": 7,
						"opacity": 0
					},
					{
						"zoom": 8,
						"opacity": 0
					},
					{
						"zoom": 9,
						"opacity": 0
					},
					{
						"zoom": 10,
						"opacity": 0
					},
					{
						"zoom": 11,
						"opacity": 0
					},
					{
						"zoom": 12,
						"opacity": 0
					},
					{
						"zoom": 13,
						"opacity": 0
					},
					{
						"zoom": 14,
						"opacity": 0
					},
					{
						"zoom": 15,
						"opacity": 0
					},
					{
						"zoom": 16,
						"opacity": 0
					},
					{
						"zoom": 17,
						"opacity": 0
					},
					{
						"zoom": 18,
						"opacity": 0
					},
					{
						"zoom": 19,
						"opacity": 0
					},
					{
						"zoom": 20,
						"opacity": 0
					},
					{
						"zoom": 21,
						"opacity": 0
					}
				]
			},
			{
				"tags": "water",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#836e63"
					},
					{
						"opacity": 0.8
					}
				]
			},
			{
				"tags": "water",
				"elements": "label.text.outline",
				"types": "polyline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.2
					}
				]
			},
			{
				"tags": {
					"any": "road_1",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 2.64
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 2.84
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 3.13
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 3.55
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 3.21
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 2.72
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 2.35
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 2.02
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 1.81
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 1.69
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 1.66
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 1.31
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 1.08
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.93
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.84
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_1"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#393432",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#393432",
						"scale": 1.96
					},
					{
						"zoom": 7,
						"color": "#393432",
						"scale": 1.96
					},
					{
						"zoom": 8,
						"color": "#393432",
						"scale": 2.02
					},
					{
						"zoom": 9,
						"color": "#393432",
						"scale": 2.16
					},
					{
						"zoom": 10,
						"color": "#393432",
						"scale": 2.16
					},
					{
						"zoom": 11,
						"color": "#393432",
						"scale": 2.04
					},
					{
						"zoom": 12,
						"color": "#393432",
						"scale": 1.93
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 1.8
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 1.71
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 1.68
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1.7
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 1.38
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 1.15
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 1
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.91
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.87
					}
				]
			},
			{
				"tags": {
					"any": "road_2",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 2.64
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 2.84
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 3.13
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 3.55
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 3.21
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 2.72
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 2.35
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 2.02
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 1.81
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 1.69
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 1.66
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 1.31
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 1.08
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.93
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.84
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_2"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#393432",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#393432",
						"scale": 1.96
					},
					{
						"zoom": 7,
						"color": "#393432",
						"scale": 1.96
					},
					{
						"zoom": 8,
						"color": "#393432",
						"scale": 2.02
					},
					{
						"zoom": 9,
						"color": "#393432",
						"scale": 2.16
					},
					{
						"zoom": 10,
						"color": "#393432",
						"scale": 2.16
					},
					{
						"zoom": 11,
						"color": "#393432",
						"scale": 2.04
					},
					{
						"zoom": 12,
						"color": "#393432",
						"scale": 1.93
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 1.8
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 1.71
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 1.68
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1.7
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 1.38
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 1.15
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 1
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.91
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.87
					}
				]
			},
			{
				"tags": {
					"any": "road_3",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 2.23
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 2.33
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 1.49
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 1.48
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 1.23
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 1.06
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 0.96
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 0.92
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 0.81
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 0.75
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.73
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.75
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_3"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 1.03
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.83
					},
					{
						"zoom": 9,
						"color": "#393432",
						"scale": 2.71
					},
					{
						"zoom": 10,
						"color": "#393432",
						"scale": 1.76
					},
					{
						"zoom": 11,
						"color": "#393432",
						"scale": 1.31
					},
					{
						"zoom": 12,
						"color": "#393432",
						"scale": 1.37
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 1.21
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 1.1
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 1.02
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.88
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.81
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.79
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.81
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.87
					}
				]
			},
			{
				"tags": {
					"any": "road_4",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 1.5
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 1.12
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 1.25
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 1.05
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 0.93
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 0.86
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 1.02
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 0.88
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 0.79
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.76
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.76
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_4"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0.72
					},
					{
						"zoom": 10,
						"color": "#393432",
						"scale": 1.22
					},
					{
						"zoom": 11,
						"color": "#393432",
						"scale": 1.04
					},
					{
						"zoom": 12,
						"color": "#393432",
						"scale": 1.17
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 1.06
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 0.97
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 0.92
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1.09
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.95
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.86
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.82
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.82
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.86
					}
				]
			},
			{
				"tags": {
					"any": "road_5",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 1.11
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 0.84
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 0.72
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 0.84
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 0.97
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 0.83
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 0.75
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.73
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.74
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_5"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0.4
					},
					{
						"zoom": 12,
						"color": "#393432",
						"scale": 1.03
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 0.88
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 0.79
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 0.91
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1.05
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.9
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.82
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.79
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.81
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.86
					}
				]
			},
			{
				"tags": {
					"any": "road_6",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 2
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 1.13
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 1.11
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 1.16
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 0.93
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 0.8
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.75
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.75
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_6"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 13,
						"color": "#393432",
						"scale": 1.49
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 1.09
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 1.13
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 1.22
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.99
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.87
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.82
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.82
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.86
					}
				]
			},
			{
				"tags": {
					"any": "road_7",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 0
					},
					{
						"zoom": 14,
						"color": "#6d6561",
						"scale": 0.8
					},
					{
						"zoom": 15,
						"color": "#6c635f",
						"scale": 0.69
					},
					{
						"zoom": 16,
						"color": "#6a625e",
						"scale": 0.78
					},
					{
						"zoom": 17,
						"color": "#68605c",
						"scale": 0.71
					},
					{
						"zoom": 18,
						"color": "#665f5b",
						"scale": 0.69
					},
					{
						"zoom": 19,
						"color": "#655d59",
						"scale": 0.7
					},
					{
						"zoom": 20,
						"color": "#635c58",
						"scale": 0.74
					},
					{
						"zoom": 21,
						"color": "#615a56",
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_7"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 0.84
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 0.77
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 0.84
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.78
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.75
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.76
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.79
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.86
					}
				]
			},
			{
				"tags": {
					"any": "road_minor",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#46413e"
					},
					{
						"zoom": 0,
						"scale": 0
					},
					{
						"zoom": 1,
						"scale": 0
					},
					{
						"zoom": 2,
						"scale": 0
					},
					{
						"zoom": 3,
						"scale": 0
					},
					{
						"zoom": 4,
						"scale": 0
					},
					{
						"zoom": 5,
						"scale": 0
					},
					{
						"zoom": 6,
						"scale": 0
					},
					{
						"zoom": 7,
						"scale": 0
					},
					{
						"zoom": 8,
						"scale": 0
					},
					{
						"zoom": 9,
						"scale": 0
					},
					{
						"zoom": 10,
						"scale": 0
					},
					{
						"zoom": 11,
						"scale": 0
					},
					{
						"zoom": 12,
						"scale": 0
					},
					{
						"zoom": 13,
						"scale": 0
					},
					{
						"zoom": 14,
						"scale": 0
					},
					{
						"zoom": 15,
						"scale": 0
					},
					{
						"zoom": 16,
						"scale": 0.8
					},
					{
						"zoom": 17,
						"scale": 0.8
					},
					{
						"zoom": 18,
						"scale": 0.8
					},
					{
						"zoom": 19,
						"scale": 0.8
					},
					{
						"zoom": 20,
						"scale": 0.8
					},
					{
						"zoom": 21,
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_minor"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": {
					"any": "road_unclassified",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#46413e"
					},
					{
						"zoom": 0,
						"scale": 0
					},
					{
						"zoom": 1,
						"scale": 0
					},
					{
						"zoom": 2,
						"scale": 0
					},
					{
						"zoom": 3,
						"scale": 0
					},
					{
						"zoom": 4,
						"scale": 0
					},
					{
						"zoom": 5,
						"scale": 0
					},
					{
						"zoom": 6,
						"scale": 0
					},
					{
						"zoom": 7,
						"scale": 0
					},
					{
						"zoom": 8,
						"scale": 0
					},
					{
						"zoom": 9,
						"scale": 0
					},
					{
						"zoom": 10,
						"scale": 0
					},
					{
						"zoom": 11,
						"scale": 0
					},
					{
						"zoom": 12,
						"scale": 0
					},
					{
						"zoom": 13,
						"scale": 0
					},
					{
						"zoom": 14,
						"scale": 0
					},
					{
						"zoom": 15,
						"scale": 0
					},
					{
						"zoom": 16,
						"scale": 0.8
					},
					{
						"zoom": 17,
						"scale": 0.8
					},
					{
						"zoom": 18,
						"scale": 0.8
					},
					{
						"zoom": 19,
						"scale": 0.8
					},
					{
						"zoom": 20,
						"scale": 0.8
					},
					{
						"zoom": 21,
						"scale": 0.8
					}
				]
			},
			{
				"tags": {
					"any": "road_unclassified"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": {
					"all": "is_tunnel",
					"none": "path"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"zoom": 0,
						"color": "#514b48"
					},
					{
						"zoom": 1,
						"color": "#514b48"
					},
					{
						"zoom": 2,
						"color": "#514b48"
					},
					{
						"zoom": 3,
						"color": "#514b48"
					},
					{
						"zoom": 4,
						"color": "#514b48"
					},
					{
						"zoom": 5,
						"color": "#514b48"
					},
					{
						"zoom": 6,
						"color": "#514b48"
					},
					{
						"zoom": 7,
						"color": "#514b48"
					},
					{
						"zoom": 8,
						"color": "#514b48"
					},
					{
						"zoom": 9,
						"color": "#514b48"
					},
					{
						"zoom": 10,
						"color": "#514b48"
					},
					{
						"zoom": 11,
						"color": "#514b48"
					},
					{
						"zoom": 12,
						"color": "#514b48"
					},
					{
						"zoom": 13,
						"color": "#514b48"
					},
					{
						"zoom": 14,
						"color": "#4c4643"
					},
					{
						"zoom": 15,
						"color": "#46413e"
					},
					{
						"zoom": 16,
						"color": "#45403d"
					},
					{
						"zoom": 17,
						"color": "#443f3d"
					},
					{
						"zoom": 18,
						"color": "#443f3c"
					},
					{
						"zoom": 19,
						"color": "#433e3b"
					},
					{
						"zoom": 20,
						"color": "#423d3b"
					},
					{
						"zoom": 21,
						"color": "#413c3a"
					}
				]
			},
			{
				"tags": {
					"all": "path",
					"none": "is_tunnel"
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#1e1b1a"
					},
					{
						"zoom": 0,
						"opacity": 0.5
					},
					{
						"zoom": 1,
						"opacity": 0.5
					},
					{
						"zoom": 2,
						"opacity": 0.5
					},
					{
						"zoom": 3,
						"opacity": 0.5
					},
					{
						"zoom": 4,
						"opacity": 0.5
					},
					{
						"zoom": 5,
						"opacity": 0.5
					},
					{
						"zoom": 6,
						"opacity": 0.5
					},
					{
						"zoom": 7,
						"opacity": 0.5
					},
					{
						"zoom": 8,
						"opacity": 0.5
					},
					{
						"zoom": 9,
						"opacity": 0.5
					},
					{
						"zoom": 10,
						"opacity": 0.5
					},
					{
						"zoom": 11,
						"opacity": 0.5
					},
					{
						"zoom": 12,
						"opacity": 0.5
					},
					{
						"zoom": 13,
						"opacity": 0.5
					},
					{
						"zoom": 14,
						"opacity": 0.5
					},
					{
						"zoom": 15,
						"opacity": 0.5
					},
					{
						"zoom": 16,
						"opacity": 0.5
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": {
					"all": "path",
					"none": "is_tunnel"
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0.7
					},
					{
						"zoom": 0,
						"color": "#4c4643"
					},
					{
						"zoom": 1,
						"color": "#4c4643"
					},
					{
						"zoom": 2,
						"color": "#4c4643"
					},
					{
						"zoom": 3,
						"color": "#4c4643"
					},
					{
						"zoom": 4,
						"color": "#4c4643"
					},
					{
						"zoom": 5,
						"color": "#4c4643"
					},
					{
						"zoom": 6,
						"color": "#4c4643"
					},
					{
						"zoom": 7,
						"color": "#4c4643"
					},
					{
						"zoom": 8,
						"color": "#4c4643"
					},
					{
						"zoom": 9,
						"color": "#4c4643"
					},
					{
						"zoom": 10,
						"color": "#4c4643"
					},
					{
						"zoom": 11,
						"color": "#4c4643"
					},
					{
						"zoom": 12,
						"color": "#4c4643"
					},
					{
						"zoom": 13,
						"color": "#4c4643"
					},
					{
						"zoom": 14,
						"color": "#47413f"
					},
					{
						"zoom": 15,
						"color": "#413c3a"
					},
					{
						"zoom": 16,
						"color": "#403b39"
					},
					{
						"zoom": 17,
						"color": "#3f3a38"
					},
					{
						"zoom": 18,
						"color": "#3e3a38"
					},
					{
						"zoom": 19,
						"color": "#3d3937"
					},
					{
						"zoom": 20,
						"color": "#3c3836"
					},
					{
						"zoom": 21,
						"color": "#3b3735"
					}
				]
			},
			{
				"tags": "road_construction",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#6f6662"
					}
				]
			},
			{
				"tags": "road_construction",
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#1e1b1a"
					},
					{
						"zoom": 1,
						"color": "#1e1b1a"
					},
					{
						"zoom": 2,
						"color": "#1e1b1a"
					},
					{
						"zoom": 3,
						"color": "#1e1b1a"
					},
					{
						"zoom": 4,
						"color": "#1e1b1a"
					},
					{
						"zoom": 5,
						"color": "#1e1b1a"
					},
					{
						"zoom": 6,
						"color": "#1e1b1a"
					},
					{
						"zoom": 7,
						"color": "#1e1b1a"
					},
					{
						"zoom": 8,
						"color": "#1e1b1a"
					},
					{
						"zoom": 9,
						"color": "#1e1b1a"
					},
					{
						"zoom": 10,
						"color": "#1e1b1a"
					},
					{
						"zoom": 11,
						"color": "#1e1b1a"
					},
					{
						"zoom": 12,
						"color": "#1e1b1a"
					},
					{
						"zoom": 13,
						"color": "#1e1b1a"
					},
					{
						"zoom": 14,
						"color": "#393432"
					},
					{
						"zoom": 15,
						"color": "#1e1b1a"
					},
					{
						"zoom": 16,
						"color": "#1a1716"
					},
					{
						"zoom": 17,
						"color": "#151312"
					},
					{
						"zoom": 18,
						"color": "#110f0e"
					},
					{
						"zoom": 19,
						"color": "#0c0a0a"
					},
					{
						"zoom": 20,
						"color": "#080606"
					},
					{
						"zoom": 21,
						"color": "#030202"
					}
				]
			},
			{
				"tags": {
					"any": "ferry"
				},
				"stylers": [
					{
						"color": "#493d37"
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.icon",
				"stylers": [
					{
						"hue": "#2b2521"
					},
					{
						"saturation": -0.87
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#6c605a"
					}
				]
			},
			{
				"tags": "transit_location",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					}
				]
			},
			{
				"tags": "transit_schema",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#6c605a"
					},
					{
						"scale": 0.7
					},
					{
						"zoom": 0,
						"opacity": 0.6
					},
					{
						"zoom": 1,
						"opacity": 0.6
					},
					{
						"zoom": 2,
						"opacity": 0.6
					},
					{
						"zoom": 3,
						"opacity": 0.6
					},
					{
						"zoom": 4,
						"opacity": 0.6
					},
					{
						"zoom": 5,
						"opacity": 0.6
					},
					{
						"zoom": 6,
						"opacity": 0.6
					},
					{
						"zoom": 7,
						"opacity": 0.6
					},
					{
						"zoom": 8,
						"opacity": 0.6
					},
					{
						"zoom": 9,
						"opacity": 0.6
					},
					{
						"zoom": 10,
						"opacity": 0.6
					},
					{
						"zoom": 11,
						"opacity": 0.6
					},
					{
						"zoom": 12,
						"opacity": 0.6
					},
					{
						"zoom": 13,
						"opacity": 0.6
					},
					{
						"zoom": 14,
						"opacity": 0.6
					},
					{
						"zoom": 15,
						"opacity": 0.5
					},
					{
						"zoom": 16,
						"opacity": 0.4
					},
					{
						"zoom": 17,
						"opacity": 0.4
					},
					{
						"zoom": 18,
						"opacity": 0.4
					},
					{
						"zoom": 19,
						"opacity": 0.4
					},
					{
						"zoom": 20,
						"opacity": 0.4
					},
					{
						"zoom": 21,
						"opacity": 0.4
					}
				]
			},
			{
				"tags": "transit_schema",
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": "transit_line",
				"elements": "geometry.fill.pattern",
				"stylers": [
					{
						"color": "#4a4a4a"
					},
					{
						"zoom": 0,
						"opacity": 0
					},
					{
						"zoom": 1,
						"opacity": 0
					},
					{
						"zoom": 2,
						"opacity": 0
					},
					{
						"zoom": 3,
						"opacity": 0
					},
					{
						"zoom": 4,
						"opacity": 0
					},
					{
						"zoom": 5,
						"opacity": 0
					},
					{
						"zoom": 6,
						"opacity": 0
					},
					{
						"zoom": 7,
						"opacity": 0
					},
					{
						"zoom": 8,
						"opacity": 0
					},
					{
						"zoom": 9,
						"opacity": 0
					},
					{
						"zoom": 10,
						"opacity": 0
					},
					{
						"zoom": 11,
						"opacity": 0
					},
					{
						"zoom": 12,
						"opacity": 0
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "transit_line",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#4a4a4a"
					},
					{
						"scale": 0.4
					},
					{
						"zoom": 0,
						"opacity": 0
					},
					{
						"zoom": 1,
						"opacity": 0
					},
					{
						"zoom": 2,
						"opacity": 0
					},
					{
						"zoom": 3,
						"opacity": 0
					},
					{
						"zoom": 4,
						"opacity": 0
					},
					{
						"zoom": 5,
						"opacity": 0
					},
					{
						"zoom": 6,
						"opacity": 0
					},
					{
						"zoom": 7,
						"opacity": 0
					},
					{
						"zoom": 8,
						"opacity": 0
					},
					{
						"zoom": 9,
						"opacity": 0
					},
					{
						"zoom": 10,
						"opacity": 0
					},
					{
						"zoom": 11,
						"opacity": 0
					},
					{
						"zoom": 12,
						"opacity": 0
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "water",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#2c2521"
					},
					{
						"zoom": 1,
						"color": "#2c2521"
					},
					{
						"zoom": 2,
						"color": "#2c2521"
					},
					{
						"zoom": 3,
						"color": "#2c2521"
					},
					{
						"zoom": 4,
						"color": "#2c2521"
					},
					{
						"zoom": 5,
						"color": "#2c2521"
					},
					{
						"zoom": 6,
						"color": "#2c2521"
					},
					{
						"zoom": 7,
						"color": "#2c2521"
					},
					{
						"zoom": 8,
						"color": "#2a2320"
					},
					{
						"zoom": 9,
						"color": "#28221e"
					},
					{
						"zoom": 10,
						"color": "#26201d"
					},
					{
						"zoom": 11,
						"color": "#251f1c"
					},
					{
						"zoom": 12,
						"color": "#241e1b"
					},
					{
						"zoom": 13,
						"color": "#231d1a"
					},
					{
						"zoom": 14,
						"color": "#221c19"
					},
					{
						"zoom": 15,
						"color": "#201b18"
					},
					{
						"zoom": 16,
						"color": "#1f1a17"
					},
					{
						"zoom": 17,
						"color": "#1d1916"
					},
					{
						"zoom": 18,
						"color": "#1c1715"
					},
					{
						"zoom": 19,
						"color": "#1a1614"
					},
					{
						"zoom": 20,
						"color": "#191513"
					},
					{
						"zoom": 21,
						"color": "#171412"
					}
				]
			},
			{
				"tags": "water",
				"elements": "geometry",
				"types": "polyline",
				"stylers": [
					{
						"zoom": 0,
						"opacity": 0.4
					},
					{
						"zoom": 1,
						"opacity": 0.4
					},
					{
						"zoom": 2,
						"opacity": 0.4
					},
					{
						"zoom": 3,
						"opacity": 0.4
					},
					{
						"zoom": 4,
						"opacity": 0.6
					},
					{
						"zoom": 5,
						"opacity": 0.8
					},
					{
						"zoom": 6,
						"opacity": 1
					},
					{
						"zoom": 7,
						"opacity": 1
					},
					{
						"zoom": 8,
						"opacity": 1
					},
					{
						"zoom": 9,
						"opacity": 1
					},
					{
						"zoom": 10,
						"opacity": 1
					},
					{
						"zoom": 11,
						"opacity": 1
					},
					{
						"zoom": 12,
						"opacity": 1
					},
					{
						"zoom": 13,
						"opacity": 1
					},
					{
						"zoom": 14,
						"opacity": 1
					},
					{
						"zoom": 15,
						"opacity": 1
					},
					{
						"zoom": 16,
						"opacity": 1
					},
					{
						"zoom": 17,
						"opacity": 1
					},
					{
						"zoom": 18,
						"opacity": 1
					},
					{
						"zoom": 19,
						"opacity": 1
					},
					{
						"zoom": 20,
						"opacity": 1
					},
					{
						"zoom": 21,
						"opacity": 1
					}
				]
			},
			{
				"tags": "bathymetry",
				"elements": "geometry",
				"stylers": [
					{
						"hue": "#2c2521"
					}
				]
			},
			{
				"tags": {
					"any": [
						"industrial",
						"construction_site"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#443f3c"
					},
					{
						"zoom": 1,
						"color": "#443f3c"
					},
					{
						"zoom": 2,
						"color": "#443f3c"
					},
					{
						"zoom": 3,
						"color": "#443f3c"
					},
					{
						"zoom": 4,
						"color": "#443f3c"
					},
					{
						"zoom": 5,
						"color": "#443f3c"
					},
					{
						"zoom": 6,
						"color": "#443f3c"
					},
					{
						"zoom": 7,
						"color": "#443f3c"
					},
					{
						"zoom": 8,
						"color": "#443f3c"
					},
					{
						"zoom": 9,
						"color": "#443f3c"
					},
					{
						"zoom": 10,
						"color": "#443f3c"
					},
					{
						"zoom": 11,
						"color": "#443f3c"
					},
					{
						"zoom": 12,
						"color": "#443f3c"
					},
					{
						"zoom": 13,
						"color": "#443f3c"
					},
					{
						"zoom": 14,
						"color": "#3f3a37"
					},
					{
						"zoom": 15,
						"color": "#393532"
					},
					{
						"zoom": 16,
						"color": "#383431"
					},
					{
						"zoom": 17,
						"color": "#373331"
					},
					{
						"zoom": 18,
						"color": "#363330"
					},
					{
						"zoom": 19,
						"color": "#35322f"
					},
					{
						"zoom": 20,
						"color": "#34312f"
					},
					{
						"zoom": 21,
						"color": "#33302e"
					}
				]
			},
			{
				"tags": {
					"any": "transit",
					"none": [
						"transit_location",
						"transit_line",
						"transit_schema",
						"is_unclassified_transit"
					]
				},
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#443f3c"
					},
					{
						"zoom": 1,
						"color": "#443f3c"
					},
					{
						"zoom": 2,
						"color": "#443f3c"
					},
					{
						"zoom": 3,
						"color": "#443f3c"
					},
					{
						"zoom": 4,
						"color": "#443f3c"
					},
					{
						"zoom": 5,
						"color": "#443f3c"
					},
					{
						"zoom": 6,
						"color": "#443f3c"
					},
					{
						"zoom": 7,
						"color": "#443f3c"
					},
					{
						"zoom": 8,
						"color": "#443f3c"
					},
					{
						"zoom": 9,
						"color": "#443f3c"
					},
					{
						"zoom": 10,
						"color": "#443f3c"
					},
					{
						"zoom": 11,
						"color": "#443f3c"
					},
					{
						"zoom": 12,
						"color": "#443f3c"
					},
					{
						"zoom": 13,
						"color": "#443f3c"
					},
					{
						"zoom": 14,
						"color": "#3f3a37"
					},
					{
						"zoom": 15,
						"color": "#393532"
					},
					{
						"zoom": 16,
						"color": "#383431"
					},
					{
						"zoom": 17,
						"color": "#373331"
					},
					{
						"zoom": 18,
						"color": "#363330"
					},
					{
						"zoom": 19,
						"color": "#35322f"
					},
					{
						"zoom": 20,
						"color": "#34312f"
					},
					{
						"zoom": 21,
						"color": "#33302e"
					}
				]
			},
			{
				"tags": "fence",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#4e4946"
					},
					{
						"zoom": 0,
						"opacity": 0.75
					},
					{
						"zoom": 1,
						"opacity": 0.75
					},
					{
						"zoom": 2,
						"opacity": 0.75
					},
					{
						"zoom": 3,
						"opacity": 0.75
					},
					{
						"zoom": 4,
						"opacity": 0.75
					},
					{
						"zoom": 5,
						"opacity": 0.75
					},
					{
						"zoom": 6,
						"opacity": 0.75
					},
					{
						"zoom": 7,
						"opacity": 0.75
					},
					{
						"zoom": 8,
						"opacity": 0.75
					},
					{
						"zoom": 9,
						"opacity": 0.75
					},
					{
						"zoom": 10,
						"opacity": 0.75
					},
					{
						"zoom": 11,
						"opacity": 0.75
					},
					{
						"zoom": 12,
						"opacity": 0.75
					},
					{
						"zoom": 13,
						"opacity": 0.75
					},
					{
						"zoom": 14,
						"opacity": 0.75
					},
					{
						"zoom": 15,
						"opacity": 0.75
					},
					{
						"zoom": 16,
						"opacity": 0.75
					},
					{
						"zoom": 17,
						"opacity": 0.45
					},
					{
						"zoom": 18,
						"opacity": 0.45
					},
					{
						"zoom": 19,
						"opacity": 0.45
					},
					{
						"zoom": 20,
						"opacity": 0.45
					},
					{
						"zoom": 21,
						"opacity": 0.45
					}
				]
			},
			{
				"tags": "medical",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#443f3c"
					},
					{
						"zoom": 1,
						"color": "#443f3c"
					},
					{
						"zoom": 2,
						"color": "#443f3c"
					},
					{
						"zoom": 3,
						"color": "#443f3c"
					},
					{
						"zoom": 4,
						"color": "#443f3c"
					},
					{
						"zoom": 5,
						"color": "#443f3c"
					},
					{
						"zoom": 6,
						"color": "#443f3c"
					},
					{
						"zoom": 7,
						"color": "#443f3c"
					},
					{
						"zoom": 8,
						"color": "#443f3c"
					},
					{
						"zoom": 9,
						"color": "#443f3c"
					},
					{
						"zoom": 10,
						"color": "#443f3c"
					},
					{
						"zoom": 11,
						"color": "#443f3c"
					},
					{
						"zoom": 12,
						"color": "#443f3c"
					},
					{
						"zoom": 13,
						"color": "#443f3c"
					},
					{
						"zoom": 14,
						"color": "#3f3a37"
					},
					{
						"zoom": 15,
						"color": "#393532"
					},
					{
						"zoom": 16,
						"color": "#383431"
					},
					{
						"zoom": 17,
						"color": "#373331"
					},
					{
						"zoom": 18,
						"color": "#363330"
					},
					{
						"zoom": 19,
						"color": "#35322f"
					},
					{
						"zoom": 20,
						"color": "#34312f"
					},
					{
						"zoom": 21,
						"color": "#33302e"
					}
				]
			},
			{
				"tags": "beach",
				"elements": "geometry",
				"stylers": [
					{
						"zoom": 0,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 1,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 2,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 3,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 4,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 5,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 6,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 7,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 8,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 9,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 10,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 11,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 12,
						"color": "#443f3c",
						"opacity": 0.3
					},
					{
						"zoom": 13,
						"color": "#443f3c",
						"opacity": 0.65
					},
					{
						"zoom": 14,
						"color": "#3f3a37",
						"opacity": 1
					},
					{
						"zoom": 15,
						"color": "#393532",
						"opacity": 1
					},
					{
						"zoom": 16,
						"color": "#383431",
						"opacity": 1
					},
					{
						"zoom": 17,
						"color": "#373331",
						"opacity": 1
					},
					{
						"zoom": 18,
						"color": "#363330",
						"opacity": 1
					},
					{
						"zoom": 19,
						"color": "#35322f",
						"opacity": 1
					},
					{
						"zoom": 20,
						"color": "#34312f",
						"opacity": 1
					},
					{
						"zoom": 21,
						"color": "#33302e",
						"opacity": 1
					}
				]
			},
			{
				"tags": {
					"all": [
						"is_tunnel",
						"path"
					]
				},
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#312d2b"
					},
					{
						"opacity": 0.3
					}
				]
			},
			{
				"tags": {
					"all": [
						"is_tunnel",
						"path"
					]
				},
				"elements": "geometry.outline",
				"stylers": [
					{
						"opacity": 0
					}
				]
			},
			{
				"tags": "road_limited",
				"elements": "geometry.fill",
				"stylers": [
					{
						"color": "#1e1b1a"
					},
					{
						"zoom": 0,
						"scale": 0
					},
					{
						"zoom": 1,
						"scale": 0
					},
					{
						"zoom": 2,
						"scale": 0
					},
					{
						"zoom": 3,
						"scale": 0
					},
					{
						"zoom": 4,
						"scale": 0
					},
					{
						"zoom": 5,
						"scale": 0
					},
					{
						"zoom": 6,
						"scale": 0
					},
					{
						"zoom": 7,
						"scale": 0
					},
					{
						"zoom": 8,
						"scale": 0
					},
					{
						"zoom": 9,
						"scale": 0
					},
					{
						"zoom": 10,
						"scale": 0
					},
					{
						"zoom": 11,
						"scale": 0
					},
					{
						"zoom": 12,
						"scale": 0
					},
					{
						"zoom": 13,
						"scale": 0.1
					},
					{
						"zoom": 14,
						"scale": 0.2
					},
					{
						"zoom": 15,
						"scale": 0.3
					},
					{
						"zoom": 16,
						"scale": 0.5
					},
					{
						"zoom": 17,
						"scale": 0.6
					},
					{
						"zoom": 18,
						"scale": 0.69
					},
					{
						"zoom": 19,
						"scale": 0.7
					},
					{
						"zoom": 20,
						"scale": 0.74
					},
					{
						"zoom": 21,
						"scale": 0.8
					}
				]
			},
			{
				"tags": "road_limited",
				"elements": "geometry.outline",
				"stylers": [
					{
						"zoom": 0,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 1,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 2,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 3,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 4,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 5,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 6,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 7,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 8,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 9,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 10,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 11,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 12,
						"color": "#6f6662",
						"scale": 0.9
					},
					{
						"zoom": 13,
						"color": "#6f6662",
						"scale": 0.1
					},
					{
						"zoom": 14,
						"color": "#393432",
						"scale": 0.2
					},
					{
						"zoom": 15,
						"color": "#393432",
						"scale": 0.3
					},
					{
						"zoom": 16,
						"color": "#393432",
						"scale": 0.5
					},
					{
						"zoom": 17,
						"color": "#393432",
						"scale": 0.6
					},
					{
						"zoom": 18,
						"color": "#393432",
						"scale": 0.75
					},
					{
						"zoom": 19,
						"color": "#393432",
						"scale": 0.76
					},
					{
						"zoom": 20,
						"color": "#393432",
						"scale": 0.79
					},
					{
						"zoom": 21,
						"color": "#393432",
						"scale": 0.86
					}
				]
			},
			{
				"tags": "transit_stop",
				"elements": "label.icon",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"secondary-color": "#6c605a"
					},
					{
						"tertiary-color": "#6a615c"
					}
				]
			},
			{
				"tags": "entrance",
				"elements": "label.text.fill",
				"stylers": [
					{
						"color": "#bfb9b5"
					},
					{
						"opacity": 1
					}
				]
			},
			{
				"tags": "entrance",
				"elements": "label.text.outline",
				"stylers": [
					{
						"color": "#0e0d0c"
					},
					{
						"opacity": 0.5
					}
				]
			},
			{
				"tags": {
					"any": "landcover",
					"none": "vegetation"
				},
				"stylers": {
					"visibility": "off"
				}
			}
		]
	})

	map.addChild(layer)
}