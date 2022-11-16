const rating = document.getElementById('rating');
const a = document.getElementById('thanks');
const b = document.getElementById('ratingcard');

/* change background color and text color submit link*/

document.getElementById("btnsubmit").onmouseover = function() {
    this.style.backgroundColor = "#fff";
}

document.getElementById("btnsubmit").onmouseout = function() {
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}

document.getElementById("accept").onmouseover = function() {
    accept.style.color = "hsl(25, 97%, 53%)";
}

document.getElementById("accept").onmouseout = function() {
    accept.style.color = "#fff";
}

/* change color of numbers */

Array.from(document.querySelectorAll('.number'), function(el){
    el.onclick = function(){
        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        this.style.color = "#fff";
    }
})  

/* click on button "SUBMIT"*/

function btnClick() { 
    if (a.style.display == 'block') 
        b.style.display = 'none';
    else 
        a.style.display = 'block';
}

/* selected number of vote */

Array.from(document.querySelectorAll('.number')).forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    });
})








