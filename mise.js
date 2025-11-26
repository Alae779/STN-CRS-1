const users = [
  { id: 1, nom: "Safaa", city: "Tanger" },
  { id: 2, nom: "Amine", city: "Casa" },
  { id: 3, nom: "Sara", city: "Rabat" },
  { id: 4, nom: "Youssef", city: "Marrakesh" }
];
let search = document.getElementById("search");
search.addEventListener("click", (e) => {
    let selectedcity = document.getElementById("select").value;

    users.forEach(element => {
        document.getElementById("persons").innerHTML = `
        <ul>
        <li>${element.id}</li>
        <li>${element.nom}</li>
        <li>${element.city}</li>
        </ul>`
    })
})