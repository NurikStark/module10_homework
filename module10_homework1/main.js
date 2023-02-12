
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn__icon");
const icons = document.querySelectorAll(".btn__icon");
console.log(icons)

const changeClass = el => {
	for(let n = 0; n < icons.length; n++){
		icons[n].classList.toggle('active');

	}
}

btn.addEventListener('click', changeClass)