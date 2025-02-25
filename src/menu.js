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

        this.divForMenu.style.display = "grid"
        this.divForMenu.style.gridRow = " 1 / 5"
        this.divForMenu.style.gridColumn = "2 / 3"
        this.divForMenu.style.padding = "1rem"
        this.divForMenu.style.backgroundColor = "black"
        this.divForMenu.style.border = "0.5rem solid white"

        const headerDrinks = document.createElement("h1")
        const headerFood = document.createElement("h1")
        headerDrinks.textContent = "Coffee Menu"
        headerDrinks.style.textDecorationLine = "underline"
        headerDrinks.style.fontSize = "1.5rem"
        this.divForMenu.appendChild(headerDrinks)
    
        this.coffeeMenu.map((coffeeItem) => {
            const drinkPara = document.createElement("p")
            drinkPara.textContent = `${coffeeItem.name} ${coffeeItem.price}`
            this.divForMenu.appendChild(drinkPara)
        })

        headerFood.textContent = "Food Menu"
        headerFood.style.fontSize = "1.5rem"
        headerFood.style.textDecorationLine = "underline"
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
