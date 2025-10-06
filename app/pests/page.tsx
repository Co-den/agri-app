"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Bug, CloudRain, Droplets, Sprout, CheckCircle2, X } from "lucide-react"
import { mockAlerts, type Alert } from "@/lib/mock-data"

export default function PestsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts)

  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "critical":
        return "border-red-600 bg-red-50 dark:bg-red-950"
      case "high":
        return "border-orange-600 bg-orange-50 dark:bg-orange-950"
      case "medium":
        return "border-yellow-600 bg-yellow-50 dark:bg-yellow-950"
      case "low":
        return "border-blue-600 bg-blue-50 dark:bg-blue-950"
    }
  }

  const getSeverityBadge = (severity: Alert["severity"]) => {
    const colors: Record<Alert["severity"], string> = {
      critical: "border-red-600 text-red-600",
      high: "border-orange-600 text-orange-600",
      medium: "border-yellow-600 text-yellow-600",
      low: "border-blue-600 text-blue-600",
    }
    return (
      <Badge variant="outline" className={colors[severity]}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    )
  }

  const getTypeIcon = (type: Alert["type"]) => {
    switch (type) {
      case "pest":
        return <Bug className="h-5 w-5" />
      case "disease":
        return <AlertTriangle className="h-5 w-5" />
      case "weather":
        return <CloudRain className="h-5 w-5" />
      case "soil":
        return <Sprout className="h-5 w-5" />
      case "irrigation":
        return <Droplets className="h-5 w-5" />
    }
  }

  const dismissAlert = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "dismissed" } : alert)))
  }

  const resolveAlert = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "resolved" } : alert)))
  }

  const activeAlerts = alerts.filter((a) => a.status === "active")
  const resolvedAlerts = alerts.filter((a) => a.status === "resolved")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pest & Disease Alerts</h1>
          <p className="text-muted-foreground">Monitor and manage farm alerts and notifications</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeAlerts.length}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <Bug className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeAlerts.filter((a) => a.severity === "high").length}</div>
              <p className="text-xs text-muted-foreground">Urgent action needed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pest Alerts</CardTitle>
              <Bug className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeAlerts.filter((a) => a.type === "pest").length}</div>
              <p className="text-xs text-muted-foreground">Active infestations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resolvedAlerts.length}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts List */}
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Alerts</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
            <TabsTrigger value="all">All Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeAlerts.length === 0 ? (
              <Card>
                <CardContent className="flex min-h-[400px] items-center justify-center">
                  <div className="text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                    <h3 className="mt-4 text-lg font-semibold">No Active Alerts</h3>
                    <p className="mt-2 text-sm text-muted-foreground">All alerts have been addressed</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              activeAlerts.map((alert) => (
                <Card key={alert.id} className={`border-2 ${getSeverityColor(alert.severity)}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 ${alert.severity === "high" || alert.severity === "critical" ? "text-orange-600 dark:text-orange-400" : alert.severity === "medium" ? "text-yellow-600 dark:text-yellow-400" : "text-blue-600 dark:text-blue-400"}`}
                        >
                          {getTypeIcon(alert.type)}
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{alert.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="capitalize">{alert.type}</span>
                            <span>•</span>
                            <span>{alert.location}</span>
                            <span>•</span>
                            <span>{new Date(alert.timestamp).toLocaleString()}</span>
                          </CardDescription>
                        </div>
                      </div>
                      {getSeverityBadge(alert.severity)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{alert.description}</p>
                    {alert.actionRequired && (
                      <div className="rounded-lg bg-background p-3">
                        <p className="text-sm font-medium">Action Required:</p>
                        <p className="text-sm text-muted-foreground">{alert.actionRequired}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => resolveAlert(alert.id)}>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Mark Resolved
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => dismissAlert(alert.id)}>
                        <X className="mr-2 h-4 w-4" />
                        Dismiss
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            {resolvedAlerts.length === 0 ? (
              <Card>
                <CardContent className="flex min-h-[400px] items-center justify-center">
                  <div className="text-center">
                    <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Resolved Alerts</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Resolved alerts will appear here</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              resolvedAlerts.map((alert) => (
                <Card key={alert.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-green-600">{getTypeIcon(alert.type)}</div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{alert.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="capitalize">{alert.type}</span>
                            <span>•</span>
                            <span>{alert.location}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        Resolved
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {alerts.map((alert) => (
              <Card
                key={alert.id}
                className={alert.status === "active" ? `border-2 ${getSeverityColor(alert.severity)}` : "opacity-75"}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 ${alert.status === "resolved" ? "text-green-600" : alert.severity === "high" || alert.severity === "critical" ? "text-orange-600 dark:text-orange-400" : "text-muted-foreground"}`}
                      >
                        {getTypeIcon(alert.type)}
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{alert.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span className="capitalize">{alert.type}</span>
                          <span>•</span>
                          <span>{alert.location}</span>
                          <span>•</span>
                          <span>{new Date(alert.timestamp).toLocaleString()}</span>
                        </CardDescription>
                      </div>
                    </div>
                    {alert.status === "resolved" ? (
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        Resolved
                      </Badge>
                    ) : (
                      getSeverityBadge(alert.severity)
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{alert.description}</p>
                  {alert.status === "active" && (
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => resolveAlert(alert.id)}>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Mark Resolved
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => dismissAlert(alert.id)}>
                        <X className="mr-2 h-4 w-4" />
                        Dismiss
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
