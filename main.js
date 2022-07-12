
function loadPic(numPic = 20){
    var i = 1;
    while(i<numPic)
        {
        var element = document.getElementById("giv");
        var clone = element.cloneNode(true);
        clone.id ="giv"+i;
        element.after(clone);
        i = i + 1;
        }
}
loadPic()

window.addEventListener('scroll', ()=> {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadPic()
    }
})
