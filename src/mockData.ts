import { Itinerary } from "./types";

export const MOCK_ITINERARY: Itinerary = {
  destination: "Kyoto, Japan",
  duration: 3,
  summary: "A journey through the heart of traditional Japan, blending ancient temples, serene gardens, and exquisite culinary experiences.",
  days: [
    {
      day: 1,
      theme: "Ancient Traditions & Zen Gardens",
      activities: [
        {
          time: "09:00 AM",
          title: "Kinkaku-ji (Golden Pavilion)",
          description: "Marvel at the stunning Zen temple whose top two floors are completely covered in gold leaf.",
          location: "1 Kinkakujicho, Kita Ward, Kyoto",
          cost: "¥600",
          type: "sightseeing"
        },
        {
          time: "12:30 PM",
          title: "Traditional Kaiseki Lunch",
          description: "Enjoy a multi-course Japanese haute cuisine lunch featuring seasonal ingredients.",
          location: "Gion District",
          cost: "¥5,000",
          type: "food"
        },
        {
          time: "03:00 PM",
          title: "Ryoan-ji Rock Garden",
          description: "Contemplate the mysteries of the most famous dry landscape garden in Japan.",
          location: "13 Ryoanji Goryonoshitacho",
          cost: "¥500",
          type: "leisure"
        }
      ]
    },
    {
      day: 2,
      theme: "Bamboo Forests & Riverside Walks",
      activities: [
        {
          time: "08:30 AM",
          title: "Arashiyama Bamboo Grove",
          description: "Walk through the towering stalks of green bamboo for a truly otherworldly experience.",
          location: "Arashiyama",
          cost: "Free",
          type: "sightseeing"
        },
        {
          time: "01:00 PM",
          title: "Tenryu-ji Temple",
          description: "Visit the head temple of the Tenryu branch of Rinzai Zen Buddhism.",
          location: "Arashiyama",
          cost: "¥500",
          type: "sightseeing"
        },
        {
          time: "06:00 PM",
          title: "Pontocho Alley Dinner",
          description: "Explore one of Kyoto's most atmospheric dining areas, packed with restaurants and bars.",
          location: "Pontocho",
          cost: "¥3,000",
          type: "food"
        }
      ]
    },
    {
      day: 3,
      theme: "The Thousand Torii Gates",
      activities: [
        {
          time: "07:00 AM",
          title: "Fushimi Inari-taisha",
          description: "Hike through the thousands of vermilion torii gates that straddle a network of trails.",
          location: "Fushimi Ward",
          cost: "Free",
          type: "sightseeing"
        },
        {
          time: "11:00 AM",
          title: "Nishiki Market",
          description: "Known as 'Kyoto's Kitchen', this lively retail market specializes in all things food-related.",
          location: "Nakagyo Ward",
          cost: "Variable",
          type: "food"
        }
      ]
    }
  ]
};
