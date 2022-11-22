let thispage = 1;
let limit = 8;
let list = document.querySelectorAll('.tab-content .tabs');

function loadItem(){
    let beginGet = limit * (thispage - 1);
    let endGet = limit * thispage - 1;
    /// tabs từng tabs bên trong key là vị trí của nó /////
    list.forEach((tabs, key) =>{
        if(key >= beginGet && key <= endGet){
            tabs.style.display = "block";
        }else{
           tabs.style.display = "none";
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count  = Math.ceil(list.length / limit);
    document.querySelector('.pagination').innerHTML = '';
    for(i = 1;i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thispage){
            newPage.classList.add('pagination-active')
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.pagination').appendChild(newPage)
    }
}
function changePage(i){
    thispage = i;
    loadItem();
}
//// search-menu ///////