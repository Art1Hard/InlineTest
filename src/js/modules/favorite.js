const favorite = document.querySelectorAll(".product-card__favorite");

const setFavoriteHandler = (event, i) => {
	event.preventDefault();
	favorite[i].classList.toggle("product-card__favorite--active");
};

const initFavorite = () => {
	for (let i = 0; i < favorite.length; i++)
		favorite[i].addEventListener("click", (event) =>
			setFavoriteHandler(event, i)
		);
};

export default initFavorite;
