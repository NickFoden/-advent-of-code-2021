const calculateDistance = (data) => {
  let horizontal = 0;
  let depth = 0;

  data.forEach((d) => {
    const [verb, value] = d;
    switch (verb.trim()) {
      case "forward":
        horizontal = horizontal + Number(value);
        return;
      case "down":
        depth = depth + Number(value);
        return;
      case "up":
        depth = depth - Number(value);
        return;
    }
  });
  return horizontal * depth;
};

const calculateDistanceWithAim = (data) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  data.forEach((d) => {
    const [verb, value] = d;
    switch (verb.trim()) {
      case "forward":
        horizontal = horizontal + Number(value);
        if (aim !== 0) {
          depth = depth + aim * Number(value);
        }
        return;
      case "down":
        aim = aim + Number(value);
        return;
      case "up":
        aim = aim - Number(value);
        return;
    }
  });
  return horizontal * depth;
};

module.exports = {
  calculateDistance,
  calculateDistanceWithAim,
};
