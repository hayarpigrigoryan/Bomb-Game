let block = Array.from(document.querySelectorAll("div"));

let count = 0;
let bomb = [];

for(let i = 0; i < 7; i++) {
    bomb.push(Math.round(Math.random() * 100));
}

console.log(bomb);

block.map((el, i) => {
    el.addEventListener("click", () => {
        if(bomb.includes(i)) {
            el.innerText = "*";
            document.body.innerHTML = `
             <p>you lost</p>
            `;
        } else if(!bomb.includes(i)) {
            el.innerText = "W";
            count++;
            console.log(count);
            if(count === 93) {
                document.body.innerHTML = `
                    <p>You Win</p>
                `;
            }
            if(bomb.includes(i - 1) || bomb.includes(i - 10) || bomb.includes(i + 1) || bomb.includes(i + 10)) {
                el.style.backgroundColor = "red";
            }
        }
    })
})