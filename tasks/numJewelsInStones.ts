let numJewelsInStones = function (jewels: string, stones: string) {
  //თქვენი კოდი უნდა დაწეროთ აქ
  let count: number = 0;
  // let [...jewel] = jewels.split("");

  jewels.split("").forEach((jewel) => {
    stones.split("").forEach((stone) => {
      if (jewel === stone) {
        console.log(jewel, stone);
        count++;
      }
    });
  });
  return count;
};

console.log(numJewelsInStones("aA", "aAABBB"));
