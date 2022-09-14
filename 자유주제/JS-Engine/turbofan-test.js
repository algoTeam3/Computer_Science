function sample() {
  if (!arguments) {
    throw new Error("인자를 주시오");
  }

  const array = Array.from(arguments);
  return array
    .map((el) => el * el)
    .filter((el) => el < 20)
    .reverse()
    .reverse()
    .reverse();
}

for (let i = 0; i < 100000; ++i) {
  sample(1, 2, 3, 4, 5);
}
