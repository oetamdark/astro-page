//scroll variable to track window's scroll
var lastScrollTop = 0;

(function(){

    window.onload = function() {
		scrollW();
	};

	window.addEventListener('scroll', function(){
		scrollW();
	})

    // Start AOS
    AOS.init();
    // Start Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your options go here
    });
    
}());

function scrollW(){
    //check scroll down or up for header styles
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if(st > 80){
        if (st > lastScrollTop){
            // downscroll code
            if(!document.getElementById('header').classList.contains('down')){
                document.getElementById('header').classList.add('down');
                document.getElementById('header').classList.remove('up');

        
            }
        } else {
            // upscroll code
            if(!document.getElementById('header').classList.contains('up')){
                document.getElementById('header').classList.add('up');
                document.getElementById('header').classList.remove('down');
            
            }
        }
    } else {
        if(document.getElementById('header').classList.contains('up') || document.getElementById('header').classList.contains('down')){
            document.getElementById('header').classList.remove('up');
            document.getElementById('header').classList.remove('down');
    

        }

    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}


//animation of scroll vanilla JS
function animateTo(target){
	var gotoTarget = offset(document.getElementById(target)).top - 100;
	var from     = window.pageYOffset
	var to       = gotoTarget
	var duration = 1300; 
	var start = new Date().getTime()

	//time interval
	var timer = setInterval(function() {
		var time = new Date().getTime() - start

		if(from <= to ){
			var yH = easeInOutQuart(time, from, to - from, duration)
		} else {
			
			var yH = easeInOutQuart(time, from, -(from - to), duration)
		}
		window.scrollTo(0, yH)
		if (time >= duration) clearInterval(timer)

	}, 1000 / 60);

	window.scrollTo(0, from)

}

//ease movement
function easeInOutQuart(t, b, c, d) {
	if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

//window offset
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}