import { XLSX as xlsx } from "./xlsx.full.min.js";
//import { XLSX as xlsx } from "./xlsx.mini.js";
import { xlsx2csv } from "./xlsx2csv.js";

const decode = (bin) => {
  const ws = xlsx.read(bin, { type: "array" });
  return ws;
};
const toCSV = (wsorsheet, multisheets) => {
  if (wsorsheet.Sheets) {
    const ws = wsorsheet;
    if (multisheets) {
      const csv = [];
      for (const name of ws.SheetNames) {
        const sh = ws.Sheets[name];
        csv.push(xlsx2csv(sh));
      }
      return csv;
    } else {
      const sh = ws.Sheets[ws.SheetNames[0]];
      return xlsx2csv(sh);
    }
  } else {
    const sh = wsorsheet;
    const csv = xlsx2csv(sh);
    return multisheets ? [csv] : csv;
  }
};

const XLSX = {
  decode,
  toCSV,
};
export { XLSX };
