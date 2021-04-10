/** Version solo promesas */
const getRepos = function(repoName) {
    const API = `https://api.github.com/users/${repoName}/repos`;
    return fetch(API,)  
   //return fetch('https://api.github.com/users/' + repoName + '/repos')  

};

let myElement = document.querySelector(".list-group-item");
migracodeRepos =  getRepos('migracode-barcelona');
migracodeRepos
.then(resolve => resolve.json())
.then(response => {
  response.forEach(rep => {
  let paragraph = document.createElement("p"); 
  let paragrap = document.createElement("li");
  paragraph.innerText = rep.name
  paragrap.append(paragraph)
  myElement.append(paragrap);
  });
  console.log('End!!!')
});
console.log("Loading...");


/** Version async await */

//const getRepos = async function(repoName) {
//  const API = `https://api.github.com/users/${repoName}/repos`;
//  try {
//    const resolve = await fetch(API,);
//    const data = await resolve.json();
//    let names = data.map(rep => rep.name);
//    var myElement = document.querySelector(".list-group-item");
//    names.forEach(namee => {
//      let paragraph = document.createElement("p"); 
//      let paragrap = document.createElement("li");
//      paragraph.innerText = namee;
//      paragrap.append(paragraph)
//      myElement.append(paragrap);
//    })
//  } catch (repoName) {
//    onerror(repoName)
//  }
//  console.log('End!!')
//
//};
//
//migracodeRepos =  getRepos('migracode-barcelona');
//console.log("Loading...");
//
//

//Task1. Fix the code
//Task2. Create a <p> for each repository
