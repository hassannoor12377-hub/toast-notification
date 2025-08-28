


let showToastBtn = document.querySelector(".showtoast");
let titleInput = document.querySelector(".textarea");
let msgInput = document.querySelector(".textarea2");
let typeRadios = document.querySelectorAll(".circle-radio");
let positionRadios = document.querySelectorAll(".circle-radio1");
let container = document.querySelector(".toast-container")

let randommsg = ["lahore", "karachi", "khanpur", "dew", "eddw", "dewe"];

showToastBtn.addEventListener("click", function () {
  let newdiv = document.createElement("div");
  newdiv.classList.add("toaster");
  container.append(newdiv)

  let selectedType = document.querySelector(".circle-radio:checked")?.id;

if (selectedType) {
  newdiv.classList.add(selectedType);
}



  // 🟢 Agar title/message empty hain
  if (titleInput.value.trim() === "" && msgInput.value.trim() === ""){
    let rand = randommsg[Math.floor(Math.random() * randommsg.length)];
    if (selectedType) {
      // ✅ Type text + random msg show hoga
      newdiv.innerHTML = `<strong>${selectedType.toUpperCase()}:</strong> <p>${rand}</p>`;
    } 
    else {
      newdiv.innerHTML = `<p>${rand}</p>`;
    }
  } 
  // 🟢 Agar user kuch likhta hai
  else {
    newdiv.innerHTML = `
      <strong>${titleInput.value}</strong>
      <p>${msgInput.value}</p>
    `;
    // ✅ yahan sirf user ka likha show hoga, SUCCESS/ERROR text nahi
  }

  // 🟢 Position set karo
  for (let pos of positionRadios) {
    if (pos.checked) {
      let container = document.querySelector(".toast-container");
      container.className = "toast-container " + pos.id;
    }
  }

  // 🟢 3 sec baad hide
  setTimeout(() => {
    newdiv.remove();
  }, 3000);
});




