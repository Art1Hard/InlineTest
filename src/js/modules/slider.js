import Swiper from "swiper";
import "swiper/scss";

export let slider;

const initSlider = () => {
	slider = new Swiper("#slider", {
		slidesPerView: "auto",
		spaceBetween: 16,
		breakpoints: {
			1030: {
				slidesPerView: 4,
				spaceBetween: 22,
			},
			810: {
				slidesPerView: 3,
			},
			551: {
				slidesPerView: 2,
			},
		},
	});
};

export default initSlider;
