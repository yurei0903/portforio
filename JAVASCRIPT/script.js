const index_button_index=document.getElementById('ind_index');
index_button_index.addEventListener('click',function(){
    const index_link_index=document.getElementById("index_link");
    if(index_link_index.style.display==="block")
        index_link_index.style.display="none";
    else{
        index_link_index.style.display="block";
    }
    consle.log("A");
});