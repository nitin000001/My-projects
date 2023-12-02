
let btn = document.getElementById('generateOTPButton');

btn.addEventListener('click', function() {
    const digits = '0123456789';
    let otp = "";
    para = document.getElementById('otpDisplay');

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits[randomIndex];
    }

    para.textContent = `Your OTP is: ${otp}`;
});





