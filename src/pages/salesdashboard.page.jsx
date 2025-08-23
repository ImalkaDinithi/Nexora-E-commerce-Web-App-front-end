import SalesDashboardChart  from "../components/SalesDashboardChart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function SalesDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Get an overview of recent sales trends and performance insights
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-blue-300 p-4 rounded-lg">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$415</p>
            <p className="text-xs text-muted-foreground">↑ 5% compared to last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$12,450</p>
            <p className="text-xs text-muted-foreground">↑ 8% compared to last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Customers</CardTitle>
            <CardDescription>Engaged this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1,245</p>
            <p className="text-xs text-muted-foreground">↑ 5% new signups</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart Section */}
      <div>
        <SalesDashboardChart />
      </div>
    </div>
  )
}
