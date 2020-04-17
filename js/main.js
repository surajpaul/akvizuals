pagefect();
others();
carousel();
nav_type();
PortfolioGrids();
cform();
typist();
port_close();
lightbox();
preloader();
backlink();
down_icon();
slider();
distortion();
ContactForm();
ZoomImage();
mobile_image_height();

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(nav_type, 100);
};

setTimeout(function() {
	$('body').addClass('anime');
},1000);

function ajaxLoad (){
	
carousel();
others();
nav_type();
PortfolioGrids();
cform();
typist();
port_close();
lightbox();
preloader();
backlink();
down_icon();
slider();
distortion();
ContactForm();
ZoomImage();
mobile_image_height();
    
    var doit;
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(nav_type, 100);
	};
}



//AJAX LOAD    
$("main").on('click','[data-type="ajax-load"]', function(e) {

$(".page-overlay").addClass("from-bottom");
var href = $(this).attr("href");
loadHtml();
function loadHtml() {
	setTimeout(function() {
		loadContent(href);            
		history.pushState('', 'new URL: '+href, href);        
	},1000);
}
e.preventDefault();
window.onpopstate = function(event) {
	location.reload();
};
});
function loadContent(url) {
	var getData = $.get(url, function(response) {
		var markup = $("<main>" + response + "</main>");
		var fragment = markup.find("main").html();
		var title = markup.find("title").html();
		$('head title').html(title);
		$("main").html(fragment);
		ajaxLoad();
		window.scrollTo(0, 0);
		$(".page-overlay").addClass("from-bottom");
		setTimeout( function(){
		  $(".page-overlay").addClass("from-bottom-end");
		  setTimeout( function(){
			$(".page-overlay").removeClass("from-bottom");
			$(".page-overlay").removeClass("from-bottom-end");
		  } , 800 );
		} , 500 );
	});
}


$("main").on('click','[data-type="port-load"]', function(e) {
loader_cursor();
var href = $(this).attr("href");
loadHtml();
function loadHtml() {
	setTimeout(function() {
		loadContent_two(href);            
		history.pushState('', 'new URL: '+href, href);        
	},1000);
}
e.preventDefault();
window.onpopstate = function(event) {
	location.reload();
};
});
function loadContent_two(url) {
	var getData = $.get(url, function(response) {
		var markup = $("<main>" + response + "</main>");
		var fragment = markup.find("main").html();
		var title = markup.find("title").html();
		$('head title').html( title );
		$("main").html(fragment);
		ajaxLoad();
		$('body').removeClass('anime');
		$('body').removeClass('gec');
		$('.page-container').removeClass('gel');
		setTimeout(function() {
			$('body').addClass('anime');
		},1000);
		setTimeout(function() {
			$("HTML, BODY").animate({scrollTop: 150}, 500);
			$('body').removeClass('loading-port');
		},1700);
	});
}



// CURSOR

function loader_cursor(){
	var cursor = $(".cursor-loader");
	
	var posX = 0,
		posY = 0;
	
	var mouseX = 0,
		mouseY = 0;
	
	TweenMax.to({}, 0.016, {
	  repeat: -1,
	  onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
	
		TweenMax.set(cursor, {
			css: {
			left: mouseX,
			top: mouseY
			}
		});
	  }
	});
	
	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
}


function mobile_image_height(){
	$('.work-hero .hero-image, .page-container .page').height(window.innerHeight);
}


function down_icon(){
	$('.section-down-arrow.subpage').on('click', function() {
		var vheight = $('.work-hero').height();
	  $('html, body').animate({scrollTop :vheight},800);
	  return false;
	});

 }

//BACKLINK
function backlink() {
	$('.backlink').on('click', function(e) { 
		e.preventDefault();
		var href = $(this).attr("href");
		history.pushState('', 'new URL: '+href, href); 
		
		$(".page-overlay").addClass("from-bottom");
		
		setTimeout(function() {
		location.reload();
		}, 1000);
});

}

function pagefect() { 
(function($) { "use strict"; 
	
var portfolioKeyword;
	$(function() {
		$('html').addClass('modern-layout');
		$.address.change(function() {
			setActivePage();
			$('html').removeClass('is-menu-toggled-on');	
			});
		$('.nav-menu a').on("click", function() {
			if( window.isAnimating ) {
				return false;
			}
		});
	});
	function giveDetailUrl() {
		var address = $.address.value();
		var detailUrl;
		if (address.indexOf("/"+ portfolioKeyword + "/")!=-1 && address.length > portfolioKeyword.length + 2 ) {
			var total = address.length;
			detailUrl = address.slice(portfolioKeyword.length+2,total);
			console.log(detailUrl)
		} else {
			detailUrl = -1;	
		}
		return detailUrl;
	}
	
	function setActivePage() {
		var path = $.address.path();
		path = path.slice(1, path.length);
		path = giveDetailUrl() != -1 ? portfolioKeyword : path;
		$('.down-arrow').on('click', function() {
			$(".down-arrow").css("pointer-events", "none");
			setTimeout(function(){
				$(".down-arrow").css("pointer-events", "auto");
			 },700);
		});
		if(path != 'hero' && path != ''){
			$('header').addClass('second');
			$('.down-arrow').attr("href", "#/hero");
			$('header').removeClass('white-home');
		}else{
			$('header').addClass('white-home');
			$('header').removeClass('second');
			var bu = $('header nav ul li').index() + 1;
			var nexthref = $('header nav ul li:eq('+bu+')').children('a').attr('href');
			$('.down-arrow').attr("href", nexthref);
		}
		if(path == "") {
			var firstPage = $('.nav-menu li').first().find('a').attr('href');
			path = firstPage.slice(2,firstPage.length);
			
				if(!($('.page-current').length)) { 
					$('#'+ path).addClass( 'page-current' );
					current = $('#'+ path).index();
					setCurrentMenuItem();
				} else {
						PageTransitions.nextPage( $('#'+ path).index() );

				}	
			setCurrentMenuItem();
			return false;
			}
		else { 
				if(giveDetailUrl() == -1){
					
				
						if(!($('.page-current').length)) { 
							$('#'+ path).addClass( 'page-current' );
							current = $('#'+ path).index();
							setCurrentMenuItem();
						} else {
								PageTransitions.nextPage( $('#'+ path).index() );
							
						}	
						
				}
				
		}
	}	
	function setCurrentMenuItem() {
		var activePageId = $('.pt-page.page-current').attr('id');
		$('.nav-menu a[href$=' + activePageId +']').parent().addClass('current_page_item').siblings().removeClass('current_page_item');
	}	
	var current = 0;
	var inClass, outClass;
	window.nextAnimation = $('html').data("next-animation");
	window.prevAnimation = $('html').data("prev-animation");
	window.randomize = $('html').data("random-animation");
	window.isAnimating = false;
	var PageTransitions = (function() {

		var $main = $( '#main' ),
			$pages = $main.children( '.pt-page' ),
			$menuLinks = $('.nav-menu a'),
			animcursor = 1,
			endCurrPage = false,
			endNextPage = false,
			animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			},
			animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
			support = Modernizr.cssanimations;
		
		function init() {
		}
		function nextPage(nextPageIndex) {
			if(nextPageIndex === current) {
				return; 
			}
			
			var animation = nextPageIndex > current ? nextAnimation : prevAnimation;
			if(randomize) {
				if( animcursor > 67 ) {
					animcursor = 1;
				}
				animation = animcursor;
				++animcursor;	
			}
			
			if( window.isAnimating ) {
				return false;
			}
	
			window.isAnimating = true;
			
			var $currPage = $pages.eq( current );
			
			current = nextPageIndex; 

			var $nextPage = $pages.eq( current ).addClass( 'page-current' );
	
			switch( animation ) {
	
				case 1:
					outClass = 'pt-page-moveToLeft';
					inClass = 'pt-page-moveFromRight';
					break;
				case 2:
					outClass = 'pt-page-moveToRight';
					inClass = 'pt-page-moveFromLeft';
					break;
				case 3:
					outClass = 'pt-page-moveToTop';
					inClass = 'pt-page-moveFromBottom';
					break;
				case 4:
					outClass = 'pt-page-moveToBottom';
					inClass = 'pt-page-moveFromTop';
					break;
				case 5:
					outClass = 'pt-page-fade';
					inClass = 'pt-page-moveFromRight pt-page-ontop';
					break;
				case 6:
					outClass = 'pt-page-fade';
					inClass = 'pt-page-moveFromLeft pt-page-ontop';
					break;
				case 7:
					outClass = 'pt-page-fade';
					inClass = 'pt-page-moveFromBottom pt-page-ontop';
					break;
				case 8:
					outClass = 'pt-page-fade';
					inClass = 'pt-page-moveFromTop pt-page-ontop';
					break;
				case 9:
					outClass = 'pt-page-moveToLeftFade';
					inClass = 'pt-page-moveFromRightFade';
					break;
				case 10:
					outClass = 'pt-page-moveToRightFade';
					inClass = 'pt-page-moveFromLeftFade';
					break;
				case 11:
					outClass = 'pt-page-moveToTopFade';
					inClass = 'pt-page-moveFromBottomFade';
					break;
				case 12:
					outClass = 'pt-page-moveToBottomFade';
					inClass = 'pt-page-moveFromTopFade';
					break;
				case 13:
					outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
					inClass = 'pt-page-moveFromRight';
					break;
				case 14:
					outClass = 'pt-page-moveToRightEasing pt-page-ontop';
					inClass = 'pt-page-moveFromLeft';
					break;
				case 15:
					outClass = 'pt-page-moveToTopEasing pt-page-ontop';
					inClass = 'pt-page-moveFromBottom';
					break;
				case 16:
					outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
					inClass = 'pt-page-moveFromTop';
					break;
				case 17:
					outClass = 'pt-page-scaleDown';
					inClass = 'pt-page-moveFromRight pt-page-ontop';
					break;
				case 18:
					outClass = 'pt-page-scaleDown';
					inClass = 'pt-page-moveFromLeft pt-page-ontop';
					break;
				case 19:
					outClass = 'pt-page-scaleDown';
					inClass = 'pt-page-moveFromBottom pt-page-ontop';
					break;
				case 20:
					outClass = 'pt-page-scaleDown';
					inClass = 'pt-page-moveFromTop pt-page-ontop';
					break;
				case 21:
					outClass = 'pt-page-scaleDown';
					inClass = 'pt-page-scaleUpDown pt-page-delay300';
					break;
				case 22:
					outClass = 'pt-page-scaleDownUp';
					inClass = 'pt-page-scaleUp pt-page-delay300';
					break;
				case 23:
					outClass = 'pt-page-moveToLeft pt-page-ontop';
					inClass = 'pt-page-scaleUp';
					break;
				case 24:
					outClass = 'pt-page-moveToRight pt-page-ontop';
					inClass = 'pt-page-scaleUp';
					break;
				case 25:
					outClass = 'pt-page-moveToTop pt-page-ontop';
					inClass = 'pt-page-scaleUp';
					break;
				case 26:
					outClass = 'pt-page-moveToBottom pt-page-ontop';
					inClass = 'pt-page-scaleUp';
					break;
				case 27:
					outClass = 'pt-page-scaleDownCenter';
					inClass = 'pt-page-scaleUpCenter pt-page-delay400';
					break;
				case 28:
					outClass = 'pt-page-rotateRightSideFirst';
					inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
					break;
				case 29:
					outClass = 'pt-page-rotateLeftSideFirst';
					inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
					break;
				case 30:
					outClass = 'pt-page-rotateTopSideFirst';
					inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
					break;
				case 31:
					outClass = 'pt-page-rotateBottomSideFirst';
					inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
					break;
				case 32:
					outClass = 'pt-page-flipOutRight';
					inClass = 'pt-page-flipInLeft pt-page-delay500';
					break;
				case 33:
					outClass = 'pt-page-flipOutLeft';
					inClass = 'pt-page-flipInRight pt-page-delay500';
					break;
				case 34:
					outClass = 'pt-page-flipOutTop';
					inClass = 'pt-page-flipInBottom pt-page-delay500';
					break;
				case 35:
					outClass = 'pt-page-flipOutBottom';
					inClass = 'pt-page-flipInTop pt-page-delay500';
					break;
				case 36:
					outClass = 'pt-page-rotateFall pt-page-ontop';
					inClass = 'pt-page-scaleUp';
					break;
				case 37:
					outClass = 'pt-page-rotateOutNewspaper';
					inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
					break;
				case 38:
					outClass = 'pt-page-rotatePushLeft';
					inClass = 'pt-page-moveFromRight';
					break;
				case 39:
					outClass = 'pt-page-rotatePushRight';
					inClass = 'pt-page-moveFromLeft';
					break;
				case 40:
					outClass = 'pt-page-rotatePushTop';
					inClass = 'pt-page-moveFromBottom';
					break;
				case 41:
					outClass = 'pt-page-rotatePushBottom';
					inClass = 'pt-page-moveFromTop';
					break;
				case 42:
					outClass = 'pt-page-rotatePushLeft';
					inClass = 'pt-page-rotatePullRight pt-page-delay180';
					break;
				case 43:
					outClass = 'pt-page-rotatePushRight';
					inClass = 'pt-page-rotatePullLeft pt-page-delay180';
					break;
				case 44:
					outClass = 'pt-page-rotatePushTop';
					inClass = 'pt-page-rotatePullBottom pt-page-delay180';
					break;
				case 45:
					outClass = 'pt-page-rotatePushBottom';
					inClass = 'pt-page-rotatePullTop pt-page-delay180';
					break;
				case 46:
					outClass = 'pt-page-rotateFoldLeft';
					inClass = 'pt-page-moveFromRightFade';
					break;
				case 47:
					outClass = 'pt-page-rotateFoldRight';
					inClass = 'pt-page-moveFromLeftFade';
					break;
				case 48:
					outClass = 'pt-page-rotateFoldTop';
					inClass = 'pt-page-moveFromBottomFade';
					break;
				case 49:
					outClass = 'pt-page-rotateFoldBottom';
					inClass = 'pt-page-moveFromTopFade';
					break;
				case 50:
					outClass = 'pt-page-moveToRightFade';
					inClass = 'pt-page-rotateUnfoldLeft';
					break;
				case 51:
					outClass = 'pt-page-moveToLeftFade';
					inClass = 'pt-page-rotateUnfoldRight';
					break;
				case 52:
					outClass = 'pt-page-moveToBottomFade';
					inClass = 'pt-page-rotateUnfoldTop';
					break;
				case 53:
					outClass = 'pt-page-moveToTopFade';
					inClass = 'pt-page-rotateUnfoldBottom';
					break;
				case 54:
					outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
					inClass = 'pt-page-rotateRoomLeftIn';
					break;
				case 55:
					outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
					inClass = 'pt-page-rotateRoomRightIn';
					break;
				case 56:
					outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
					inClass = 'pt-page-rotateRoomTopIn';
					break;
				case 57:
					outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
					inClass = 'pt-page-rotateRoomBottomIn';
					break;
				case 58:
					outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
					inClass = 'pt-page-rotateCubeLeftIn';
					break;
				case 59:
					outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
					inClass = 'pt-page-rotateCubeRightIn';
					break;
				case 60:
					outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
					inClass = 'pt-page-rotateCubeTopIn';
					break;
				case 61:
					outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
					inClass = 'pt-page-rotateCubeBottomIn';
					break;
				case 62:
					outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
					inClass = 'pt-page-rotateCarouselLeftIn';
					break;
				case 63:
					outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
					inClass = 'pt-page-rotateCarouselRightIn';
					break;
				case 64:
					outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
					inClass = 'pt-page-rotateCarouselTopIn';
					break;
				case 65:
					outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
					inClass = 'pt-page-rotateCarouselBottomIn';
					break;
				case 66:
					outClass = 'pt-page-rotateSidesOut';
					inClass = 'pt-page-rotateSidesIn pt-page-delay200';
					break;
				case 67:
					outClass = 'pt-page-rotateSlideOut';
					inClass = 'pt-page-rotateSlideIn';
					break;
	
			}
	
			$currPage.addClass( outClass ).on( animEndEventName, function() {
				$currPage.off( animEndEventName );
				endCurrPage = true;
				if( endNextPage ) {
					onEndAnimation( $currPage, $nextPage );
				}
			} );
	
			$nextPage.addClass( inClass ).on( animEndEventName, function() {
				$nextPage.off( animEndEventName );
				endNextPage = true;
				if( endCurrPage ) {
					onEndAnimation( $currPage, $nextPage );
				}
			} );
	
			if( !support ) {
				onEndAnimation( $currPage, $nextPage );
			}
	
		}
	
		function onEndAnimation( $outpage, $inpage ) {
			endCurrPage = false;
			endNextPage = false;
			resetPage( $outpage, $inpage );
			window.isAnimating = false;
			setCurrentMenuItem();
		}
	
		function resetPage( $outpage, $inpage ) {
			$outpage.removeClass(outClass);
			$inpage.removeClass(inClass);
			$pages.eq( current ).siblings().removeClass( 'page-current' );
		}
		init();
		return { 
			init : init,
			nextPage : nextPage
		};
	})();
	window.nextPage = function(index) {
		return new PageTransitions.nextPage(index);
		};
})(jQuery);

return false;

}
  

function others(){

    $('.second .title').on('click', function() {
        $(this).toggleClass('open');
        $(this).next('.tab-content').slideToggle('open');
    });
}



 
// OWL CAROUSEL JS  

function carousel() {
	var owlcar = $('.owl-carousel');
	if (owlcar.length) {
		owlcar.each(function () {
			var $owl = $(this);
			var itemsData = $owl.data('items');
			var autoplayData = $owl.data('autoplay');
			var autoPlayTimeoutData = $owl.data('autoplaytimeout');
			var dotsData = $owl.data('dots');
			var navData = $owl.data('nav');
			var marginData = $owl.data('margin');
			var stagePaddingData = $owl.data('stagepadding');
			var itemsDesktopData = $owl.data('items-desktop');
			var itemsTabletData = $owl.data('items-tablet');
			var itemsTabletSmallData = $owl.data('items-tablet-small');
			$owl.owlCarousel({
				  items: itemsData
				, dots: dotsData
				, nav: navData
				, margin: marginData
				, loop: true
				, stagePadding: stagePaddingData
				, autoplay: autoplayData
				, autoplayTimeout: autoPlayTimeoutData
				, navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
				, responsive:{
						0:{
							items:itemsTabletSmallData,
							stagePadding:0
						},
						600:{
							items:itemsTabletData,
							stagePadding:0
						},
						1000:{
							items:itemsDesktopData
						}
					}
			, });
		});
	}
    
}




function nav_type() {
	var window_height = $(window).height();
	var window_width = $(window).width();
	var nav_a_height = $('header nav ul li a').width();
	var nav_total = $('header nav ul li').length;
	var nav_height = (nav_a_height * nav_total);
	var logo_height = $('.logo').height();

	if ( (nav_height + logo_height + 400) > window_height || window_width < 900 ){
		$('header').addClass('mobile-version');
	}else {
		$('header').removeClass('mobile-version');
	}

	$('.mobile-btn').on('click', function() {
		$('header').addClass('yes');
		$('.mobile-btn').toggleClass('itsopend');
		$('header.mobile-version nav').toggleClass('opened');
	});
	
	
	$('header.mobile-version nav ul li a').on('click', function() {
		$('.mobile-btn').removeClass('itsopend');
		$('header.mobile-version nav, .mobile-btn').removeClass('opened');
	});
}





//PORTFOLIO GRIDS
function PortfolioGrids() {
    var $container = $('.masonry');
    $container.imagesLoaded( function() {   
        $container.isotope({
          layoutMode: 'packery',
          itemSelector: '.grid-item',
          gutter:0,
          transitionDuration: "0.5s",
          columnWidth: '.grid-item'
        });
    })
        $('.portfolio_filter ul li a').on("click", function(){
          $(".portfolio_filter ul li a").removeClass("select-cat");
          $(this).addClass("select-cat");        
          var selector = $(this).attr('data-filter');
          $(".masonry").isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false,
        }
      });
          return false;
      });   

      $(".filter-icon").on("click", function() {
        $('.portfolio_filter').addClass('show');   
      });

      $(".portfolio_filter, .portfolio_filter ul li a").on("click", function (event) {
        if (!$(event.target).is(".portfolio_filter ul li a")) {
                $('.portfolio_filter').removeClass('show');
                return false;
            }
        }); 
  
      // Infinite Scroll
      var curPage = 1;
      var pagesNum = $("#pagination-selector").find("li a:last").text();   // Number of pages
  
      $container.infinitescroll({
          itemSelector: '.grid-item',
          nextSelector: '.portfolio-pagination li a',
          navSelector: '#pagination-selector',
          extraScrollPx: 0,
          bufferPx: 0,
          maxPage: 6,
          loading: {
              finishedMsg: "No more works",
              msgText: '<div class="loader"><span></span></div>',
              speed: 'slow',
              selector: '.load-more',
          },
      },
      // trigger Masonry as a callback
      function( newElements ) {
  
            var $newElems = $( newElements );
            $newElems.imagesLoaded(function(){  // Append masonry        
              $newElems.animate({ opacity: 1 });
              $container.isotope( 'appended', $newElems, true ); 
            });
            // Check last page
            curPage++;
            if(curPage == pagesNum) {
              $( '.load-more button' ).remove();
            }
            $('.load-more').find('button').css('visibility', 'visible');
          });
  
          $container.infinitescroll( 'unbind' );
          // jQuery
      $container.on( 'append.infinitescroll', function( event, response, path, items ) {
        console.log( 'Loaded: ' + path );
      });
  
  
          $( '.load-more button' ).on('click', function() {
            setTimeout(function()
             { 
              port_load();   
              $('.grid-item').addClass('in-view'); 
              },1000);      
            $container.infinitescroll( 'retrieve' );
            $('.load-more').find('button').css('visibility', 'hidden');
            return false;
		  });
		  
	
    }



//CONTACT FORM
function cform() {
	$("form .form-group input, form .form-group textarea").focus(function(){
  
	  $(this).parents('.form-group').addClass('in');
  
	  $('form .form-group input, form .form-group textarea').blur(function()
		  {
			  if( !$(this).val() ) {
					$(this).parents('.form-group').removeClass('in');
			  }
		  });
	});
}
  


// HOME TEXT TYPE EFFECT 
function typist() {
    var typist;
    typist = document.querySelector("#element");
    new Typist(typist, {
      letterInterval: 60,
      textInterval: 3000
    });

}


function port_close() {

    $(window).scroll( function(){
		var st = $(this).scrollTop();
		var sh = $('.work-hero').outerHeight();
		if( st >= sh ){
			$('#backpage').addClass('dark');
		}else{
			$('#backpage').removeClass('dark');
		}
    });

}



// MAGNIFIC POPUP    
function lightbox() {
    $('.lightbox').magnificPopup({
          type:'image',
          gallery:{enabled:true},
          zoom:{enabled: true, duration: 300}
      });
  }

  

function preloader() {

	var width = 100,
	perfData = window.performance.timing,
	EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
	time = parseInt((EstimatedTime / 1000) % 60) * 40;


var PercentageID = $("#precent"),
	start = 0,
	end = 100,
	durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

var range = end - start,
		current = start,
		increment = end > start ? 1 : -1,
		stepTime = Math.abs(Math.floor(duration / range)),
		obj = $(id);

var timer = setInterval(function () {
	current += increment;
	$(obj).text(current + "%");
	$(".loader_bar").css({width: current + '%'})

	if (current == end) {
		clearInterval(timer);
	}
}, stepTime);
}


setTimeout(function () {
$('.preloader-wrap').fadeOut(400);
}, time);

}


//SLIDER
function slider () {

	var homeImgURLs = [];
  jQuery('.slider-images ul li').each(function(index) {
	homeImgURLs.push({
	  src: jQuery(this).attr('data-src'),
	  fade: 1000
	});
  });
  
  var delay_data = jQuery('.slider-images').data('delay');
  
  
	jQuery(".slider-images").vegas({
	  slides: homeImgURLs,
		  animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight'],
		  delay: delay_data * 1000,
		  shuffle:true
	  });
  }




  //DISTORTION ZOOMIMAGE
 function ZoomImage() {     

 	if( $('#content').length ){
 		$('body').addClass('fex');
 	}else{
 		$('body').removeClass('fex');
 	}
 		$('.port').on("click", function() {
			$('body').addClass('gec');
			$('body').addClass('loading-port');
 			$('.page-container').addClass('gel');
			TweenMax.to('#content', 0.3,{opacity: 0, delay: 0.6, ease:Power2.easeInOut});
			TweenMax.to('.page.active', 0.3,{opacity: 1, delay: 0.2, ease:Power2.easeInOut});
		});
  }

  //DISTORTION SLIDER
function distortion(){



 var tl = new TimelineLite();

	if ($('#content').length ){

		var swiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			loop: true,
			speed: 800,
			mousewheel: false,
			allowTouchMove:false,  
			slidesPerView: 'auto',
			effect: 'fade',
			clickable: true,	
			navigation: false
		  });

		  $('.page-container .page:nth-child(1)').addClass('active');
		  var total = swiper.slides.length - 2 ;
		  $('.slide-number .total').html('/'+'0'+total);
		  swiper.on('slideChange', function () {
			$('.slide-number .current').html('0'+ (swiper.realIndex + 1));
			var real = swiper.realIndex;
			var zoompath = $('#clone-image .page-container .page');
			var zoom = $(zoompath).index();
			$(zoompath).removeClass('active');
			$("#clone-image .page-container .page:eq("+real+")").addClass('active');
	});

	class Sketch2 {
		constructor(opts) {
		  this.scene = new THREE.Scene();
		  this.vertex = `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}`;
		  this.fragment = opts.fragment;
		  this.uniforms = opts.uniforms;
		  this.renderer = new THREE.WebGLRenderer();
		  this.width = window.innerWidth;
		  this.height = window.innerHeight;
		  this.renderer.setPixelRatio(window.devicePixelRatio);
		  this.renderer.setSize(this.width, this.height);
		  this.renderer.setClearColor(0xeeeeee, 1);
		  this.duration = opts.duration || 1;
		  this.debug = opts.debug || false
		  this.easing = opts.easing || 'easeInOut'
	  
		  this.clicker = document.getElementById("right-slide");
		  this.clicker2 = document.getElementById("left-slide");
	  
	  
		  this.container = document.getElementById("slider");
		  this.images = JSON.parse(this.container.getAttribute('data-images'));
		  this.width = this.container.offsetWidth;
		  this.height = this.container.offsetHeight;
		  this.container.appendChild(this.renderer.domElement);
	  
		  this.camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			0.001,
			1000
		  );
	  
		  this.camera.position.set(0, 0, 2);
		  this.time = 0;
		  this.current = 0;
		  this.textures = [];
	  
		  this.paused = true;
		  this.initiate(()=>{
			console.log(this.textures);
			this.setupResize();
			this.settings();
			this.addObjects();
			this.resize();
			this.clickEvent();
			this.clickEvent2();
			this.play();
		  })
		}
	  
		initiate(cb){
		  const promises = [];
		  let that = this;
		  this.images.forEach((url,i)=>{
			let promise = new Promise(resolve => {
			  that.textures[i] = new THREE.TextureLoader().load( url, resolve );
			});
			promises.push(promise);
		  })
	  
		  Promise.all(promises).then(() => {
			cb();
		  });
		}
	  
		clickEvent(){
		  this.clicker.addEventListener('click',()=>{
			this.next();
            swiper.slideNext();
		  })
		}
	  
		clickEvent2(){
		  this.clicker2.addEventListener('click',()=>{
			this.prev();
            swiper.slidePrev();
		  })
		}
		settings() {
		  let that = this;
		  this.settings = {progress:0.5};
		  // if(this.debug) this.gui.add(this.settings, "progress", 0, 1, 0.01);
	  
		  Object.keys(this.uniforms).forEach((item)=> {
			this.settings[item] = this.uniforms[item].value;
		  })
		}
	  
		setupResize() {
		  window.addEventListener("resize", this.resize.bind(this));
		}
	  
		resize() {
		  this.width = this.container.offsetWidth;
		  this.height = this.container.offsetHeight;
		  this.renderer.setSize(this.width, this.height);
		  this.camera.aspect = this.width / this.height;
		  
	  
		  // image cover
		  this.imageAspect = this.textures[0].image.height/this.textures[0].image.width;
		  let a1; let a2;
		  if(this.height/this.width>this.imageAspect) {
			a1 = (this.width/this.height) * this.imageAspect ;
			a2 = 1;
		  } else{
			a1 = 1;
			a2 = (this.height/this.width) / this.imageAspect;
		  }
	  
		  this.material.uniforms.resolution.value.x = this.width;
		  this.material.uniforms.resolution.value.y = this.height;
		  this.material.uniforms.resolution.value.z = a1;
		  this.material.uniforms.resolution.value.w = a2;
	  
		  const dist  = this.camera.position.z;
		  const height = 1;
		  this.camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));
	  
		  this.plane.scale.x = this.camera.aspect;
		  this.plane.scale.y = 1;
	  
		  this.camera.updateProjectionMatrix();
	  
	  
		}
	  
		addObjects() {
		  let that = this;
		  this.material = new THREE.ShaderMaterial({
			extensions: {
			  derivatives: "#extension GL_OES_standard_derivatives : enable"
			},
			side: THREE.DoubleSide,
			uniforms: {
			  time: { type: "f", value: 0 },
			  progress: { type: "f", value: 0 },
			  border: { type: "f", value: 0 },
			  intensity: { type: "f", value: 0 },
			  scaleX: { type: "f", value: 40 },
			  scaleY: { type: "f", value: 40 },
			  transition: { type: "f", value: 40 },
			  swipe: { type: "f", value: 0 },
			  width: { type: "f", value: 0 },
			  radius: { type: "f", value: 0 },
			  texture1: { type: "f", value: this.textures[0] },
			  texture2: { type: "f", value: this.textures[1] },
			  displacement: { type: "f", value: new THREE.TextureLoader().load('images/disp1.jpg') },
			  resolution: { type: "v4", value: new THREE.Vector4() },
			},
			// wireframe: true,
			vertexShader: this.vertex,
			fragmentShader: this.fragment
		  });
	  
		  this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
	  
		  this.plane = new THREE.Mesh(this.geometry, this.material);
		  this.scene.add(this.plane);
		}
	  
		stop() {
		  this.paused = true;
		}
	  
		play() {
		  this.paused = false;
		  this.render();
		}
	  
		next(){
		  if(this.isRunning) return;
		  this.isRunning = true;
		  let len = this.textures.length;
		  let nextTexture = this.textures[(this.current +1)%len];
		  this.material.uniforms.texture2.value = nextTexture;
		  let tl = new TimelineMax();
		  tl.to(this.material.uniforms.progress,this.duration,{
			value:1,
			ease: Power2[this.easing],
			onComplete:()=>{
			  console.log('FINISH');
			  this.current = (this.current +1)%len;
			  this.material.uniforms.texture1.value = nextTexture;
			  this.material.uniforms.progress.value = 0;
			  this.isRunning = false;
			                    setTimeout(function() {
                    mainWheel = true;
                },500);
		  }})
		}
	  
			prev() {
			if (this.isRunning) return;
			this.isRunning = true;
			let len = this.textures.length;
			const prevIndex = this.current === 0 ? len - 1 : this.current - 1;
			let prevTexture = this.textures[prevIndex];
			this.material.uniforms.texture2.value = prevTexture;
			let tl = new TimelineMax();
			tl.to(this.material.uniforms.progress, this.duration, {
			  value: 1,
			  ease: Power2[this.easing],
			  onComplete: () => {
				console.log('FINISH');
				this.current = prevIndex;
				this.material.uniforms.texture1.value = prevTexture;
				this.material.uniforms.progress.value = 0;
				this.isRunning = false;

                          setTimeout(function() {
                    mainWheel = true;
                },500);

			  }
			})
		  }
	  
	  
		render() {
		  if (this.paused) return;
		  this.time += 0.05;
		  this.material.uniforms.time.value = this.time;
		  // this.material.uniforms.progress.value = this.settings.progress;
	  
		  Object.keys(this.uniforms).forEach((item)=> {
			this.material.uniforms[item].value = this.settings[item];
		  });
	  
		  // this.camera.position.z = 3;
		  // this.plane.rotation.y = 0.4*Math.sin(this.time)
		  // this.plane.rotation.x = 0.5*Math.sin(0.4*this.time)
	  
		  requestAnimationFrame(this.render.bind(this));
		  this.renderer.render(this.scene, this.camera);
		}

		
	  }
	  
// planetary


let sketch = new Sketch2({
	debug: true,
	uniforms: {
		intensity: {value: 0.3, type:'f', min:0., max:2},
	},
	fragment: `
		uniform float time;
		uniform float progress;
		uniform float width;
		uniform float scaleX;
		uniform float scaleY;
		uniform float transition;
		uniform float radius;
		uniform float intensity;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform sampler2D displacement;
		uniform vec4 resolution;
		varying vec2 vUv;

		void main()	{
		  vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

         vec4 d1 = texture2D(texture1, newUV);
         vec4 d2 = texture2D(texture2, newUV);

         float displace1 = (d1.r + d1.g + d1.b)*0.33;
         float displace2 = (d2.r + d2.g + d2.b)*0.33;
         
         vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
         vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));

         gl_FragColor = mix(t1, t2, progress);

		}

	`
});

        var mainWheel;
       mainWheel = true;


   $(document).on("mousewheel DOMMouseScroll", function(e) {
            console.log(mainWheel);
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                if(mainWheel == true) {
                    mainWheel = false;
                    $('#left-slide').trigger('click');

                }
            } else { 
                if(mainWheel == true) {
                    mainWheel = false;
                    $('#right-slide').trigger('click');
                }
            }
		});
		
    $('body').swipe({
        swipe: function (event, direction){
            if (direction == 'up'){
				if(mainWheel == true) {
                    mainWheel = false;
                    $('#left-slide').trigger('click');

                }
            }else if(direction == 'down'){
				if(mainWheel == true) {
                    mainWheel = false;
                    $('#right-slide').trigger('click');
                }
            }
        }
    });  

		
}


}
  




  //CONTACT FORM
  function ContactForm() {	
	
	if( jQuery('#contact-formular').length > 0 ){
		$('#contactform').submit(function(){
			var action = $(this).attr('action');
			$("#message").slideUp(750,function() {
				$('#message').hide();
				$('#submit').attr('disabled','disabled');		
				$.post(action, {
					name: $('#name').val(),
					email: $('#email').val(),
					comments: $('#comments').val()
				},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#contactform').slideUp('slow');		
				}
			);		
			});		
			return false;		
		});		
	}

}//End ContactForm		