var viewportWidth = window.innerWidth;

$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
   
})
// $(document).on("contextmenu", function(e) {
//     e.preventDefault();
// });
$(document).ready(function(){
    var images = [
        "img/2.jpeg",
        "img/3.jpeg",
        "img/1.jpeg"
    ];

    var currentIndex = 0;

    function changeBackground() {
        $(".brth_girl").css("backgroundImage", "url('" + images[currentIndex] + "')");
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); 
});



function sendMail(e) {

    let params = {
        choose: document.querySelector('input[name="choose"]:checked').value,
        guestname: document.getElementById("guestname").value,
        guestnumber: document.getElementById("guestnumber").value,
    };
  
    const serviceID = "service_ka6ginj";
    const templateID = "template_dqksrco";
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            (document.querySelector('input[name="choose"]:checked').value = ""),
                (document.getElementById("guestname").value = ""),
                (document.getElementById("guestnumber").value = ""),
                console.log(res);
            console.log("Succesfully");
            window.location.reload();
        })
        .catch((err) => console.log(err));
  }
  
  const sendMailbtn = document.querySelector("#sendMail");
  
  sendMailbtn.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail();
   alert("Ուղարկված է");
  });