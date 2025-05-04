import React from 'react'
import { Table, Tag } from 'antd';
interface DataType {
    payPeriod: string;
    totalHours: number;
    grossPay: string;
    taxesAndDeductions: string;
    netPay: string;
    status: 'Processing' | 'Paid';
  }
const PayRoll = () => {
    const columns = [
        {
          title: 'Pay Period',
          dataIndex: 'payPeriod',
          key: 'payPeriod',
        },
        {
          title: 'Total Hours',
          dataIndex: 'totalHours',
          key: 'totalHours',
        },
        {
          title: 'Gross Pay',
          dataIndex: 'grossPay',
          key: 'grossPay',
        },
        {
          title: 'Taxes & Deductions',
          dataIndex: 'taxesAndDeductions',
          key: 'taxesAndDeductions',
        },
        {
          title: 'Net Pay',
          dataIndex: 'netPay',
          key: 'netPay',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status: 'Processing' | 'Paid') => {
           
            return (
                <p
                className={` text-center rounded-full px-2 py-1 ${
                  status === "Paid"
                    ? "text-[#18C33D] bg-[#E7F8EB]"
                    : "text-[#D9B800] bg-[#FBF7E5]"
                }`}
              >
                {status}
              </p>
            );
          },
        },
      ];
      
      const data: DataType[] = [
        {
          payPeriod: '01/02/2025 to 14/02/2025',
          totalHours: 82,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Processing',
        },
        {
          payPeriod: '15/02/2025 to 28/02/2025',
          totalHours: 79,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
        {
          payPeriod: '21/02/2025 to 11/03/2025',
          totalHours: 81,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
        {
          payPeriod: '20/02/2025 to 11/03/2025',
          totalHours: 82,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
        {
          payPeriod: '11/02/2025 to 11/03/2025',
          totalHours: 84,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
        {
          payPeriod: '13/02/2025 to 11/03/2025',
          totalHours: 75,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
        {
          payPeriod: '12/02/2025 to 11/03/2025',
          totalHours: 80,
          grossPay: '$2,500',
          taxesAndDeductions: '$300',
          netPay: '$2,200',
          status: 'Paid',
        },
      ];
      
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
        <p className="text-xl font-semibold">Payroll History</p>

        <Table columns={columns} dataSource={data} rowKey="payPeriod" pagination={false} />
    </div>
  )
}

export default PayRoll