$("#formulario_de_contacto").validate({rules:{name:"required",email:{required:!0,email:!0},subject:"required",message:"required"},submitHandler:function(c,e){e.preventDefault()}}); (function(c){c.fn.serializeObject=function(){var e=this,n={},k={},f=/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,s=/[a-zA-Z0-9_]+|(?=\[\])/g,t=/^$/,p=/^\d+$/,g=/^[a-zA-Z0-9_]+$/;this.build=function(c,e,d){c[e]=d;return c};this.push_counter=function(c){void 0===k[c]&&(k[c]=0);return k[c]++};c.each(c(this).serializeArray(),function(){if(f.test(this.name)){for(var k,r=this.name.match(s),d=this.value,q=this.name;void 0!==(k=r.pop());)q=q.replace(new RegExp("\\["+k+"\\]$"),""),k.match(t)?d= e.build([],e.push_counter(q),d):k.match(p)?d=e.build([],k,d):k.match(g)&&(d=e.build({},k,d));n=c.extend(!0,n,d)}});return n}})(jQuery); $(function(){var c=$("#formulario_de_contacto"),e=$("#form-messages"),n=$("#boton-enviar"),k=n.text();c.submit(function(f){f.preventDefault();e.text("");f=c.serializeObject();""!==f.uuid&&""!==f.name&&""!==f.subject&&""!==f.menssage?(n.css("background-color","lightseagreen"),n.text(form_messages.sending_button_text),$.ajax({type:"POST",url:c.attr("action"),crossDomain:!0,contentType:"text/plain",data:JSON.stringify({uuid:f.uuid,name:f.name,subject:f.subject,email:f.email,message:f.message}),headers:{"Content-Type":"application/json; charset=utf-8"}, success:function(c){e.removeClass("alert alert-danger");e.addClass("success");n.css("background-color","darkorange");n.text(form_messages.sent_button_text);e.text(form_messages.success_message);$("#name").val("");$("#email").val("");$("#subject").val("");$("#message").val("")},error:function(c){e.removeClass("alert alert-success");e.addClass("alert alert-error");""!==c.responseText?e.text(form_messages.error_message):e.text(form_messages.error_message_complete);n.text(k);n.css("background","none")}})): ($(e).removeClass("alert alert-info"),$(e).text(form_messages.require_error_message))})});$.fn.reverse=[].reverse;$.fn.scrollView=function(c){return this.each(function(){null==c?$("html, body").animate({scrollTop:$(this).offset().top},100,"swing"):$("html, body").animate({scrollTop:c},100,"swing")})}; $(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var c=$(this.hash),c=c.length?c:$("[name="+this.hash.slice(1)+"]");if(c.length)return $("html,body").animate({scrollTop:c.offset().top},1E3),!1}})});window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1);window.onmousewheel=document.onmousewheel=wheel; function wheel(c){var e=0;c.wheelDelta?e=c.wheelDelta/120:c.detail&&(e=-c.detail/3);handle(e);c.preventDefault&&c.preventDefault();c.preventDefault()}function handle(c){$("html, body").stop().animate({scrollTop:$(window).scrollTop()-50*c},20)} $("document").ready(function(){function c(){var a,b,c,e,g,h;h=Math.min(d.length,m+l);$("#portfolio-gallery").empty();for(var f=m;f<h;f++)a=$("<li></li>"),b=$("<span class='item-name'>"+d[f].name+"</span>"),c=$("<div class='darker'></div>"),e=$("<div class='item-img'></div>"),g=$("<p><span></span>"+d[f].footer+"</p>"),e.css("background-image","url('/img/"+d[f].image+"')"),a.append(b,c,e,g),$("#portfolio-gallery").append(a),a.attr("data-index",f);0>m-l?$(".ptf_page_prev a").css("display","none"):$(".ptf_page_prev a").css("display", "inline-block");m+l>=d.length?$(".ptf_page_next a").css("display","none"):$(".ptf_page_next a").css("display","inline-block")}function e(){var a,b,c;$("#ptf_brand").text(d[h].name);$("#ptf_year").text(d[h].year);$("#ptf_work").empty();for(b=0;b<d[h].works.length;b++)a=$("<li>"+d[h].works[b].work+"</li>"),$("#ptf_work").append(a);$("#ptf_website").attr("href",d[h].website);b=d[h].website.indexOf("://");-1<b&&$("#ptf_website").text(d[h].website.substring(b+3,d[h].website.length));$.ajax({url:d[h].rel_url, dataType:"html",type:"GET",success:function(b){$("#ptf_desc").html(b)}});$("#ptf_proj_gal").carousel("pause").removeData();$("#ptf_proj_gal").carousel({interval:v});$ptf_car_ind=$("#ptf_proj_gal .carousel-indicators");$ptf_car_ind.empty();a=$("<li data-target='#ptf_proj_gal' data-slide-to='0' class='active' ></li>");$ptf_car_ind.append(a);$ptf_car_inner=$("#ptf_proj_gal .carousel-inner");$ptf_car_inner.empty();a=$("<div class='item active'></div>");c=$("<img alt ='photo' src='/img/"+d[h].gallery[0].img+ "'>");a.append(c);$ptf_car_inner.append(a);for(b=1;b<d[h].gallery.length;b++)a=$("<li data-target='#ptf_proj_gal' data-slide-to='"+b.toString()+"' ></li>"),$ptf_car_ind.append(a),a=$("<div class='item'></div>"),c=$("<img alt ='photo' src='/img/"+d[h].gallery[b].img+"'>"),a.append(c),$ptf_car_inner.append(a);m=h-h%l;q=!0}function n(a,b){s="rect("+(a.offset().top-b.offset().top)+"px, "+(a.offset().left+a.outerWidth())+"px, "+(a.offset().top-b.offset().top+a.outerHeight())+"px ,"+a.offset().left+"px)"; t="rect(0px "+$("#portfolio").outerWidth()+"px "+$("#portfolio").outerHeight()+"px 0px)";b.css({clip:s})}var k,f,s,t,p,g=$(window).outerWidth()+17,v=2750,r="-1",d=[],q=!1,m=0,h=0,l=7;$(".noscript").css("display","none");$(".navbar").css("display","block");$("#tools").css("display","block");$("#portfolio").css("display","block");$("#contact .form_container").css("display","block");$("#quote .rotate").css("display","block");$("#portfolio #ptf_showcase .left").css("display","none");$(window).on("resize", function(a){g=$(window).outerWidth()+17;$("#descr-row").empty();$("#what_we_do #second-lead .info").hide();$("#what_we_do #second-lead .title_info").css("color","#FFF");r="-1";$("#what_we_do .first_group, #what_we_do .second_group").height("160px");$("#what_we_do").css("padding-bottom","30px");768<=g&&991>=g?($("#what_we_do #first_group, #what_we_do #second_group").height(0),$("#what_we_do .info:visible").parent().parent().height(2*$("#what_we_do .info:visible").height()-80)):991<g&&($("#what_we_do").css("padding-bottom", $("#what_we_do .info:visible").height()+50),$("#what_we_do .first_group, #what_we_do .second_group").height("0"));l=991>=g?6:7;m=q?l*Math.floor(h/l):l*Math.floor(m/l);$("#portfolio-info .close").triggerHandler("click");$("#portfolio #ptf_showcase .right").css("display","none");$("#portfolio #ptf_showcase .left").css("display","none");m+l<d.length&&603<g&&$("#portfolio #ptf_showcase .right").css("display","block");0<=m-l&&603<g&&$("#portfolio #ptf_showcase .left").css("display","block")});$(".navbar").affix({offset:{top:625, bottom:function(){return this.bottom=$(".footer").outerHeight(!0)}}});$(".rotate").textrotator({animation:"dissolve",separator:";;;",speed:2E3});$(".main h2, .main p.lead, #what_we_do .title_info").not("#front_page h2").addClass("animated fadeOut");$("#portfolio #portfolio-gallery li").addClass("animated-flip fadeOutUp");$("#front_page .container").addClass("animated fadeIn");$("#team .team_container").addClass("animated fadeOutUp");$(window).scroll(function(){150<$(this).scrollTop()&&$("#front_page .container").removeClass("animated fadeIn").addClass("animated fadeOut"); 150>$(this).scrollTop()&&$("#front_page .container").removeClass("animated fadeOut").addClass("animated fadeIn")});$(".main h2, .main p.lead").not("#front_page h2").waypoint(function(a){"up"==a&&$(this).removeClass("animated fadeIn").addClass("animated fadeOut");"down"==a&&$(this).removeClass("animated fadeOut").addClass("animated fadeIn")},{offset:"80%"});$("#what_we_do .row").waypoint(function(a){"up"==a&&$(this).find(".title_info").reverse().each(function(b){var a=$(this);setTimeout(function(){a.removeClass("animated fadeIn").addClass("animated fadeOut")}, 100*b)});"down"==a&&$(this).find(".title_info").each(function(b){var a=$(this);setTimeout(function(){a.removeClass("animated fadeOut").addClass("animated fadeIn")},100*b)})},{offset:"80%"});$("#what_we_do .title_info").on("click",function(){var a,b,c;if(768>g){a=$(this).parent().find(".info");b=$('<span class="icon-up-dir fontello"></span>');switch(!0){case 560<g:b.css("left","45.5%");break;case 450<g:b.css("left","45%");break;case 400<g:b.css("left","44%");break;default:b.css("left","42%")}b.appendTo(a); a.toggle("slow")}else{992>g&&($("#what_we_do #second-lead .title_info").css("color","#FFF"),$(this).css("color","#30BAA4"));b=$("#descr-row");b.empty();a=$('<div id="descr" class="info"></div>');a.appendTo(b);b=$('<span class="icon-up-dir fontello"></span>');b.appendTo(a);c=$('<p id="info_desc"></p>');c.text($(this).parent().find(".info").find("p").text());c.appendTo(a);switch(!0){case "1"===$(this).attr("data-nth"):switch(!0){case 1200<g:b.css("left","4.4%");break;default:b.css("left","4.4%")}break; case "2"===$(this).attr("data-nth"):switch(!0){case 1200<g:b.css("left","32.6%");break;case 991<g:b.css("left","31.5%");break;default:b.css("right","10%")}break;case "3"===$(this).attr("data-nth"):switch(!0){case 1200<g:b.css("right","33.5%");break;case 991<g:b.css("right","32.25%");break;default:b.css("left","5.5%")}break;case "4"===$(this).attr("data-nth"):switch(!0){case 1200<g:b.css("right","5%");break;case 991<g:b.css("right","3.5%");break;default:b.css("right","10%")}break;default:b.css("display", "none")}r===$(this).attr("data-nth")?($("#descr").slideUp("slow"),r="-1"):($("#descr").slideUp("slow"),$("#descr").slideDown("medium"),$("#what_we_do").css("padding-bottom","30px"),r=$(this).attr("data-nth"))}});$("#tools .first_img .point_guide").waypoint(function(a){"up"==a&&$(this).find(".points_container").reverse().each(function(b){var a=$(this);setTimeout(function(){a.css("opacity",0)},15*b)});"down"==a&&$(this).find(".points_container").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity", 1)},15*a)})},{offset:"80%"});$("#tools .resume_tools .media-body").waypoint(function(a){var b=$(this);"up"==a&&setTimeout(function(){b.css("opacity",0)},100);"down"==a&&setTimeout(function(){b.css("opacity",1)},100)},{offset:"80%"});$("#tools .media:nth-child(2n+2)").waypoint(function(a){if("up"==a){var b=$(this).find(".img_container .points_container").length;$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",0)},15*b)});$(this).find(".img_container .points_container").reverse().each(function(a){var b= $(this);setTimeout(function(){b.css("opacity",0)},15*a)});$(this).find(".center_points span").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",0)},15*(a+b))})}"down"==a&&(b=$(this).find(".center_points span").length,$(this).find(".center_points span").reverse().each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",1)},15*a)}),$(this).find(".img_container .points_container").each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",1)},15*(a+b))}),$(this).find(".media-object").each(function(){var a= $(this);setTimeout(function(){a.css("opacity",1)},15*b)}))},{offset:"80%"});$("#tools .media:nth-child(2n+3)").waypoint(function(a){if("up"==a){var b=$(this).find(".img_container .points_container").length;$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",0)},15*b)});$(this).find(".img_container .points_container").each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",0)},15*a)});$(this).find(".center_points span").reverse().each(function(a){var c= $(this);setTimeout(function(){c.css("opacity",0)},15*(a+b))})}"down"==a&&(b=$(this).find(".center_points span").length,$(this).find(".center_points span").each(function(a){var b=$(this);setTimeout(function(){b.css("opacity",1)},15*a)}),$(this).find(".img_container .points_container").reverse().each(function(a){var c=$(this);setTimeout(function(){c.css("opacity",1)},15*(a+b))}),$(this).find(".media-object").each(function(){var a=$(this);setTimeout(function(){a.css("opacity",1)},15*b)}))},{offset:"80%"}); switch(!0){case -1<document.documentElement.lang.indexOf("en"):p="en";break;case -1<document.documentElement.lang.indexOf("es"):p="es";break;default:p="es"}$.getJSON("/json/portfolio-"+p+".json",function(a){for(var b=0;b<a.portfolio.length-1;b++)d.push(a.portfolio[b]);l=991>=g?6:7;m=Math.floor(h/l)*l;c()});$("#portfolio #portfolio-gallery li").waypoint(function(a){"up"==a&&$(this).removeClass("animated-flip fadeInUp").addClass("animated-flip fadeOutUp");"down"==a&&$(this).removeClass("animated-flip fadeOutUp").addClass("animated-flip fadeInUp")}, {offset:"80%"});$("#portfolio-gallery").on("click","li",function(){var a=$("#ptf_footer_load_graph");a.css("position","relative");a.css("right","-10%");a.css("display","inline-block");a.appendTo($(this).find("p"));h=parseInt($(this).attr("data-index"));f=$("#portfolio-info");e();k=$(this);n(k,f);setTimeout(function(){f.css({opacity:1,"z-index":1E4}).removeClass("hide-info");f.animate({clip:t},"fast","swing",function(){$("#portfolio").scrollView().css("padding-bottom",0);a.css("display","none");a.appendTo($("#portfolio-gallery").parent())})}, 500)});p=function(){m+l<d.length&&(m+=l,m+l<d.length?603<g&&$("#portfolio #ptf_showcase .left").css("display","block"):$("#portfolio #ptf_showcase .right").css("display","none"),c())};var u=function(){0<=m-l&&(m-=l,0<=m-l?603<g&&$("#portfolio #ptf_showcase .right").css("display","block"):$("#portfolio #ptf_showcase .left").css("display","none"),c())};$("#portfolio #ptf_showcase .left").on("click",u);$("#portfolio #ptf_showcase .right").on("click",p);$(".ptf_page_prev a").on("click",u);$(".ptf_page_next a").on("click", p);$("#portfolio-nav-proj-prev").on("click",function(){h=1<h?h-1:d.length-1;e()});$("#portfolio-nav-proj-next").on("click",function(){h=h<d.length-1?h+1:0;e()});$(".carousel-control.left").on("click",function(){$("#ptf_proj_gal").carousel("prev")});$(".carousel-control.right").on("click",function(){$("#ptf_proj_gal").carousel("next")});$("#portfolio-info .close").on("click",function(){c();q=!1;"undefined"!==typeof k&&(k=$("#portfolio-gallery li:nth-child("+(h%l+1).toString()+")"),n(k,f),f.animate({clip:s}, "fast","swing"),k.scrollView(k.offset().top-100),$("#portfolio").css("padding-bottom","150px"),setTimeout(function(){f.animate({opacity:0,"z-index":-1E4},"fast","swing",function(){f.addClass("hide-info")})},500))});$("#team .team_container").waypoint(function(a){"up"==a&&$(this).removeClass("animated fadeInUp").addClass("animated fadeOutUp");"down"==a&&$(this).removeClass("animated fadeOutUp").addClass("animated fadeInUp")},{offset:"80%"})});