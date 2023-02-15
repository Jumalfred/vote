let navigator = document.querySelectorAll("a");
let btn = document.querySelectorAll(".box > button");
let children = document.querySelector('.right').children;
let boxes = document.querySelectorAll(".box");
let firstButton = document.querySelector(".candidates > button");
let votingPage = document.getElementById("vote");
let success = document.querySelector(".success");
let noOfVotes = 0;
let juma = false;
let locate = "";
let candidatesBox = document.querySelector('.candidates');
// let ballotBoxes = [{Position : "PRESIDENTIAL"}]
let Contester = [{image : "images/voter.jpg",Name : "Alfred Juma",Votes : noOfVotes},{image : "images/voter.jpg",Name : "Juma Alfred",Votes : noOfVotes},{image : "images/voter.jpg",Name : "Oginga Alfred",Votes : noOfVotes},{image : "images/voter.jpg",Name : "Felix Otieno",Votes : noOfVotes}];
for (let index = 0; index < navigator.length; index++) {
    navigator[index].addEventListener('click', function(){openModal(index)})
}
function openModal(index){
    clearContainer();
switch (index) {
    case 0:
        document.querySelector('.voting_guidelines').style.display = "flex";
        break;
    case 1:
        document.getElementById("profile").style.display = "block";
        break;
    case 2:
        updateCandidates();
        voteIn();
        break;
    case 3:
        document.getElementById("settings").style.display = "block";
        break;
}}
function clearContainer(){
    document.querySelector(".voting_guidelines").style.display ="none";
    for(let j = 0; j < children.length; j++){
        if(children[children.length-1].classList.contains("addContester")){
            children[children.length-1].style.display = "none";
        }
        if(children[j].style.display == "block" || children[j].style.display == "flex"){
    children[j].style.display = "none";
        }
}
}
function exitMenu(){
    clearContainer();
    votingPage.style.display = "flex";
}
function voted(){
    exitMenu();
    success.style.display = "block";
    setTimeout(() => {
        success.style.display = "none";
    }, 1500);
}
function updateCandidates(){
    if(candidatesBox.children.length > 3){
        let sectPresent = document.querySelectorAll(".candidates > section");
        for(let num = 0; num < sectPresent.length; num++){
            sectPresent[num].remove();
        }
    }
    for(let no = 0; no < Contester.length; no++){
        let img = document.createElement("img");
        img.setAttribute('src',Contester[no].image);
        img.setAttribute('alt',"Candidate");
        let name = document.createElement('h3');
        name.innerText = Contester[no].Name;
        let input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('class','check');
        let sect = document.createElement('section');
        sect.appendChild(img);
        sect.appendChild(name);
        sect.appendChild(input);
        candidatesBox.insertBefore(sect,firstButton);
    }
}
function checkVoted(){
    let checked = document.querySelectorAll('.check');
    for(let ch = 0; ch < checked.length ; ch++){
        checked[ch].disabled = juma;
        checked[ch].addEventListener("click",function(){
            if(checked[ch].checked){
            juma = true;
            checkVoted()
            checked[ch].disabled = false;
            }
            else{
                juma = false;
                checkVoted();
            }
        })
    }
}
function voteIn(){
    votingPage.style.display = "flex";
    for(let i = 0; i< btn.length; i++){
        btn[i].addEventListener("click",function(prop){
            clearContainer();
            prop.stopPropagation();
            document.getElementById("results").style.display = "flex";
})
    }
    for(let k = 0; k < boxes.length; k++){
    boxes[k].addEventListener("click",function(el){
            clearContainer();
            if(juma == true){ alert("You have already Voted")}
            checkVoted();
            document.getElementById("votingBox").style.display = "flex";
        })
    }
}
function adminPost(){
    let addCont = document.createElement('div');
    addCont.setAttribute("class","addContester");
    let h1ForAdmin = document.createElement('h1');
    let h1Text = document.createTextNode("ADMIN PAGE");
    h1ForAdmin.append(h1Text);
    let h3ForAdmin = document.createElement("h3");
    let h3Text = document.createTextNode("Admin Name :")
    let h3span = document.createElement("span");
    let h3SpanText = document.createTextNode("Oginga Alfred");
    h3span.append(h3SpanText);
    h3ForAdmin.append(h3Text);
    h3ForAdmin.appendChild(h3span);
    let h4ForPost = document.createElement("h4");
    let postText = document.createTextNode("POST ON UPDATE :");
    let spanForPost = document.createElement("span");
    let spanForPostText = document.createTextNode("PRESIDENTIAL");
    spanForPost.append(spanForPostText);
    h4ForPost.append(postText);
    h4ForPost.appendChild(spanForPost);
    let field = document.createElement("fieldset");
    let leg = document.createElement("legend");
    let legText = document.createTextNode("Add Poll");
    leg.append(legText);
    let lab = document.createElement("label");
    lab.setAttribute("for","file")
    let labText = document.createTextNode("Photo of the candidate : ");
    lab.append(labText);
    let filImg = document.createElement("input");
    Object.assign(filImg,{"type":"file","name":"file","id":"file"});
    lab.appendChild(filImg);
    let lab2 = document.createElement("label");
    lab2.setAttribute("for","name");
    let lab2Text = document.createTextNode("Name of the candidate : ");
    lab2.append(lab2Text);
    let filText = document.createElement("input");
    Object.assign(filText,{"type":"text","name":"name","id":"name","placeholder":"Oginga Alfred"})
    lab2.appendChild(filText);
    let addBtn = document.createElement("button");
    let addBtnText = document.createTextNode("ADD");
    addBtn.append(addBtnText);
    addBtn.addEventListener("click",function(){addToCheckList()})
    field.appendChild(leg);
    field.appendChild(lab);
    field.appendChild(lab2);
    field.appendChild(addBtn);
    let field2 = document.createElement("fieldset");
    let leg2 = document.createElement("legend");
    let leg2Text = document.createTextNode("Candidates Added");
    leg2.setAttribute("id","leg")
    leg2.append(leg2Text);
    let subBtn  = document.createElement("button");
    let subBtnText = document.createTextNode("Submit");
    subBtn.append(subBtnText);
    field2.appendChild(leg2);
    field2.appendChild(subBtn);
    addCont.appendChild(h1ForAdmin);
    addCont.appendChild(h3ForAdmin);
    addCont.appendChild(h4ForPost);
    addCont.appendChild(field);
    addCont.appendChild(field2);
    document.querySelector(".right").appendChild(addCont);
    document.querySelector("#file").addEventListener("change",function(ec){locate = URL.createObjectURL(ec.target.files[0])});
}
function addToCheckList(){
    let PhotoName = document.querySelector("#file").files[0];
    let candSect = document.createElement("section");
    let imgFile = document.createElement("img");
    if(document.querySelector("#file").files[0] == null){
        Object.assign(imgFile,{"src":"images/avatar.png","alt":"Voter"})
    }
    else{
    Object.assign(imgFile,{"src":locate,"alt":"Voter"});
    }
    let candH4 = document.createElement("h4");
    let candH4text = document.querySelector(".addContester > fieldset > label > input[type='text']").value;
    candH4.append(candH4text);
    let DelBtn = document.createElement("button");
    let delText = document.createTextNode("Delete");
    DelBtn.append(delText);
    DelBtn.addEventListener("click",function(){this.parentElement.remove()})
    candSect.appendChild(imgFile);
    candSect.appendChild(candH4);
   candSect.appendChild(DelBtn);
   let btnBefore = document.querySelector("fieldset:last-of-type > button");
   document.querySelector("fieldset:last-of-type").insertBefore(candSect,btnBefore)
}
function openAdminPage(){
        if(children[children.length-1].classList.contains("addContester")){
            children[children.length-1].style.display = "block";
        }
        else{
            adminPost();
    }
}