'use client';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { monthMap, monthNamesTranslated, Revenue } from '@/app/lib/definitions';

export default function Chart({ revenue }: { revenue: Revenue[] }) {

  

const sortedMonthlyRevenue = revenue
  .slice()
  .sort((a, b) => monthMap[a.month] - monthMap[b.month]);

const translatedMonthlyRevenue = sortedMonthlyRevenue.map((monthlyRevenue) => ({
  ...monthlyRevenue,
  month: monthNamesTranslated[monthlyRevenue.month],
}));
  

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={translatedMonthlyRevenue}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            `R$${new Intl.NumberFormat('pt-BR').format(value)}`
          }
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
          }}
          labelStyle={{ fontWeight: 'bold' }}
          formatter={(value: number) => [
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(value),
            'Revenue',
          ]}
        />
        <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
