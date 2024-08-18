import Swiper from "swiper";
import "swiper/scss";

const initSlider = () => {
	const slider = new Swiper("#slider", {
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
