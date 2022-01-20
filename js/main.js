function handleMenuCLick(menuItem) {
    const main = document.querySelector('.main');
    const sub = document.querySelector('.sub');
    const mainLink = document.querySelector('.main-link');
    const subLink = document.querySelector('.sub-link');
    main.style.display = menuItem === 'main' ? 'block' : 'none';
    mainLink.classList[menuItem === 'main' ? 'add' : 'remove']('active');
    sub.style.display = menuItem === 'sub' ? 'block' : 'none';
    subLink.classList[menuItem === 'sub' ? 'add' : 'remove']('active');
}
