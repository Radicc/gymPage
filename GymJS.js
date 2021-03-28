let i = 0;
function unHideOneTimeEntrySection(){

    if(i === 0){
        document.getElementById("ourPernamentFunction").style.display="none";
        document.getElementById("oneTimeEntryFunction").style.display="block";
        document.getElementById("monthlyPernamentsId").className = "monthlyPernaments2";
        document.getElementById("dailyEntryId").className = "dailyEntry1";
        i = 1;
    }
}

function unHidePernamentSection(){
    document.getElementById("ourPernamentFunction").style.display="block";
    document.getElementById("oneTimeEntryFunction").style.display="none";
    document.getElementById("monthlyPernamentsId").className = "monthlyPernaments";
    document.getElementById("dailyEntryId").className = "dailyEntry";
    i = 0;
}