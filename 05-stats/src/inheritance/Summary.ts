import { Analyzer } from "./Analyzer";
import { OutputTarget } from "./OutputTarget";
import { MatchTuple } from "../types/MatchTuple";

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchTuple[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
