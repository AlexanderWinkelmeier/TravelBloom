# Travel Recommendation Project

A JavaScript learning project from the IBM JavaScript Programming Essentials course on [Coursera](https://www.coursera.org/learn/javascript-programming-essentials/). This project combines HTML, CSS, and JavaScript to build a simple travel recommendation tool. Users can search for various travel destinations such as beaches, temples, and countries, and receive dynamically relevant results.

[![View Deployed Site](https://img.shields.io/badge/View-Site-blue?style=for-the-badge)](https://alexanderwinkelmeier.github.io/TravelBloom/)

## 🛠️ Tools & Technologies Learned

### HTML
- Basic structure of webpages
- Forms and input fields

### CSS
- Layouts (Flexbox, Block elements)
- Absolute positioning of elements
- Styling for dynamic content (results, messages)
- Custom hover effects and transitions

### JavaScript
- **Dynamic Event Handling**: Event listeners for user interactions (clicks, keypress events)
- **Fetch API**: Retrieving and processing data from local JSON files
- **Search Functionality**: Implementation of search logic for various keywords like "country", "city", "beach", "temple"
- **Regular Expressions**: Recognition of search term variations (plurals, partial words)

## ✨ Functions

### Search Functionality
- Input keywords related to travel destinations
- Search for keywords like "beach", "temple", "country" and their plural variations
- Search for specific country names (e.g., Saudi Arabia, Brazil) and associated cities (e.g., Makkah, Medina, Rio de Janeiro)
- More details available in the [JSON File](./assets/json/travel_recommendation_api.json)

### Design Features
- **Desktop-Only**: Project is exclusively optimized for desktop use, without responsive design for mobile devices
- **No Server Implementation**: Purely static files with client-side execution and no backend logic

## 🚀 How to Use

1. Clone or download this repository
2. Open `index.html` in a desktop browser
3. Enter search keywords like "beach", "temple", or country/city names
4. Click the "Search" button to view results
5. Explore the About and Contact pages

## ⚠️ Known Issues

- **Not designed for mobile view**
- Search functionality may not handle all edge cases with unusual inputs

## 🔮 Future Improvements

- Responsive design for mobile devices
- Integration of external APIs for enhanced search functionality
- Search optimization with fuzzy matching and advanced filtering options
