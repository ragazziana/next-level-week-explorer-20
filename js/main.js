function darkMode(){
    document.body.style.background = '#231f1f';
    document.body.style.color= '#ffffff';
    document.getElementById('darkmode__moon').style.visibility='hidden';
    document.getElementById('darkmode__sun').style.visibility='visible';
}

function lightMode(){
    document.body.style.background = '#e6e6e6';
    document.body.style.color= '#000000';
    document.getElementById('darkmode__sun').style.visibility='hidden';
    document.getElementById('darkmode__moon').style.visibility='visible';
}