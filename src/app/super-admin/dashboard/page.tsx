import { RecentSales } from './_components/recent-sales';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import CalendarDateRangePicker from './_components/date-range-picker';
import { Button } from '@/components/ui/button';
import Overview from './_components/overview';

export default async function SuperAdminDashboardPage() {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            {/* Header Section - Membuat flexbox menjadi column di mobile */}
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <CalendarDateRangePicker />
                    <Button className="w-full sm:w-auto">Download</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                {/* Tab List - Scroll horizontal di mobile */}
                <div className="overflow-x-auto">
                    <TabsList className="inline-flex min-w-full sm:min-w-0">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-4">
                    {/* Stats Cards - Mengubah grid layout */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                        {/* Card 1 */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl sm:text-2xl font-bold">$45,231.89</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        {/* Ulangi untuk card lainnya dengan struktur yang sama */}
                        {/* ... */}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
                        <Card className="col-span-full md:col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2 overflow-x-auto">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card className="col-span-full md:col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Sales</CardTitle>
                                <CardDescription className="hidden sm:block">
                                    You made 265 sales this month.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}