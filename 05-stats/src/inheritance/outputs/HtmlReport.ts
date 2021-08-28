import * as fs from "fs";
import { OutputTarget } from "./OutputTarget";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
            <html>
                <body>
                    <div>
                        <h1>Analysis Report</h1>
                        <span>${report}</span>
                    </div>  
                </body>
            </html>
        `;
    fs.writeFileSync("./report.html", html);
  }
}
