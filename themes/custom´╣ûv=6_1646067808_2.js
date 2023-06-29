$(window).on({'load':function(){if($('#navbar').length===1){$('body').scrollspy({target:'#navbar',speed:1000,afterscroll:function(){$('#navbar.in').collapse('hide')}});$('#navbar').on({'on.show.collapse':function(){if(window.matchMedia('(max-width: 991px)').matches){$('body').append('<div id="navbar-overlay" />');$('#navbar-overlay').on('click',function(){$('#navbar').collapse('hide')})}},'on.hidden.collapse':function(){$('#navbar-overlay').remove()}});layout.setMenuWidth()}
$('.media-list:not([data-addon="eco"])').find('.media').each(function(){var link=$(this).find('.media-object').find('a').length!=0?$(this).find('.media-object').find('a'):$(this).find('.media-heading').find('a');if(link.length!=0){var only=$(this).find('a').not('[href="'+link.attr('href')+'"]').not(':hidden').length==0?!0:!1;if(only&&!link.hasClass('fancybox')&&$.isMobile()){$(this).clickable({classname:'pointer',target:link.attr('href')})}
if(link.parent().is('.media-object')){var icon_size=link.closest('.widget-content').length===1?'lg':'3x';if(link.hasClass('fancybox')){link.append('<span class="media-overlay"><i class="fa fa-search fa-'+icon_size+'"></i></span>')}else{link.append('<span class="media-overlay"><i class="fa fa-plus fa-'+icon_size+'"></i></span>')}}}});if(window.location.hash){var $target=$('#'+window.location.hash.substring(1)).first();if($target.length){layout.anchors($target)}}
$('a[href^="#"]').not('[data-toggle], [data-slide]').on('click',function(){var $target=$($(this).attr('href')).first();if($target.length){layout.anchors($target)}})},'resize':function(){if($('#navbar').length===1){layout.setMenuWidth()}}});layout.anchors=function($target){var $targetX=$target.offset().left;var $targetY=$target.offset().top;$targetY-=$('.navbar-fixed-top').length?$('.navbar-fixed-top').outerHeight():0;$('html, body').animate({scrollTop:$targetY,scrollLeft:$targetX},240)};layout.setMenuWidth=function(){var containerWidth=$('.navbar-top').find('.container').width();var navbarButtonsWidth=$('.navbar-top').find('.navbar-buttons').length!=0?Math.ceil($('.navbar-top').find('.navbar-buttons').width()):0;if(window.matchMedia("(min-width: 992px)").matches){if(!$('.navbar-header').hasClass('hidden-desktop')){if($('.navbar-header').data('minWidth')===undefined){var temp=$('.navbar-header').clone();temp.css({'display':'none','float':'left'}).appendTo('.navbar-top');$('.navbar-header').data('minWidth',temp.outerWidth()!=0?temp.outerWidth()+1:0);temp.remove()}
$('.navbar-header').css({'min-width':$('.navbar-header').data('minWidth')+'px','max-width':''})}
var brandWidth=$('.navbar-header').outerWidth();var availableWidth=Math.ceil(containerWidth-(brandWidth+navbarButtonsWidth));var itemsWidth=0;$('#navbar').find('.navbar-nav').find('> li').each(function(){$(this).removeClass('hidden-desktop');itemsWidth+=Math.ceil($(this).outerWidth());$(this).addClass(function(){return itemsWidth>availableWidth?'hidden-desktop':''}).filter('[class=""]').removeAttr('class')})}else{var availableWidth=Math.floor(containerWidth-navbarButtonsWidth);$('.navbar-header').css({'max-width':availableWidth+'px','min-width':''})}};layout.setHeaderHeight=function(){if(($('header').data('h')===undefined)||$.isMobile()){var headerMinH='auto'}else{var headerMinH=$('header').data('h')}
var windowWidth=$(window).width();var windowHeight=$(window).height();if(headerMinH=='auto'){var ratio=windowWidth/$('header').data('bgWidth');var height=Math.round($('header').data('bgHeight')*ratio)}else{var height=Math.round((windowHeight/100)*headerMinH);height=!$('.navbar-top').hasClass('in-header')?height-$('.navbar-top').outerHeight():height}
$('header').css({'height':height+'px'})};layout.setFooterFrieze=function(){var canvas=$('#footer-frieze')[0].getContext('2d');canvas.fillStyle=$('#footer-wrapper').css('background-color');$('#footer-frieze').attr('height',32);$('#footer-frieze').attr('width',$('#footer').outerWidth());canvas.beginPath()}