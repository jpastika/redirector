function setFormFromRedirector(){
    setFrequency();
    setCity();
    setState();
    setZip();
}

function setFrequency(){
    var sel = document.forms[0].JUR_REF;
    var P1 = querySt("P1");
    var P5 = querySt("P5");
    var P6 = unescape(querySt("P6")).toLowerCase();
    console.log(P6);

    var idx = 0;
    if(unescape(P5).includes('Online at')){
        sel.selectedIndex = sel.options.length - 1;
    } else {
        for (var i = 0; i < sel.options.length; i++) {
            if (sel.options[i].text.toLowerCase() === P6) {
                sel.selectedIndex = i;
                break;
            }
        }
    }
}

function setCity(){
    var sel = document.forms[0].CITY;
    var P2 = querySt("P2");
    if(P2){
        sel.value=unescape(P2);
    }
}

function setState(){
    var sel = document.forms[0].STATE;
    var P3 = querySt("P3");
    if(P3){
        sel.value=unescape(P3);
    }
}

function setZip(){
    var sel = document.forms[0].ZIP;
    var P4 = querySt("P4");
    if(P4){
        sel.value=P4;
    }
}

function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}

setTimeout("setFormFromRedirector()", 200);
setTimeout("hideFields()", 300);

function hideFields(){
    var cell = document.forms[0].CELL;
    var dob = document.forms[0].DOB;

    cell.parentNode.parentNode.style.display = 'none';
    dob.parentNode.parentNode.style.display = 'none';
}
