import fs from "fs";

export abstract class CsvFileReader<T> {
  protected constructor(private filename: string) {
    this.read();
  }

  abstract mapRow(row: string[]): T;

  read(): T[] {
    return fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
