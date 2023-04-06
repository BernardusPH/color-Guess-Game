export default function colorGenerate(colorState, colorType, difficulty) {
  let colorArr = [];
  if (colorType === "RGB") {
    for (let i = 0; i < +difficulty; i++) {
      colorArr.push(
        `rgb(${Math.round(Math.random() * 255)},${Math.round(
          Math.random() * 255
        )},${Math.round(Math.random() * 255)})`
      );
    }
  } else if (colorType === "HEX") {
    for (let i = 0; i < +difficulty; i++) {
      colorArr.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
  } else {
    for (let i = 0; i < +difficulty; i++) {
      colorArr.push(
        `hsl(${Math.round(Math.random() * 100)},${Math.round(
          Math.random() * 100
        )}%,${Math.round(Math.random() * 100)}%)`
      );
    }
  }
  colorState({
    colors: [...colorArr],
    choice: Math.round(Math.random() * (+difficulty - 1)),
    colorType: colorType,
    difficulty: difficulty,
  });
}
