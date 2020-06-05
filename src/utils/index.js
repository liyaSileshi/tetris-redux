export const random = (min, max) => {
  // random number between min and max, starting from min
  return Math.floor(Math.random() * (max - min + 1)) + min
}
