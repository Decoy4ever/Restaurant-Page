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
        const headerDrinks = document.createElement("h1")
        const headerFood = document.createElement("h1")
        
        // Create the header
        headerDrinks.textContent = "Coffee Menu"
        this.divForMenu.appendChild(headerDrinks)
    
        this.coffeeMenu.map((coffeeItem) => {
            const drinkPara = document.createElement("p")
            drinkPara.textContent = `${coffeeItem.name} ${coffeeItem.price}`
            this.divForMenu.appendChild(drinkPara)
        })

        headerFood.textContent = "Food Menu"
        this.divForMenu.appendChild(headerFood)

        this.foodMenu.map((foodItem) => {
            const foodPara = document.createElement("p")
            foodPara.textContent = `${foodItem.name} ${foodItem.price}`
            this.divForMenu.appendChild(foodPara)
        })

        this.mainPgContent.appendChild(this.divForMenu)
    }
}

export const menu = new MenuPg()
