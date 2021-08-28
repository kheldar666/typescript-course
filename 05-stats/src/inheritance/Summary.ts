import { Analyzer } from "./analyzer/Analyzer";
import { OutputTarget } from "./outputs/OutputTarget";
import { MatchTuple } from "../types/MatchTuple";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./outputs/ConsoleReport";

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchTuple[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }

  static winsAnalysisAndConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
}
