const questionsDatabase = {
    science: {
        name: "Science",
        icon: "🔬",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Fe", "Au", "Cu"],
                correctAnswer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Jupiter", "Mars", "Saturn"],
                correctAnswer: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correctAnswer: 2
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Brain", "Liver", "Skin", "Heart"],
                correctAnswer: 2
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 1
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                correctAnswer: 0
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
                correctAnswer: 1
            },
            {
                question: "What is the process by which plants make their own food?",
                options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
                correctAnswer: 0
            },
            {
                question: "What is the smallest unit of matter?",
                options: ["Cell", "Molecule", "Atom", "Electron"],
                correctAnswer: 2
            },
            {
                question: "Which force keeps planets in orbit around the Sun?",
                options: ["Magnetic Force", "Nuclear Force", "Electromagnetic Force", "Gravitational Force"],
                correctAnswer: 3
            }
        ]
    },
    history: {
        name: "History",
        icon: "📚",
        questions: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
                correctAnswer: 2
            },
            {
                question: "Which empire built the Pyramids of Giza?",
                options: ["Roman Empire", "Greek Empire", "Egyptian Empire", "Persian Empire"],
                correctAnswer: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correctAnswer: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correctAnswer: 2
            },
            {
                question: "Which civilization developed the first known writing system?",
                options: ["Egyptian", "Sumerian", "Greek", "Chinese"],
                correctAnswer: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Mother Teresa", "Marie Curie", "Jane Addams", "Pearl Buck"],
                correctAnswer: 1
            },
            {
                question: "Which year did Christopher Columbus first reach the Americas?",
                options: ["1492", "1488", "1496", "1500"],
                correctAnswer: 0
            },
            {
                question: "Who was the first Emperor of China?",
                options: ["Qin Shi Huang", "Sun Yat-sen", "Kublai Khan", "Wu Zetian"],
                correctAnswer: 0
            },
            {
                question: "Which ancient wonder was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse", "Hanging Gardens", "Temple of Artemis"],
                correctAnswer: 1
            }
        ]
    },
    technology: {
        name: "Technology",
        icon: "💻",
        questions: [
            {
                question: "Who is the co-founder of Microsoft?",
                options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
                correctAnswer: 1
            },
            {
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
                correctAnswer: 0
            },
            {
                question: "Which programming language is known as the 'mother of all languages'?",
                options: ["Python", "Java", "C", "Assembly"],
                correctAnswer: 2
            },
            {
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HighText Markup Language"],
                correctAnswer: 0
            },
            {
                question: "Which company developed the iPhone?",
                options: ["Microsoft", "Google", "Apple", "Samsung"],
                correctAnswer: 2
            },
            {
                question: "What is the main function of RAM in a computer?",
                options: ["Permanent Storage", "Temporary Storage", "Processing Data", "Displaying Graphics"],
                correctAnswer: 1
            },
            {
                question: "Which of these is not a web browser?",
                options: ["Chrome", "Firefox", "Excel", "Safari"],
                correctAnswer: 2
            },
            {
                question: "What does WiFi stand for?",
                options: ["Wireless Fidelity", "Wireless Fiber", "Wireless Finding", "Wireless Field"],
                correctAnswer: 0
            },
            {
                question: "Which company owns Android?",
                options: ["Apple", "Microsoft", "Google", "Samsung"],
                correctAnswer: 2
            },
            {
                question: "What is the most common file format for compressed images?",
                options: ["PNG", "JPG", "GIF", "BMP"],
                correctAnswer: 1
            }
        ]
    },
    mathematics: {
        name: "Mathematics",
        icon: "🔢",
        questions: [
            {
                question: "What is the square root of 144?",
                options: ["10", "12", "14", "16"],
                correctAnswer: 1
            },
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: ["3.14", "3.16", "3.12", "3.18"],
                correctAnswer: 0
            },
            {
                question: "What is the result of 8 × 7?",
                options: ["54", "56", "58", "60"],
                correctAnswer: 1
            },
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                options: ["24", "32", "30", "28"],
                correctAnswer: 1
            },
            {
                question: "What is 15% of 200?",
                options: ["25", "30", "35", "40"],
                correctAnswer: 1
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["180°", "360°", "90°", "270°"],
                correctAnswer: 0
            },
            {
                question: "Which number is not a prime number?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 2
            },
            {
                question: "What is the area of a square with side length 5?",
                options: ["20", "25", "30", "35"],
                correctAnswer: 1
            },
            {
                question: "What is the result of 2³?",
                options: ["6", "8", "10", "12"],
                correctAnswer: 1
            },
            {
                question: "If x + 3 = 8, what is x?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2
            }
        ]
    },
    geography: {
        name: "Geography",
        icon: "🌍",
        questions: [
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correctAnswer: 2
            },
            {
                question: "Which is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correctAnswer: 3
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "Vietnam"],
                correctAnswer: 1
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                correctAnswer: 1
            },
            {
                question: "Which continent is the largest by land area?",
                options: ["North America", "Africa", "Asia", "Europe"],
                correctAnswer: 2
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Gobi", "Sahara", "Arabian", "Antarctic"],
                correctAnswer: 3
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correctAnswer: 2
            },
            {
                question: "Which mountain is the tallest in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                correctAnswer: 1
            },
            {
                question: "Which country has the most islands in the world?",
                options: ["Indonesia", "Japan", "Philippines", "Sweden"],
                correctAnswer: 3
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correctAnswer: 2
            }
        ]
    }
}; 