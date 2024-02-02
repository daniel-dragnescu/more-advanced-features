let p = new Promise((resolve, reject) => {
  let a = 1 + 2
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})


p.then((message) => {
  console.log('This is in the then' + ' ' + message)
}).catch((message) => {
  console.log('This is in the catch' + ' ' + message)
})

//anything inside then is going to run for resolve
//catch will catch any error which are our reject state


// Callback example 

const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     })

//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat'
//     })

//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Success: ' + message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })


//Using this with promises

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      })
  
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      })
  
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message)
}).then((message) => {
  console.log('Success: ' + message)
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
})


const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message)
})

//same as 'all' except for it will return as soon as the first one is completed instead of
//waiting for everything to complete and will return a single message




function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === 'Google') {
      resolve ('Google says hi')
    } else {
      reject('We can only talk to Google')
    }
  })
  }
  
  function processRequest(response) {
    return new Promise ((resolve, reject) => {
      console.log('Processing response')
      resolve(`Extra Information + ${response}`)
    })
  }
  
  makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(response)
  }).then(processedResponse => {
    console.log(processedResponse)
  }).catch(err => {
    console.log(err)
  })
  