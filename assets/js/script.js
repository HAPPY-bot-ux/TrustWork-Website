'use strict';

/**
 * WHATSAPP MENU LOGIC
 * Renamed variables to avoid conflict with navbar 'overlay'
 */
const waDrawer = document.getElementById('waDrawer');
const waOverlayElem = document.getElementById('waOverlay'); // Changed name here

function openWaMenu() {
    if (waDrawer && waOverlayElem) {
        waDrawer.classList.add('active');
        waOverlayElem.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }
}

function closeWaMenu() {
    if (waDrawer && waOverlayElem) {
        waDrawer.classList.remove('active');
        waOverlayElem.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
}

/**
 * YOUR ORIGINAL NAVBAR CODE
 * Now safe from conflicts
 */
const addEventOnElem = function (elem, type, callback) {
    if(!elem) return; // Safety check
    if(elem.length > 1) {
        for(let i=0; i<elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navOverlay = document.querySelector("[data-overlay]"); // Renamed for clarity

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navOverlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navOverlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

// Header active on scroll
const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        if(backToBtn) backToBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        if(backToBtn) backToBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);