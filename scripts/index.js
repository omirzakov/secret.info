const accordeonsBtn = document.querySelectorAll(".often-questions-item");
const instructionBtn = document.querySelector(".instruction-hide");
const instructionShow = document.querySelector(".instruction-show");

instructionBtn.addEventListener("click", function() {

    if(instructionShow.classList.contains("active")) {
        instructionShow.classList.remove("active");
        return;
    }

    instructionBtn.style.display = "none";
    instructionShow.classList.toggle("active");
})

instructionShow.addEventListener("click", function() {
    if(instructionShow.classList.contains("active")) {
        instructionBtn.style.display = "block";
        instructionShow.classList.remove("active");
        return;
    }
    else {
        instructionBtn.style.display = "block";
    }
})


accordeonsBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        const subInfo = btn.querySelector(".total-info");

        subInfo.classList.toggle("open");
    })
})
