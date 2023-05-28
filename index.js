const title = document.getElementById("title");
const colors = ['#FFE4E1', '#FFE4B5', '#FFDEAD'];

const pickRandomColor = () => {
    const curColor = title.style.color;
    let newColor;
    while(true){
        newColor = colors[Math.floor(Math.random() * colors.length)];
        if(curColor !== newColor) break;
    }
    title.style.color = newColor;
}

setInterval(pickRandomColor, 200);
