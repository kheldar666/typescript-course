import fs from "fs";
import { DataReader } from "./DataReader";

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
