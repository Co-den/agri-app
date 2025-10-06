"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sprout, Plus, Calendar, MapPin, Droplets, TrendingUp, Search } from "lucide-react"
import { mockCrops, type Crop } from "@/lib/mock-data"

export default function CropsPage() {
  const [crops, setCrops] = useState<Crop[]>(mockCrops)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredCrops = crops.filter(
    (crop) =>
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.field.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getHealthColor = (health: Crop["health"]) => {
    switch (health) {
      case "excellent":
        return "bg-green-500"
      case "good":
        return "bg-blue-500"
      case "fair":
        return "bg-yellow-500"
      case "poor":
        return "bg-red-500"
    }
  }

  const getStatusBadge = (status: Crop["status"]) => {
    const variants: Record<Crop["status"], { label: string; className: string }> = {
      planning: { label: "Planning", className: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100" },
      planted: { label: "Planted", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" },
      growing: { label: "Growing", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" },
      harvesting: {
        label: "Harvesting",
        className: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
      },
      harvested: {
        label: "Harvested",
        className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
      },
    }
    const variant = variants[status]
    return (
      <Badge variant="outline" className={variant.className}>
        {variant.label}
      </Badge>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Crop Planning</h1>
            <p className="text-muted-foreground">Manage and monitor your crops</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Crop
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Crop</DialogTitle>
                <DialogDescription>Plan a new crop for your field</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="crop-name">Crop Name</Label>
                    <Input id="crop-name" placeholder="e.g., Wheat" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variety">Variety</Label>
                    <Input id="variety" placeholder="e.g., Hard Red Winter" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="field">Field</Label>
                    <Select>
                      <SelectTrigger id="field">
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="field-a">Field A</SelectItem>
                        <SelectItem value="field-b">Field B</SelectItem>
                        <SelectItem value="field-c">Field C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area (hectares)</Label>
                    <Input id="area" type="number" placeholder="15" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="planting-date">Planting Date</Label>
                    <Input id="planting-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="harvest-date">Expected Harvest</Label>
                    <Input id="harvest-date" type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="soil-type">Soil Type</Label>
                    <Select>
                      <SelectTrigger id="soil-type">
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="clay">Clay Loam</SelectItem>
                        <SelectItem value="sandy">Sandy Loam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="irrigation">Irrigation Type</Label>
                    <Select>
                      <SelectTrigger id="irrigation">
                        <SelectValue placeholder="Select irrigation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drip">Drip</SelectItem>
                        <SelectItem value="sprinkler">Sprinkler</SelectItem>
                        <SelectItem value="flood">Flood</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add any additional notes..." />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>Add Crop</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Crops</CardTitle>
              <Sprout className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{crops.length}</div>
              <p className="text-xs text-muted-foreground">Active plantings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Area</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{crops.reduce((sum, crop) => sum + crop.area, 0)} ha</div>
              <p className="text-xs text-muted-foreground">Under cultivation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Health</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Good</div>
              <p className="text-xs text-muted-foreground">Overall crop health</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Harvest</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 days</div>
              <p className="text-xs text-muted-foreground">Wheat - Field A</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search crops or fields..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Crops List */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Crops</TabsTrigger>
            <TabsTrigger value="growing">Growing</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCrops.map((crop) => (
                <Card key={crop.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{crop.name}</CardTitle>
                        <CardDescription>{crop.variety}</CardDescription>
                      </div>
                      {getStatusBadge(crop.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Growth Progress</span>
                        <span className="font-medium">{crop.progress}%</span>
                      </div>
                      <Progress value={crop.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{crop.field}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-muted-foreground" />
                        <span>{crop.irrigationType}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Health Status</span>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${getHealthColor(crop.health)}`} />
                        <span className="font-medium capitalize">{crop.health}</span>
                      </div>
                    </div>
                    <div className="space-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Planted:</span>
                        <span>{new Date(crop.plantingDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Harvest:</span>
                        <span>{new Date(crop.expectedHarvest).toLocaleDateString()}</span>
                      </div>
                    </div>
                    {crop.notes && (
                      <p className="rounded-lg bg-muted p-2 text-xs text-muted-foreground">{crop.notes}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="growing" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCrops
                .filter((crop) => crop.status === "growing")
                .map((crop) => (
                  <Card key={crop.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{crop.name}</CardTitle>
                          <CardDescription>{crop.variety}</CardDescription>
                        </div>
                        {getStatusBadge(crop.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Growth Progress</span>
                          <span className="font-medium">{crop.progress}%</span>
                        </div>
                        <Progress value={crop.progress} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{crop.field}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-muted-foreground" />
                          <span>{crop.irrigationType}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Health Status</span>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${getHealthColor(crop.health)}`} />
                          <span className="font-medium capitalize">{crop.health}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="planning" className="space-y-4">
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border">
              <div className="text-center">
                <Sprout className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No crops in planning</h3>
                <p className="mt-2 text-sm text-muted-foreground">Start planning your next crop season</p>
                <Button className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Crop
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
