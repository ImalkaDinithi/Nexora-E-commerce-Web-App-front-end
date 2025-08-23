import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, 
    Line, 
    LineChart, 
    XAxis 
} from "recharts"

import {
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  last7days: {
    label: "Last 7 Days",
    color: "var(--chart-1)",
  },
  last30days: {
    label: "Last 30 Days",
    color: "var(--chart-2)",
  },
}

export function SalesDashboardChart() {
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/api/sales/summary") 
        const data = await res.json()

        // Merge into single array for recharts
        const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
        const merged = days.map((day, idx) => ({
          day,
          last7days: data.last7Days.find((d) => d._id === idx + 1)?.total || 0,
          last30days: data.last30Days.find((d) => d._id === idx + 1)?.total || 0,
        }))

        setChartData(merged.slice(-7)) // Show last 7 days
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <Card className={"border-b-emerald-700"}>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Comparison: Last 7 days vs Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="last7days"
              type="monotone"
              stroke="var(--color-last7days)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="last30days"
              type="monotone"
              stroke="var(--color-last30days)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Sales trending up <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground">
              Real-time data from backend API
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default SalesDashboardChart;