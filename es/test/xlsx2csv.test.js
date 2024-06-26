import * as t from "https://deno.land/std/testing/asserts.ts";
import { xlsx2csv } from "../xlsx2csv.js";
import { XLSX } from "../XLSX.js";

Deno.test("simple", async () => {
  const fn = "simple1.xls";
  const bin = new Uint8Array(await Deno.readFile(fn));
  const ws = XLSX.decode(bin);
  //console.log(ws);

  const csv = XLSX.toCSV(ws);
  //console.log(csv);
  t.assertEquals(csv, [
    [ "a", "b", "c" ],
    [ "1", "2", "3" ],
    [ "4", "5", "6" ],
    [ "7", "8", "9" ]
  ]);
  });
