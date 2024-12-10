export interface IColumn {
    id: 'date' | 'cash' | 'bank' | 'deduction' | 'income';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }