jQuery(function($){$(document).ready(function(){function e(){$(window).scrollTop()>=600?$(".header-nav").addClass("slideDown"):$(".header-nav").removeClass("slideDown")}$(".bookingWrapper").click(function(){$(".bookingPopUp").fadeIn()}),$(".closePopUpNav").click(function(){$(".bookingPopUp").fadeOut()}),$(window).resize(function(){$(window).width()>940&&$(".bookingPopUp").fadeOut()}),$(window).scroll(function(){$(window).width()>940&&e()}),$(".hamburger").click(function(){$(".header-nav").addClass("slideLeft"),$(this).hide(),$(".closeNav").show()}),$(".closeNav").click(function(){$(".header-nav").removeClass("slideLeft"),$(this).hide(),$(".hamburger").show()}),$(".home-section-6").slick({prevArrow:$("#homeBlogPrevious"),nextArrow:$("#homeBlogNext"),slide:".slickWrapper",infinite:!0,slidesToShow:1,responsive:[{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$(".testimonialHoverText").hide(),$(".testimonialOpacity").hide(),$(" .hoverWrapper").mouseenter(function(){$(this).children(".testimonialHoverText").fadeIn(700),$(this).children(".testimonialOpacity").fadeIn(700)}),$(" .hoverWrapper").mouseleave(function(){$(this).children(".testimonialHoverText").fadeOut(),$(this).children(".testimonialOpacity").fadeOut()}),$(" .expandColumn").mouseenter(function(){$(window).width()>768&&($(this).children(".copyWrapper").children(".proPara").stop().slideToggle(),$(this).children(".copyWrapper").children(".roundButton").children(".bg").addClass("bgOver"),$(this).children(".copyWrapper").children(".roundButton").children(".cross").children(".a").addClass("blackBG"),$(this).children(".copyWrapper").children(".roundButton").children(".cross").children(".b").addClass("blackBG"),$(this).children(".copyWrapper").children(".roundButton").children(".readmore").stop().fadeIn())}),$(" .expandColumn").mouseleave(function(){$(window).width()>768&&($(this).children(".copyWrapper").children(".proPara").stop().slideToggle(),$(this).children(".copyWrapper").children(".roundButton").children(".bg").removeClass("bgOver"),$(this).children(".copyWrapper").children(".roundButton").children(".cross").children(".a").removeClass("blackBG"),$(this).children(".copyWrapper").children(".roundButton").children(".cross").children(".b").removeClass("blackBG"),$(this).children(".copyWrapper").children(".roundButton").children(".readmore").stop().fadeOut())}),$(".expandColumn").click(function(){$(window).width()>768&&($(this).children(".copyWrapper").fadeOut(200),$(this).siblings().children(".copyWrapper").fadeOut(),$(".CloseRoundButton").delay(500).animate({opacity:1}),$(this).children(".columnOverlay").fadeOut(),$(this).siblings().children(".columnOverlay").fadeIn(),$(this).children(".columnOpen").delay(400).fadeIn(300),$(this).siblings().children(".columnOpen").fadeOut(100),$(this).siblings().children(".verticalText").fadeIn(),$(this).children(".verticalText").hide(),$(this).siblings().animate({width:"5%"},500,"linear"),$(this).animate({width:"85%"},500,"linear"))}),$(" .CloseRoundButton").mouseenter(function(){$(this).children(".bg").addClass("bgOver"),$(this).children(".cross").children(".a").addClass("blackBG"),$(this).children(".cross").children(".b").addClass("blackBG")}),$(".CloseRoundButton").mouseleave(function(){$(this).children(".bg").removeClass("bgOver"),$(this).children(".cross").children(".a").removeClass("blackBG"),$(this).children(".cross").children(".b").removeClass("blackBG")}),$(".CloseRoundButton").click(function(){$(".column").children(".columnOpen").fadeOut(100),$(this).children(".copyWrapper").delay(500).fadeIn(),$(".CloseRoundButton").animate({opacity:0},200),$(".column").children(".columnOverlay").fadeOut(),$(".proceduresMenu .column").animate({width:"25%"},500,"linear"),$(".column").siblings().children(".verticalText").fadeOut(),$(".column").siblings().children(".copyWrapper").fadeIn()}),$(".dropbtn").click(function(){$(".dropdown-content").addClass("show")}),$(".buttonLink").click(function(){$(".dropdown-content").removeClass("show")}),$(" .video-Button").mouseenter(function(){$(this).children(".videoButtonOverlay").stop().fadeOut(),$(this).children(".videoText-2").stop().fadeIn(),$(this).children(".downArrowSmall").stop().fadeIn()}),$(".video-Button").mouseleave(function(){$(this).children(".videoButtonOverlay").stop().fadeIn(),$(this).children(".videoText-2").stop().fadeOut(),$(this).children(".downArrowSmall").stop().fadeOut()}),$(".video-Button").click(function(){var e=this.id.slice(-1),i="#player-copy-"+e,t="#player-"+e;$(".player-copy").hide(),$(i).show(),$(".video-player").hide(),$(t).show();var o=150;$("html, body").animate({scrollTop:$(".video-player-section").offset().top-150},500)}),$(".buttonLink").click(function(){var e=this.id.slice(-1),i="#player-copy-"+e,t="#player-"+e;$(".player-copy").hide(),$(i).show(),$(".video-player").hide(),$(t).show();var o=150;$("html, body").animate({scrollTop:$(".video-player-section").offset().top-150},500)}),$(".spineItemPageLink-1").click(function(){var e=50;$("html, body").animate({scrollTop:$(".outpatient-section-3").offset().top-50},500)}),$(".spineItemPageLink-2").click(function(){var e=50;$("html, body").animate({scrollTop:$(".outpatient-section-4").offset().top-50},500)}),$(".spineItemPageLink-3").click(function(){var e=50;$("html, body").animate({scrollTop:$(".outpatient-section-5").offset().top-50},500)}),$(".tweet").twittie({dateFormat:"%b. %d, %Y",template:'{{tweet}}  <a href="{{url}}" target="_blank">Details</a>',count:5,hideReplies:!0},function(){$(".tweet ul").slick({infinite:!0,autoplay:!0,fade:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),$(".tweet ul li").wrapInner("<p class='tweetText'></p>")}),$("#procedures-selectSpine .spineItem").click(function(){var e=this.id.slice(-1),i="#hotspot-"+e;$(".hotSpot").removeClass("hotSpotActive"),$(i).addClass("hotSpotActive"),$(this).siblings().children(".copyWrapper").stop().slideUp(),$(this).children(".copyWrapper").stop().slideToggle(),$(this).toggleClass("itemOpen"),$(this).siblings().removeClass("itemOpen")}),$(".hotSpot").click(function(){var e=this.id.slice(-1),i="#spineItem-"+e;$(".hotSpot").removeClass("hotSpotActive"),$(this).addClass("grow"),$(this).siblings().removeClass("grow"),$(this).addClass("hotSpotActive"),$(i).children(".copyWrapper").stop().slideToggle(),$(i).siblings().children(".copyWrapper").stop().slideUp(),$(i).toggleClass("itemOpen"),$(i).siblings().removeClass("itemOpen")}),$("#datepicker").datepicker({dateFormat:"yy-mm-dd"}),$(".search .search-input").attr("placeholder","Search this website"),$("#contactForm").submit(function(e){e.preventDefault();var i=$(this),t=i.find('button[type="submit"]'),o=i.find('input[name="name"]').val(),n=i.find('input[name="email"]').val(),s=i.find('textarea[name="message"]').val(),l=i.attr("action");$.post(l,{name:o,email:n,message:s}).done(function(e){$("#contactResponse").html("Thank you"),t.text("Message Sent"),t.attr("disabled",!0)})})})});