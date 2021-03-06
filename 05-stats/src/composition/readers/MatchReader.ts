import { DataReader } from "./DataReader";
import { MatchTuple } from "../../types/MatchTuple";
import { dateStringToDate } from "../../utils/utils";
import { MatchResultEnum } from "../../types/MatchResultEnum";
import { CsvFileReader } from "./CsvFileReader";

export class MatchReader {
  public matches: MatchTuple[] = [];

  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchTuple => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResultEnum,
        row[6],
      ];
    });
  }

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
}
