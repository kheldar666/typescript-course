import { CsvFileReader } from "./CsvFileReader";

const matches = new CsvFileReader("./football.csv").data;

let manUnitedWins = 0;

//Enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
