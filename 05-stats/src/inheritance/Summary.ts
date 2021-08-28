import { Analyzer } from "../composition/analyzer/Analyzer";
import { OutputTarget } from "../composition/outputs/OutputTarget";
import { MatchTuple } from "../types/MatchTuple";
import { WinsAnalysis } from "../composition/analyzer/WinsAnalysis";
import { ConsoleReport } from "../composition/outputs/ConsoleReport";
import { HtmlReport } from "../composition/outputs/HtmlReport";

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchTuple[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }

  static winsAnalysisAndConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  static winsAnalysisAndHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
}
