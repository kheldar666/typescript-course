// Using Generics (Inheritance)
// import { MatchReader } from "./inheritance/MatchReader";
// const reader = new MatchReader("./football.csv");
// const matches = reader.read();
// Using interfaces (Composition)
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./inheritance/Summary";
import { WinsAnalysis } from "./inheritance/WinsAnalysis";
import { ConsoleReport } from "./inheritance/ConsoleReport";

const matchReader = new MatchReader(new CsvFileReader("./football.csv"));
matchReader.load();
const matches = matchReader.matches;

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matches);
