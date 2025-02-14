class MenuPg
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")
        this.header1 = document.createElement("h1")
        this.descriptionPara = document.createElement("p")
        this.divForMenu = document.createElement("div")
        this.divForMenu.className = "menu-div"

    }

    showMainPgContent()
    {
        this.header1.textContent = "Menu"
        this.divForMenu.appendChild(this.header1)

        this.descriptionPara.textContent = "Menu1"
        this.divForMenu.appendChild(this.descriptionPara)
        this.mainPgContent.appendChild(this.divForMenu)
    }
}

export const menu = new MenuPg()
