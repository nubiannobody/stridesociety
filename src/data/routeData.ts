// Route data for all Stride Society walks in Renton, WA
export interface RouteData {
  name: string;
  distance: string;
  time: string;
  difficulty: string;
  type: string;
  coordinates: [number, number][];
  startPoint: {
    lat: number;
    lng: number;
    name: string;
  };
  endPoint: {
    lat: number;
    lng: number;
    name: string;
  };
  waypoints?: {
    lat: number;
    lng: number;
    name: string;
  }[];
  terrain: string;
  theme: string;
  highlights: string[];
  image: string;
}

export const routeData: { [key: string]: RouteData } = {
  "fitbar-to-coulon": {
    name: "FitBar to Coulon Park",
    distance: "4.0 miles",
    time: "1 hour 20 minutes",
    difficulty: "Moderate",
    type: "Out & Back",
    coordinates: [
      [47.4898, -122.2023], // FitBar Café area
      [47.4885, -122.2015],
      [47.4870, -122.2000],
      [47.4855, -122.1985],
      [47.4840, -122.1970],
      [47.4825, -122.1955],
      [47.4810, -122.1940],
      [47.4795, -122.1925],
      [47.4780, -122.1910],
      [47.4765, -122.1895],
      [47.4750, -122.1880],
      [47.4735, -122.1865],
      [47.4720, -122.1850],
      [47.4705, -122.1835],
      [47.4690, -122.1820],
      [47.4675, -122.1805],
      [47.4660, -122.1790],
      [47.4645, -122.1775],
      [47.4630, -122.1760],
      [47.4615, -122.1745] // Gene Coulon Memorial Beach Park
    ],
    startPoint: {
      lat: 47.4898,
      lng: -122.2023,
      name: "FitBar Café"
    },
    endPoint: {
      lat: 47.4615,
      lng: -122.1745,
      name: "Gene Coulon Memorial Beach Park"
    },
    waypoints: [
      {
        lat: 47.4825,
        lng: -122.1955,
        name: "Renton Community Center"
      },
      {
        lat: 47.4720,
        lng: -122.1850,
        name: "Renton Library"
      }
    ],
    terrain: "Paved",
    theme: "A scenic city-to-waterfront route starting at FitBar Café and ending at Coulon Park. Ideal for casual walkers and community connection.",
    highlights: ["Waterfront views", "Urban to nature", "Coffee stop"],
    image: "https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  
  "coos-creek-trail": {
    name: "Coos Creek Trail Loop",
    distance: "2.2 miles",
    time: "45 minutes",
    difficulty: "Easy",
    type: "Loop",
    coordinates: [
      [47.4950, -122.1800], // Coos Creek Trailhead
      [47.4960, -122.1790],
      [47.4970, -122.1780],
      [47.4980, -122.1770],
      [47.4990, -122.1760],
      [47.5000, -122.1750],
      [47.5010, -122.1740],
      [47.5020, -122.1730],
      [47.5010, -122.1720],
      [47.5000, -122.1710],
      [47.4990, -122.1720],
      [47.4980, -122.1730],
      [47.4970, -122.1740],
      [47.4960, -122.1750],
      [47.4950, -122.1760],
      [47.4940, -122.1770],
      [47.4950, -122.1780],
      [47.4950, -122.1790],
      [47.4950, -122.1800] // Back to start
    ],
    startPoint: {
      lat: 47.4950,
      lng: -122.1800,
      name: "Coos Creek Trailhead"
    },
    endPoint: {
      lat: 47.4950,
      lng: -122.1800,
      name: "Coos Creek Trailhead"
    },
    waypoints: [
      {
        lat: 47.5020,
        lng: -122.1730,
        name: "Creek Overlook"
      }
    ],
    terrain: "Natural Trail",
    theme: "Shaded, nature-heavy path perfect for early mornings",
    highlights: ["Shaded trail", "Creek views", "Morning birds"],
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  "heritage-park": {
    name: "Heritage Park Path",
    distance: "3.5 miles",
    time: "1 hour 10 minutes",
    difficulty: "Easy",
    type: "Loop",
    coordinates: [
      [47.5100, -122.2100], // Heritage Park entrance
      [47.5110, -122.2090],
      [47.5120, -122.2080],
      [47.5130, -122.2070],
      [47.5140, -122.2060],
      [47.5150, -122.2050],
      [47.5160, -122.2040],
      [47.5170, -122.2030],
      [47.5180, -122.2020],
      [47.5190, -122.2010],
      [47.5200, -122.2000],
      [47.5190, -122.1990],
      [47.5180, -122.1980],
      [47.5170, -122.1970],
      [47.5160, -122.1980],
      [47.5150, -122.1990],
      [47.5140, -122.2000],
      [47.5130, -122.2010],
      [47.5120, -122.2020],
      [47.5110, -122.2030],
      [47.5100, -122.2040],
      [47.5090, -122.2050],
      [47.5080, -122.2060],
      [47.5090, -122.2070],
      [47.5100, -122.2080],
      [47.5100, -122.2090],
      [47.5100, -122.2100] // Back to start
    ],
    startPoint: {
      lat: 47.5100,
      lng: -122.2100,
      name: "Heritage Park Main Entrance"
    },
    endPoint: {
      lat: 47.5100,
      lng: -122.2100,
      name: "Heritage Park Main Entrance"
    },
    waypoints: [
      {
        lat: 47.5200,
        lng: -122.2000,
        name: "Park Pavilion"
      },
      {
        lat: 47.5080,
        lng: -122.2060,
        name: "Playground Area"
      }
    ],
    terrain: "Paved",
    theme: "Family-friendly loop with park views",
    highlights: ["Family friendly", "Park amenities", "Playground stops"],
    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  "sunset-stroll": {
    name: "Sunset Stroll at Lake Washington Blvd",
    distance: "2.0 miles",
    time: "40 minutes",
    difficulty: "Easy",
    type: "Out & Back",
    coordinates: [
      [47.4800, -122.1600], // Lake Washington Blvd start
      [47.4810, -122.1590],
      [47.4820, -122.1580],
      [47.4830, -122.1570],
      [47.4840, -122.1560],
      [47.4850, -122.1550],
      [47.4860, -122.1540],
      [47.4870, -122.1530],
      [47.4880, -122.1520],
      [47.4890, -122.1510] // Sunset viewpoint
    ],
    startPoint: {
      lat: 47.4800,
      lng: -122.1600,
      name: "Lake Washington Blvd Parking"
    },
    endPoint: {
      lat: 47.4890,
      lng: -122.1510,
      name: "Sunset Viewpoint"
    },
    waypoints: [
      {
        lat: 47.4850,
        lng: -122.1550,
        name: "Lake Access Point"
      }
    ],
    terrain: "Paved",
    theme: "Flat and relaxing evening walk with stunning lake views",
    highlights: ["Lake views", "Sunset timing", "Flat terrain"],
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  "morning-motivation": {
    name: "Morning Motivation @ Tiffany Park",
    distance: "2.7 miles",
    time: "55 minutes",
    difficulty: "Easy",
    type: "Loop",
    coordinates: [
      [47.5200, -122.1900], // Tiffany Park entrance
      [47.5210, -122.1890],
      [47.5220, -122.1880],
      [47.5230, -122.1870],
      [47.5240, -122.1860],
      [47.5250, -122.1850],
      [47.5260, -122.1840],
      [47.5270, -122.1830],
      [47.5280, -122.1820],
      [47.5290, -122.1810],
      [47.5280, -122.1800],
      [47.5270, -122.1790],
      [47.5260, -122.1800],
      [47.5250, -122.1810],
      [47.5240, -122.1820],
      [47.5230, -122.1830],
      [47.5220, -122.1840],
      [47.5210, -122.1850],
      [47.5200, -122.1860],
      [47.5190, -122.1870],
      [47.5200, -122.1880],
      [47.5200, -122.1890],
      [47.5200, -122.1900] // Back to start
    ],
    startPoint: {
      lat: 47.5200,
      lng: -122.1900,
      name: "Tiffany Park Main Entrance"
    },
    endPoint: {
      lat: 47.5200,
      lng: -122.1900,
      name: "Tiffany Park Main Entrance"
    },
    waypoints: [
      {
        lat: 47.5290,
        lng: -122.1810,
        name: "Exercise Stations"
      }
    ],
    terrain: "Mixed",
    theme: "Great for weekday walks and light cardio",
    highlights: ["Morning energy", "Light cardio", "Park facilities"],
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  "urban-explorer": {
    name: "Urban Explorer - Renton Loop",
    distance: "4.5 miles",
    time: "1 hour 30 minutes",
    difficulty: "Moderate",
    type: "Loop",
    coordinates: [
      [47.4827, -122.2170], // Downtown Renton start
      [47.4837, -122.2160],
      [47.4847, -122.2150],
      [47.4857, -122.2140],
      [47.4867, -122.2130],
      [47.4877, -122.2120],
      [47.4887, -122.2110],
      [47.4897, -122.2100],
      [47.4907, -122.2090],
      [47.4917, -122.2080],
      [47.4927, -122.2070],
      [47.4937, -122.2060],
      [47.4947, -122.2050],
      [47.4957, -122.2040],
      [47.4967, -122.2030],
      [47.4957, -122.2020],
      [47.4947, -122.2010],
      [47.4937, -122.2000],
      [47.4927, -122.1990],
      [47.4917, -122.1980],
      [47.4907, -122.1970],
      [47.4897, -122.1980],
      [47.4887, -122.1990],
      [47.4877, -122.2000],
      [47.4867, -122.2010],
      [47.4857, -122.2020],
      [47.4847, -122.2030],
      [47.4837, -122.2040],
      [47.4827, -122.2050],
      [47.4817, -122.2060],
      [47.4807, -122.2070],
      [47.4797, -122.2080],
      [47.4787, -122.2090],
      [47.4797, -122.2100],
      [47.4807, -122.2110],
      [47.4817, -122.2120],
      [47.4827, -122.2130],
      [47.4827, -122.2140],
      [47.4827, -122.2150],
      [47.4827, -122.2160],
      [47.4827, -122.2170] // Back to start
    ],
    startPoint: {
      lat: 47.4827,
      lng: -122.2170,
      name: "Downtown Renton Transit Center"
    },
    endPoint: {
      lat: 47.4827,
      lng: -122.2170,
      name: "Downtown Renton Transit Center"
    },
    waypoints: [
      {
        lat: 47.4967,
        lng: -122.2030,
        name: "Renton City Hall"
      },
      {
        lat: 47.4787,
        lng: -122.2090,
        name: "Renton History Museum"
      }
    ],
    terrain: "Urban",
    theme: "Downtown and scenic detour combo",
    highlights: ["Downtown views", "Urban exploration", "Mixed terrain"],
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
};