const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button2=document.getElementById("button2");
button2.addEventListener("click", changeColor);
function changeColor(){
    button2.style.backgroundColor= "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

const para=document.querySelector("p");
para.addEventListener("click", update);
function update(){
    const sent=prompt("Enter a new sentence");
    para.textContent=`${sent}`;
}
