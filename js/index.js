const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//HTML & BODY SELECTOR
let htmlBody = document.querySelector('html, body');
//Container Selector
let containerSelector = document.querySelector('.container');
//Header Selector
let header = document.querySelector('header');
//NAV Selector (we only have one)
let ourNav = document.querySelector('nav');

//aNCHOR Selector (we only have one set of anchors)
let anchor = document.querySelectorAll('a');
anchor[0].textContent = 'Services';
anchor[1].textContent = 'Product';
anchor[2].textContent = 'Vision';
anchor[3].textContent = 'Features';
anchor[4].textContent = 'About';
anchor[5].textContent = 'Contact';

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//CTA Section Selector
let callToAction = document.querySelector('.cta');

//CTA-text Selector
let ctaText = document.querySelector('.cta-text > h1');
ctaText.textContent = 'DOM IS AWESOME';

//CTA-text BUTTON Selector
let ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = 'Get Started';

//CTA-img Selector
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', 'img/header-img.png');


//MAIN CONTENT SELECTOR
let mainContent = document.querySelector('.main-content');
//Top-content Selector
let topContent = document.querySelector('.top-content');

//TOP-CONTENT --> TEXT CONTENT Selectors (2 total)
let topContentFirstH4 = document.querySelector('.top-content .text-content > h4');
let topContentSecondH4 = document.querySelector('.top-content .text-content:nth-child(2) > h4');
let topContentFirstP = document.querySelector('.top-content .text-content > p');
let topContentSecondP = document.querySelector('.top-content .text-content:nth-child(2) > p');
            //TextContent
topContentFirstH4.textContent = 'Features';
topContentSecondH4.textContent = 'About';
topContentFirstP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContentSecondP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
//mid-img-Content  Selector
        //img attr (src)
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');
//Bottom-Content Slector (part of main)
let bottomContentH4_1 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
let bottomContentP_1 = document.querySelector('.bottom-content .text-content:nth-child(1) p');

let bottomContentH4_2 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
let bottomContentP_2 = document.querySelector('.bottom-content .text-content:nth-child(2) p');

let bottomContentH4_3 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
let bottomContentP_3 = document.querySelector('.bottom-content .text-content:nth-child(3) p');

        //Text Content
bottomContentH4_1.textContent = 'Services';
bottomContentP_1.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomContentH4_2.textContent = 'Product';
bottomContentP_2.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomContentH4_3.textContent = 'Vision';
bottomContentP_3.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


//CONTACT SECTION Selector
let contactH4 = document.querySelector('.contact h4');
let contactP1 = document.querySelector('.contact p');
let contactP2 = document.querySelector('.contact:nth-child(1) p');
let contactP3 = document.querySelector('.contact:nth-child(2) p');
      //textContent
contactH4.textContent = 'Contact';
contactP1.textContent = '123 Way 456 Street Somewhere, USA';
contactP2.textContent = '1 (888) 888-8888';
contactP3.textContent = 'sales@greatidea.i';

//Footer Selector
let footer = document.querySelector('footer');
