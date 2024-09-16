function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phonenumber: document.getElementById("phonenumber").value
    }
    const serviceId = "service_o0e5wb4"
    const templateId = "template_unkuh2k"
    
    emailjs.send(serviceId,templateId,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("phonenumber").value = "";
            console.log(res,params);
            alert('message sent successfully')
        })
    .catch((err) => console.log('error'))
}

const menuIcon = document.querySelector('.menu')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () =>{
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () =>{
    headerContent.classList.remove('menu-open')

})