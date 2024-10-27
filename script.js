const ul = document.getElementById("timeLeft")

const start = 1992;
const end=2992;
const years = []

for(index = start; index<= end; index++) {
  let className = "";
  if(index < 2024){
    className == "lived"
  }
  else if(index === 2024) {
    className = "living"
  }
  else 
    className = "yetToLive"
  const el = `<li class={className}></li>`
   years.push(el);
}

ul.innerhtml = years.join("");
