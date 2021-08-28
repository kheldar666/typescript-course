import { MatchTuple } from "../../types/MatchTuple";

export interface Analyzer {
  run(matches: MatchTuple[]): string;
}
