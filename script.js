settimeout(() => {
   
  const ul = document.getElementById("timeLeft")
  
  const start = 1992;
  const end=2992;
  const years = []
  
  for(year = start; year<= end; year++) {
    let className = "";
    if(year < 2024){
      className = "lived"
    }
    else if(year === 2024) {
      className = "living"
    }
    else 
      className = "yetToLive"
    const el = `<li title={year} class={className}></li>`
     years.push(el);
  }
  
  ul.innerHTML = years.join("");
}
