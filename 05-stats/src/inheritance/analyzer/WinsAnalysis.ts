import { Analyzer } from "./Analyzer";
import { MatchTuple } from "../../types/MatchTuple";
import { MatchResultEnum } from "../../types/MatchResultEnum";

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}
  run(matches: MatchTuple[]): string {
    // Analysis
    let teamWins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResultEnum.HomeWin) {
        teamWins++;
      } else if (
        match[2] === this.team &&
        match[5] === MatchResultEnum.AwayWin
      ) {
        teamWins++;
      }
    }

    return `${this.team} won ${teamWins} games`;
  }
}
