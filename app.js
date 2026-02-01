// Planet data
const planets = [
    {
        name: "Mercury",
        description: "Mercury is the smallest planet in our Solar System and the closest to the Sun. It has no atmosphere and experiences extreme temperature variations.",
        details: {
            "Distance from Sun": "57.9 million km",
            "Diameter": "4,879 km",
            "Orbital Period": "88 Earth days",
            "Day Length": "59 Earth days",
            "Moons": "0",
            "Temperature": "-173°C to 427°C"
        }
    },
    {
        name: "Venus",
        description: "Venus is the second planet from the Sun and is similar in size to Earth. It has a thick, toxic atmosphere that traps heat, making it the hottest planet in our Solar System.",
        details: {
            "Distance from Sun": "108.2 million km",
            "Diameter": "12,104 km",
            "Orbital Period": "225 Earth days",
            "Day Length": "243 Earth days",
            "Moons": "0",
            "Temperature": "462°C"
        }
    },
    {
        name: "Earth",
        description: "Earth is our home planet and the only known planet to support life. It has a perfect balance of water, atmosphere, and temperature that makes life possible.",
        details: {
            "Distance from Sun": "149.6 million km",
            "Diameter": "12,742 km",
            "Orbital Period": "365.25 days",
            "Day Length": "24 hours",
            "Moons": "1 (The Moon)",
            "Temperature": "-88°C to 58°C"
        }
    },
    {
        name: "Mars",
        description: "Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the Solar System and is a prime target for human exploration.",
        details: {
            "Distance from Sun": "227.9 million km",
            "Diameter": "6,779 km",
            "Orbital Period": "687 Earth days",
            "Day Length": "24.6 hours",
            "Moons": "2 (Phobos and Deimos)",
            "Temperature": "-87°C to -5°C"
        }
    },
    {
        name: "Jupiter",
        description: "Jupiter is the largest planet in our Solar System. It's a gas giant with a famous Great Red Spot storm that has been raging for hundreds of years.",
        details: {
            "Distance from Sun": "778.5 million km",
            "Diameter": "139,820 km",
            "Orbital Period": "12 Earth years",
            "Day Length": "9.9 hours",
            "Moons": "95 known moons",
            "Temperature": "-108°C"
        }
    },
    {
        name: "Saturn",
        description: "Saturn is famous for its stunning ring system made of ice and rock particles. It's the second-largest planet and could float in water due to its low density.",
        details: {
            "Distance from Sun": "1.4 billion km",
            "Diameter": "116,460 km",
            "Orbital Period": "29 Earth years",
            "Day Length": "10.7 hours",
            "Moons": "146 known moons",
            "Temperature": "-138°C"
        }
    },
    {
        name: "Uranus",
        description: "Uranus is an ice giant that rotates on its side, making its axis of rotation nearly parallel to its orbit. It has a blue-green color due to methane in its atmosphere.",
        details: {
            "Distance from Sun": "2.9 billion km",
            "Diameter": "50,724 km",
            "Orbital Period": "84 Earth years",
            "Day Length": "17.2 hours",
            "Moons": "27 known moons",
            "Temperature": "-197°C"
        }
    },
    {
        name: "Neptune",
        description: "Neptune is the farthest planet from the Sun and has the strongest winds in the Solar System, reaching speeds of up to 2,100 km/h.",
        details: {
            "Distance from Sun": "4.5 billion km",
            "Diameter": "49,244 km",
            "Orbital Period": "165 Earth years",
            "Day Length": "16 hours",
            "Moons": "14 known moons",
            "Temperature": "-201°C"
        }
    }
];

// Function to populate planet list
function populatePlanetList() {
    const planetList = document.getElementById('planetList');
    
    planets.forEach((planet, index) => {
        const li = document.createElement('li');
        li.textContent = planet.name;
        li.addEventListener('click', () => showPlanetDetails(index));
        planetList.appendChild(li);
    });
}

// Function to show planet details
function showPlanetDetails(index) {
    const planet = planets[index];
    const detailsDiv = document.getElementById('planetDetails');
    
    // Update active state
    const allItems = document.querySelectorAll('#planetList li');
    allItems.forEach(item => item.classList.remove('active'));
    allItems[index].classList.add('active');
    
    // Build details HTML
    let detailsHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.description}</p>
        <h3>Key Facts</h3>
        <div class="planet-info">
    `;
    
    for (const [key, value] of Object.entries(planet.details)) {
        detailsHTML += `
            <div class="info-item">
                <strong>${key}</strong>
                <span>${value}</span>
            </div>
        `;
    }
    
    detailsHTML += '</div>';
    
    detailsDiv.innerHTML = detailsHTML;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    populatePlanetList();
});
