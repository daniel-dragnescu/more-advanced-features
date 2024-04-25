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

  //method: post() - submit data to a specified resources, server
  //body: my data that i want to post
  
  //headers: provide additional data info about the request
  //headers: you need to tell fetch that you are going to pass json
  // from body that is sent in json format
  //content-type: the format of the data that i send

// GET: Used to retrieve data from a specified resource. GET requests are typically used for fetching data from a server without modifying it. For example, when you visit a webpage in your browser, your browser sends a GET request to fetch the HTML, CSS, JavaScript, and other resources needed to display the page.

// PUT: Used to update a specified resource with new data. PUT requests replace the entire resource(to replace some data) with the new data provided in the request body. For example, you might use a PUT request to update a user's profile information or to update a blog post.

// DELETE: Used to delete a specified resource from the server. DELETE requests remove the resource from the server permanently. For example, you might use a DELETE request to delete a user account or to remove a file from a server.

// PATCH: Similar to PUT, PATCH requests are used to update a specified resource with new data. However, unlike PUT requests, PATCH requests only update the parts of the resource specified in the request body, leaving the rest of the resource unchanged. For example, you might use a PATCH request to update only the name or email address of a user, without modifying other fields in their profile.

// OPTIONS: Used to describe the communication options for the target resource. OPTIONS requests are typically used by browsers to check what HTTP methods are supported by a server for a particular resource. For example, before making a POST request to submit a form, a browser might send an OPTIONS request to check if the server allows POST requests for that resource.

// HEAD: Similar to GET, but it only requests the headers of the response, without the actual content. HEAD requests are often used to check if a resource has been modified since the last request, without downloading the entire resource. For example, a browser might send a HEAD request to check if a cached version of a webpage is still valid before downloading it again.

