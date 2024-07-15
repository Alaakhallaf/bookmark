var nameInput=document.getElementById("name");
var urlInput=document.getElementById("url");
var closeBtn=document.getElementById('closeBtn');
var layer=document.getElementById('layer');
var layerBox=document.querySelector('.layerBox');
console.log(layerBox);
var webs=[];
console.log(layer);
if(localStorage.getItem("localWebs")!==null)
{
   webs=JSON.parse(localStorage.getItem("localWebs"))
   display();
}

function Addwebs()
{
  if (validation()==true&&urlValidation()==true) {
    var web=
    {
        name:nameInput.value,
        url:urlInput.value,
    }
    webs.push(web);
    localStorage.setItem("localWebs",JSON.stringify(webs))
    display();
    clearData();
   
    // console.log(webs);
  }

else{
    layer.classList.remove('d-none');
    closeBtn.addEventListener('click',function(){
        layer.classList.add('d-none')
    })
    layer.addEventListener('click',function(eventInfo){
        layer.classList.add('d-none')
      
    })
    layerBox.addEventListener('click',function(eventInfo){
        
        eventInfo.stopPropagation()
    })
}
    
}



function clearData(){
   nameInput.value=null;
   urlInput.value=null; 
}

function deletItem(newIndex)
{
    webs.splice(newIndex,1);
    
    localStorage.setItem("localWebs",JSON.stringify(webs));
    display();
}


function display()
{
var cartona="";
for( var i=0; i<webs.length;i++)
{
    cartona+=`
      <tr>
        <td>${i}</td>
    <td>${webs[i].name}</td>
    <td>${webs[i].url}</td>
    <td><button class="btn btn-outline-danger "onclick="deletItem(${i})">Delete</button></td>
    </tr>`
}
// console.log(cartona);
document.getElementById("tdata").innerHTML=cartona;

}
function validation(){
    var text= nameInput.value;
var regex =/^[A-Za-z]{3,}$/

    if (regex.test(text)==true) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        return true;
    } else {
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        return false; 
    }
}
function urlValidation(){
    var text= urlInput.value;
var regex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i; 

    if (regex.test(text)==true) {
        urlInput.classList.add("is-valid")
        urlInput.classList.remove("is-invalid")
        return true;
    } else {
        urlInput.classList.add("is-invalid")
        urlInput.classList.remove("is-valid")
        return false;
    }
}





