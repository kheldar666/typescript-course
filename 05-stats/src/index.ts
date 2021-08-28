import { MatchResultEnum } from "./MatchResultEnum";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader("./football.csv");
const matches = reader.read();

let manUnitedWins = 0;
console.log(matches);
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResultEnum.HomeWin) {
    manUnitedWins++;
  } else if (
    match[2] === "Man United" &&
    match[5] === MatchResultEnum.AwayWin
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
