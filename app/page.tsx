import Chart from "@/components/ui/Chart/Chart";

export default function Home() {
  return (
    <main className="">
      <div>
        <h2 className="text-3xl mb-4">Charts</h2>
        <div className="grid grid-cols-12 gap-4">
          <Chart type="bar" cols={12} />
          <Chart type="pie" legends={false} cols={3} />
          <Chart type="line" cols={5} />
          <Chart type="doughnut" legends={false} cols={4}/>
        </div>
      </div>
    </main>
  );
}
