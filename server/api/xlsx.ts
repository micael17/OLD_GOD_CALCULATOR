import fs from "fs";
import * as XLSX from 'xlsx';
export default defineEventHandler((event) => {
    return XLSX.readFile(process.cwd() + '/public/2023.xlsx')
})