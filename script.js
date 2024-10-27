const ul = document.getElementById("timeLeft")

const start = 1992;
const end=2992;
const years = []

for(index = start; index<= end; index++) {
  const className = "";
  if(index < 2024){
    clsasName == "lived"
  else if(index === 2024) {
    className = "living"
  else 
    className = "yetToLive"
  const el = `<li class={className}></li>`
   years.push(el);
}

ul.innerhtml = years.join("");
