/*$ , global console*/
$(document).ready(function(){
    //NiceScroll trigger    
    
// Change header Height     
    $('.header').height($(window).height());

    // Show Navbar after Skipping header
    $(window).scroll(function(){
        var header = $('.header');
        
        if($(window).scrollTop()>= header.height()){
            $('.navbar').show()  }else{
            $('.navbar').hide()
}
    });
    
    $('.tab-switch li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
//  $('.tab-content > div').hide();
        $($(this).data("class")).show().siblings().hide()
    })

$('.header .fa-chevron-down').click(function(){
    $("html,body").animate({
        scrollTop: $('.features').offset().top
    },2000)
})
    
    
    /* S- hide placeholder when type*/ 
    var storage ='';
    
    $("[placeholder]").focus(function(){
        storage= $(this).attr('placeholder')
        $(this).attr('placeholder','')
    }).blur(function(){
        $(this).attr('placeholder',storage)
    })
    
/* E- hide placeholder when type*/ 
    
    
    
/* S-Scroll To Section from Navbar*/
    
  $('.contact-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.contact-us').offset().top
      },2000)
  })
    
    
      $('.prices-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.prices').offset().top-300
      },2000)
  })
    
    $('.about-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.sublist').offset().top-50
      },2000)
  })
    
    $('.features-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.features').offset().top
      },2000)
  })
    $('.review-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.testimonials').offset().top - 40
      },2000)
  })
                                                                        /* ||
                                                                          $('.navbar li a').click(function(e){
                                                                            e.preventDefault()
                                                                            $(' body, html').animate({
                                                                                scrollTop: $("#"+ $(this).data('scroll')).offset().top +1
                                                                            })
                                                                            })*/
/* E-Scroll To Section from Navbar*/
    /* S- Change navbar li when Scrolling to specific section */
    
  //change color on selctor element and remove class from other siblings. 

$('.navbar li').click(function(){
    $(this).addClass('cactive').parent().siblings().removeClass('cactive')
})
     
   
    $(window).scroll(function(){
            // select element when scroll to element and remove class from other siblings. 

        $('.block').each(function(){
            
            if($(window).scrollTop() >= $(this).offset().top-50){
                
                var abc = $(this).attr('id');
                $('.navbar li a').removeClass()
                $('.navbar li a[data-scroll="'+ abc +'"]').addClass('cactive');
            }
       
        });
        
})
    
//Tour Button 
    $('.header .tour').click(function(){
        $('html,body').animate({
          scrollTop: $('.contact-us').offset().top 
      },7000)
    })

      
      



        
    /* animate using AOS*/
      AOS.init({
          duration: 3000,
          offset: 0
      });

$(window).on('load',function(){

    
    /*$('.loading-overlay .sk-cube-grid, .loading-overlay ').fadeOut(3000,function(){

            $('.loading-overlay').remove()
                $('body').css('overflow',"auto");

    });*/
    
    
       $('.loading-overlay .sk-cube-grid').fadeOut(3000,function(){

            $('.loading-overlay').remove()
                $('body').css('overflow',"auto");
           
/*S-Type machine*/
      var theText = $('.typer').data('text'),
       textLength = theText.length,
       n =0,
 
 machine = setInterval(function(){
     $('.typer').each(function(){
      $(this).html($(this).html()+theText[n])   
     n= n+1;
     })
    
     if(n>= textLength){
         clearInterval(machine)
     }
 },200)
/*E-Type machine*/

    });
})
/* Loading page*/

/* S-Scroll to Top by one Click*/
var myButton = $('#scroll-top');

$(window).scroll(function(){
    if($(this).scrollTop()>=600){
        myButton.show()
    }else(
    myButton.hide()
    )
})


myButton.click(function(){
    $('html, body').animate({scrollTop:0},2000)
})
/* E-Scroll to Top by one Click*/


   
})
/*Start Notes Function*/
    
$(function neoAuto(){
       $(".ticker-list .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active').next('li').addClass('active').fadeIn()
                neoAuto()
                })
            }else{
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active')
                    $('.ticker-list li').eq(0).addClass('active').fadeIn()
                 neoAuto()
                })
            }
          })
}());
/*End Notes Function*/   
/*Start TASKS*/
    var newTask = $('.tasks-input');
    $('.add-task').on('submit', function(e){
        e.preventDefault()
        if(newTask.val() !=""){
            $('<li>'+newTask.val()+'</li>').appendTo('.tasks')
        }
        newTask.val('')
    })
    $('.tasks').on('click','li',function(){
        $(this).css('text-decoration', 'line-through').fadeOut(2000, function(){
            $(this).remove()
        })
    })
    
/*End TASKS*/






$('html').niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: 15,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e',
        horizrailenabled:false
    });
 





