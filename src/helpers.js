function randomTrueOrFalse(num) {
  const randomNum = Math.random();
  if (randomNum < num) return false;
  return true;
}

export { randomTrueOrFalse };
