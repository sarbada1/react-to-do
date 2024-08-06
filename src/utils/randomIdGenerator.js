export const randomIdGenerator = () => {
  let id = [];
  for (let i = 0; i < 5; i++) {
    let concat = "";
    for (let j = 0; j < 5; j++) {
      const random = Math.floor(Math.random() * 32);
      const char = random.toString(32);
      concat += char;
    }

    id.push(concat);
  }

  return id.join("-");
};
