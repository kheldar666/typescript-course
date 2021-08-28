// Using Generics (Inheritance)
// import { MatchReader } from "./inheritance/MatchReader";
// const reader = new MatchReader("./football.csv");
// const matches = reader.read();
// Using interfaces (Composition)
import { MatchReader } from "./composition/readers/MatchReader";
import { Summary } from "./composition/Summary";

const matchReader = MatchReader.fromCsv("./football.csv");
const consoleSummary = Summary.winsAnalysisAndConsoleReport("Man United"); //Static method used
const htmlSummary = Summary.winsAnalysisAndHtmlReport("Man United");

matchReader.load();
const matches = matchReader.matches;

consoleSummary.buildAndPrintReport(matches);
htmlSummary.buildAndPrintReport(matches);
