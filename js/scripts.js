


// or import i18next from 'https://raw.githubusercontent.com/i18next/i18next/master/src/index.js'
// or import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



});

/*
jquery
*/

$(document).ready(function(){

    $('[sprache="en"]').each(function(){
       $(this).hide();
    })

    $('#langselector').on('change', function() {
 
      if ( this.value == 'en')
      {
        
             
        $('[sprache="en"]').each(function(){
            $(this).prev().hide();
            $(this).show();
        });
     
     
      }
      else
      {
        $('[sprache="en"]').each(function(){
            $(this).hide();
            $(this).prev().show();
        });
  
 
     
      }
    });

    $(".lesen").on("click", function(){

        if(window.reading){
            window.reading = false;
            window.speechSynthesis.cancel()
            return;
        }
        
        var msg = new SpeechSynthesisUtterance();
        let lang =  $('#langselector').val()
   
        msg.lang='de-DE';
        msg.text = $(this).parent().next().first().text()
        if(lang == "en"){
            msg.lang='en-US';
            msg.text = $(this).parent().next().children().eq(1).text()
        }
   
       window.speechSynthesis.speak(msg);
       window.reading = true;

    });

    $(".btn-close").on("click", function(){
        window.speechSynthesis.cancel()
        window.reading = false;
        
    })

    $(".modal-footer button").on("click", function(){
        window.speechSynthesis.cancel()
        window.reading = false;
        
    })


});
