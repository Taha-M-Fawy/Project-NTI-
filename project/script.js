document.addEventListener('DOMContentLoaded', () => {
    const textItems = ['web developer', 'coder', 'youtuber'];
    const textElement = document.getElementById('changing-text');
    let currentIndex = 0;

    function showNextText() {
        textElement.textContent = textItems[currentIndex];
        currentIndex = (currentIndex + 1) % textItems.length;
    }

    setInterval(showNextText, 2000); // تغيير النص كل 2 ثانية
    showNextText(); // عرض النص الأول عند تحميل الصفحة

    document.querySelectorAll('nav a').forEach(anchor => { 
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSector = document.getElementById(targetId);
            targetSector.scrollIntoView({
                behavior: 'smooth'
            });

            // تغيير الخلفية
            targetSector.classList.add('highlight');
            setTimeout(() => {
                targetSector.classList.remove('highlight');
            }, 2000); // إزالة التمييز بعد 2 ثانية
        });
    });

    document.getElementById('delete-message').addEventListener('click', () => {
        document.getElementById('error-message').innerText = "";});
});

function validateEmail() {
    let email = document.getElementById("email").value;
    let errorMessageElement = document.getElementById("error-message");

    errorMessageElement.innerText = "";

    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if (atIndex < 0 || dotIndex < 0 || atIndex >= dotIndex) {
        errorMessageElement.innerText = "Invalid email: Please ensure there's an @ and a dot.";
        return;
    }

    let localPart = email.slice(0, atIndex);
    let domainPart = email.slice(atIndex + 1, dotIndex);
    let extensionPart = email.slice(dotIndex + 1);

    let errors = [];

    if (localPart.length < 2) {
        errors.push("The part before @ needs at least two characters.");
    }

    if (domainPart.length < 3 || domainPart.includes(" ")) {
        errors.push("The part between @ and the dot needs at least three characters and no spaces.");
    }

    if (extensionPart.length < 3 || extensionPart.includes(" ")) {
        errors.push("The part after the dot needs at least three characters and no spaces.");
    }

    if (errors.length > 0) {
        errorMessageElement.innerText = "Invalid email:\n" + errors.join("\n");
    } else {
        errorMessageElement.innerText = "Valid email.";
    }
}
