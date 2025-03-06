class MenuPg
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")        
        this.divForMenu = document.createElement("div")
        this.divForMenu.className = "menu-div"

        this.coffeeMenu = 
        [
            {
                name: "Latte",
                price: "4.5"
            },
            {
                name: "Cappuchino",
                price: "5"
            },
            {
                name: "Flat White",
                price: "4"
            },
            {
                name: "Hot Choco",
                price: "4"
            }
        ]

        this.foodMenu = [
            {
                name:"Ham & Cheeze Crossiant",
                price: "7"
            }, 
            { 
                name: "Eggs Benedict",
                price: "15"
            },
            {
                name: "Smashed Avo",
                price: "12"
            },
            {
                name: "Salmon Bagel",
                price: "15"
            }
        ]
    }

    showMenuContent()
    {
        this.divForMenu.textContent = ""

        // align the position of the content shown inside `div.content`
        this.divForMenu.style.gridRow = " 2 / 6"
        this.divForMenu.style.gridColumn = "2 / 6"

        // style the `div.menu` into two cols
        this.divForMenu.style.display = "grid"
        this.divForMenu.style.gridTemplateColumns = "repeat(2,1fr)"
        this.divForMenu.style.gridTemplateRows = "max-content"
        this.divForMenu.style.padding = "1rem"
        this.divForMenu.style.gap = "1rem"
        this.divForMenu.style.backgroundColor = "black"
        this.divForMenu.style.border = "0.5rem solid white"

        // Styling the Drinks Content
        const divDrinksContainer = document.createElement("div")
        divDrinksContainer.classList.add("drinks-container")

        const headerDrinks = document.createElement("h1")
        headerDrinks.textContent = "Coffee Menu"
        headerDrinks.style.textDecorationLine = "underline"
        headerDrinks.style.fontSize = "4rem"
        headerDrinks.style.padding = "1rem"
        divDrinksContainer.appendChild(headerDrinks)

        this.coffeeMenu.map((coffeeItem) => {
            const drinkPara = document.createElement("p")
            drinkPara.textContent = `${coffeeItem.name} ${coffeeItem.price}`
            drinkPara.style.fontSize = "2rem"
            drinkPara.style.padding = "1rem"
            divDrinksContainer.appendChild(drinkPara)
        })
        this.divForMenu.appendChild(divDrinksContainer) 
       
        // Styling the Food content
        const divFoodContainer = document.createElement("div")
        divFoodContainer.classList.add("food-container")

        const headerFood = document.createElement("h1")
        headerFood.textContent = "Food Menu"
        headerFood.style.fontSize = "4rem"
        headerFood.style.textDecorationLine = "underline"
        headerFood.style.padding = "1rem"

        divFoodContainer.appendChild(headerFood)

        this.foodMenu.map((foodItem) => {
            const foodPara = document.createElement("p")
            foodPara.textContent = `${foodItem.name} ${foodItem.price}`
            foodPara.style.fontSize = "2rem"
            foodPara.style.padding = "1rem"
            divFoodContainer.appendChild(foodPara)
        })
        this.divForMenu.appendChild(divFoodContainer)

        // Add food and drink content to `div.content`
        this.mainPgContent.appendChild(this.divForMenu)
    }
}

export const menu = new MenuPg()
