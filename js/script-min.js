$("#formulario_de_contacto").validate({rules:{name:"required",email:{required:!0,email:!0},subject:"required",message:"required"},submitHandler:function(c,d){d.preventDefault()}}); (function(c){c.fn.serializeObject=function(){var d=this,n={},l={},e=/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,r=/[a-zA-Z0-9_]+|(?=\[\])/g,s=/^$/,q=/^\d+$/,f=/^[a-zA-Z0-9_]+$/;this.build=function(c,g,d){c[g]=d;return c};this.push_counter=function(c){void 0===l[c]&&(l[c]=0);return l[c]++};c.each(c(this).serializeArray(),function(){if(e.test(this.name)){for(var l,g=this.name.match(r),p=this.value,k=this.name;void 0!==(l=g.pop());)k=k.replace(new RegExp("\\["+l+"\\]$"),""),l.match(s)?p= d.build([],d.push_counter(k),p):l.match(q)?p=d.build([],l,p):l.match(f)&&(p=d.build({},l,p));n=c.extend(!0,n,p)}});return n}})(jQuery); $(function(){var c=$("#formulario_de_contacto"),d=$("#form-messages"),n=$("#boton-enviar"),l=n.text();c.submit(function(e){e.preventDefault();d.text("");e=c.serializeObject();""!==e.uuid&&""!==e.name&&""!==e.subject&&""!==e.menssage?(n.css("background-color","lightseagreen"),n.text(form_messages.sending_button_text),$.ajax({type:"POST",url:c.attr("action"),crossDomain:!0,contentType:"text/plain",data:JSON.stringify({uuid:e.uuid,name:e.name,subject:e.subject,email:e.email,message:e.message}),headers:{"Content-Type":"application/json; charset=utf-8"}, success:function(c){d.removeClass("alert alert-danger");d.addClass("success");n.css("background-color","darkorange");n.text(form_messages.sent_button_text);d.text(form_messages.success_message);ga("send","event","Contact","Formlulario de contacto");$("#name").val("");$("#email").val("");$("#subject").val("");$("#message").val("")},error:function(c){d.removeClass("alert alert-success");d.addClass("alert alert-error");""!==c.responseText?d.text(form_messages.error_message):d.text(form_messages.error_message_complete); n.text(l);n.css("background","none")}})):($(d).removeClass("alert alert-info"),$(d).text(form_messages.require_error_message))})});$.fn.reverse=[].reverse;$.fn.scrollView=function(c){return this.each(function(){null==c?$("html, body").animate({scrollTop:$(this).offset().top},100,"swing"):$("html, body").animate({scrollTop:c},100,"swing")})}; $(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var c=$(this.hash),c=c.length?c:$("[name="+this.hash.slice(1)+"]");if(c.length)return $("html,body").animate({scrollTop:c.offset().top},1E3),!1}})});window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1);window.onmousewheel=document.onmousewheel=wheel; function wheel(c){var d=0;c.wheelDelta?d=c.wheelDelta/120:c.detail&&(d=-c.detail/3);handle(d);c.preventDefault&&c.preventDefault();c.preventDefault()}function handle(c){$("html, body").stop().animate({scrollTop:$(window).scrollTop()-50*c},20)}(function(){var c=$("#front_page > .container .main_title img").height()+$("#front_page > .container .info_list").height()+20;$("#front_page > .container").css("top",parseInt(($(window).height()-c)/2,10).toString()+"px")})(); $("document").ready(function(){function c(){var a,b,c,d,f,h;h=Math.min(g.length,k+m);$("#portfolio-gallery").empty();for(var e=k;e<h;e++)a=$("<li></li>"),b=$("<span class='item-name'>"+g[e].name+"</span>"),c=$("<div class='darker'></div>"),d=$("<div class='item-img'></div>"),f=$("<p><span></span>"+g[e].footer+"</p>"),d.css("background-image","url('/img/"+g[e].image+"')"),a.append(b,c,d,f),$("#portfolio-gallery").append(a),a.attr("data-index",e);0>k-m?$(".ptf_page_prev a").css("display","none"):$(".ptf_page_prev a").css("display", "inline-block");k+m>=g.length?$(".ptf_page_next a").css("display","none"):$(".ptf_page_next a").css("display","inline-block")}function d(){var a,b,c;$("#ptf_brand").text(g[h].name);$("#ptf_year").text(g[h].year);$("#ptf_work").empty();for(b=0;b<g[h].works.length;b++)a=$("<li>"+g[h].works[b].work+"</li>"),$("#ptf_work").append(a);$("#ptf_website").attr("href",g[h].website);b=g[h].website.indexOf("://");-1<b?$("#ptf_website").text(g[h].website.substring(b+3,g[h].website.length)):$("#ptf_website").text(""); $.ajax({url:g[h].rel_url,dataType:"html",type:"GET",success:function(b){$("#ptf_desc").html(b)}});$("#ptf_proj_gal").carousel("pause").removeData();$("#ptf_proj_gal").carousel({interval:2750});$ptf_car_ind=$("#ptf_proj_gal .carousel-indicators");$ptf_car_ind.empty();a=$("<li data-target='#ptf_proj_gal' data-slide-to='0' class='active' ></li>");$ptf_car_ind.append(a);$ptf_car_inner=$("#ptf_proj_gal .carousel-inner");$ptf_car_inner.empty();a=$("<div class='item active'></div>");c=$("<img alt ='photo' src='/img/"+ g[h].gallery[0].img+"'>");a.append(c);$ptf_car_inner.append(a);for(b=1;b<g[h].gallery.length;b++)a=$("<li data-target='#ptf_proj_gal' data-slide-to='"+b.toString()+"' ></li>"),$ptf_car_ind.append(a),a=$("<div class='item'></div>"),c=$("<img alt ='photo' src='/img/"+g[h].gallery[b].img+"'>"),a.append(c),$ptf_car_inner.append(a);k=h-h%m;p=!0}function n(a,b){r="rect("+(a.offset().top-b.offset().top)+"px, "+(a.offset().left+a.outerWidth())+"px, "+(a.offset().top-b.offset().top+a.outerHeight())+"px ,"+ a.offset().left+"px)";s="rect(0px "+$("#portfolio").outerWidth()+"px "+$("#portfolio").outerHeight()+"px 0px)";b.css({clip:r})}var l,e,r,s,q,f=$(window).outerWidth()+17,t="-1",g=[],p=!1,k=0,h=0,m=7;$(".noscript").css("display","none");$(".navbar").css("display","block");$("#tools").css("display","block");$("#portfolio").css("display","block");$("#contact .form_container").css("display","block");$("#quote .rotate").css("display","block");$("#portfolio #ptf_showcase .left").css("display","none");$(window).on("resize", function(a){f=$(window).outerWidth()+17;a=$("#front_page > .container .main_title img").height()+$("#front_page > .container .info_list").height()+20;$("#front_page > .container").css("top",parseInt(($(window).height()-a)/2,10).toString()+"px");$("#descr-row").empty();$("#what_we_do #second-lead .info").hide();$("#what_we_do #second-lead .title_info").css("color","#FFF");t="-1";$("#what_we_do .first_group, #what_we_do .second_group").height("160px");$("#what_we_do").css("padding-bottom","30px");768<= f&&991>=f?($("#what_we_do #first_group, #what_we_do #second_group").height(0),$("#what_we_do .info:visible").parent().parent().height(2*$("#what_we_do .info:visible").height()-80)):991<f&&($("#what_we_do").css("padding-bottom",$("#what_we_do .info:visible").height()+50),$("#what_we_do .first_group, #what_we_do .second_group").height("0"));m=991>=f?6:7;k=p?m*Math.floor(h/m):m*Math.floor(k/m);$("#portfolio-info .close").triggerHandler("click");$("#portfolio #ptf_showcase .right").css("display","none"); $("#portfolio #ptf_showcase .left").css("display","none");k+m<g.length&&603<f&&$("#portfolio #ptf_showcase .right").css("display","block");0<=k-m&&603<f&&$("#portfolio #ptf_showcase .left").css("display","block")});$(".navbar").affix({offset:{top:625,bottom:function(){return this.bottom=$(".footer").outerHeight(!0)}}});$(".rotate").textrotator({animation:"dissolve",separator:";;;",speed:2E3});$(".main h2, .main p.lead, #what_we_do .title_info").not("#front_page h2").addClass("animated fadeOut");$("#portfolio #portfolio-gallery li").addClass("animated-flip fadeOutUp"); $("#front_page .container").addClass("animated fadeIn");$("#team .team_container").addClass("animated fadeOutUp");$(window).scroll(function(){150<$(this).scrollTop()&&$("#front_page .container").removeClass("animated fadeIn").addClass("animated fadeOut");150>$(this).scrollTop()&&$("#front_page .container").removeClass("animated fadeOut").addClass("animated fadeIn")});$(".main h2, .main p.lead").not("#front_page h2").waypoint(function(a){"up"==a&&$(this).removeClass("animated fadeIn").addClass("animated fadeOut"); "down"==a&&$(this).removeClass("animated fadeOut").addClass("animated fadeIn")},{offset:"80%"});$("#what_we_do .row").waypoint(function(a){"up"==a&&$(this).find(".title_info").reverse().each(function(b){var a=$(this);setTimeout(function(){a.removeClass("animated fadeIn").addClass("animated fadeOut")},100*b)});"down"==a&&$(this).find(".title_info").each(function(b){var a=$(this);setTimeout(function(){a.removeClass("animated fadeOut").addClass("animated fadeIn")},100*b)})},{offset:"80%"});$("#what_we_do .title_info").on("click", function(){var a,b,c;if(768>f){a=$(this).parent().find(".info");b=$('<span class="icon-up-dir fontello"></span>');switch(!0){case 560<f:b.css("left","45.5%");break;case 450<f:b.css("left","45%");break;case 400<f:b.css("left","44%");break;default:b.css("left","42%")}b.appendTo(a);a.toggle("slow")}else{992>f&&($("#what_we_do #second-lead .title_info").css("color","#FFF"),$(this).css("color","#30BAA4"));b=$("#descr-row");b.empty();a=$('<div id="descr" class="info"></div>');a.appendTo(b);b=$('<span class="icon-up-dir fontello"></span>'); b.appendTo(a);c=$('<p id="info_desc"></p>');c.text($(this).parent().find(".info").find("p").text());c.appendTo(a);switch(!0){case "1"===$(this).attr("data-nth"):switch(!0){case 1200<f:b.css("left","4.4%");break;default:b.css("left","4.4%")}break;case "2"===$(this).attr("data-nth"):switch(!0){case 1200<f:b.css("left","32.6%");break;case 991<f:b.css("left","31.5%");break;default:b.css("right","10%")}break;case "3"===$(this).attr("data-nth"):switch(!0){case 1200<f:b.css("right","33.5%");break;case 991< f:b.css("right","32.25%");break;default:b.css("left","5.5%")}break;case "4"===$(this).attr("data-nth"):switch(!0){case 1200<f:b.css("right","5%");break;case 991<f:b.css("right","3.5%");break;default:b.css("right","10%")}break;default:b.css("display","none")}t===$(this).attr("data-nth")?($("#descr").slideUp("slow"),t="-1"):($("#descr").slideUp("slow"),$("#descr").slideDown("medium"),$("#what_we_do").css("padding-bottom","30px"),t=$(this).attr("data-nth"))}});$("#tools .first_img .point_guide").waypoint(function(a){"up"== a&&$(this).find(".points_container").reverse().each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",0)},15*a)});"down"==a&&$(this).find(".points_container").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",1)},15*a)})},{offset:"80%"});$("#tools .resume_tools .media-body").waypoint(function(a){var b=$(this);"up"==a&&setTimeout(function(){b.css("opacity",0)},100);"down"==a&&setTimeout(function(){b.css("opacity",1)},100)},{offset:"80%"});$("#tools .media:nth-child(2n+2)").waypoint(function(a){if("up"== a){var b=$(this).find(".img_container .points_container").length;$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",0)},15*b)});$(this).find(".img_container .points_container").reverse().each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",0)},15*a)});$(this).find(".center_points span").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",0)},15*(a+b))})}"down"==a&&(b=$(this).find(".center_points span").length,$(this).find(".center_points span").reverse().each(function(a){var b= $(this);setTimeout(function(){b.css("opacity",1)},15*a)}),$(this).find(".img_container .points_container").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",1)},15*(a+b))}),$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",1)},15*b)}))},{offset:"80%"});$("#tools .media:nth-child(2n+3)").waypoint(function(a){if("up"==a){var b=$(this).find(".img_container .points_container").length;$(this).find(".media-object").each(function(){var a= $(this);setTimeout(function(){a.css("opacity",0)},15*b)});$(this).find(".img_container .points_container").each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",0)},15*a)});$(this).find(".center_points span").reverse().each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",0)},15*(a+b))})}"down"==a&&(b=$(this).find(".center_points span").length,$(this).find(".center_points span").each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",1)},15*a)}),$(this).find(".img_container .points_container").reverse().each(function(a){var c= $(this);setTimeout(function(){c.css("opacity",1)},15*(a+b))}),$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",1)},15*b)}))},{offset:"80%"});switch(!0){case -1<document.documentElement.lang.indexOf("en"):q="en";break;case -1<document.documentElement.lang.indexOf("es"):q="es";break;default:q="es"}$.getJSON("/json/portfolio-"+q+".json",function(a){for(var b=0;b<a.portfolio.length-1;b++)g.push(a.portfolio[b]);m=991>=f?6:7;k=Math.floor(h/m)*m;c()});$("#portfolio #portfolio-gallery li").waypoint(function(a){"up"== a&&$(this).removeClass("animated-flip fadeInUp").addClass("animated-flip fadeOutUp");"down"==a&&$(this).removeClass("animated-flip fadeOutUp").addClass("animated-flip fadeInUp")},{offset:"80%"});$("#portfolio-gallery").on("click","li",function(){var a=$("#ptf_footer_load_graph");a.css("position","relative");a.css("right","-10%");a.css("display","inline-block");a.appendTo($(this).find("p"));h=parseInt($(this).attr("data-index"));e=$("#portfolio-info");d();l=$(this);n(l,e);setTimeout(function(){e.css({opacity:1, "z-index":1E4}).removeClass("hide-info");e.animate({clip:s},"fast","swing",function(){$("#portfolio").scrollView().css("padding-bottom",0);a.css("display","none");a.appendTo($("#portfolio-gallery").parent())})},500)});q=function(){k+m<g.length&&(k+=m,k+m<g.length?603<f&&$("#portfolio #ptf_showcase .left").css("display","block"):$("#portfolio #ptf_showcase .right").css("display","none"),c())};var u=function(){0<=k-m&&(k-=m,0<=k-m?603<f&&$("#portfolio #ptf_showcase .right").css("display","block"):$("#portfolio #ptf_showcase .left").css("display", "none"),c())};$("#portfolio #ptf_showcase .left").on("click",u);$("#portfolio #ptf_showcase .right").on("click",q);$(".ptf_page_prev a").on("click",u);$(".ptf_page_next a").on("click",q);$("#portfolio-nav-proj-prev").on("click",function(){h=1<h?h-1:g.length-1;d()});$("#portfolio-nav-proj-next").on("click",function(){h=h<g.length-1?h+1:0;d()});$(".carousel-control.left").on("click",function(){$("#ptf_proj_gal").carousel("prev")});$(".carousel-control.right").on("click",function(){$("#ptf_proj_gal").carousel("next")}); $("#portfolio-info .close").on("click",function(){c();p=!1;"undefined"!==typeof l&&(l=$("#portfolio-gallery li:nth-child("+(h%m+1).toString()+")"),n(l,e),e.animate({clip:r},"fast","swing"),l.scrollView(l.offset().top-100),$("#portfolio").css("padding-bottom","150px"),setTimeout(function(){e.animate({opacity:0,"z-index":-1E4},"fast","swing",function(){e.addClass("hide-info")})},500))});$("#team .team_container").waypoint(function(a){"up"==a&&$(this).removeClass("animated fadeInUp").addClass("animated fadeOutUp"); "down"==a&&$(this).removeClass("animated fadeOutUp").addClass("animated fadeInUp")},{offset:"80%"})});
