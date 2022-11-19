const id = document.getElementById('checking');
let windows;


//Create event for open windows into click submit. 
document.addEventListener('submit', e=>{
    if(e.target === id){
        e.preventDefault();
        windows = open(id.direction.value,'',`Width=${id.width.value},Height=${id.height.value}`)
    }
})

//Click close, windows closed. 
document.addEventListener('click', e =>{
    if(e.target === id.close) windows.close();
})
