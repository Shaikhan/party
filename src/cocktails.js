const cocktails = [
    {
        "name": "Margarita",
        "ingredients": [
            { "name": "Tequila", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "1 oz" },
            { "name": "Triple Sec", "quantity": "1 oz" },
            { "name": "Salt", "quantity": "For rim" }
        ],
        "steps": [
            "Rim the glass with salt.",
            "Combine tequila, lime juice, and triple sec in a shaker.",
            "Add ice and shake well.",
            "Strain into the glass and serve."
        ],
        "popularity": 1
    },
    {
        "name": "Mojito",
        "ingredients": [
            { "name": "White Rum", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "1 oz" },
            { "name": "Mint Leaves", "quantity": "10 leaves" },
            { "name": "Sugar", "quantity": "2 teaspoons" },
            { "name": "Club Soda", "quantity": "Top up" }
        ],
        "steps": [
            "Muddle mint leaves and sugar in a glass.",
            "Add lime juice and rum.",
            "Fill the glass with ice and stir.",
            "Top with club soda and garnish with mint."
        ]
    },
    {
        "name": "Gin and Tonic",
        "ingredients": [
            { "name": "Gin", "quantity": "2 oz" },
            { "name": "Tonic Water", "quantity": "Top" },
            { "name": "Lime", "quantity": "1 wedge" }
        ],
        "steps": [
            "Fill a glass with ice.",
            "Pour gin over the ice.",
            "Top with tonic water and stir gently to combine.",
            "Squeeze the lime wedge over the drink (optional) and drop it in as garnish."
        ],
        "popularity": 3
    },
    {
        "name": "Hendrick's Gin and Tonic",
        "ingredients": [
            { "name": "Hendrick's Gin", "quantity": "2 oz" },
            { "name": "Tonic Water", "quantity": "Top" },
            { "name": "Cucumber", "quantity": "3-4 thin slices" }
        ],
        "steps": [
            "Fill a copa glass with ice.",
            "Add Hendrick's Gin.",
            "Top with tonic water and stir gently.",
            "Garnish with cucumber slices."
        ],
        "popularity": 3.1
    },
    {
        "name": "Whiskey Sour",
        "ingredients": [
            { "name": "Bourbon", "quantity": "2 oz" },
            { "name": "Lemon Juice", "quantity": "3/4 oz" },
            { "name": "Simple Syrup", "quantity": "3/4 oz" },
            { "name": "Angostura Bitters", "quantity": "1 dash" }
        ],
        "steps": [
            "Shake bourbon, lemon juice, simple syrup, and bitters with ice for about 10-15 seconds.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lemon slice."
        ],
        "popularity": 4
    },
    {
        "name": "Bourbon Old Fashioned",
        "ingredients": [
            { "name": "Bourbon", "quantity": "2 oz" },
            { "name": "Angostura Bitters", "quantity": "2 dashes" },
            { "name": "Sugar", "quantity": "1 sugar cube" },
            { "name": "Orange Slice", "quantity": "1" }
        ],
        "steps": [
            "Muddle sugar cube, bitters, and a splash of water in a glass.",
            "Add bourbon and ice, then stir.",
            "Garnish with an orange slice."
        ],
        "popularity": 5
    },
    {
        "name": "Tequila Sunrise",
        "ingredients": [
            { "name": "Tequila", "quantity": "2 oz" },
            { "name": "Orange Juice", "quantity": "4 oz" },
            { "name": "Grenadine", "quantity": "1/2 oz" }
        ],
        "steps": [
            "Fill a highball glass with ice.",
            "Pour tequila and orange juice into the glass and stir to mix.",
            "Slowly pour grenadine over the back of a spoon or directly into the glass. Let it settle for the layered effect.",
            "Garnish with an orange slice."
        ],
        "popularity": 6
    },
    {
        "name": "Rum Punch",
        "ingredients": [
            { "name": "White Rum", "quantity": "1 oz" },
            { "name": "Dark Rum", "quantity": "1 oz" },
            { "name": "Pineapple Juice", "quantity": "3 oz" },
            { "name": "Orange Juice", "quantity": "3 oz" },
            { "name": "Grenadine", "quantity": "1/2 oz" },
            { "name": "Lime Juice", "quantity": "1/2 oz" }
        ],
        "steps": [
            "Mix all ingredients in a shaker with ice.",
            "Strain into a glass filled with ice.",
            "Garnish with an orange slice."
        ],
        "popularity": 7
    },
    {
        "name": "Mimosa",
        "ingredients": [
            { "name": "Prosecco", "quantity": "3-4 oz" },
            { "name": "Orange Juice", "quantity": "2-3 oz" }
        ],
        "steps": [
            "Pour orange juice into a glass.",
            "Top with prosecco and gently stir."
        ],
        "popularity": 8
    },
    {
        "name": "Negroni",
        "ingredients": [
            { "name": "Gin", "quantity": "1 oz" },
            { "name": "Campari", "quantity": "1 oz" },
            { "name": "Vermouth", "quantity": "1 oz" }
        ],
        "steps": [
            "Stir gin, campari, and vermouth with ice.",
            "Strain into a glass with ice and garnish with an orange peel."
        ],
        "popularity": 9
    },
    {
        "name": "Americano",
        "ingredients": [
            { "name": "Campari", "quantity": "1 oz" },
            { "name": "Vermouth", "quantity": "1 oz" },
            { "name": "Club Soda", "quantity": "Top" }
        ],
        "steps": [
            "Stir campari and vermouth with ice.",
            "Top with club soda and garnish with an orange slice."
        ],
        "popularity": 10
    },
    {
        "name": "Aperol Spritz",
        "ingredients": [
            { "name": "Aperol", "quantity": "3 oz" },
            { "name": "Prosecco", "quantity": "2 oz" },
            { "name": "Club Soda", "quantity": "1 oz" }
        ],
        "steps": [
            "Fill a glass with ice and pour in aperol, prosecco, and club soda.",
            "Stir gently and garnish with an orange slice."
        ],
        "popularity": 11
    },
    {
        "name": "Campari Spritz",
        "ingredients": [
            { "name": "Campari", "quantity": "3 oz" },
            { "name": "Prosecco", "quantity": "2 oz" },
            { "name": "Club Soda", "quantity": "1 oz" }
        ],
        "steps": [
            "Fill a glass with ice and pour in campari, prosecco, and club soda.",
            "Stir gently and garnish with an orange slice."
        ],
        "popularity": 12
    },
    {
        "name": "Tom Collins",
        "ingredients": [
            { "name": "Gin", "quantity": "2 oz" },
            { "name": "Lemon Juice", "quantity": "1 oz" },
            { "name": "Simple Syrup", "quantity": "1/2 oz" },
            { "name": "Club Soda", "quantity": "Top" }
        ],
        "steps": [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a tall glass filled with ice and top with club soda.",
            "Garnish with a lemon slice."
        ],
        "popularity": 13
    },
    {
        "name": "Gin Fizz",
        "ingredients": [
            { "name": "Gin", "quantity": "2 oz" },
            { "name": "Lemon Juice", "quantity": "3/4 oz" },
            { "name": "Simple Syrup", "quantity": "1/2 oz" },
            { "name": "Club Soda", "quantity": "Top" }
        ],
        "steps": [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a glass and top with club soda."
        ],
        "popularity": 14
    },
    {
        "name": "Negroni Sbagliato",
        "ingredients": [
            { "name": "Prosecco", "quantity": "2 oz" },
            { "name": "Campari", "quantity": "1 oz" },
            { "name": "Vermouth", "quantity": "1 oz" }
        ],
        "steps": [
            "Stir campari and vermouth with ice.",
            "Top with prosecco and garnish with an orange peel."
        ],
        "popularity": 15
    },
    {
        "name": "Gin Martini",
        "ingredients": [
            { "name": "Gin", "quantity": "2 oz" },
            { "name": "Vermouth", "quantity": "1/2 oz" }
        ],
        "steps": [
            "Stir gin and vermouth with ice.",
            "Strain into a chilled glass and garnish with a lemon twist."
        ],
        "popularity": 16
    },
    {
        "name": "Tequila Sour",
        "ingredients": [
            { "name": "Tequila", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "3/4 oz" },
            { "name": "Simple Syrup", "quantity": "1/2 oz" }
        ],
        "steps": [
            "Shake tequila, lime juice, and simple syrup with ice.",
            "Strain into a glass with ice and garnish with a lime wedge."
        ],
        "popularity": 17
    },
    {
        "name": "Aperol Gin Fizz",
        "ingredients": [
            { "name": "Aperol", "quantity": "1 oz" },
            { "name": "Gin", "quantity": "1 oz" },
            { "name": "Lemon Juice", "quantity": "3/4 oz" },
            { "name": "Simple Syrup", "quantity": "1/2 oz" },
            { "name": "Club Soda", "quantity": "Top" }
        ],
        "steps": [
            "Shake aperol, gin, lemon juice, and simple syrup with ice.",
            "Strain into a glass and top with club soda."
        ],
        "popularity": 18
    },
    {
        "name": "Rum Sour",
        "ingredients": [
            { "name": "White Rum", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "3/4 oz" },
            { "name": "Simple Syrup", "quantity": "1/2 oz" },
            { "name": "Angostura Bitters", "quantity": "1 dash" }
        ],
        "steps": [
            "Shake white rum, lime juice, simple syrup, and bitters with ice.",
            "Strain into a glass and garnish with a dash of bitters."
        ],
        "popularity": 20
    },
    {
        "name": "Classic Daiquiri",
        "ingredients": [
            { "name": "White Rum", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "1 oz" },
            { "name": "Simple Syrup", "quantity": "3/4 oz" }
        ],
        "steps": [
            "Shake rum, lime juice, and simple syrup with ice.",
            "Strain into a chilled glass."
        ],
        "popularity": 14.1
    },
    {
        "name": "Campari Orange",
        "ingredients": [
            { "name": "Campari", "quantity": "1 oz" },
            { "name": "Orange Juice", "quantity": "4 oz" }
        ],
        "steps": [
            "Pour campari into a glass filled with ice.",
            "Top with orange juice and stir.",
            "Garnish with an orange slice."
        ],
        "popularity": 11.1
    },
    {
        "name": "Cuba Libre",
        "ingredients": [
            { "name": "White Rum", "quantity": "2 oz" },
            { "name": "Lime Juice", "quantity": "1/2 oz" },
            { "name": "Cola", "quantity": "Top" }
        ],
        "steps": [
            "Fill a glass with ice.",
            "Add rum and squeeze lime juice into the glass.",
            "Top with cola and stir gently."
        ],
        "popularity": 7.1
    }
];

export default cocktails;