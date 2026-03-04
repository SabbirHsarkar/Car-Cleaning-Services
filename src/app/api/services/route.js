export async function GET() {
  const services = [
   {
  "success": true,
  "message": "Services retrieved successfully",
  "data": [
    {
      "id": "1",
      "name": "Basic Car Wash",
      "description": "Exterior hand wash using premium shampoo, wheel cleaning, and microfiber drying.",
      "price": 500,
      "img": "https://example.com/images/basic-wash.jpg",
      "duration": 30
    },
    {
      "id": "2",
      "name": "Deluxe Car Wash",
      "description": "Exterior wash, tire cleaning, dashboard wipe, and interior vacuum cleaning.",
      "price": 900,
      "img": "https://example.com/images/deluxe-wash.jpg",
      "duration": 45
    },
    {
      "id": "3",
      "name": "Premium Car Wash",
      "description": "Full exterior wash, interior vacuum, glass cleaning, and tire shine.",
      "price": 1200,
      "img": "https://example.com/images/premium-wash.jpg",
      "duration": 60
    },
    {
      "id": "4",
      "name": "Interior Deep Cleaning",
      "description": "Deep cleaning of seats, carpets, dashboard, and odor removal treatment.",
      "price": 2000,
      "img": "https://example.com/images/interior-deep-clean.jpg",
      "duration": 90
    },
    {
      "id": "5",
      "name": "Engine Bay Cleaning",
      "description": "Safe engine degreasing and cleaning to remove dust and oil deposits.",
      "price": 1500,
      "img": "https://example.com/images/engine-clean.jpg",
      "duration": 60
    },
    {
      "id": "6",
      "name": "Car Waxing",
      "description": "High-quality wax application for deep gloss and paint protection.",
      "price": 1800,
      "img": "https://example.com/images/car-wax.jpg",
      "duration": 75
    },
    {
      "id": "7",
      "name": "Machine Polishing",
      "description": "Professional machine polish to remove light scratches and swirl marks.",
      "price": 2500,
      "img": "https://example.com/images/machine-polish.jpg",
      "duration": 120
    },
    {
      "id": "8",
      "name": "Full Car Detailing",
      "description": "Complete interior and exterior detailing including polish and wax.",
      "price": 4000,
      "img": "https://example.com/images/full-detailing.jpg",
      "duration": 180
    },
    {
      "id": "9",
      "name": "Headlight Restoration",
      "description": "Restore cloudy headlights to improve visibility and appearance.",
      "price": 1000,
      "img": "https://example.com/images/headlight.jpg",
      "duration": 40
    },
    {
      "id": "10",
      "name": "Ceramic Coating",
      "description": "Long-lasting ceramic coating for superior shine and paint protection.",
      "price": 8000,
      "img": "https://example.com/images/ceramic-coating.jpg",
      "duration": 240
    }
  ]
}
  ];

  return Response.json({
    success: true,
    message: "Services retrieved successfully",
    data: services
  });
}