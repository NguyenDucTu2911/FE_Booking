// import { resolve } from "@reach/router/lib/utils";
// import { reject } from "lodash";
// import * as XLSX from "xlsx/xlsx.mjs";
class CommonUtils {
  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  // static exportExcel(data, nameSheet, nameFile) {
  //   return new Promise((resolve, reject) => {
  //     var wb = XLSX.utils.book_new();
  //     var ws = XLSX.utils.json_to_sheet(data);
  //     XLSX.utils.book_append_sheet(wb, ws, nameSheet);
  //     XLSX.writeFile(wb, `${nameFile}.xlsx`);
  //     resolve("done");
  //   });
  // }
}

export default CommonUtils;
