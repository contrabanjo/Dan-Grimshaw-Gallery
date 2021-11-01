const numberOfPicturesInFolder = 11;

let parent = document.getElementById("image-scroll");

for(i = 1; i <= numberOfPicturesInFolder; i++){
   let newImg = document.createElement('img');
   newImg.src = i + ".jpg";
   parent.appendChild(newImg);
}

function updateMainImage(e){
    let main = document.getElementById("main-image");
    main.src = e.target.src;
}

document.querySelectorAll("#image-scroll img").forEach(
    (e)=>{
        e.addEventListener("click", updateMainImage);
        e.addEventListener("mouseover", updateMainImage);
     }
)


function sidebarChildClick(e){
    document.getElementById("gallery").hidden = false;
    document.getElementById("contact-page").hidden = true;

    e.target.classList.add("selected");
    document.querySelectorAll("#sidebar :not(:first-child)").forEach((t)=>{
        if (t.classList.contains("selected") && t !== e.target) {
            t.classList.remove("selected");
        }
    })

    if (e.target.id==="contact-button") {
        document.getElementById("gallery").hidden = true;
        document.getElementById("contact-page").hidden = false;
    }
}

document.querySelectorAll("#sidebar :not(:first-child)").forEach((e)=>{
    e.addEventListener("click", sidebarChildClick)
})