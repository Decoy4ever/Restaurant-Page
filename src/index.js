import "./styles.css"
import { menu } from "./menu.js"
/**
 * Main Page will have the following
 * 1. Small description of restuarnt
 * 2. Contact Hours
 * 3. Location of Address
 * 4. Load Images 
 */
class MainPg
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")
        this.header1 = document.createElement("h1")
        this.descriptionPara = document.createElement("p")
        this.buttons = document.querySelectorAll("button")
        this.home = document.querySelector(".home")
        this.menu = document.querySelector(".menu")
        this.contacts = document.querySelector(".contacts")
        this.divForMain = document.createElement("div")
        this.divForMain.className = "main-div"
    }

    showMainContent()
    {        
        // Create Header
        this.header1.textContent = "Welcome to AU Cafe Brekkie"
        this.divForMain.appendChild(this.header1)

        // Create a Description
        this.descriptionPara.textContent = "Here we offer classical Australian Cafe experience where you can enjoy delicious homemade roasting coffee with delicious food that will make your stomach happy"
        this.divForMain.appendChild(this.descriptionPara)

        this.mainPgContent.appendChild(this.divForMain)
    }

    switchTabs()
    {
        this.buttons.forEach((btn) => 
        {
            btn.addEventListener("click",() =>
            {
                if(btn.textContent === "Home")
                {
                    this.showMainContent()
                    this.divForMain.style.display = "block"
                    menu.divForMenu.style.display = "none"
                }
                else if(btn.textContent === "Menu")
                { 
                    this.divForMain.style.display = "none"
                    menu.divForMenu.style.display = "block"
                    menu.showMenuContent()
                }
            })
        })
    }

}


const main = new MainPg()
main.switchTabs()
main.showMainContent()
