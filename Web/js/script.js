function toggleContent(id){

    var x = document.getElementById("content-1")
    var y = document.getElementById("content-2")
    var z = document.getElementById("content-3")

    var select = document.getElementById("click2select")
    select.style.display = "none"

    if(id === 'content-1'){
        x.style.display = "block"
        y.style.display = "none"
        z.style.display = "none"
    }
    if(id === 'content-2'){
        x.style.display = "none"
        y.style.display = "block"
        z.style.display = "none"
    }
    if(id === 'content-3'){
        x.style.display = "none"
        y.style.display = "none"
        z.style.display = "block"
    }
    

}