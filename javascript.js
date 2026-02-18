const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    }else{
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "riteshtiwari69621@gmail.com",
        Password : "A7A50E83D8209EE3E8D5B3239C286A2FD709",
        To : 'riteshtiwari99999@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name:" + document.getElementById("name").value
               + "<br>Email: " + document.getElementById("email").value
               + "<br>Message: " + document.getElementById("Massage").value
    }).then(
      message => alert("Thank You to your feedback")
    );
}