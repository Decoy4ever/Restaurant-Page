import "./styles.css"
import { menu } from "./menu.js"
import { contacts } from "./contact.js"
import cafeImg from "./pics/louis-hansel-qoPAjwEiUmg-unsplash.jpg"

class MainPg
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")
        this.header1 = document.createElement("h1")
        this.descriptionPara = document.createElement("p")
        this.buttons = document.querySelectorAll("button")
        this.divForMain = document.createElement("div")
        this.createImgDiv = document.createElement("div")
        this.divForMain.className = "main-div"
    }

    showMainContent()
    {            
        // styling the main-div 
        this.divForMain.style.gridRow = " 1 / 2"
        this.divForMain.style.gridColumn = " 2 / 3"
        
        // creating and style the Header
        this.header1.textContent = "Odin Brekkie"
        this.header1.style.fontSize = "3rem"
        this.header1.style.gridColumn = " 2 / 3"
        this.header1.style.gridRow = "1 / 2"
        this.header1.style.textAlign = "center"
        this.header1.style.textShadow = "0.5rem 0.5rem 1rem black"
        this.header1.style.color = "white"
        this.mainPgContent.appendChild(this.header1)

        // create and style img
        this.createImgDiv.className = "img"
        this.createImgDiv.style.backgroundImage = `url(${cafeImg})`
        this.createImgDiv.style.backgroundSize = "100% 100%"
        this.createImgDiv.style.padding = "1rem"
        this.createImgDiv.style.backgroundRepeat = "no-repeat"
        this.createImgDiv.style.gridColumn = "2/3"
        this.createImgDiv.style.gridRow = "2/3"
        
        this.mainPgContent.appendChild(this.createImgDiv)
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
                    this.divForMain.style.display = "grid"
                    menu.divForMenu.style.display = "none"
                    contacts.divForContacts.style.display = "none"
                }
                else if(btn.textContent === "Menu")
                { 
                    this.divForMain.style.display = "none"
                    contacts.divForContacts.style.display = "none"
                    menu.showMenuContent()
                }
                else if(btn.textContent === "Contact")
                {
                    this.divForMain.style.display = "none"
                    menu.divForMenu.style.display = "none"
                    contacts.divForContacts.style.display = "grid"
                    contacts.showContactsContent()
                }
            })
        })
    }
}


const main = new MainPg()
main.switchTabs()
main.showMainContent()

