
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;

    }
    else {
        linksContainer.style.height = 0;
    }
})



const portfolio = [
    {
        id: 1,
        category: "graph design",
        img: "./assets/image1.jpg",
    },
    {
        id: 2,
        category: "web design",
        img: "./assets/image2.jpg",
    },
    {
        id: 3,
        category: "web development",
        img: "./assets/image3.jpg",
    },
    {
        id: 4,
        category: "graph design",
        img: "./assets/image4.jpg",
    },
    {
        id: 5,
        category: "web design",
        img: "./assets/image5.jpg",
    },
    {
        id: 6,
        category: "web development",
        img: "./assets/image6.jpg",
    },
    {
        id: 7,
        category: "graph design",
        img: "./assets/image7.jpg",
    },
    {
        id: 8,
        category: "web design",
        img: "./assets/image8.jpg",
    },
    {
        id: 9,
        category: "graph design",
        img: "./assets/image9.jpg",
    },
]

const btnContainer = document.querySelector(".btn-container")
const portContainer = document.querySelector(".port-container")
window.addEventListener("DOMContentLoaded", function () {
    displayBtns();
    displayPortfolio(portfolio);
})
function displayPortfolio(portItems) {
    const displayPort = portItems.map(function (port) {
        return ` <div class="port">
                <img src="${port.img}" alt="" class="img-port">
                <div class="img-mask">
                    <div class="img-mask-content">
                        <h1>Project #${port.id}</h1>
                        <p>Description</p>
                    </div>
                </div>
            </div>`
    }).join("");
    portContainer.innerHTML = displayPort;
}
function displayBtns() {
    const categories = portfolio.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const btns = categories.map(function (category) {

        return `<button class="btn" data-id="${category}">${category}</button>`
    }).join("")
    btnContainer.innerHTML = btns;
    const portBtns = document.querySelectorAll(".btn");
    portBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {

            const category = btn.dataset.id;
            if (category == 'all') {
                displayPortfolio(portfolio);
            }
            else {
                const portItems = portfolio.filter((item) => {
                    if (item.category === category) {
                        return item;
                    }
                });

                displayPortfolio(portItems);
            }
        })
    })
}


// scroll link

const backToTop = document.querySelector(".back-to-top");
const navbar = document.querySelector(".navbar");
const hyperlinks = document.querySelectorAll(".link");
const header = document.querySelector(".header")
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 700) {
        backToTop.classList.add("show-link");
        navbar.classList.add("scroll");
    }
    else {
        backToTop.classList.remove("show-link");
        navbar.classList.remove("scroll")
    }
    hyperlinks.forEach((hyperlink, index) => {
        const id = hyperlink.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const headerHeight = header.getBoundingClientRect().height;

        const topElement = element.offsetTop - headerHeight;
        console.log(topElement)
        const bottomElement = element.getBoundingClientRect().height + topElement - headerHeight;
        console.log(bottomElement)
        if (scrollHeight > topElement && scrollHeight < bottomElement) {
            hyperlink.classList.add("active");
        }
        else {
            hyperlink.classList.remove("active")
        }
    })
})


hyperlinks.forEach((hyperlink) => {
    hyperlink.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const headerHeight = header.getBoundingClientRect().height;
        let position = element.offsetTop - headerHeight;
        if (!navbar.classList.contains("scroll")) {
            position += 10;
        }
        if (position < 0) {
            position = 0;
        }
        window.scrollTo({
            left: 0,
            top: position
        });
    })
});


const scrollDown = document.querySelector(".scroll-down");
const scrollUp = document.querySelector(".scroll-up");
scrollDown.addEventListener("click", function () {
    const heightAbout = document.querySelector(".about").offsetTop - header.getBoundingClientRect().height;
    window.scrollTo({
        left: 0,
        top: heightAbout
    })

})
scrollUp.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0
    });
})

