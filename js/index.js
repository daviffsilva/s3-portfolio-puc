/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

let db_portfolio = {
    "portfolio": [
        {
            "id": 1,
            "nome": "Arte",
            "img": "img/Arte.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        },
        {
            "id": 2,
            "nome": "Culinaria",
            "img": "img/Culinaria.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        },
        {
            "id": 3,
            "nome": "Entretenimento",
            "img": "img/entretenimento.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        },
        {
            "id": 4,
            "nome": "Fotografia",
            "img": "img/fotografia.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        },
        {
            "id": 5,
            "nome": "Música",
            "img": "img/music.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        },
        {
            "id": 6,
            "nome": "Tecnologia",
            "img": "img/tecnologia.jpg",
            "descricao": "05/05/2022",
            "user_id": "1",
        }
    ]
}

localStorage.setItem('db_portfolio', null);
let dbInitValues = JSON.parse(localStorage.getItem('db_portfolio'));
if (!dbInitValues) {
    dbInitValues = db_portfolio;
    localStorage.setItem('db_portfolio', JSON.stringify(dbInitValues));
};

const page = {
    currentSwal: null,
    database: new Database('db_portfolio'),
    init: e => {
        page.listPortfolios();
    },
    listPortfolios: () => {
        const db = page.database;
        let portfolios = db.read('portfolio');
        const $portfolioCarousel = $("#portfolioCarousel");
        const $portfolioCardTemplate = $("#portfolioCardTemplate");
        const $portfolioModalTemplate = $("#portfolioModalTemplate");

        let $curPortfolio, $curModal;
        if(portfolios.length == 0){
            $portfolioCarousel.html("Nenhum registro encontrado.");
        }else{
            portfolios.forEach(portfolio => {
                console.log(portfolio);
                $curPortfolio = $portfolioCardTemplate.clone();
                $curModal = $portfolioModalTemplate.clone();
                
                $curModal.removeClass('d-none');
                $curModal.attr('id', 'portmodal-' + portfolio.id);
                $curModal.find(".portfolio-modal-title").html(portfolio.nome);
                $curModal.find("p").html(portfolio.descricao);
                $curModal.find("img").attr("src", portfolio.img);
                $curModal.appendTo("body");

                $curPortfolio.removeClass('d-none');
                $curPortfolio.attr('id', 'portcard-' + portfolio.id);
                $curPortfolio.find(".port-modal-toggler").attr("data-bs-target", "#portmodal-" + portfolio.id);
                $curPortfolio.find("img").attr("src", portfolio.img);
                $curPortfolio.appendTo($portfolioCarousel);
            });

            let $btnAux;
            for (let i = 0; i < portfolios.length - 3; i++) {
                $btnAux = $(".map > button.active").clone();
                $btnAux.removeClass("active");
                $btnAux.attr("data-page", 2 + i);
                $btnAux.appendTo(".map");
                console.log($btnAux);        
            }


                    
            const buttonsWrapper = document.querySelector(".map");
            const slides = document.querySelector(".inner");
            
            buttonsWrapper.addEventListener("click", e => {
                if (e.target.nodeName === "BUTTON") {
                    Array.from(buttonsWrapper.children).forEach(item =>
                    item.classList.remove("active")
                    );
                    
                    slides.style.transform = `translateX(-${((parseInt(e.target.attributes.getNamedItem("data-page").value)-1)/3)*100}%)`;
                    e.target.classList.add("active");
                }
            });
        }

        // $(".btnDownload").off('click');
        // $(".btnEdit").off('click');
        // $(".btnDelete").off('click');
        // $(".btnDownload").click(page.downloadPortfolio);
        // $(".btnEdit").click(page.editPortfolio);
        // $(".btnDelete").click(page.deletePortfolio);
    }
}
// const db = new Database();
$(document).ready(page.init);

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    

});
