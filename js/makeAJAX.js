const loadJSON = (url) => {
  return fetch(url)
    .then(response => response.json())
}

const loadGithubUser = (name) => {
  return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
}

const showAvtar = (gitHubUser) => {
  return new Promise ((resolve, reject) => {
    let imgEl = document.createElement('img')
    imgEl.src = gitHubUser.avatar_url
    imgEl.className ="promise-avatar-example";
    document.body.append(img)

    setTimeOut(() => {
      imgEl.remove()
      resolve(gitHubUser)
    }, 3000)
  })
}

loadJSON('http://javascript.info/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvtar)
  .then(gitHubUser =>  alert(`Finished showing ${githubUser.name}`))
  .catch(err => alert(err.message))


let names = ['anu', 'priya', 'hello']
let requests = (names) => names.map( name => fetch(`https://api.github.com/users/${name}`))
Promise.all(requests)
  .then(responses => {
    responses.forEach(response => {
      console.log(`${response.url} has a status of ${response.status}`)
    })
    return responses
  })
  .then(responses => {
    let json = responses.map(data => data.json())
    return Promise.all(json)
  })
  .then(users => users.forEach(user => alert(user.name)))
