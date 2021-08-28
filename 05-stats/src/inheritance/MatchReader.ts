import { CsvFileReader } from "./CsvFileReader";
import { MatchTuple } from "../types/MatchTuple";
import { dateStringToDate } from "../utils/utils";
import { MatchResultEnum } from "../types/MatchResultEnum";

export class MatchReader extends CsvFileReader<MatchTuple> {
  mapRow(row: string[]): MatchTuple {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResultEnum,
      row[6],
    ];
  }
}
