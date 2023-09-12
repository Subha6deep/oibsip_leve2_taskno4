const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

document.querySelector('.btnLogin-popup').addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

document.querySelector('.icon-close').addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
