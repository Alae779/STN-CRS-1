let unworkers = []
let addworker = document.getElementById("add-new-worker")
addworker.addEventListener("click", (e) => {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("all-containers").style.filter = "blur(2px)";
    console.log("aaaa");
})

let closemodal = document.getElementById("closemodal")
closemodal.addEventListener("click", (e) => {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("all-containers").style.filter = "none";
    console.log("aaaadg");
})





let experiences = []
let addexperience = document.querySelector(".btn-add-exp")
addexperience.addEventListener("click", (e) => {
    let company = document.getElementById("worker-company").value;
    let exprole = document.getElementById("exp-role").value;
    let datefrom = document.getElementById("date-from").value;
    let dateto = document.getElementById("date-to").value;

    let expobj = {
        company: company,
        role: exprole,
        from: datefrom,
        to: dateto,
    }
    experiences.push(expobj);

    document.getElementById("worker-company").value = "";
    document.getElementById("exp-role").value = "";
    document.getElementById("date-from").value = "";
    document.getElementById("date-to").value = "";

    console.log(experiences)
})






let imglink = document.getElementById("worker-photo");
let form = document.getElementById("formulaire-id")
form.addEventListener("submit", submitworker)
function submitworker(e){
    e.preventDefault();
    let fullname = document.getElementById("worker-name").value;
    let role = document.getElementsByTagName("select")[0].value;
    let image = document.getElementById("worker-photo").value;
    let email = document.getElementById("worker-email").value;
    let number = document.getElementById("worker-number").value;

    let workersobj = {
        name: fullname,
        role: role,
        image: image,
        email: email,
        number: number,
        experiences: experiences,
    }
    unworkers.push(workersobj);
    console.log(unworkers);
    let listofworkers = document.getElementById("workers-list")
    listofworkers.innerHTML += `
        <div class="workers-lists">
        <div class="img-style" style=background: url(${image})></div>
        <div>${fullname}</div>
        <div>${role}</div>
        </div>
    `
    document.getElementById("worker-name").value = "";
    document.getElementsByTagName("select")[0].value = "Receptionist";
    document.getElementById("worker-photo").value = "";
    document.getElementById("worker-role").value = "";
    document.getElementById("pre-img").style.backgroundImage = "none";
    document.getElementById("worker-email").value = "";
    document.getElementById("worker-number").value = "";

    experiences = [];
    
}
imglink.addEventListener("change", (e) => {
        document.getElementById("pre-img").style.backgroundImage = `url(${imglink.value})`;
        document.getElementById("pre-img").style.backgroundSize = "cover";
    })



    //experience
    // new array of exp
    // addEventListener click

