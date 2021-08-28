// Using Generics (Inheritance)
// import { MatchReader } from "./inheritance/MatchReader";
// const reader = new MatchReader("./football.csv");
// const matches = reader.read();
// Using interfaces (Composition)
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./inheritance/Summary";
import { WinsAnalysis } from "./inheritance/analyzer/WinsAnalysis";
import { HtmlReport } from "./inheritance/outputs/HtmlReport";

const matchReader = new MatchReader(new CsvFileReader("./football.csv"));
matchReader.load();
const matches = matchReader.matches;

const consoleSummary = Summary.winsAnalysisAndConsoleReport("Man United"); //Static method used

consoleSummary.buildAndPrintReport(matches);

const htmlSummary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);
htmlSummary.buildAndPrintReport(matches);
