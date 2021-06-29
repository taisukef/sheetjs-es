import { XLSX as xlsx } from "./xlsx.full.min.js";
//import { XLSX as xlsx } from "./xlsx.mini.js";
import { xlsx2csv } from "./xlsx2csv.js";

const decode = (bin) => {
  const ws = xlsx.read(bin, { type: "array" });
  return ws;
};
const toCSV = (wsorsheet) => {
  if (wsorsheet.Sheets) {
    const ws = wsorsheet;
    const sh = ws.Sheets[ws.SheetNames[0]];
    return xlsx2csv(sh);
  } else {
    const sh = wsorsheet;
    return xlsx2csv(sh);
  }
};

const XLSX = {
  decode,
  toCSV,
};
export { XLSX };
