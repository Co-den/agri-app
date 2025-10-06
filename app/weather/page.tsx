"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CloudRain,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sun,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  Thermometer,
  Navigation,
} from "lucide-react";
import { mockWeatherData } from "@/lib/mock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WeatherPage() {
  const { current, forecast, hourly } = mockWeatherData;

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case "partly cloudy":
        return <Cloud className="h-12 w-12 text-gray-400" />;
      case "cloudy":
        return <Cloud className="h-12 w-12 text-gray-500" />;
      case "rainy":
        return <CloudDrizzle className="h-12 w-12 text-blue-500" />;
      case "thunderstorm":
        return <CloudLightning className="h-12 w-12 text-purple-500" />;
      default:
        return <Cloud className="h-12 w-12 text-gray-400" />;
    }
  };

  const getUVIndexColor = (index: number) => {
    if (index <= 2) return "bg-green-500";
    if (index <= 5) return "bg-yellow-500";
    if (index <= 7) return "bg-orange-500";
    if (index <= 10) return "bg-red-500";
    return "bg-purple-500";
  };

  const getUVIndexLabel = (index: number) => {
    if (index <= 2) return "Low";
    if (index <= 5) return "Moderate";
    if (index <= 7) return "High";
    if (index <= 10) return "Very High";
    return "Extreme";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Weather & Forecast
          </h1>
          <p className="text-muted-foreground">
            Real-time weather data and 7-day forecast
          </p>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList>
            <TabsTrigger value="current">Current Weather</TabsTrigger>
            <TabsTrigger value="forecast">7-Day Forecast</TabsTrigger>
            <TabsTrigger value="hourly">Hourly</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {/* Current Weather Hero */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                  <div className="flex items-center gap-6">
                    {getWeatherIcon(current.condition)}
                    <div>
                      <div className="text-5xl font-bold">
                        {current.temperature}°C
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {current.condition}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Feels like {current.feelsLike}°C
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3">
                      <Droplets className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xl font-bold">
                        {current.humidity}%
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Humidity
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3">
                      <Wind className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xl font-bold">
                        {current.windSpeed}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        km/h
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3">
                      <Gauge className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xl font-bold">
                        {current.pressure}
                      </span>
                      <span className="text-xs text-muted-foreground">hPa</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3">
                      <Eye className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xl font-bold">
                        {current.visibility}
                      </span>
                      <span className="text-xs text-muted-foreground">km</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Conditions */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Wind className="h-5 w-5" />
                    Wind
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Speed
                      </span>
                      <span className="font-semibold">
                        {current.windSpeed} km/h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Direction
                      </span>
                      <div className="flex items-center gap-1">
                        <Navigation className="h-4 w-4" />
                        <span className="font-semibold">
                          {current.windDirection}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sun className="h-5 w-5" />
                    UV Index
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full ${getUVIndexColor(
                          current.uvIndex
                        )} flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {current.uvIndex}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {getUVIndexLabel(current.uvIndex)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Protection recommended
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Thermometer className="h-5 w-5" />
                    Temperature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Current
                      </span>
                      <span className="font-semibold">
                        {current.temperature}°C
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Feels Like
                      </span>
                      <span className="font-semibold">
                        {current.feelsLike}°C
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Agricultural Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Agricultural Recommendations</CardTitle>
                <CardDescription>
                  Based on current weather conditions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                    ✓
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-green-900 dark:text-green-100">
                      Good conditions for spraying
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Wind speed is optimal for pesticide application
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    i
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-900 dark:text-blue-100">
                      Moderate irrigation needed
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Current humidity levels suggest irrigation in 2-3 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
                    !
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-orange-900 dark:text-orange-100">
                      High UV exposure
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Ensure workers have adequate sun protection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {forecast.map((day, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      {index === 0
                        ? "Today"
                        : index === 1
                        ? "Tomorrow"
                        : new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                    </CardTitle>
                    <CardDescription>
                      {new Date(day.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      {getWeatherIcon(day.condition)}
                      <div className="text-right">
                        <div className="text-2xl font-bold">{day.high}°</div>
                        <div className="text-sm text-muted-foreground">
                          {day.low}°
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Condition</span>
                        <span className="font-medium">{day.condition}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Rain</span>
                        <span className="font-medium">
                          {day.precipitation}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Humidity</span>
                        <span className="font-medium">{day.humidity}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Wind</span>
                        <span className="font-medium">
                          {day.windSpeed} km/h
                        </span>
                      </div>
                    </div>
                    {day.precipitation > 50 && (
                      <Badge
                        variant="outline"
                        className="w-full justify-center border-blue-600 text-blue-600"
                      >
                        Heavy Rain Expected
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hourly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>24-Hour Temperature Trend</CardTitle>
                <CardDescription>Hourly temperature forecast</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={hourly}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted"
                    />
                    <XAxis dataKey="time" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {hourly.map((hour, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{hour.time}</div>
                        <div className="text-xs text-muted-foreground">
                          {hour.condition}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">
                          {hour.temperature}°
                        </div>
                        {hour.precipitation > 0 && (
                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <CloudRain className="h-3 w-3" />
                            {hour.precipitation}%
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
