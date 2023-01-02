const element = document.getElementById("phone");
const maskOptions = {
  mask: "+380(00)000-00-00",
  lazy: false,
};
const mask = new IMask(element, maskOptions);
