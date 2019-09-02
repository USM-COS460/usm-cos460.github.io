// https://github.com/gnab/remark/issues/478#issuecomment-383377112
function hidePrintSlides(slideshow) {
	const allSlides = slideshow.getSlides();
	let lastSlide;
	let currentSlide;
	const slidesToHide = [];
	const slidesEl = document.getElementsByClassName("remark-slides-area")[0];
	const slideEls = slidesEl.children;
	for (let i = 0; i < allSlides.length; i++) {
		lastSlide = currentSlide;
		currentSlide = allSlides[i];
		if (lastSlide && (
			String(currentSlide.properties.continued) === "true"
			||
			String(currentSlide.properties.count) === "false"
		)) {
			const slideToHideIndex = i - 1;
			slidesToHide.push(slideToHideIndex);
			slideEls[slideToHideIndex].className = slideEls[slideToHideIndex].className + ' has-continuation';
		}
	}
}