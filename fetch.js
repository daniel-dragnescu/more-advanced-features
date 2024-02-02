/*fetch('https://reqres.in/api/users/23')
  .then(res => {
    if (res.ok) {
      console.log('SUCCESS')
    } else {
      console.log('Not Successful')
    }
    res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))
*/
  

// fetch can have a second param but it's optional
// this will give us a response


fetch('https://reqres.in/api/users/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
.then(res => {
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))