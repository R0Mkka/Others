window.addEventListener('DOMContentLoaded', function() {

  let screenHeight = window.innerHeight,
		currentBlock = 0,
		lastScrolled = 0,
    blocksHeight = 0;

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

    blocksHeight = getCurrentHeight(currentBlock);

		if(lastScrolled < scrolled) {
			if(scrolled >= (blocksHeight - screenHeight + getNextBlockThird(currentBlock + 1))) {

				if(currentBlock < (containers.length - 1)) currentBlock++;

				clearActives();

				containers[currentBlock].classList.add('active');
			}
		} else {
			if(scrolled <= blocksHeight - containers[currentBlock].offsetHeight - getPrevBlockThird(currentBlock)){

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

  function getCurrentHeight(currentBlock) {
    let sum = 0;

    for (let i = 0; i <= currentBlock; i++) {
        sum += containers[i].offsetHeight;
    }

    return sum;
  }

  function getNextBlockThird(currentBlock) {
    if(currentBlock < containers.length) return parseInt(containers[currentBlock].offsetHeight / 3);
    else return 0;
  }

  function getPrevBlockThird(currentBlock) {
    if(currentBlock > 0) return parseInt(containers[currentBlock - 1].offsetHeight / 3);
    else return 0;
  }

});
