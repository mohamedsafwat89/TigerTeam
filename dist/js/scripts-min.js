!function(){var a=new Date;$(".date").append(a.toLocaleDateString("ar-EG",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),$(window).on("load",function(){$("body").css("overflow-y","auto"),$(".loader").fadeOut(),$(".loading").fadeOut().css({"transituin-delay":"1s"})}),$(".overlay").fadeOut(),$(".mob-collaps").on("click",function(){$(this).parent().find(".nav-links > ul").toggleClass("nav-open"),$(".overlay").fadeToggle(),$(this).find("span:first-child").toggleClass("rotate"),$(this).find("span:nth-child(2)").toggleClass("none"),$(this).find("span:nth-child(3)").toggleClass("rotate2")}),$(".overlay").on("click",function(){$(".nav-links ul").removeClass("nav-open"),$(".search-form").fadeOut(),$(this).fadeOut(),$(".mob-collaps span:first-child").removeClass("rotate"),$(".mob-collaps span:nth-child(2)").removeClass("none"),$(".mob-collaps span:nth-child(3)").removeClass("rotate2")}),$(".default").on("click",function(a){a.preventDefault()}),$(window).on("scroll",function(){$(this).scrollTop()>=44?$(".nav-menu").addClass("affix"):$(".nav-menu").removeClass("affix")}),$(".search-form").fadeOut(),$(".search").on("click",function(a){a.preventDefault(),$(".overlay").fadeIn(),$(".search-form").fadeIn()}),$("select").niceSelect()}(jQuery);
//# sourceMappingURL=scripts-min.js.map
