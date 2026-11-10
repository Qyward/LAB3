const createOffer = "https://localhost:7288/createOffer";
const searchOffers = "https://localhost:7288/searchOffers?line=";

function toCreate(event){
    location.href = "create.html";
}

function toBuy(event, id){
    location.href = "buyList.html";
}

function search(event){
    event.preventDefault();
    
    location.reload();
}

function getOffers(){
    let line = document.getElementById("line").value;
    let offersList = document.getElementById("offers");

    const request = fetch(
        searchOffers + line,
        {
            method: "GET"
        }
    )
    .then(response => response.json())
    .then(response =>{
        console.log(response);

        for(let i = 0; i < response["length"]; i++){
            let offer = document.createElement("div");
            let offerInfo = document.createElement("div");
            let info = document.createElement("div");
            offer.className = "offer";
            offerInfo.className = "offerInfo";
            info.className = "info";

            let name = document.createElement("h5");
            let text = document.createElement("p");
            let image = document.createElement("img");
            let button = document.createElement("button");
            button.className = "buy-button";
            button.textContent = "Детальніше";
            button.onclick = (event) => toBuy(event, response[i].id);

            name.textContent = response[i].name;
            text.textContent = response[i].lable;
            image.src = "data:image/jpeg;base64," + response[i].image;

            offer.appendChild(image);
            offerInfo.appendChild(name);
            info.appendChild(text);
            offer.appendChild(offerInfo);
            offerInfo.appendChild(info);
            offersList.appendChild(offer);
            offer.appendChild(button);
        }
    });
}


getOffers();