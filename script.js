
var heading = $('#heading');
var hat = $('#heading-two')

var tl = new TimelineMax();

tl
	.from(heading, 3, {autoAlpha: 0})
	.from(hat, 3, {autoAlpha: 0}, 1)	

