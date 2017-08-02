Feature('Home Page')

Scenario('test something', (I) => {
    I.amOnPage('/')
    I.seeElement(".plusButton")
    I.see("Mark as Read")
    I.see("Mark as Unread")
    I.see("Apply Label")
    I.see("Remove Label")
})