function doSomething(value) {
  value();
}

doSomething(function() { //this func is an argument for the above
  console.log('hello');  //allows you to use another func to call a function
})



//another example

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':('
    })

  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat'
    })

  } else {
    callback('Thumbs up and Subscribe')
  }
}

watchTutorialCallback((message) => {
  console.log('Success: ' + message)
}, (error) => {
  console.log(error.name + ' ' + error.message)
})