import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
import Chart from '@/app/ui/dashboard/chart';

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <Chart revenue={revenue} />
      </div>
    </div>
  );
}

