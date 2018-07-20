window.addEventListener('DOMContentLoaded', function() {

	let screenHeight = window.screen.height,
		thirdOfScreenHeight = +(screenHeight / 3),
		currentBlock = 0,
		lastScrolled = 0;

	let containers = document.getElementsByClassName('container');

	start();

	function start() {
		containers[currentBlock].classList.add('active');

		window.onscroll = function() {
			let scrolled = window.pageYOffset;
			setActiveBlock(scrolled);
		}
	}

	function setActiveBlock(scrolled) {

		if(lastScrolled < scrolled) {
			if(scrolled >= (currentBlock * screenHeight) + thirdOfScreenHeight) {

				if(currentBlock < (containers.length - 1)) currentBlock++;

				clearActives();

				containers[currentBlock].classList.add('active');
			}
		} else {
			if(scrolled <= (currentBlock * screenHeight) - thirdOfScreenHeight){

				if(currentBlock > 0) currentBlock--;

				clearActives();

				containers[currentBlock].classList.add('active');
			}
		}

		lastScrolled = scrolled;
	}

	function clearActives() {
		for(let i = 0; i < containers.length; i++) {
			containers[i].classList.remove('active');
		}
	}

});