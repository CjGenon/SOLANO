
//Navbar Scroll//
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
//APARTMENT SLIDER//

const slider = document.getElementById('apartment-slider');
  let slideIndex = 0;

  function showSlide(index) {
    const totalSlides = slider.children.length;
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  showSlide(slideIndex);
  //Ameneties slider//
  const amenitySlider = document.getElementById('amenities-slider');
  let amenityIndex = 0;

  function showAmenitySlide(index) {
    const total = amenitySlider.children.length;
    if (index >= total) amenityIndex = 0;
    else if (index < 0) amenityIndex = total - 1;
    else amenityIndex = index;

    amenitySlider.style.transform = `translateX(-${amenityIndex * 100}%)`;
  }

  function nextAmenity() {
    showAmenitySlide(amenityIndex + 1);
  }

  function prevAmenity() {
    showAmenitySlide(amenityIndex - 1);
  }

  showAmenitySlide(amenityIndex); // init
