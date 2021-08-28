import { DataReader } from "./DataReader";
import { MatchTuple } from "../MatchTuple";
import { dateStringToDate } from "../utils";
import { MatchResultEnum } from "../MatchResultEnum";

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
}
