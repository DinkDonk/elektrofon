var svgId = '#logo-type';
var svg = d3.select(svgId);
var paths = document.querySelectorAll(svgId + ' path');
var points = [];
var spread = 4;
var size = 1;
var minDistance = 2.5;

var logo = document.querySelector('.logo');
var klangImage = document.querySelector('.klang-mockup');
var backgroundHighlight = document.querySelector('.background-highlight');
var signupButton = document.querySelector('input[type="button"]');

function draw() {
	points = [];

	svg.selectAll('circle').remove();

	for (var i = 0, l = paths.length; i < l; i++) {
		var pathNode = paths[i];
		var length = pathNode.getTotalLength();
		var count = Math.ceil(length / spread);

		for (var i1 = 0, l1 = count; i1 <= l1; i1++) {
			var point = pathNode.getPointAtLength((length / count) * i1);
			var circles = document.querySelectorAll(svgId + ' circle');
			var toClose = false;

			for (var i2 = 0, l2 = points.length; i2 < l2; i2++) {
				if (distance(points[i2], point) < minDistance) {
					toClose = true;
				}
			}

			if (!toClose) {
				points.push({x: point.x, y:  point.y});

				svg.append('circle')
				.attr('r', size)
				.attr('cx', point.x)
				.attr('cy', point.y);
			}
		}
	}

	var i = 0;
	var circles = document.querySelectorAll('circle');

	var interval = setInterval(function () {
		circles[i].classList.add('in');

		i++;

		if (i >= circles.length) {
			clearInterval(interval);
		}
	}, 5);
}

function distance(point0, point1) {
	return Math.sqrt(Math.pow(point0.x - point1.x, 2) + Math.pow(point0.y - point1.y, 2));
}

function newsletterSignup() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.querySelector('form label').innerHTML = 'Thank you!';
			document.querySelector('form').classList.add('submitted');
		}
	};

	xhttp.open('POST', 'https://api.loopify.com/flows/5b05c5a16149380005ab14cb/external-forms/fce2d6cb-9a2c-451d-88db-7b2acffd2777', true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send('email=' +  document.querySelector('input[type="email"]').value);
}

setTimeout(function () {
	klangImage.classList.add('in');
	logo.classList.add('in');
	backgroundHighlight.classList.add('in');
}, 5000);

signupButton.addEventListener('click', newsletterSignup);

draw();