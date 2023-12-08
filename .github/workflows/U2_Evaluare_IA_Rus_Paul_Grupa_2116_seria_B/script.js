document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("tabel");
    var rows = table.getElementsByTagName("tr");

   
    for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener("mouseover", function () {
            // Add the 'hover' class to the row on mouseover
            this.classList.add("hover");
        });

       
        rows[i].addEventListener("mouseout", function () {
            
            this.classList.remove("hover");
        });
    }
});document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next and previous buttons functionality
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Dots functionality
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Main function to control slides
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        var prevBtn = document.querySelector(".prev");
        var nextBtn = document.querySelector(".next");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        // Show/hide next and previous buttons
        if (prevBtn && nextBtn) {
            if (slideIndex === 1) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
            }

            if (slideIndex === slides.length) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.style.display = "block";
            }
        }
    }

    // Event listeners for next, previous, and dots
    document.querySelector(".prev").addEventListener("click", function () {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        plusSlides(1);
    });

    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            var dotIndex = Array.from(dots).indexOf(this) + 1;
            currentSlide(dotIndex);
        });
    }
});
function toggleVisibility() {
        var hiddenDiv1 = document.getElementById("b");
    var hiddenDiv2 = document.getElementById("a");

    // Toggle visibility by changing the display property
     if (hiddenDiv1.style.display === "block") {
        hiddenDiv1.style.display = "none";
        hiddenDiv2.style.display = "block";
    } else {
        hiddenDiv1.style.display = "block";
        hiddenDiv2.style.display = "none";
    }
}