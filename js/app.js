
const getElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element
    throw Error (
        `Please check your class names, there is no ${selector} class`
    )
}

const links  = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = new Date();
const footerDOM = document.getElementById("date").innerHTML = date.getFullYear();
