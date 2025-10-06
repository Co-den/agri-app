"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Sprout,
  CloudRain,
  TrendingUp,
  AlertTriangle,
  Droplets,
  Thermometer,
  Wind,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your farm overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
              <Sprout className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Across 45 hectares</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weather Status</CardTitle>
              <CloudRain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Partly Cloudy</div>
              <p className="text-xs text-muted-foreground">28°C, 65% humidity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">+12.5%</div>
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-xs text-muted-foreground">Wheat prices this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 pest, 1 weather</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weather Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Weather</CardTitle>
              <CardDescription>Current conditions and forecast</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-4">
                  <Thermometer className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">28°C</span>
                  <span className="text-xs text-muted-foreground">Temperature</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-4">
                  <Droplets className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">65%</span>
                  <span className="text-xs text-muted-foreground">Humidity</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-4">
                  <Wind className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-xs text-muted-foreground">km/h Wind</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/weather">View Full Forecast</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>Important notifications for your farm</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-900 dark:bg-orange-950">
                <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Aphid Infestation Risk</p>
                  <p className="text-xs text-orange-700 dark:text-orange-300">
                    Field A - Wheat crop requires inspection
                  </p>
                </div>
                <Badge variant="outline" className="border-orange-600 text-orange-600">
                  High
                </Badge>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900 dark:bg-yellow-950">
                <CloudRain className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">Heavy Rain Expected</p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Tomorrow afternoon, 40mm precipitation</p>
                </div>
                <Badge variant="outline" className="border-yellow-600 text-yellow-600">
                  Medium
                </Badge>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-900 dark:bg-orange-950">
                <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Fungal Disease Alert</p>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Field C - High humidity conditions</p>
                </div>
                <Badge variant="outline" className="border-orange-600 text-orange-600">
                  High
                </Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/pests">View All Alerts</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Crop Status */}
          <Card>
            <CardHeader>
              <CardTitle>Crop Growth Status</CardTitle>
              <CardDescription>Current stage and health of your crops</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Wheat - Field A</span>
                  <span className="text-muted-foreground">75% to harvest</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Corn - Field B</span>
                  <span className="text-muted-foreground">45% to harvest</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Soybeans - Field C</span>
                  <span className="text-muted-foreground">30% to harvest</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/crops">Manage Crops</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Market Prices */}
          <Card>
            <CardHeader>
              <CardTitle>Market Prices</CardTitle>
              <CardDescription>Latest commodity prices per ton</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium">Wheat</p>
                  <p className="text-sm text-muted-foreground">Hard Red Winter</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$285.50</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+12.5%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium">Corn</p>
                  <p className="text-sm text-muted-foreground">Yellow #2</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$198.75</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+5.2%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium">Soybeans</p>
                  <p className="text-sm text-muted-foreground">Grade #1</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$412.30</p>
                  <div className="flex items-center gap-1 text-sm text-red-600">
                    <ArrowDownRight className="h-3 w-3" />
                    <span>-2.1%</span>
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/market">View Market Insights</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
