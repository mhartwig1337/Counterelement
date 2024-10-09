const counterList = document.querySelectorAll('.counter');
const duration = 2000; // Duration of the animation in milliseconds

function step(timestamp, counter, start) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;
  const finalValue = parseInt(counter.dataset.value); 
  
  let progress = Math.min(elapsed / duration, 1);
  
  progress = easeOutCubic(progress);
  
  const value = Math.floor(progress * finalValue);
  counter.innerHTML = value;
  
  if (progress < 1) {
    requestAnimationFrame(newTimestamp => step(newTimestamp, counter, start));
  }
}

// Easing function: ease-out cubic
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const count = counter => {
  let start;
  requestAnimationFrame(timestamp => step(timestamp, counter, start));
}

counterList.forEach(count);


