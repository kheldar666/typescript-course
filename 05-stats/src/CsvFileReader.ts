import fs from "fs";

export class CsvFileReader {
  private _data: string[][] = [];

  constructor(private filename: string) {
    this.read();
  }

  read(): void {
    this._data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }

  get data(): string[][] {
    return this._data;
  }
}
