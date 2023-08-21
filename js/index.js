function handle(target) {
  let UlContainer = document.getElementById("ul");
  let itemName = target.childNodes[1].childNodes[7].childNodes[1].innerText;
  let liItem = document.createElement("li");
  liItem.innerText = itemName;
  UlContainer.appendChild(liItem);
  
}

//  secound card
document.getElementById("btn-2").addEventListener("click", function () {
  let kitchenwerSecound = document.getElementById("Kitchenware-2nnd-product");
  let kitchenwerSecoundString = kitchenwerSecound.innerText;
  let kitchenwerSecoundPrice = parseFloat(kitchenwerSecoundString);
  totalPrice(kitchenwerSecoundPrice)
});

// first card
document.getElementById("btn1").addEventListener("click", function () {
  let kitchenwerFirstPrice = document.getElementById("Kitchenware-1st-product");
  let kitchenwerFirstPriceString = kitchenwerFirstPrice.innerText;
  let kitchenwerFirstCurrentPrice = parseFloat(kitchenwerFirstPriceString);

  // let totalPriceId = document.getElementById("Total-pricee");
  // let totalPriceString = totalPriceId.innerText;
  // let totalPrice = parseFloat(totalPriceString);
  // // totalPriceId.innerText = kitchenwerFirstCurrentPrice;

  // let currentTotalPrice = kitchenwerFirstCurrentPrice + totalPrice;
  // totalPriceId.innerText = currentTotalPrice;
  // 
  totalPrice(kitchenwerFirstCurrentPrice)
});

// third card

document.getElementById("btn-3").addEventListener("click", function () {
  let kitchenwerThird = document.getElementById("Kitchenware-3rd-product");
  let kitchenwerThirdString = kitchenwerThird.innerText;
  let kitchenwerThirdprice = parseFloat(kitchenwerThirdString);

  // let thirdTotal = document.getElementById("Total-pricee");
  // let thirdTotalString = thirdTotal.innerText;
  // let thirdCurrentTotal = parseFloat(thirdTotalString);

  // let thirdtOtal = kitchenwerThirdprice + thirdCurrentTotal;
  // thirdTotal.innerText = thirdtOtal;

  // let thirdUl = document.getElementById("ul");
  // let thirdLi = document.createElement("li");
  // let thirdcurrentLi = thirdLi.innerText;
  // thirdUl.appendChild(thirdcurrentLi);
  // 
  totalPrice(kitchenwerThirdprice)
});

// 4th card

document.getElementById("btn-4").addEventListener("click", function () {
  let kitchenwerFourth = document.getElementById("Kitchenware-4th-product");
  let kitchenwerFourthString = kitchenwerFourth.innerText;
  let kitchenwerFourthPrice = parseFloat(kitchenwerFourthString);

  // let fourthtotal = document.getElementById("Total-pricee");
  // let fourthtotalString = fourthtotal.innerText;
  // let fourthCurrentTotal = parseFloat(fourthtotalString);

  // let fourthTOtal = fourthCurrentTotal + kitchenwerFourthPrice;
  // fourthtotal.innerText = fourthTOtal;
  // 
  totalPrice(kitchenwerFourthPrice)

  // 5th card
});

document.getElementById("btn-5").addEventListener("click", function () {
  let kitchenwerFifh = document.getElementById("Kitchenware-5th-product");
  let kitchenwerFifhString = kitchenwerFifh.innerText;
  let kitchenwerFifhPrice = parseFloat(kitchenwerFifhString);

  // let fifthTotal = document.getElementById("Total-pricee");
  // let fifthTotalString = fifthTotal.innerText;
  // let fifthCurrentTotal = parseFloat(fifthTotalString);

  // let fifthToTal = fifthCurrentTotal + kitchenwerFifhPrice;
  // fifthTotal.innerText = fifthToTal;
  // 
  totalPrice(kitchenwerFifhPrice)
});

// 6th card
document.getElementById("btn-6").addEventListener("click", function () {
  let kitchenwersix = document.getElementById("Kitchenware-6th-product");
  let kitchenwersixString = kitchenwersix.innerText;
  let kitchenwersixPrice = parseFloat(kitchenwersixString);

  // let sixTotal = document.getElementById("Total-pricee");
  // let sixTotalString = sixTotal.innerText;
  // let sixTotalAmmount = parseFloat(sixTotalString);

  // let sixToTal = sixTotalAmmount + kitchenwersixPrice;
  // sixTotal.innerText = sixToTal;
  // 
  totalPrice(kitchenwersixPrice)
});

let totalSpan = document.getElementById("Total-pricee");
let checkButton = document.getElementById("apply");

checkButton.addEventListener("click", function () {

  let totalPrice = parseFloat(totalSpan.innerText);
  let discountTotal = document.getElementById("discount-total");
  let couponBtn = document.getElementById('coupon')
  

  let discountt = document.getElementById("discount");
  let discounttString = discountt.innerText;
  let discount = parseFloat(discounttString);

  if(couponBtn.value=='SELL200'){
    let preDiscount = totalPrice * 0.2;
  let result = totalPrice - preDiscount;
  discountTotal.innerText = result.toFixed(0);
  let DisscounttString = discountTotal.innerText;
  let disCountToTaL = parseFloat(DisscounttString);

  let mainDiscountTotal = totalPrice - disCountToTaL;
  discountt.innerText = mainDiscountTotal.toFixed(0);
  }

  
  
});

document.getElementById("lablee").addEventListener("click", function () {
  location.reload();
});



function totalPrice(price){
  const totalSpann = document.getElementById("Total-pricee");
  const totalPricee = parseFloat(totalSpann.innerText);
  const total = totalPricee + price;
  totalSpann.innerText=total;

  const checkButtonn = document.getElementById("apply");
  if (total >= 200) {
    checkButtonn.disabled = false;
  } else {
    checkButtonn.disabled = true;
  }

  const totalBtn = document.getElementById('total');
  if(total==0){
    totalBtn.disabled=true;
  }
  else{
    totalBtn.disabled=false;
  }
}
