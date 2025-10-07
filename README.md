
# 🌾 AgriConnect Dashboard

AgriConnect is a smart agriculture management platform designed to help farmers, agronomists, and agribusiness owners monitor and manage crop data, weather conditions, field activities, and market insights — all in one place.

> **Live Demo:** [https://agri-app-blush.vercel.app/dashboard](https://agri-app-blush.vercel.app/dashboard)

---

## 🚀 Overview

The **Dashboard** serves as the main control center for the AgriConnect application.  
It provides a summarized view of key farming metrics such as:

- Active crops and cultivated hectares  
- Weather forecasts and alerts  
- Market trends for key commodities  
- Crop growth progress  
- Active pest or disease warnings  

Users can easily navigate to other modules such as:

- Crop Planning  
- Weather & Alerts  
- Pest & Disease  
- Market Insights  
- Field Monitoring  

---

## 👥 User Roles

| Role | Description | Permissions |
|------|--------------|--------------|
| **Admin / Farm Owner** | Full control over all modules | Create, edit, delete, manage users |
| **Manager / Agronomist** | Oversees crop data, alerts, and weather analysis | Add or modify crop info, manage alerts |
| **Field Staff / Viewer** | Monitors data without editing | View-only access to dashboard and reports |

---

## 🧭 Dashboard Overview

| Section | Description | Interactions | Data Source |
|----------|--------------|---------------|--------------|
| **Active Crops** | Displays total active crops and cultivated land area | — | Crop collection / DB |
| **Weather Status** | Current temperature, humidity, and condition | — | Weather API |
| **Market Trend** | Shows price movement of commodities | Click to “Market Insights” | Market data API |
| **Active Alerts** | Pest, disease, and weather alerts | “View All Alerts” link | Alert service / DB |
| **Today’s Forecast** | Hourly or daily weather update | “View Full Forecast” link | Weather API |
| **Crop Growth** | Percentage progress of each crop | “Manage Crops” | Crop model / growth data |
| **Market Prices** | Live commodity pricing | “View Market Insights” | Market data API |

---

## 🧩 Modules

### 🌱 Crop Planning
Plan and schedule crop planting, allocate fields, and estimate harvest time.

**Inputs:** Crop type, field size, planting date  
**Outputs:** Planting calendar, growth projections  

### 🌦 Weather & Alerts
Monitor real-time weather data and severe alerts that could affect crops.

**Inputs:** API weather data  
**Outputs:** Forecast charts, warnings, humidity and temperature analytics  

### 🐛 Pest & Disease
Tracks or predicts potential pest infestations and plant diseases.

**Inputs:** Sensor data, weather, crop type  
**Outputs:** Risk alerts, recommendations  

### 📊 Market Insights
Provides commodity pricing, trends, and predictive analytics.

**Inputs:** Price feeds, historical data  
**Outputs:** Market charts, price comparison  

### 🌾 Field Monitoring
Displays sensor data (soil moisture, temperature, pH, etc.) and field health indicators.

**Inputs:** IoT sensor readings  
**Outputs:** Graphs, performance analytics  

---

## 🔗 Example API Structure

Below is a suggested API schema to document the backend endpoints:

```http
GET /api/dashboard/summary

Response:

{
  "activeCrops": 12,
  "totalHectares": 45,
  "weather": {
    "status": "Partly Cloudy",
    "temperature": 28,
    "humidity": 65
  },
  "marketTrend": [
    { "commodity": "Wheat", "changePercent": 12.5 },
    { "commodity": "Corn", "changePercent": 5.2 }
  ],
  "activeAlerts": 3
}

> Document all endpoints under /api/ including their method, parameters, and expected responses.




---

🧠 Data Flow & Integrations

Frontend: React (Next.js)

Backend: Node.js / Express

Database: MongoDB

Integrations:

Weather API (e.g. OpenWeather or Weatherbit)

Market Data API

IoT Sensor Data (optional)


Authentication: JWT-based login system

Notifications: Email or in-app alert system



---

🎨 UI/UX Behavior

Fully responsive layout for desktop and mobile

Loading skeletons for API data

Error fallback: “Data unavailable” for failed requests

Role-based route protection

Active nav highlighting

Data filtering and sorting for tables

Optional export to CSV / PDF



---

📖 Glossary

Term	Definition

Active Crop	A crop currently planted and not yet harvested
Alert Severity	Categorization of risk (Low / Medium / High)
Hectare	Unit of area equal to 10,000 m²
Market Trend	Weekly percentage change in commodity price
Growth %	Ratio of days since planting vs expected growth cycle



---

🧭 User Flow

1. Login / Authentication
User logs into the platform using credentials.


2. Dashboard View
Displays summarized farm overview (weather, crops, alerts).


3. Manage Crops
Navigate to Crop Planning module to add/edit crops.


4. Alerts Review
Check current pest or weather warnings.


5. Market Insights
View commodity prices and trends.


6. Field Monitoring
Inspect sensor data and field status.




---

⚠️ Edge Cases

No active crops → display “No crops available” message

Weather API failure → fallback to cached or blank data

Missing sensor data → show “Awaiting data” placeholder

Conflicting alerts → group by field and severity

Market API delay → timestamp last successful update



---

🧩 Future Improvements

Satellite or drone image integration

Yield forecasting using AI models

Farm financial tracking

Mobile app companion with push notifications

Multi-farm / cooperative management



---

📄 License

This project is proprietary. Unauthorized duplication or distribution is prohibited.
For usage or integration rights, contact the project maintainers.


---

Author: AgriConnect Team
Deployed on: Vercel
Repository: (Add GitHub link when available)


