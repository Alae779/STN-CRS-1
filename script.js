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

    let urlregex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let numberregex = /^\+?[0-9\s\-]{7,15}$/

    if (!urlregex.test(imglink.value)) {
    alert("Invalid image url!");
    return;
    }

    if (!emailregex.test(email)) {
    alert("Invalid email!");
    return;
    }

    if (!numberregex.test(number)) {
    alert("Invalid phone number!");
    return;
    }

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
        
    <div class="workers-lists" style="display: flex; align-items: center; gap: 10px; font-weight: bold;">
        <div class="img-style" style="width:50px; height:50px; border-radius:50%; background: url('${image}') no-repeat center/cover;"></div>
        <div>
        <div>${fullname}</div>
        <div>${role}</div>
        </div>
        <div class="icons-btn">
            <button class="details-btn" id="btndetails" data-index="0"><i class="fa-solid fa-circle-info"></i></button>
        </div>
    </div>`;

    document.getElementById("worker-name").value = "";
    document.getElementsByTagName("select")[0].value = "Receptionist";
    document.getElementById("worker-photo").value = "";
    document.getElementById("worker-role").value = "";
    document.getElementById("pre-img").style.backgroundImage = "none";
    document.getElementById("worker-email").value = "";
    document.getElementById("worker-number").value = "";

    experiences = [];
    
    

let detailsbtn = listofworkers.querySelectorAll(".details-btn");
detailsbtn.forEach((btn, i) => {
    btn.onclick = () => {
        let worker = unworkers[i];

        document.querySelector(".img-indetails").style.backgroundImage = `url(${worker.image})`;
        document.querySelector(".img-indetails").style.backgroundSize = "cover";
        document.querySelector(".det-name").textContent = worker.name;
        document.querySelector(".det-role").textContent = worker.role;
        document.querySelector(".det-email").textContent = worker.email;
        document.querySelector(".det-number").textContent = worker.number;
        document.querySelector(".det-location").textContent = "Unassigned";

        let expbox = document.querySelector(".exp-details");
        expbox.innerHTML = "";
        worker.experiences.forEach(exp => {
            expbox.innerHTML += `
                <div style="margin-bottom: 10px; padding: 5px; border-bottom: 1px solid white;">
                    <strong>${exp.company}</strong><br>
                    Role: ${exp.role}<br>
                    From: ${exp.from}<br>
                    To: ${exp.to}
                </div>
            `;
        });

        document.querySelector(".worker-details").style.display = "block";
        document.getElementById("all-containers").style.filter = "blur(2px)";   

    }

});

let closedetail = document.getElementById("closedetail")
closedetail.addEventListener("click", (e) => {
    document.querySelector(".worker-details").style.display = "none";
    document.getElementById("all-containers").style.filter = "none";
})



}
imglink.addEventListener("change", (e) => {
        document.getElementById("pre-img").style.backgroundImage = `url(${imglink.value})`;
        document.getElementById("pre-img").style.backgroundSize = "cover";
    })



let named = document.querySelector(".det-name")
let roled = document.querySelector(".det-role")
let emaild = document.querySelector("det-email")
let numberd = document.querySelector(".det-number")
let locationd = document.querySelector(".det-location")
let detexp = document.querySelector(".exp-details")




let assignbtn = document.querySelectorAll(".btn-add-to-zone")
const workerstoassign =document.querySelector(".workers-abt-assign")
assignbtn.forEach(assign => {
    assign.addEventListener("click", (e) => {
    document.querySelector(".workers-toadd").style.display = "block";
    document.getElementById("all-containers").style.filter = "blur(2px)";

    let fullname = document.getElementById("worker-name").value;
    let role = document.getElementsByTagName("select")[0].value;
    let image = document.getElementById("worker-photo").value;
    workerstoassign.innerHTML = "";
    unworkers.forEach((worker, index) => {
            workerstoassign.innerHTML += `
                <div class="workers-lists" style="display: flex; align-items: center; gap: 10px; font-weight: bold;">
                    <div class="img-style" style="width:50px; height:50px; border-radius:50%; background: url('${worker.image}') no-repeat center/cover;"></div>
                    <div>
                        <div>${worker.name}</div>
                        <div>${worker.role}</div>
                    </div>
    
                </div>`;
        });
     
   
    
})

let closeas = document.getElementById("closeas")
closeas.addEventListener("click", (e) => {
    document.querySelector(".workers-toadd").style.display = "none";
    document.getElementById("all-containers").style.filter = "none";
})
})
    

