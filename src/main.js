document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const truePositon = window.scrollY;

        if (truePositon < heroHeight) {
            hiddenHeaderElements();
        } else {
            showsHeaderElements();
        }
    }) 
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(buttonActive) {
            const tabActive = buttonActive.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabActive}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveClass();
            buttonActive.target.classList.add('shows__tabs__button--is-active');
        });
    };

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    };
});

function hiddenHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
};

function showsHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
};

function toggleAnswer(event) {
    const classFaq = 'faq__questions__item--is-open';
    const eventTarget = event.target.parentNode;

    eventTarget.classList.toggle(classFaq);
};

function removeActiveClass() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    };
};

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    };

};