const calendarButton = document.querySelector(".btn-start");
const calendarControl = document.querySelector(".container");
const months =12;

calendarButton.addEventListener(`click`, (event) =>{ 
    console.log("text");
    for(let i=0; i < months; i++){
        console.log(i);
        const calendarDoor = document.createElement("div");
        calendarDoor.classList.add("Image");
        calendarDoor.style.gridArea = "door"+(i+1);
        const calendarDoorText = document.createElement("div");
        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML=i+1;

        calendarDoor.appendChild(calendarDoorText);
        calendarControl.appendChild(calendarDoor);
        let picNumber = i+1;
        let picPath =`./img/pic${picNumber}.jpg`;
        calendarDoorText.addEventListener(`click`, (e)=>{
            e.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            e.target.style.opacity="0";
            e.target.style.backgroundColor = "#333";
        });
    }
    event.preventDefault();
})