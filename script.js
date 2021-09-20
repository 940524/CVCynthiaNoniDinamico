var tblFormacao = false;
var divExperiencias = false;
var divYouFIT = false;

function functionEsconderMostrar(tbl, div) {
  if (tbl){
    document.getElementById(div).style.display = "none";
  }else {
    document.getElementById(div).style.display = "block";
  }
  if(div == 'tbl-formacao'){
    tblFormacao = !tblFormacao
  }else if(div == 'div-experiencias'){
    divExperiencias = !divExperiencias
  }else if(div == 'div-youFIT'){
    divYouFIT = !divYouFIT
  }
}
