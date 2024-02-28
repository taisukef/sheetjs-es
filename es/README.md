# XLSX ES modules

A lib for XLSX in JavaScript / ES module.

## Usage

```js
import { XLSX } from "https://taisukef.github.io/sheetjs-es/es/XLSX.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const excel2csv = async (fn, fn2) => {
  const bin = new Uint8Array(await Deno.readFile(fn));
  const ws = XLSX.decode(bin);
  //console.log(ws);

  const multisheets = false; // if true retrun array of csv
  const csv = XLSX.toCSV(ws, multisheets);
  //console.log(csv);
  await Deno.writeTextFile(fn2, CSV.encode(csv));
};
```
