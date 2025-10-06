export interface Crop {
  id: string
  name: string
  variety: string
  field: string
  area: number
  plantingDate: string
  expectedHarvest: string
  status: "planning" | "planted" | "growing" | "harvesting" | "harvested"
  health: "excellent" | "good" | "fair" | "poor"
  progress: number
  soilType: string
  irrigationType: string
  notes?: string
}

export const mockCrops: Crop[] = [
  {
    id: "1",
    name: "Wheat",
    variety: "Hard Red Winter",
    field: "Field A",
    area: 15,
    plantingDate: "2024-10-15",
    expectedHarvest: "2025-06-20",
    status: "growing",
    health: "good",
    progress: 75,
    soilType: "Loamy",
    irrigationType: "Drip",
    notes: "Regular monitoring for aphids required",
  },
  {
    id: "2",
    name: "Corn",
    variety: "Yellow #2",
    field: "Field B",
    area: 20,
    plantingDate: "2024-11-01",
    expectedHarvest: "2025-07-15",
    status: "growing",
    health: "excellent",
    progress: 45,
    soilType: "Clay Loam",
    irrigationType: "Sprinkler",
  },
  {
    id: "3",
    name: "Soybeans",
    variety: "Grade #1",
    field: "Field C",
    area: 10,
    plantingDate: "2024-11-20",
    expectedHarvest: "2025-08-01",
    status: "growing",
    health: "fair",
    progress: 30,
    soilType: "Sandy Loam",
    irrigationType: "Flood",
    notes: "Monitor soil moisture levels closely",
  },
]

export interface Field {
  id: string
  name: string
  area: number
  soilType: string
  soilHealth: number
  pH: number
  nitrogen: number
  phosphorus: number
  potassium: number
  lastTested: string
}

export const mockFields: Field[] = [
  {
    id: "1",
    name: "Field A",
    area: 15,
    soilType: "Loamy",
    soilHealth: 85,
    pH: 6.8,
    nitrogen: 45,
    phosphorus: 38,
    potassium: 52,
    lastTested: "2024-12-01",
  },
  {
    id: "2",
    name: "Field B",
    area: 20,
    soilType: "Clay Loam",
    soilHealth: 92,
    pH: 7.2,
    nitrogen: 52,
    phosphorus: 42,
    potassium: 48,
    lastTested: "2024-12-01",
  },
  {
    id: "3",
    name: "Field C",
    area: 10,
    soilType: "Sandy Loam",
    soilHealth: 78,
    pH: 6.5,
    nitrogen: 38,
    phosphorus: 35,
    potassium: 45,
    lastTested: "2024-12-01",
  },
]

export interface WeatherData {
  current: {
    temperature: number
    feelsLike: number
    humidity: number
    windSpeed: number
    windDirection: string
    pressure: number
    visibility: number
    uvIndex: number
    condition: string
    icon: string
  }
  forecast: {
    date: string
    high: number
    low: number
    condition: string
    icon: string
    precipitation: number
    humidity: number
    windSpeed: number
  }[]
  hourly: {
    time: string
    temperature: number
    condition: string
    precipitation: number
  }[]
}

export const mockWeatherData: WeatherData = {
  current: {
    temperature: 28,
    feelsLike: 30,
    humidity: 65,
    windSpeed: 12,
    windDirection: "NE",
    pressure: 1013,
    visibility: 10,
    uvIndex: 7,
    condition: "Partly Cloudy",
    icon: "partly-cloudy",
  },
  forecast: [
    {
      date: "2025-01-07",
      high: 30,
      low: 22,
      condition: "Sunny",
      icon: "sunny",
      precipitation: 0,
      humidity: 55,
      windSpeed: 10,
    },
    {
      date: "2025-01-08",
      high: 29,
      low: 21,
      condition: "Partly Cloudy",
      icon: "partly-cloudy",
      precipitation: 10,
      humidity: 60,
      windSpeed: 15,
    },
    {
      date: "2025-01-09",
      high: 26,
      low: 20,
      condition: "Rainy",
      icon: "rainy",
      precipitation: 40,
      humidity: 75,
      windSpeed: 20,
    },
    {
      date: "2025-01-10",
      high: 25,
      low: 19,
      condition: "Thunderstorm",
      icon: "thunderstorm",
      precipitation: 80,
      humidity: 85,
      windSpeed: 25,
    },
    {
      date: "2025-01-11",
      high: 27,
      low: 20,
      condition: "Cloudy",
      icon: "cloudy",
      precipitation: 20,
      humidity: 70,
      windSpeed: 18,
    },
    {
      date: "2025-01-12",
      high: 28,
      low: 21,
      condition: "Partly Cloudy",
      icon: "partly-cloudy",
      precipitation: 5,
      humidity: 65,
      windSpeed: 12,
    },
    {
      date: "2025-01-13",
      high: 29,
      low: 22,
      condition: "Sunny",
      icon: "sunny",
      precipitation: 0,
      humidity: 60,
      windSpeed: 10,
    },
  ],
  hourly: [
    { time: "00:00", temperature: 24, condition: "Clear", precipitation: 0 },
    { time: "03:00", temperature: 23, condition: "Clear", precipitation: 0 },
    { time: "06:00", temperature: 22, condition: "Partly Cloudy", precipitation: 0 },
    { time: "09:00", temperature: 25, condition: "Partly Cloudy", precipitation: 0 },
    { time: "12:00", temperature: 28, condition: "Partly Cloudy", precipitation: 0 },
    { time: "15:00", temperature: 30, condition: "Sunny", precipitation: 0 },
    { time: "18:00", temperature: 27, condition: "Partly Cloudy", precipitation: 0 },
    { time: "21:00", temperature: 25, condition: "Clear", precipitation: 0 },
  ],
}

export interface Alert {
  id: string
  type: "weather" | "pest" | "disease" | "soil" | "irrigation"
  severity: "low" | "medium" | "high" | "critical"
  title: string
  description: string
  location: string
  timestamp: string
  actionRequired?: string
  status: "active" | "resolved" | "dismissed"
}

export const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "pest",
    severity: "high",
    title: "Aphid Infestation Risk",
    description: "High aphid activity detected in neighboring farms. Immediate inspection recommended for wheat crops.",
    location: "Field A",
    timestamp: "2025-01-06T10:30:00",
    actionRequired: "Inspect wheat crops and consider preventive treatment",
    status: "active",
  },
  {
    id: "2",
    type: "weather",
    severity: "medium",
    title: "Heavy Rain Expected",
    description: "Forecast shows 40mm of rainfall tomorrow afternoon. Ensure proper drainage systems are functional.",
    location: "All Fields",
    timestamp: "2025-01-06T08:00:00",
    actionRequired: "Check drainage systems and postpone irrigation",
    status: "active",
  },
  {
    id: "3",
    type: "disease",
    severity: "high",
    title: "Fungal Disease Alert",
    description: "High humidity conditions favorable for fungal growth. Monitor crops closely for early signs.",
    location: "Field C",
    timestamp: "2025-01-06T06:15:00",
    actionRequired: "Increase monitoring frequency and prepare fungicide if needed",
    status: "active",
  },
  {
    id: "4",
    type: "soil",
    severity: "medium",
    title: "Low Nitrogen Levels",
    description: "Soil test results show nitrogen levels below optimal range for corn growth.",
    location: "Field B",
    timestamp: "2025-01-05T14:20:00",
    actionRequired: "Apply nitrogen fertilizer within next week",
    status: "active",
  },
  {
    id: "5",
    type: "irrigation",
    severity: "low",
    title: "Irrigation Schedule Due",
    description: "Field A irrigation scheduled for tomorrow morning based on soil moisture levels.",
    location: "Field A",
    timestamp: "2025-01-05T18:00:00",
    status: "active",
  },
]
