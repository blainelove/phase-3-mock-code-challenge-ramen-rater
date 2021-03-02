// write your code here


function menu() {
    fetch("http://localhost:3000/ramens")
        .then (response => response.json())
        .then (data => {
            data.forEach(ramensObj => {
                renderRamenItems(ramensObj)
            })
            console.log(image)
            console.log(data.name)
         })        

}

function renderRamenItems(ramensObj){
    const div = document.createElement("div")
    div.classList.add('imagePic')
    div.dataset.id = ramensObj.id

    div.innerHTML = ` <div id="ramen-deta">
            <img class="detail-image" src="${ramensObj.image}" alt="Insert Name Here" />
                <h2 class="name">${ramensObj.name}</h2>
                <h3 class="restaurant">${ramensObj.restaurant}"</h3>
            </div>`
            const ramens = document.querySelector("div#ramen-menu")
            ramens.append(div)
}
    // "id": 3,
    // "name": "Nirvana Shiromaru",
    // "restaurant": "Ippudo",
    // "image": "./assets/ramen/nirvana.jpg",
    // "rating": "7",
    // "comment": "Do buy the hype."

menu()