$(document).ready(function(){
    
    $('#textBox').slabText();
    
    var controller = new ScrollMagic.Controller();
    
    var testPin = new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        duration: '100%'
    })
        .setPin('#pin1')
        .addIndicators({name: "1 (duration: 500)"})
        .addTo(controller);
    
    var coffeeCups = TweenMax.to(".intro .mask", 2, {x:"100%"});
    
    
     var college = new ScrollMagic.Scene({
        triggerElement: "#college",
    })
        .on('start', function(){
            $('.collegeCount').countTo('start');   
        })
        .addTo(controller)
//        .setTween(tl3);
     
     var jobs = new ScrollMagic.Scene({
        triggerElement: "#jobs",
    })
        .on('start', function(){
            $('.jobCount').countTo('start');   
        })
        .addTo(controller)
//        .setTween(tl3);
    
    
	$('.count').countTo({
		from: 0,
		to: 671396071,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});

    $('.count').countTo('stop');
    
    var cupsCoffee = new ScrollMagic.Scene({
        triggerElement: '#cupsCoffee',
    })
        .on('start', function(){
            $('.count').countTo('start');   
        })
        .setTween(coffeeCups) 
        .addTo(controller);
    
    $('.teaCount').countTo({
		from: 0,
		to: 347394871,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});

    $('.teaCount').countTo('stop');
    
    $('.veteranCount').countTo({
		from: 0,
		to: 8000,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});
    
    $('.veteranCount').countTo('stop');
    
    $('.collegeCount').countTo({
		from: 0,
		to: 6535,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});
    
    $('.collegeCount').countTo('stop');
    
    $('.jobCount').countTo({
		from: 0,
		to: 10000,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});
    
    $('.jobCount').countTo('stop');
    
    $('.farmCount').countTo({
		from: 0,
		to: 301506,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});
    
    $('.farmCount').countTo('stop');

    $('.payCount').countTo({
		from: 0,
		to: 1468,
		speed: 2000, //2seconds
		refreshInterval: 5,
		formatter: function (value, options) {
    		value = value.toFixed(options.decimals);
    		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    		return value;
  		}
	});
    
    $('.payCount').countTo('stop');
    
	new WOW().init();

	$('.tea img').eq(0);

	var tl = new TimelineMax();

	tl.from($('.tea img').eq(0), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, 1)
	.from($('.tea img').eq(1), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .9)
	.from($('.tea img').eq(2), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .8)
	.from($('.tea img').eq(3), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .7)
	.from($('.tea img').eq(4), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .6)
	.from($('.tea img').eq(5), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .5)
	.from($('.tea img').eq(6), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .6)
	.from($('.tea img').eq(7), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .7)
	.from($('.tea img').eq(8), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .8)
	.from($('.tea img').eq(9), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, .9)
	.from($('.tea img').eq(10), 0.8, {opacity: 0, ease: Back.easeOut.config(1.7), y: "1000px"}, 1)
    
    var tea = new ScrollMagic.Scene({
        triggerElement: "#tea",
    }) 
        .on('start', function(){
            $('.teaCount').countTo('start');   
    })
        .addTo(controller)
        .setTween(tl);
    
    $('.farms img').eq(0);
    
    var tl2 = new TimelineMax();

	tl2
    .from($('.farms img').eq(0), 1, {ease: Power1.easeOut, y: "500px"}, .15)
	.from($('.farms img').eq(1), 1, {ease: Power1.easeOut, y: "500px"}, .20)
	.from($('.farms img').eq(2), 1, {ease: Power1.easeOut, y: "500px"}, .25)
	.from($('.farms img').eq(3), 1, {ease: Power1.easeOut, y: "500px"}, .30)
	.from($('.farms img').eq(4), 1, {ease: Power1.easeOut, y: "500px"}, .35)
	.from($('.farms img').eq(5), 1, {ease: Power1.easeOut, y: "500px"}, .40)
	.from($('.farms img').eq(6), 1, {ease: Power1.easeOut, y: "500px"}, .45)
	.from($('.farms img').eq(7), 1, {ease: Power1.easeOut, y: "500px"}, .50)
	.from($('.farms img').eq(8), 1, {ease: Power1.easeOut, y: "500px"}, .55)
	.from($('.farms img').eq(9), 1, {ease: Power1.easeOut, y: "500px"}, .60)
	.from($('.farms img').eq(10), 1, {ease: Power1.easeOut, y: "500px"}, .65)
    .from($('.farms img').eq(11), 1, {ease: Power1.easeOut, y: "500px"}, .70)
	.from($('.farms img').eq(12), 1, {ease: Power1.easeOut, y: "500px"}, .75)
	.from($('.farms img').eq(13), 1, {ease: Power1.easeOut, y: "500px"}, .80)
	.from($('.farms img').eq(14), 1, {ease: Power1.easeOut, y: "500px"}, .85)
	.from($('.farms img').eq(15), 1, {ease: Power1.easeOut, y: "500px"}, .90)
    .from($('.farms img').eq(16), 1.8, {ease: Power1.easeOut, x: "-1000%"}, .40)
    
     var farms = new ScrollMagic.Scene({
        triggerElement: "#farms",
    })
        .on('start', function(){
            $('.farmCount').countTo('start');   
        })
        .addTo(controller)
        .setTween(tl2);
    
    $('.veterans img').eq(0);
    
    var tl3 = new TimelineMax();

	tl3
    .from($('.veterans img').eq(0), 1, {ease: Power1.easeOut, x: "-700px"}, .20)
	.from($('.veterans img').eq(1), 1, {ease: Power1.easeOut, y: "1200px"}, .70)
	.from($('.veterans img').eq(2), 1, {ease: Power1.easeOut, y: "1200px"}, .60)
	.from($('.veterans img').eq(3), 1, {ease: Power1.easeOut, y: "1200px"}, .50)
	.from($('.veterans img').eq(4), 1, {ease: Power1.easeOut, y: "1200px"}, .40)
	.from($('.veterans img').eq(5), 1, {ease: Power1.easeOut, y: "1200px"}, .30)
	.from($('.veterans img').eq(6), 1, {ease: Power1.easeOut, y: "1200px"}, .20)
    
     var veterans = new ScrollMagic.Scene({
        triggerElement: "#veterans",
    })
        .on('start', function(){
            $('.veteranCount').countTo('start');   
        })
        .addTo(controller)
        .setTween(tl3);
    
    tl4 = new TimelineMax({yoyo:true});
//    repeat:0, 

    tl4.from(".st0", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var trees = new ScrollMagic.Scene({
        triggerElement: "#trees",
    })
        .addTo(controller)
        .setTween(tl4);
    
    $('.pay .flipcup').eq(0);
    $('.pay .flipcup .circle').eq(0);
    
    var tl5 = new TimelineMax();

	tl5
    .to($('.pay .flipcup').eq(0), 2, {ease: Power1.easeOut, rotation: -360}, .30)
	.to($('.pay .flipcup').eq(0), 1, {ease: Power1.easeOut, y: "-150%"}, .10)
    .to($('.pay .flipcup').eq(0), 1, {ease: Linear.easeNone, x: "200%"}, .10)
	.to($('.pay .flipcup').eq(0), 1, {ease: Power1.easeIn, y: "0%"}, 1.10)
    .to($('.pay .flipcup').eq(0), 1, {ease: Linear.easeNone, x: "450%"}, 1.10)
	.to($('.pay .flipcup').eq(1), 1, {ease: Power1.easeOut, x: '-110px'}, 1)
    .to($('.pay .flipcup').eq(2), 1, {ease: Power1.easeOut, x: '-110px'}, 1)
    .to($('.pay .flipcup').eq(3), 1, {ease: Power1.easeOut, x: '-110px'}, 1)
    .to($('.pay .flipcup').eq(4), 1, {ease: Power1.easeOut, x: '-110px'}, 1)
    
    .to($('.pay .flipcup .circle').eq(1), 1, {ease: Power1.easeOut, x: '55%'}, 2)
    .to($('.pay .flipcup .circle').eq(2), 1, {ease: Power1.easeOut, x: '55%'}, 2.2)
    .to($('.pay .flipcup .circle').eq(3), 1, {ease: Power1.easeOut, x: '55%'}, 2.4)
    .to($('.pay .flipcup .circle').eq(4), 1, {ease: Power1.easeOut, x: '55%'}, 2.6)
    .to($('.pay .flipcup .circle').eq(0), 1, {ease: Power1.easeOut, x: '-55%'}, 3)
    
     var cups = new ScrollMagic.Scene({
        triggerElement: "#pay",
    })
        .on('start', function(){
            $('.payCount').countTo('start');   
        })
        .addTo(controller)
        .setTween(tl5);
    
    var tl6 = new TimelineMax();
    
    tl6.to($('.starbucks .text'), 3, {opacity:1})
	.to($('.starbucks .text'), 1, {opacity:0})
    .to($('.starbucks .logo'), 4, {opacity:1})
    
    var cups = new ScrollMagic.Scene({
        triggerElement: "#end",
    })
        .addTo(controller)
        .setTween(tl6);

});


