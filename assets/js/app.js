var btnName = document.getElementById("btn-name");
var btnHref = document.getElementById("btn-href");
var submitBtn = document.getElementById("submit-btn");
var searchBtnDiv = document.getElementById("search-btn-div");
var singleTruth = [];
// set my submitBtn to a variable
// set an eventlistener to my submitbtn
// the event i want to check for is a click on my submitbtn
// the function i want to run is after the comma
submitBtn.addEventListener('click', function (event) {
  // event console logged on line 11
  // is object given to us by eventlistener 
  // and we don't have to enter anything to see this object
  // console.log(event);
  // // event.preventDefault keeps page from reloading
  event.preventDefault();
  // // console.log(btnName.value);
  // // console.log(btnHref.value);
  // var createdBtn = document.createElement("a");
  // createdBtn.setAttribute("href", btnHref.value);
  // createdBtn.classList.add('created-btn', 'btn', 'btn-primary');
  // createdBtn.innerText = btnName.value;
  // searchBtnDiv.append(createdBtn);
  // pushing new item to singleTruth array
  singleTruth.push({
    name: btnName.value,
    href: btnHref.value
  });
  // saving array as string value to localstorage
  localStorage.setItem("singleTruth", JSON.stringify(singleTruth));
});
// checking to see if singletruth array exists
// and parsing it back into an iterable item
// and checking to see if the  length is greater than 0
var parsedSingleTruth = JSON.parse(localStorage.getItem("singleTruth"));
// check to see if localstorage of this item is null AND length is greater than 0
if (parsedSingleTruth !== null
  && parsedSingleTruth.length > 0) {
  // looping through item
  for (var i = 0; i < parsedSingleTruth.length; i++) {
    // creating new element per array item 
    var createdBtn = document.createElement("a");
    // setting href of new element
    createdBtn.setAttribute("href", parsedSingleTruth[i].href);
    // setting classes for new element
    createdBtn.classList.add('created-btn', 'btn', 'btn-primary');
    // setting text for new element
    createdBtn.innerText = parsedSingleTruth[i].name;
    // appening new element to div
    searchBtnDiv.append(createdBtn);
  }
}
