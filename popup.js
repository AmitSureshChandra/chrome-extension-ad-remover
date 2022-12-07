console.log("typing.com, keybr.com ad remover extension added");

// for removing from typing.com
let element = document.querySelector(".advert");
while (element) {
  element.remove();
  console.log("typing.com ad removed");
  element = document.querySelector(".advert");
}

// for removing from keybr.com

element = document.querySelector(".ZdXuj9XyUZ");
if (element) {
  element.remove();
  console.log("keybr.com ad removed");
}

element = document.querySelector(".VdMb5gBgcl");
if (element) {
  element.remove();
  console.log("keybr.com ad removed");
}
