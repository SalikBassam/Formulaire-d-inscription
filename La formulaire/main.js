let namee = document.querySelector(".nome");
let prenom = document.querySelector(".prenom");
let email = document.querySelector(".email");
let tele = document.querySelector(".tele");
let btn = document.getElementById("btn");
let mis = document.querySelector(".mis");
let mis1 = document.querySelector(".mis1");
let mis2 = document.querySelector(".mis2");
let mis3 = document.querySelector(".mis3");
let mis4 = document.querySelector(".mis4");
let mis5 = document.querySelector(".mis5");
let mis6 = document.querySelector(".mis6");
let gender =document.getElementsByName("fm");
let Groupe =document.getElementsByName("gp");
let select =document.getElementById("clubs").selectedOptions;
btn.onclick = function(){
/////////////////////////// nome
  var nm = /^(?=.{0,30}$)([-'\w]+\s)*[-'\w]+$/;
  if (!namee.value.match(nm)) {
    mis.innerHTML = "<b>*Nome is invalid or empty</b>";
    mis.style.color = "red";
    namee.style.border = "1px solid red";
  } else {
    mis.innerHTML = "";
    namee.style.border = "none";
  }
//////////////////////////prenom
  var pr = /^(?=.{0,30}$)([-'\w]+\s)*[-'\w]+$/;
  if (!prenom.value.match(pr)) {
    mis1.innerHTML = "<b>*Prénom is invalid or empty</b>";
    mis1.style.color = "red";
    prenom.style.border = "1px solid red";
  } else {
    mis1.innerHTML = "";
    prenom.style.border = "none";
  }
//////////////////////////email
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    mis2.innerHTML = "<b>*Email is invalid or empty</b>";
    mis2.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    mis2.innerHTML = "";
    email.style.border = "none";
  }
//////////////////////////tele

  var number = /^(05|06|07)([0-9]{8})$|^(\+212)-?([0-9]{8})$/;
  if (!tele.value.match(number)) {
    mis3.innerHTML = "<b>*Télephone  is invalid or empty</b>";
    mis3.style.color = "red";
    tele.style.border = "1px solid red";
  } else {
    mis3.innerHTML = "";
    tele.style.border = "none";
  }

  ///////////////////////////////////////// genre
  var gen =!gender[0].checked && !gender[1].checked;
if (gen) {
  mis4.innerHTML = "<b>*Please choose one</b>";
  mis4.style.color = "red";
} else {
  mis4.innerHTML = "";
}
  ///////////////////////////////////////// Groupe
  var grou =!Groupe[0].checked && !Groupe[1].checked && !Groupe[2].checked && !Groupe[3].checked;
  if (grou) {
    mis5.innerHTML = "<b>*Please choose one</b>";
    mis5.style.color = "red";
  } else {
    mis5.innerHTML = "";
  }
//////////////////////////////////////////////selec
var sl = select.length >3 || select.length<1;
if(sl){
    mis6.style.color = "red";
    mis6.innerHTML = "<b>*choose between one and three</b>";
}else{
  mis6.innerHTML = "";
}


if (namee.value.match(nm) && prenom.value.match(pr) && email.value.match(mailformat) && tele.value.match(number) && !grou && !gen && !sl) {
  window.location.href = "done.html";
}else{
  btn.style.backgroundColor="red";
}
}

//version2//////////////////////////////////////////////////////////////
namee.onblur = function(){
  var nm = /^(?=.{0,30}$)([-'\w]+\s)*[-'\w]+$/;
  if (!namee.value.match(nm)) {
    mis.innerHTML = "<b>*Nome is invalid or empty</b>";
    mis.style.color = "red";
    namee.style.border = "1px solid red";
  } else {
    mis.innerHTML = "";
    namee.style.border = "none";
  }
}
prenom.onblur = function(){
  var pr = /^(?=.{0,30}$)([-'\w]+\s)*[-'\w]+$/;
  if (!prenom.value.match(pr)) {
    mis1.innerHTML = "<b>*Prénom is invalid or empty</b>";
    mis1.style.color = "red";
    prenom.style.border = "1px solid red";
  } else {
    mis1.innerHTML = "";
    prenom.style.border = "none";
  }
}
email.onblur = function(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    mis2.innerHTML = "<b>*Email is invalid or empty</b>";
    mis2.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    mis2.innerHTML = "";
    email.style.border = "none";
  }
}
tele.onblur = function(){
  var number = /^(05|06|07)([0-9]{8})$|^(\+212)-?([0-9]{8})$/;
  if (!tele.value.match(number)) {
    mis3.innerHTML = "<b>*Télephone  is invalid or empty</b>";
    mis3.style.color = "red";
    tele.style.border = "1px solid red";
  } else {
    mis3.innerHTML = "";
    tele.style.border = "none";
  }
}