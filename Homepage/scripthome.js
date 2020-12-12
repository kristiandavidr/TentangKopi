$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
$("#Top").click(function(){
  scroll(0,0);
 });

 
 function profileValidate()
 {
   var nama1= document.getElementById("name1Txt").value;
   var nama2= document.getElementById("name2Txt").value;
   var address = document.getElementById("addressTxt").value;
   var email = document.getElementById("emailTxt").value;
   var url = document.getElementById("urlTxt").value;
   var bio = document.getElementById("bioTxt").value;

   
   if(nama1 =="")
   {
     alert("nama harus di isi");
     
   }else if(nama1.length <3)
   {
     alert("Nama Minimal 3 karakter");
   }
   else if(nama1.length >20)
   {
     alert("Karakter yang digunakan terlalu panjang");
   }
   else if(nama2 =="")
   {
     alert("Username harus di isi");
     
   }else if(nama2.length <3)
   {
     alert("Username Minimal 3 karakter");
   }
   else if(nama2.length >20)
   {
     alert("Karakter yang digunakan terlalu panjang");
   }
   else if(email=="")
   {
     alert("masukan alamat email");
   }
   else if(address=="")
   {
     alert("address harus di isi");
   }
   else if(url=="")
   {
     alert("Link Url harus di isi");
   }
   else if(bio=="")
   {
     alert("biodata harus di isi");
   }
   else{
    alert("Profile berhasil di Update !");
   }
   

   function check_email(){
    var email = document.getElementById("emailTxt").value;
    if(!email.match(/\S+@\S+\.\S+/)){ // Jaymon's / Squirtle's solution
        // Do something
        alert("Masukan Alamat email yang valid");
        return false;
    }
    if(email.indexOf(' ')!=-1 || val.indexOf('..')!=-1){
      alert("Masukan Alamat email yang valid");
        // Do something
        return false;
    }
    return true;
}
 }