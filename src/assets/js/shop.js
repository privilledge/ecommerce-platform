function panelFilter(){
   document.getElementById('panelFilter').style.display="block";
   // document.getElementById('iconFilter').style.display="none";
   // document.getElementById('iconCloseFilter').style.display="block";
  
}
function panelSearch(){
   document.getElementById('panelFilter').style.display="none";
   document.getElementById('panelSearch').style.display="block";
}
// (function ($) {
//     "use strict";

    
   

//     /*==================================================================
//     [ Isotope ]*/
//     var $topeContainer = $('.isotope-grid');
//     var $filter = $('.filter-tope-group');

//     // filter items on button click
//     $filter.each(function () {
//         $filter.on('click', 'button', function () {
//             var filterValue = $(this).attr('data-filter');
//             $topeContainer.isotope({filter: filterValue});
//         });
        
//     });

//     // init Isotope
//     $(window).on('load', function () {
//         var $grid = $topeContainer.each(function () {
//             $(this).isotope({
//                 itemSelector: '.isotope-item',
//                 layoutMode: 'fitRows',
//                 percentPosition: true,
//                 animationEngine : 'best-available',
//                 masonry: {
//                     columnWidth: '.isotope-item'
//                 }
//             });
//         });
//     });

//     var isotopeButton = $('.filter-tope-group button');

//     $(isotopeButton).each(function(){
//         $(this).on('click', function(){
//             for(var i=0; i<isotopeButton.length; i++) {
//                 $(isotopeButton[i]).removeClass('how-active1');
//             }

//             $(this).addClass('how-active1');
//         });
//     });

//     /*==================================================================
//     [ Filter / Search product ]*/
//     $('.js-show-filter').on('click',function(){
//         $(this).toggleClass('show-filter');
//         $('.panel-filter').slideToggle(400);

//         if($('.js-show-search').hasClass('show-search')) {
//             $('.js-show-search').removeClass('show-search');
//             $('.panel-search').slideUp(400);
//         }    
//     });

//     $('.js-show-search').on('click',function(){
//         $(this).toggleClass('show-search');
//         $('.panel-search').slideToggle(400);

//         if($('.js-show-filter').hasClass('show-filter')) {
//             $('.js-show-filter').removeClass('show-filter');
//             $('.panel-filter').slideUp(400);
//         }    
//     });




 
  


// })(jQuery);