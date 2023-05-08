const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("next");
});

next.addEventListener("click", () => {
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}

const start = () => {
  setTimeout(function() {
      confetti.start()
  }, 1000); 
};

const stop = () => {
  setTimeout(function() {
      confetti.stop()
  }, 5000); 
};

function alertFunction() {
  alert('you just got gnomed moron');
  return;
}

for(var i = 0; i < 1; i++) {
  alertFunction();
}
start();
stop();
