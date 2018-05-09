
function myFunction() {
    var x = document.getElementById("b");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myFunctionTwo() {
    var x = document.getElementById("back");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var current_image = document.getElementById('current_image');
var button        = document.getElementById('button');
var buttonTwo     = document.getElementById('bu');
var buttonThree   = document.getElementById('c');
var buttonFour    = document.getElementById('d');
var buttonFive    = document.getElementById('m');
var buttonSix     = document.getElementById('g');
var buttonSeven   = document.getElementById('k');
var buttonEight   = document.getElementById('f');

button.addEventListener('click', cyclePictures);
buttonTwo.addEventListener('click', cyclePicturesTwo);
buttonThree.addEventListener('click', cyclePicturesThree);
buttonFour.addEventListener('click', cyclePicturesFour);
buttonFive.addEventListener('click', cyclePicturesFive);
buttonSix.addEventListener('click', cyclePicturesSix);
buttonSeven.addEventListener('click', cyclePicturesSeven);
buttonEight.addEventListener('click', cyclePicturesEight);



var my_pictures       = ['p0.png', 'p1.png', 'p2.png'];
var my_pictures_two   = ['i0.png', 'i1.png', 'i2.png'];
var my_pictures_three = ['a0.png', 'a1.png', 'a2.png'];
var my_pictures_four  = ['j0.png', 'j1.png', 'j2.png'];
var my_pictures_five  = ['m0.png', 'm1.png', 'm2.png'];
var my_pictures_six  = ['g0.png', 'g1.png', 'g2.png'];
var my_pictures_seven  = ['k0.png', 'k1.png', 'k2.png'];
var my_pictures_eight  = ['f0.png', 'f1.png', 'f2.png'];
var picture_number = 0;


function cyclePictures() {

  if (picture_number === my_pictures.length) {
    picture_number = 0;
  }

  current_image.src = 'p/' + my_pictures[picture_number];

  console.log(my_pictures[picture_number]);

  picture_number++;

}

function cyclePicturesTwo() {

  if (picture_number === my_pictures_two.length) {
    picture_number = 0;
  }

  current_image_two.src = 'i/' + my_pictures_two[picture_number];
  current_image_two.style.display="block";
  console.log(my_pictures_two[picture_number]);

  picture_number++;

}


function cyclePicturesThree() {

  if (picture_number === my_pictures_three.length) {
    picture_number = 0;
  }

  current_image_three.src = 'a/' + my_pictures_three[picture_number];
  current_image_three.style.display="block";
  console.log(my_pictures_three[picture_number]);

  picture_number++;

}

function cyclePicturesFour() {

  if (picture_number === my_pictures_four.length) {
    picture_number = 0;
  }

  current_image_four.src = 'j/' + my_pictures_four[picture_number];
  current_image_four.style.display="block";
  console.log(my_pictures_four[picture_number]);

  picture_number++;

}


function cyclePicturesFive() {

  if (picture_number === my_pictures_five.length) {
    picture_number = 0;
  }

  current_image_five.src = 'm/' + my_pictures_five[picture_number];
  current_image_five.style.display="block";
  console.log(my_pictures_five[picture_number]);

  picture_number++;

}


function cyclePicturesSix() {

  if (picture_number === my_pictures_six.length) {
    picture_number = 0;
  }

  current_image_six.src = 'g/' + my_pictures_six[picture_number];
  current_image_six.style.display="block";
  console.log(my_pictures_six[picture_number]);

  picture_number++;

}



function cyclePicturesSeven() {

  if (picture_number === my_pictures_seven.length) {
    picture_number = 0;
  }

  current_image_seven.src = 'k/' + my_pictures_seven[picture_number];
  current_image_seven.style.display="block";
  console.log(my_pictures_seven[picture_number]);

  picture_number++;

}

function cyclePicturesEight() {

  if (picture_number === my_pictures_eight.length) {
    picture_number = 0;
  }

  current_image_eight.src = 'f/' + my_pictures_eight[picture_number];
  current_image_eight.style.display="block";
  console.log(my_pictures_eight[picture_number]);

  picture_number++;

}
