alert('and to you');
//NEED:
//name
//email
//location[street, city, state, nc, zip]
//dob
//registration date


// function createProfiles(){
//   for (let customer of customers){
//     const customerNames = customers('email')

//     const customerNames = customers('street')
//   }
// }
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}
///
const customerNames = customers.map(function (customer) {
  return capitalizeFirstLetter(customer.name.first) +
    ' ' +
    capitalizeFirstLetter(customer.name.last)
})

const customerListItems = customerNames.map(function (name) {
  const li = document.createElement('li')
  li.textContent = name
  return li
  //name

  const email = document.createElement('email')
  email.textContent = email
  return email
  //email

  const street = document.createElement('street')
  li.textContent = street
  return street
  //street

  const zip = document.createElement('zip')
  li.textContent = city + state + zip
  return zip
  //city + state + zipcode

  const dob = document.createElement('dob')
  li.textContent = name
  return dob
  //dob

  const reg = document.createElement('reg')
  li.textContent = registration
  return reg
  //registration date
})
///
// const customerAddress = customers.map(function (customer) {
//   return capitalizeFirstLetter(customer.name.first) +
//     ' ' +
//     capitalizeFirstLetter(customer.name.last)
// })

// const customerListItems = customerNames.map(function (name) {
//   const li = document.createElement('li')
//   li.textContent = name
//   return li
// })