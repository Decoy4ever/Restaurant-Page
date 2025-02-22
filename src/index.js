import "./styles.css"
import { menu } from "./menu.js"
import { contacts } from "./contact.js"

class MainPg
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")
        this.header1 = document.createElement("h1")
        this.descriptionPara = document.createElement("p")
        this.buttons = document.querySelectorAll("button")
        this.divForMain = document.createElement("div")
        this.divForMain.className = "main-div"
        this.backgroundImg = document.querySelector(".img")
    }

    showMainContent()
    {        
        // Create Header
        this.header1.textContent = "Avo Brekkie"
        this.header1.style.fontSize = "5rem"
        this.header1.style.textAlign = "center"
        this.header1.style.textShadow = "2px 2px black"
        
        // postion the grid
        this.divForMain.style.gridRow = "2 / 3"
        this.divForMain.style.gridColumn = "1 / 4"
        this.divForMain.appendChild(this.header1)

        // Create a Description
        // this.descriptionPara.textContent = "Here we offer classical Australian Cafe experience where you can enjoy delicious homemade roasting coffee with delicious food that will make your stomach happy"
        // this.divForMain.appendChild(this.descriptionPara)
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
                    menu.divForMenu.style.display = "none"
                    contacts.divForContacts.style.display = "none"
                    this.divForMain.style.display = "grid"
                    this.backgroundImg.style.backgroundImage 
                    this.showMainContent()
                }
                else if(btn.textContent === "Menu")
                { 
                    this.divForMain.style.display = "none"
                    contacts.divForContacts.style.display = "none"
                    menu.divForMenu.style.display = "grid"
                    menu.divForMenu.style.gridRow = " 1 / 5"
                    menu.divForMenu.style.gridColumn = "2 / 3"
                    menu.divForMenu.style.padding = "1rem"
                    menu.divForMenu.style.backgroundColor = "black"
                    menu.showMenuContent()
                }
                else if(btn.textContent === "Contact")
                {
                    this.divForMain.style.display = "none"
                    menu.divForMenu.style.display = "none"
                    contacts.divForContacts.style.display = "grid"
                    contacts.divForContacts.style.gridRow = " 1/5"
                    contacts.divForContacts.style.gridColumn = "2/3"
                    contacts.divForContacts.style.backgroundColor = "black"
                    contacts.divForContacts.style.padding = "1rem"
                    contacts.showContactsContent()
                }
            })
        })
    }

}


const main = new MainPg()
main.switchTabs()
main.showMainContent()
