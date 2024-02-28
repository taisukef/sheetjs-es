import { XLSX } from "../XLSX.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

//const fn = "test.xlsx";
const fn = "chikubetsujinkou.xls";

const bin = new Uint8Array(await Deno.readFile(fn));
const ws = XLSX.decode(bin);
console.log(ws);

const csv = XLSX.toCSV(ws);
console.log(csv);
await Deno.writeTextFile("test.csv", CSV.encode(csv));

const csvs = XLSX.toCSV(ws, true);
console.log(csvs);
for (let i = 0; i < csvs.length; i++) {
  await Deno.writeTextFile("test_" + (i + 1) + ".csv", CSV.encode(csv));
}

