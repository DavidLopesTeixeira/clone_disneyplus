
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideAllTabs();

            tab.classList.add("shows__list--is-active");
            removeActiveButton();
            button.target.classList.add("shows__tabs__button--is-active");
        })
    };

    // Seção FAQ, Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", openCloseAnswer)
    }
});

function openCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classe);
};

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
};

function exibeElementosDoHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
};



function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button--is-active");
    }
};

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active");
    }
};


