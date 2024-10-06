function getData() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      let arraData = []
      json.forEach(element => {
            arraData += `<div class="card">
        <div class="hed">
            <div class="num">
            ${element.id}</div>
           <h1 class="title">${element.title}</h1>
        </div>
        
        <p class="bdy">${element.body}<p>
    </div>`
        
    });
    document.getElementById('jeso').innerHTML =  arraData;
  })
      .catch((err) => console.log(err))
      .finally(() => console.log("finally"))
    

}
function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch ((err) => console.log(err))
}


function Updating() {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function  Deleting (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}