import { MatchResultEnum } from "./MatchResultEnum";

// Using Generics
// import { MatchReader } from "./inheritance/MatchReader";
// const reader = new MatchReader("./football.csv");
// const matches = reader.read();
// Using interfaces
import { CsvFileReader } from "./interface/CsvFileReader";
import { MatchReader } from "./interface/MatchReader";

const matchReader = new MatchReader(new CsvFileReader("./football.csv"));
matchReader.load();
const matches = matchReader.matches;

// Analysis
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
