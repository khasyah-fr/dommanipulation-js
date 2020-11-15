window.addEventListener('load', setHeaderBg)

function setHeaderBg() {
    document.getElementById('main-header').style.backgroundColor = '#000000';
}

//add click listener
 let button = document.getElementById('button');
 // let times = 0;

 button.addEventListener('click', buttonClick);
 function buttonClick(e) {

    //EVENT PARAMETER

    //  console.log(e.target);
    //  console.log(e.target.className);
    //  console.log(e.target.id);
    //  console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    //MOUSE EVENTS

    // times = times + 1;
    // document.getElementById('header-title').textContent = `Button clicked ${times} times.`;
     document.getElementById('header-title').parentElement.parentElement.parentElement.parentElement.style.backgroundColor = `${getRandomColor()}`;
 }

 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}