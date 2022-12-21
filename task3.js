var output = document.getElementById("output");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var web = document.getElementById("website");
var img = document.getElementById("inp_img");
var gender = document.getElementsByClassName("gender");
var checkbox = document.getElementsByClassName("checkbox");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var clr_inp = document.getElementsByClassName("clr_inp");


let img_src="";

img.addEventListener("change", function () {
    let img_reader = new FileReader();
    img_reader.addEventListener("load", function () {
        img_src = img_reader.result;
        
    })
    img_reader.readAsDataURL(this.files[0]);
})

submit.onclick = function () {
    let flag = 1;
    for (i = 0; i < document.querySelectorAll("input").length; i++) {
        if (document.querySelectorAll("input")[i].value == "") {
            flag = 0
            break;
        }
    }
    if (flag == 0)
        alert("All fields must be filled");
    else {
        
        let data = document.createElement("div");
        let image = document.createElement("div");
        let info = document.createElement("div");
        
        data.className = "data";
        image.className = "image";
        info.className = "info";

        let selected;
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked == true) {
                selected = gender[i].value;
            }
        }

        let skillbox = "";
        for (j = 0; j < checkbox.length; j++) {
            if (checkbox[j].checked == true) {
                skillbox += checkbox[j].value + ',';
            }
        }


        info.innerHTML = "<p>First Name : " + fname.value +"<p>Last Name : " + lname.value + "<p>Website : " + web.value +"</p><p>Email : " + email.value + "</p><p>Gender : " + selected + "</p><p>Skills : " + skillbox + "</p>";

        image.innerHTML = '<img src="' + img_src + '">';

       
        output.appendChild(data);
        data.appendChild(info);
        data.appendChild(image);
        
    }
}

let checklength = checkbox.length;
let radiolength = gender.length;
let btnselector=document.getElementById('clear');
let inputs = document.querySelectorAll('input');
btnselector.addEventListener('click', ()=> {
    inputs.forEach(input => input.value='');
    for(var x=0; x<checklength; x++)
{
    checkbox[x].checked=false;
}
for(var x=0; x<radiolength; x++)
{
    gender[x].checked=false;
}


})

