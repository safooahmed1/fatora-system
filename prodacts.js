const prodacts = [
  { name: "iphone xr", price: "450", stockQty: "5", img: "./1.jpg" },
  { name: "iphone 15", price: "500", stockQty: "8", img: "./2.jpg" },
  { name: "iphone 16", price: "550", stockQty: "4", img: "./3.jpg" },
  { name: "iphone 11", price: "300", stockQty: "3", img: "./4.jpg" },
  { name: "iphone xr", price: "450", stockQty: "5", img: "./1.jpg" },
  { name: "iphone 15", price: "500", stockQty: "8", img: "./2.jpg" },
  { name: "iphone 16", price: "550", stockQty: "4", img: "./3.jpg" },
  { name: "iphone 11", price: "300", stockQty: "3", img: "./4.jpg" },
];

let productList = document.querySelector("#product-list");

const showProdacts = () => {
  prodacts.innerHTML = "";
  prodacts.forEach((el, index) => {
    productList.innerHTML += `
    <div class="bg-light p-3 rounded shadow border d-flex col-3">
      <div class="col-3 d-flex">
        <img class="col-12 rounded" src="${el.img}" alt="${el.name}" />
      </div>
      <div class="col-9 d-flex flex-column">
      <div class="ms-4">
        <h1>${el.name}</h1>
          <p class="price">${el.price}$</p>
          <button onclick="addToFatora(event.target,${index})" class="btn btn-primary">Add To Fatora</button>
        </div>
      </div>
    </div>
`;
  });
};
showProdacts();
