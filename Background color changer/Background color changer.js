let a=document.querySelector("button");
let mode ='light';
a.onclick = () =>{
    if(mode == 'light'){
        mode='dark';
        document.querySelector("body").style.backgroundColor = 'black';
        document.querySelector("h1").style.backgroundColor = 'white';
        alert("Changing background to Black")
        }
        else{
            mode='light';
        document.querySelector("body").style.backgroundColor = 'white';
       
        alert("Changing background to Light")
        }

} 