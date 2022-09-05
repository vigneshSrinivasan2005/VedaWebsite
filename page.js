var searchBar=document.getElementById("search");
var table= document.querySelectorAll('tbody tr')

searchBar.addEventListener('keyup', function(event){
    const searchfor=event.target.value.toLowerCase();
    table.forEach((row)=>{
        row.querySelector('td').textContent.toLowerCase().contains(searchfor) ? row.style.display="visible" : row.style.display="null"
    })    
})
