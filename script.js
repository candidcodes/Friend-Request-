var addFriend = document.querySelector("#add");
var h6 = document.querySelector("h6")
let flag=0

addFriend.addEventListener("click", function(){
    if(flag==0){
        h6.innerHTML = "Friends"
        h6.style.color = "green"
        addFriend.innerHTML = "Remove"
        addFriend.style.backgroundColor = "Grey"
        flag=1
    }else{
        h6.innerHTML = "Stranger"
        h6.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "cadetblue"
        flag=0
    }
})