const getRandomNumber = (max = 99) => {
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
};

export default getRandomNumber;
