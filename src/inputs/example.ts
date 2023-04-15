type ExcelData = string | number | (string | number)[];
export type TableData = ExcelData[][];
export type Delimiter = string

export const example: TableData = [
    ['cool', 'yeah', 'nice'],
    ['1', '2', '3'],
    [1, 2, 3, 4]
]