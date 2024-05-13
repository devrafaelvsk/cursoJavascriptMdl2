
function show() {
    // Obter um elemento único a partir do seu id
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // Celeciona pega tag
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // celeciona pelo nome da classe
    const contactInputs  = document.getElementsByClassName('contact-input')
    console.log(contactInputs)
    
    const contact = document.querySelectorAll('#contact-list > li > label')
    console.log(contact)

    //pelo nome
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)

    const firsContact = document.querySelector('#contact-list > li > label')
    console.log(firsContact)