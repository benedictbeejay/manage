const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
})

let slidePosition = 0;
const slides = document.getElementsByClassName('slides');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function() {
	moveToNextSlide();
});
document.getElementById('previous').addEventListener('click', function() {
	moveToPreviousSlide();
});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove('show');
		slide.classList.add('hide');
	}

	slides[slidePosition].classList.add('show');
	
}

function moveToNextSlide() {
	if (slidePosition === totalSlides -1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}

function moveToPreviousSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides -1
	} else {
		slidePosition--;
	}
	updateSlidePosition();
}


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }