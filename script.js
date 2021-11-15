const numberOfPicturesInFolder = 24;
//------------------------------------------------------------------------------------------//
//don't edit anything below this line//
//-----------------------------------------------------------------------------------------//
let current = "./images/1.jpg";

let parent = document.getElementById("image-preview");

for(i = 1; i <= numberOfPicturesInFolder; i++){
   let newImg = document.createElement('img');
   newImg.src = "./images-50/" + i + ".jpg";
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
        e.addEventListener("click", updateMainImage);
        e.addEventListener("mouseover", handleMouseEnter);
        e.addEventListener("mouseout", handleMouseOut);
     }
)
//-----------------------------------------------------------------//


function sidebarChildClick(e){
    document.getElementById("gallery").classList.toggle("hidden");
    document.getElementById("contact-page").classList.toggle("hidden");

    e.target.classList.add("selected");
    document.querySelectorAll("#sidebar :not(:first-child)").forEach((t)=>{
        if (t.classList.contains("selected") && t !== e.target) {
            t.classList.remove("selected");
        }
    })

    if (e.target.id==="contact-button") {
        console.log("contact button triggered");
         document.getElementById("gallery").classList.add = "hidden";
         document.getElementById("contact-page").classList.remove = "hidden";
    }
}

document.querySelectorAll("#sidebar :not(:first-child)").forEach((e)=>{
    e.addEventListener("click", sidebarChildClick)
})
