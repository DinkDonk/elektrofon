let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const stagger = '-=0.44';
const ease = 'power1.inOut';

let largestWindowDimension = () => Math.max(windowWidth, windowHeight);
let randomPositiveOffset = () => Math.random() * 30 + 40;

fetch('/assets/klang.svg')
.then(response => response.text())
.then(data => {
	const color = getComputedStyle(document.querySelector('body')).backgroundColor;
	data = data.replace(/fill:#fff/g, `fill:${color}`);
	data = data.replace(/stroke-width:0\.83px/g, `stroke-width:1px`);
	document.querySelector('#klang-container .svg-container').innerHTML = data;

	gsap.registerPlugin(ScrollTrigger)

	const tl0 = gsap.timeline({
		scrollTrigger: {
			trigger: '#intro',
			pin: true,
			start: 'top top',
			end: '+=4000',
			scrub: 2,
			snap: {
				snapTo: 'labels', // Snap to the closest label in the timeline
				duration: { min: 0.2, max: 3 }, // The snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
				delay: 0.2, // Wait 0.2 seconds from the last scroll event before doing the snapping
				ease: 'power1.inOut' // The ease of the snap animation ("power3" by default)
			}
		}
	});

	tl0.addLabel('tl0 start')
		.to('#logo', {y: '-8rem', autoAlpha: 0, ease})
		.from('[id^="Panel"]', {y: '28rem', x: '50rem', ease}, 0)
		.from('#Glass', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Display', {y: `${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Pluss-Button-Cap, #Pluss-Button-Base', {y: `${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Minus-Button-Cap, #Minus-Button-Base', {y: `${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Knob-1', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Knob-4', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Knob-2', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Knob-3', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Knob-5', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-1', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-2', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-3', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-4', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-5', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-6', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-7', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.from('#Ring-8', {y: `-${randomPositiveOffset()}rem`, ease}, stagger)
		.fromTo('#klang-container > img', {maskSize: '500% 500%', maskPosition: '100% 100%'}, {maskSize: '1000% 1000%', maskPosition: '50% 50%'}, '-=0.3')
		.to('#klang-container svg', {opacity: 0}, '-=0.3')
		.fromTo('#klang-container', {rotation: 10, scale: 1}, {rotation: 27, scale: 1.15, ease}, '-=0.45')
		.to('#intro', {backgroundColor: '#FFD700'}, '-=0.3')
		.addLabel('tl0 end');

	const tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: 'header',
			start: 'bottom bottom',
			end: 'top top',
			scrub: true,
		}
	});

	tl1.addLabel('tl1 start')
		.fromTo('#klang-container', {y: 0}, {y: '50%'})
		.addLabel('tl1 end');
})
.then(() => {
	fetch('/assets/klang-front.svg')
		.then(response => response.text())
		.then(data => {
			const color = getComputedStyle(document.querySelector('.guide')).backgroundColor;
			data = data.replace(/fill:#fff/g, `fill:${color}`);
			data = data.replace(/stroke-width:0\.83px/g, `stroke-width:1px`);
			document.querySelector('.klang-front.svg-container').innerHTML = data;

			const timeline = gsap.timeline({
				paused: true,
			});

			timeline.to('.guide svg', {x: 0, y: 0, scale: 1, force3D: false, ease}, 0)
				.to('.guide svg', {x: 0, y: '48.5%', scale: 2, force3D: false, ease}, 1)
				.to('.guide svg', {x: '50%', y: '80%', scale: 5, force3D: false, ease}, 2)
				.to('[id^="Blue"]', {fill: '#66ADA9', ease}, '<')
				.to('[id^="Yellow"]', {fill: color, ease}, '<')
				.to('[id^="Beige"]', {fill: color, ease}, '<')
				.to('[id^="Red"]', {fill: color, ease}, '<')
				.to('.guide svg', {x: 0, y: '10%', scale: 3, force3D: false, ease}, 3)
				.to('[id^="Blue"]', {fill: color, ease}, '<')
				.to('[id^="Browse"]', {fill: '#2E3833', ease}, '<')
				.to('.guide svg', {x: 0, y: '-20%', scale: 2, force3D: false, ease}, 4)
				.to('[id^="Browse"]', {fill: color, ease}, '<')
				.to('#Pluss-Button, #Minus-Button', {fill: 'black', ease}, '<')
				.to('.guide svg', {x: '78%', y: '-100%', scale: 4, force3D: false, ease}, 5)
				.to('#Pluss-Button, #Minus-Button', {fill: color, ease}, '<')
				.to('#Step-Icon', {fill: '#D7D3AB', ease}, '<')
				.to('#Step-Socket', {fill: 'black', ease}, '<')
				.to('#Direction-Icon', {fill: '#2E3833', ease}, '<')
				.to('#Direction-Socket', {fill: 'black', ease}, '<')
				.to('.guide svg', {x: '-73%', y: '-100%', scale: 4, force3D: false, ease}, 6)
				.to('#Step-Icon', {fill: color, ease}, '<')
				.to('#Step-Socket', {fill: color, ease}, '<')
				.to('#Direction-Icon', {fill: color, ease}, '<')
				.to('#Direction-Socket', {fill: color, ease}, '<')
				.to('#Reset-Icon', {fill: '#2E3833', ease}, '<')
				.to('#Reset-Socket', {fill: 'black', ease}, '<')
				.to('#Transpose-Icon', {fill: '#2E3833', ease}, '<')
				.to('#Transpose-Socket', {fill: 'black', ease}, '<')
				.to('.guide svg', {x: 0, y: '-40%', scale: 1.8, force3D: false, ease}, 7)
				.to('#Reset-Icon', {fill: color, ease}, '<')
				.to('#Reset-Socket', {fill: color, ease}, '<')
				.to('#Transpose-Icon', {fill: color, ease}, '<')
				.to('#Transpose-Socket', {fill: color, ease}, '<')
				.to('[id^="Yellow"]', {fill: '#E3BC3D', ease}, '<')
				.to('[id^="Red"]', {fill: '#E18256', ease}, '<')
				.to('[id^="Beige"]', {fill: '#C1BFA6', ease}, '<')
				.to('[id^="Blue"]', {fill: '#66ADA9', ease}, '<')
				.to('.guide svg', {x: 0, y: 0, scale: 1, force3D: false, ease}, 8)
				.to('[id^="Blue"]', {fill: color, ease}, '<')
				.to('[id^="Yellow"]', {fill: color, ease}, '<')
				.to('[id^="Red"]', {fill: color, ease}, '<')
				.to('[id^="Beige"]', {fill: color, ease}, '<');

			const channelCycleTimeline = gsap.timeline({
				duration: 4,
				repeat: -1,
				paused: true,
				ease,
			});

			channelCycleTimeline.set('[id^="Blue"]', {fill: '#66ADA9'}, 0)
				.to('[id^="Yellow"]', {fill: '#E3BC3D', ease}, '<')
				.to('[id^="Blue"]', {fill: color, ease}, '<')
				.to('[id^="Red"]', {fill: '#E18256', ease}, 1)
				.to('[id^="Yellow"]', {fill: color, ease}, '<')
				.to('[id^="Beige"]', {fill: '#C1BFA6', ease}, 2)
				.to('[id^="Red"]', {fill: color, ease}, '<')
				.to('[id^="Blue"]', {fill: '#66ADA9', ease}, 3)
				.to('[id^="Beige"]', {fill: color, ease}, '<');

			// Panels
			const panelsContainer = document.querySelector('.guide figcaption');
			const panels = gsap.utils.toArray('.guide article');
			let lastIndex = 0;
			const tween = gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: '.guide',
					pin: true,
					start: 'top top',
					scrub: 1,
					toggleClass: 'split',
					snap: {
						snapTo: 1 / (panels.length - 1),
						inertia: true,
						duration: {min: 0.1, max: 0.1},
						directional: false,
						delay: 0,
						onStart: (self) => {
							const currentIndex = Math.round(self.progress * (panels.length - 1));

							if (currentIndex === 1 && lastIndex !== currentIndex) {
								channelCycleTimeline.seek(0);
							}

							if (currentIndex === 1) {
								channelCycleTimeline.play();
							} else {
								channelCycleTimeline.pause();
							}

							timeline.tweenTo(currentIndex + 1, {ease: 'power2.out'});
							lastIndex = currentIndex;
						}
					},
					onToggle: (self) => {
						if (self.progress >= 0.9) {
							timeline.seek(timeline.totalDuration(), false);
						} else {
							channelCycleTimeline.pause();
							timeline.tweenTo(0, {ease: 'power2.out', duration: 0.5});
						}

						gsap.to('[id^="Blue"]', {fill: color, ease});
						gsap.to('[id^="Yellow"]', {fill: color, ease});
						gsap.to('[id^="Red"]', {fill: color, ease});
						gsap.to('[id^="Beige"]', {fill: color, ease});
					},
					end: () => `+=${panelsContainer.offsetWidth - innerWidth}`,
				}
			});
		});

	fetch('/assets/elektrofon.svg')
		.then(response => response.text())
		.then(data => {
			data = data.replace(/fill:#000/g, `fill:gainsboro`);
			document.querySelector('footer .logo').innerHTML = data;
		});
});

window.addEventListener('load', async () => {
	setTimeout(()  => {
		const elements = document.querySelectorAll('.super-secret-no-bots-please');
		let secret = `<a href="mailto:hello`;
		secret += `@`;
		secret += `elektrofon.no">`;
		secret += `hello`;
		secret += `@`;
		secret += `elektrofon.no</a>`;
        elements.forEach(element => {
            element.innerHTML = secret;
        });
	}, 2000)

	const url = 'https://api.github.com/repos/elektrofon/klang-firmware/releases/latest';
	const release = await fetch(url).then(_ => _.json());
	const tagName = release.tag_name;
	const publishedAt = new Date(release.published_at);
	console.log(tagName, publishedAt);

	const firmwareVersionElement = document.querySelector('.firmware-version');
	const firmwareDateElement = document.querySelector('.firmware-date');
	firmwareVersionElement.innerHTML = tagName;
	firmwareDateElement.innerHTML = publishedAt.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	});
});
