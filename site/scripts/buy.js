const createOffer = "https://localhost:7288/createOffer";

function send(event){
    let file = document.getElementById("file").files[0];
    
    const image = new FormData();
    image.append("image", file);

    const request = fetch(createOffer, {
        method: "POST",
        body: image
    })
}