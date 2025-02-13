import "./styles.css"
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
    }

    showMainPgContent()
    {
        // Create Header
        this.header1.textContent = "Welcome to AU Cafe Brekkie"
        this.mainPgContent.appendChild(this.header1)

        // Create a Description
        this.descriptionPara.textContent = "Here we offer classical Australian Cafe experience where you can enjoy delicious homemade roasting coffee with delicious food that will make your stomach happy"
        this.mainPgContent.appendChild(this.descriptionPara)
    }
}

const main = new MainPg()
main.showMainPgContent()