const numberOfPicturesInFolder = 24;
//------------------------------------------------------------------------------------------//
//don't edit anything below this line//
//-----------------------------------------------------------------------------------------//
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
}

let current = "./images/1.jpg";

let parent = document.getElementById("image-preview");

for(i = 1; i <= numberOfPicturesInFolder; i++){
   let newImg = document.createElement('img');
   newImg.src = "./images-50/" + i + ".jpg";
   newImg.name = i + ".jpg";
   newImg.loading = "lazy"
   parent.appendChild(newImg);
}

function updateMainImage(e){
    let main = document.getElementById("main-image");
    current = e.target.src;
    main.src = current;
}

function handleMouseEnter(e){
    let main = document.getElementById("main-image");
    current = main.src;
    main.src = e.target.src;
}

function handleMouseOut(e){
    let main = document.getElementById("main-image");
    main.src = current;
}

document.querySelectorAll("#image-preview img").forEach(
    (e)=>{
        e.addEventListener("mouseover", handleMouseEnter);
        e.addEventListener("mouseout", handleMouseOut);
        e.addEventListener("click", updateMainImage);
     }
)
//-----------------------------------------------------------------//


function sidebarChildClick(e){
    document.getElementById("gallery-container").hidden = false;
    document.getElementById("contact-page-container").hidden = true;

    e.target.classList.add("selected");
    document.querySelectorAll("#sidebar :not(:first-child)").forEach((t)=>{
        if (t.classList.contains("selected") && t !== e.target) {
            t.classList.remove("selected");
        }
    })

    if (e.target.id==="contact-button") {
        document.getElementById("gallery-container").hidden = true;
        document.getElementById("contact-page-container").hidden = false;
    }
}

document.querySelectorAll("#sidebar :not(:first-child)").forEach((e)=>{
    e.addEventListener("click", sidebarChildClick)
})

function showFullsize(e){
    const modal = document.createElement('div');
    modal.id = "fullsize-modal";

    const img = document.createElement('img');
    img.id = "fullsize-img";
    img.src = "./images/" + e.target.name;

    const closeButton = document.createElement('p');
    closeButton.innerHTML = "X"
    closeButton.addEventListener("click", ()=>{document.getElementById("fullsize-modal").remove()})

    modal.appendChild(closeButton);
    modal.appendChild(img);
    document.getElementById("container").appendChild(modal);
}

if (!isTouchDevice()){
    document.querySelectorAll("#image-preview img").forEach(e => {
        e.addEventListener("click", showFullsize);
    })
}