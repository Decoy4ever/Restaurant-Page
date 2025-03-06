class Contacts
{
    constructor()
    {
        this.mainPgContent = document.querySelector(".content")        
        this.divForContacts = document.createElement("div")
        this.divForContacts.className = "contact-div"
        this.contactHrs = [
            { day: "Mon" ,time: "9am - 2pm"},
            { day: "Tue" ,time: "9am - 2pm"},
            { day: "Wed" ,time: "9am - 2pm"},
            { day: "Thu" ,time: "9am - 2pm"},
            { day: "Fri" ,time: "9am - 2pm"},
            { day: "Sat" ,time: "9am - 12pm"},
            { day: "Sun" ,time: "Closed"},
        ]
    }

    showContactsContent()
    {
        this.divForContacts.textContent = ""
        this.divForContacts.style.gridRow = " 1/7"
        this.divForContacts.style.gridColumn = "2/6"
        this.divForContacts.style.justifyContent = "center"
        this.divForContacts.style.alignContent = "center"
        this.divForContacts.style.gap = "1rem"
        this.divForContacts.style.gridTemplateRows = "max-content"
        this.divForContacts.style.backgroundColor = "black"
        this.divForContacts.style.padding = "1rem"
        this.divForContacts.style.border = "0.5rem solid white"

        const headerOpeningHrs = document.createElement("h1")
        const headerLocation = document.createElement("h1")
        const headerContacts = document.createElement("h1")
        headerOpeningHrs.style.fontSize = "4rem"
        headerContacts.style.fontSize = "4rem"
        headerLocation.style.fontSize = "4rem"
        headerOpeningHrs.textContent = "Opening hrs"
        headerLocation.textContent = "Location"
        headerContacts.textContent = "Contact"
        headerOpeningHrs.style.textDecorationLine = "underline"
        headerContacts.style.textDecorationLine = "underline"
        headerLocation.style.textDecorationLine = "underline"

        // add location info
        this.divForContacts.appendChild(headerLocation)
        const locationPara = document.createElement("p")
        locationPara.textContent = "343 Fake St, Fake Suburb 5894"
        locationPara.style.fontSize = "2rem"
        this.divForContacts.appendChild(locationPara)
        
        // add opening hrs info
        this.divForContacts.appendChild(headerOpeningHrs)
        this.contactHrs.map((day) => {
            const contactPara = document.createElement("p")
            contactPara.textContent = `${day.day} : ${day.time}`
            contactPara.style.fontSize = "2rem"
            this.divForContacts.appendChild(contactPara)
        })

        // add email address and phone number
        this.divForContacts.appendChild(headerContacts)
        const contactPara1 = document.createElement("p")
        const contactPara2 = document.createElement("p")
        contactPara1.style.fontSize = "2rem"
        contactPara2.style.fontSize = "2rem"

        contactPara1.textContent = "P: (08) 1234 5678"
        contactPara2.textContent = "E: fakeAddr@gmail.com"

        this.divForContacts.appendChild(contactPara1)
        this.divForContacts.appendChild(contactPara2)

        // append it to the `.content`
        this.mainPgContent.appendChild(this.divForContacts)
    }
}

export const contacts = new Contacts()