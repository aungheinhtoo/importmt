
// Get random coordinates
const randomPoint = (width, height) => {
  let x = Math.floor(Math.random() * (width - 100 + 1) + 50);
  let y = Math.floor(Math.random() * (height - 100 + 1) + 50);

  return {
    x: x,
    y: y,
    done: false
  };
};

export default randomPoint;
