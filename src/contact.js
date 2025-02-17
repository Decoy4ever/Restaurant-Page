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
        const headerOpeningHrs = document.createElement("h1")
        const headerLocation = document.createElement("h1")
        const headerContacts = document.createElement("h1")
        headerOpeningHrs.textContent = "Opening hrs"
        headerLocation.textContent = "Location"
        headerContacts.textContent = "Contact Us"
        
        // add location info
        this.divForContacts.appendChild(headerLocation)
        const locationPara = document.createElement("p")
        locationPara.textContent = "343 Fake St, Fake Suburb 5894"
        this.divForContacts.appendChild(locationPara)
        
        // add opening hrs info
        this.divForContacts.appendChild(headerOpeningHrs)
        this.contactHrs.map((day) => {
            const contactPara = document.createElement("p")
            contactPara.textContent = `${day.day} : ${day.time}`
            this.divForContacts.appendChild(contactPara)
        })

        // add email address and phone number
        this.divForContacts.appendChild(headerContacts)
        const contactPara1 = document.createElement("p")
        const contactPara2 = document.createElement("p")

        contactPara1.textContent = "P: (08) 1234 5678"
        contactPara2.textContent = "E: fakeAddr@gmail.com"
        this.divForContacts.appendChild(contactPara1)
        this.divForContacts.appendChild(contactPara2)

        // append it to the `.content`
        this.mainPgContent.appendChild(this.divForContacts)
    }
}

export const contacts = new Contacts()