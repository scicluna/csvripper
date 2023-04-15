import fs from 'fs';
import { example } from './inputs/example.js';//Import your data here.
import { TableData, Delimiter } from './inputs/example.js';


function arrayToCSV(data: TableData, delimiter: Delimiter = ','): string {
    return data.map(row => row.map(value => {
        if (typeof value === 'string' && (value.includes(delimiter) || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
    }).join(delimiter)).join('\n');
}

function writeCSVToFile(fileName: string, data: TableData, delimiter: Delimiter = ','): void {
    const csvContent = arrayToCSV(data, delimiter);
    fs.writeFile(fileName, csvContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing CSV file:', err);
        } else {
            console.log('CSV file has been written:', fileName);
        }
    });
}

//change data source to w/e you want changing the data and name to match your preferences.
const useData = { name: 'example', data: example }
writeCSVToFile(`./outputs/output${useData.name}.csv`, useData.data)
