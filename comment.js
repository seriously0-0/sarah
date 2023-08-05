const customerImage = document.getElementById("customer_img");
const customerName = document.getElementById("name");
const customerText = document.getElementById("comment");
const btns = document.querySelectorAll(".btn");
const addComment = document.getElementById("yourcomment");
const addName = document.getElementById("yourName");
const delBtn = document.getElementById("deleteBtn");
const plusBtn = document.getElementById("plusComment");

let index = 0;
const customers = [];

function Customer(img, name, text) {
  this.img = img;
  this.name = name;
  this.text = text;
}

function createCustomer(img, name, text) {
  let imgPath = `./img/${img}.jpg`;
  let newCustomer = new Customer(imgPath, name, text);
  customers.push(newCustomer);
}

createCustomer(
  0,
  "john",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
);
createCustomer(1, "joe", "It is a long established fact text.");
createCustomer(
  2,
  "mad",
  "It is a long established fact that a reader will be looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
);
createCustomer(
  3,
  "adam",
  "It is a long established fact that a reader will be distracted by the readable Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
);

function updateCustomer() {
  customerImage.src = customers[index].img;
  customerName.textContent = customers[index].name;
  customerText.textContent = customers[index].text;
}

btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("backBtn")) {
      index--;
      if (index < 0) {
        index = customers.length - 1;
      }
      updateCustomer();
    }
    if (e.target.parentElement.classList.contains("forwardBtn")) {
      index++;
      if (index >= customers.length) {
        index = 0;
      }
      updateCustomer();
    }
  });
});
plusBtn.addEventListener("click", function () {
  const commentText = addComment.value;
  const newCustomerName = addName.value;
  createCustomer(index, newCustomerName, commentText);
  updateCustomer();
  addComment.value = "";
  addName.value = "";
});
delBtn.addEventListener("click", function () {
  customers.splice(index, 1);
  if (index >= customers.length) {
    index = 0;
  }
  updateCustomer()
});
updateCustomer();
