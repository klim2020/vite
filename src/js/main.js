import './../scss/style.scss';


import setup from './pricing';
import AOS from 'aos';


import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect';

import Isotope from 'isotope-layout';

// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/css';

window.setup = setup

Alpine.plugin(intersect)

window.Alpine = Alpine

Alpine.start();


document.addEventListener("DOMContentLoaded",()=>{
    //AOS
    AOS.init({duration: 2800, once: true});

    //Isotope
    var projectsWrapper = document.querySelector('.projects-wrapper');
    var projectTabBTN = document.querySelectorAll('.project-tab-btn');
    var iso = new Isotope(projectsWrapper, {
        // options
        itemSelector: '.project-item',
        masonry: {
            columnWidth: '.project-sizer'
        }
    });
    projectTabBTN.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var selector = btn.getAttribute('data-filter');
        iso.arrange({
        filter: selector
        });
    });

    //Swiper
    Swiper.use([Navigation]);
    const swiper = new Swiper('.testimonial-01', {
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
      });
    
}); // Document Loaded

})

