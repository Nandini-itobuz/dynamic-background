const defaultColor = document.querySelector("#body-section");

defaultColor.addEventListener('click', (event) =>{
    const colors = event.target.id;
    console.log(colors)
    if(colors === "red"){
       document.body.style.backgroundColor = "#800e13";
    }
    if(colors === "green"){
        document.body.style.backgroundColor = "#84a98c";
     }
     if(colors === "blue"){
        document.body.style.backgroundColor = "#01497c";
     }
     if(colors === "yellow"){
        document.body.style.backgroundColor = "#fad643";
     }
})

