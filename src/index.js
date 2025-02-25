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
        this.divForMain.textContent = ""

        // Create Header
        this.header1.textContent = "Odin Brekkie"
        this.header1.style.fontSize = "4rem"
        // this.header1.style.textAlign = "center"
        this.header1.style.textShadow = "0.5rem 0.5rem 1rem black"
        this.header1.style.color = "white"
        this.mainPgContent.appendChild(this.header1)
        this.mainPgContent.appendChild(this.divForMain)
    }

    styleMainPg()
    {
        this.divForMain.style.display = "grid"
        this.divForMain.style.gridRow = " 2 / 3"
        this.divForMain.style.gridColumn = " 2 / 3"
        this.header1.style.gridRow = "1/3"
        this.header1.style.gridColumn = "2/3"
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
                    this.styleMainPg()
                    this.showMainContent()
                }
                else if(btn.textContent === "Menu")
                { 
                    this.divForMain.style.display = "none"
                    contacts.divForContacts.style.display = "none"
                    menu.styleMenuPg()
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
