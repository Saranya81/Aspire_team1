

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".login-form");
    var closeButton = document.querySelector(".close-icon");
    var loginButton = document.querySelector(".login-button");
    
    modal.style.display = "none";
    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }
    

    // Event listener to open the login form
   loginButton.addEventListener("click", openModal);
    
    // Event listener to close the login form
    closeButton.addEventListener("click", closeModal);

    document.getElementById("login-eye").addEventListener("click", function() {
        var passwordInput = document.getElementById("login-pass");
        var eyeIcon = document.getElementById("login-eye");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("ri-eye-off-line");
            eyeIcon.classList.add("ri-eye-line");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("ri-eye-line");
            eyeIcon.classList.add("ri-eye-off-line");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the offcanvas sidebar
    var offcanvasSidebar = document.querySelector(".sidebar.offcanvas");

    // Get all navbar items
    var navbarItems = document.querySelectorAll(".navbar-nav .nav-link");

    // Add event listener to each navbar item
    navbarItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Check if the screen size is small (phone size)
            if (window.innerWidth <= 991) {
                // Toggle the 'show' class of the offcanvas sidebar
                offcanvasSidebar.classList.toggle("show");
            }
        });
    });
   
    
    // Get the login button
    var loginButton = document.querySelector(".login-button");

    // Add event listener to the login button
    loginButton.addEventListener("click", function() {
        // Check if the screen size is small (phone size)
        if (window.innerWidth <= 991) {
            // Toggle the 'show' class of the offcanvas sidebar
            offcanvasSidebar.classList.toggle("show");
        }
    });
});


/*let videoBtn=document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;

    })
})*/
document.addEventListener("DOMContentLoaded", function() {
    let videoBtn = document.querySelectorAll('.vid-btn');
    let currentIndex = 0;

    videoBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            currentIndex = index;
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
        });
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
       
        document.querySelector('.controls .active').classList.remove('active');
        // Increment currentIndex
        currentIndex = (currentIndex + 1) % videoBtn.length;
        // Add active class to the next button
        videoBtn[currentIndex].classList.add('active');
        // Get the data-src attribute of the next button
        let src = videoBtn[currentIndex].getAttribute('data-src');
        // Set the src attribute of the video to the next button's data-src
        document.querySelector('#video-slider').src = src;
    });
});

/*review*/
function showText(element) {
    var cardText = element.querySelector('.card-text');
    cardText.classList.toggle('visible');
}

/*contact*/
document.addEventListener("DOMContentLoaded", function() {
    var bookNow = document.querySelector(".Form");
    var closeButton = document.getElementById("close-Form");
    var enquiryButton = document.querySelector(".btn-enquiry");
    bookNow.style.display = "none";
    function openForm() {
        bookNow.style.display = "flex";
    }

    function closeForm() {
        bookNow.style.display = "none";
    }
    enquiryButton.addEventListener("click", openForm);
     closeButton.addEventListener("click", closeForm);
});
/*enquiry form pop up*/
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("Form");
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        modal.style.display = "block";
        submitForm();
    });
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    function submitForm() {
        form.style.display = "none";}
});




document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-pass").value;

    if (email === "admin@gmail.com" && password === "admin") {
        // Navigate to the admin page
        window.location.href = "../Admin/admin.html";
    } else {
        // Handle incorrect credentials
        alert("Incorrect email or password. Please try again.");
    }
});
