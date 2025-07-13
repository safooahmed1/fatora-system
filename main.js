//fatora
const fatora = [
  // { name: "iphone x", price: "450", qty: "1" },
  // { name: "iphone 15", price: "500", qty: "2" },
  // { name: "iphone 16", price: "550", qty: "1" },
];
//Read
let fatoraList = document.querySelector("#fatoraList");

const showFatora = () => {
  fatoraList.innerHTML = "";
  fatora.forEach((el, index) => {
    fatoraList.innerHTML += `
<tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.qty}</td>
            <td class="text-white">
              <button onclick="incrementQty(${index})" class="btn btn-primary"><i class="bi bi-plus" style="font-size: 1rem;"></i></button>
              <button onclick="decrementQty(${index})" class="btn btn-danger"><i class="bi bi-dash"></i></button>
              <button class="btn btn-danger ms-2" onclick="removFromFatora(${index})"><i class="bi bi-trash-fill"></i></button>
            </td>
            <td class="price">${el.price}$</td>
            <td class="price">${el.price * el.qty}$</td>
          </tr>
    `;
  });
  calcTotle();
};
//calc total
const calcTotle = () => {
  let totle = 0;
  fatora.forEach((el) => {
    totle += el.price * el.qty;
  });
  document.querySelector("#total").innerHTML = `${totle}$`;
};

//Creat
const addToFatora = (btn, prodactIndex) => {
  btn.remove();
  let prodactObj = prodacts[prodactIndex];
  delete prodactObj.stockQty;
  delete prodactObj.img;
  prodactObj.qty = 1;
  fatora.push(prodactObj);
  showFatora();
};

//delete
const removFromFatora = (deleteIndexFatore) => {
  fatora.splice(deleteIndexFatore, 1);
  showFatora();
};

//Edit Qty
const incrementQty = (indexIncrement) => {
  fatora[indexIncrement].qty++;
  showFatora();
};

const decrementQty = (indexDecrement) => {
  if (fatora[indexDecrement].qty > 1) {
    fatora[indexDecrement].qty--;
    showFatora();
  }
};

//Model

let modal = document.querySelector("#myModal");

const openModel  = () => {
  modal.style.display = "flex";
};

const closeModel = () => {
  modal.style.display = "none";
};
