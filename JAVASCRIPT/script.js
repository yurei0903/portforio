var index_button=document.getElementById('ind_index');
const index_link=document.getElementById("index_link");
index_button.addEventListener('click',function(){
    if(index_link.style.display==="block")
        index_link.style.display="none";
    else{
        index_link.style.display="block";
    }
});

index_link.addEventListener('blur', function(){
    index_link.style.display="none";
});
