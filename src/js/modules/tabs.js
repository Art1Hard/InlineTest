import { slider } from "./slider.js";

const tabs = document.querySelectorAll(".nav__item");
const pages = document.querySelectorAll(".page");

const setActiveTabHandler = (event, i) => {
	event.preventDefault();

	removeActiveClass(tabs, "nav__item--active");
	tabs[i].classList.add("nav__item--active");

	removeActiveClass(pages, "page--active");
	document.querySelector(`#tab-${i + 1}`).classList.add("page--active");

	if (i === 0) slider.update();
};

const removeActiveClass = (elements, className) => {
	for (let i = 0; i < elements.length; i++)
		elements[i].classList.remove(className);
};

const initTabs = () => {
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", (event) => setActiveTabHandler(event, i));
	}
};

export default initTabs;
