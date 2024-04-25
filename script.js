let circles = document.querySelectorAll(".circle"),
  lightIndex = 0;

const lights = [
  { color: "col1", time: 7000 },
  { color: "col2", time: 2000 },
  { color: "col3", time: 7000 },
];

changeLight();

function changeLight() {
  const light = lights[lightIndex];
  const currentLight = circles[lightIndex];

  currentLight.classList.add(light.color);

  setTimeout(() => {
    flash(currentLight, light.color, 4, 500, () => {
      currentLight.classList.remove(light.color);

      lightIndex++;
      if (lightIndex >= lights.length) {
        lightIndex = 0;
      }

      changeLight();
    });
  }, light.time);
}

function flash(element, colorClass, flashes, delay, callback) {
  let count = 0;
  const interval = setInterval(() => {
    if (count % 2 === 0) {
      element.classList.add(colorClass);
    } else {
      element.classList.remove(colorClass);
    }
    count++;
    if (count >= flashes * 2) {
      clearInterval(interval);
      callback();
    }
  }, delay);
}
