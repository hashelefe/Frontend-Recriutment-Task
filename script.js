document.addEventListener('DOMContentLoaded', function () {
  
  //Masonry section
  var grid = document.querySelector('.grid');
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 450, 
    gutter: 60, 
    percentPosition: true
  });

  //Gradient section
  const contentContainer = document.querySelector('.grid');
  const showMoreButton = document.querySelector('.show-more-button');
  
  showMoreButton.addEventListener('click', function () {
    contentContainer.classList.toggle('expanded');
    const gradientOverlay = contentContainer.querySelector('::after');
    
    if (contentContainer.classList.contains('expanded')) {
      contentContainer.style.maxHeight = 'none';
      showMoreButton.textContent = 'Zwiń';
    } else {
      contentContainer.style.maxHeight = '700px';
      showMoreButton.textContent = 'Rozwiń';
    }
  });

  //Modal control section
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close-button');
  const photoImages = document.querySelectorAll('.grid-item.photo img');
  
  photoImages.forEach(photo => {
    photo.addEventListener('click', function () {
      const photoSrc = this.getAttribute('src');
      const photoWidth = this.naturalWidth;
      const photoHeight = this.naturalHeight;
      
      modalContent.src = photoSrc;
      modalContent.style.width = photoWidth*1.5 + 'px';
      modalContent.style.height = photoHeight*1.5 + 'px';
      
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);