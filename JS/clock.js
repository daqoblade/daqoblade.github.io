const clock = document.querySelector("#clock");

function changeTime() {
    const now = new Date(Date.now());
    clock.innerText =   `${String(now.getHours()).padStart(2, '0')}:` + 
                        `${String(now.getMinutes()).padStart(2, '0')}:` +
                        `${String(now.getSeconds()).padStart(2, '0')}`;
}

changeTime()
setInterval(changeTime, 1000);