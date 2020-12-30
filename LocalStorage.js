console.log("Page is Ready")

var take_input=document.getElementById("take_input")
var take_input_key=document.getElementById("take_input_key")
var save_value=document.getElementById("save_value")
var search_input=document.getElementById("search_input")
var localStorage_value=document.getElementById("localStorage_value")
var read_localstorage=document.getElementById("read_localstorage")
var delete_input_key=document.getElementById("delete_input_key")
var delete_data=document.getElementById("delete_data")
//var Read_All_Data=document.getElementById("Read_All_Data")

save_value.onclick=function(){
    localStorage.setItem(take_input_key.value,take_input.value);
}

read_localstorage.onclick=function(){
    localStorage_value.textContent=localStorage.getItem(search_input.value);
}

delete_data.onclick=function(){
    localStorage.removeItem(delete_input_key.value);
    console.log("Deletion is Succesfull")
}

Read_All_Data.onclick=function(){
    var keys=Object.keys(localStorage)
    console.log(keys)

    for(var key of keys){
        console.log("Key :"+key+": Value: "+localStorage.getItem(key));
    }
}