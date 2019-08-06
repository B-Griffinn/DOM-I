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
//NAV BAR
let navbar = document.querySelectorAll('nav a')
console.log(navbar);
navbar[0].textContent = siteContent["nav"]["nav-item-1"];
navbar[1].textContent = siteContent["nav"]["nav-item-2"];
navbar[2].textContent = siteContent["nav"]["nav-item-3"];
navbar[3].textContent = siteContent["nav"]["nav-item-4"];
navbar[4].textContent = siteContent["nav"]["nav-item-5"];
navbar[5].textContent = siteContent["nav"]["nav-item-6"];
//NAV STYLES
navbar.forEach(function(currentValue, index){
  currentValue.textContent = siteContent['nav'][`nav-item-${index + 1}`];
  currentValue.style.color = 'green';
});
//.prepend()
const first = document.createElement('a');
console.log(first)
first.textContent = 'Home';
first.setAttribute('href', '#');
first.style.color = 'green';
const prepend = document.querySelector('nav');
prepend.prepend(first);

//.appendChild()
const child = document.createElement('a');
console.log(child)
child.textContent = 'Blog';
child.setAttribute('href', '#');
child.style.color = 'green';
const childAppend = document.querySelector('nav');
childAppend.appendChild(child);

//NAV IMG
let navImg = document.getElementById('logo-img');
navImg.setAttribute('src', 'img/logo.png')
////////////////
//Section CTA Selectors
let ctaHeader = document.querySelector('.cta h1').innerHTML=`DOM <br> Is <br> Awesome`;
let ctaButton = document.querySelector('.cta button');
let ctaImg = document.getElementById('cta-img');
//CTA tests
console.log(ctaHeader);
console.log(ctaButton);
console.log(ctaImg);
//CTA updated selectors
// ctaHeader.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', 'img/header-img.png');
//////////////
//Main Content Selectors
let featuresHeader = document.querySelector('.top-content .text-content:nth-child(1) h4');
let featuresP = document.querySelector('.top-content .text-content:nth-child(1) p');
let aboutHeader = document.querySelector('.top-content .text-content:nth-child(2) h4');
let aboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
//tests
console.log(featuresHeader);
console.log(featuresP);
console.log(aboutHeader);
console.log(aboutP);
//Main Content updated selectors
featuresHeader.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];
aboutHeader.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];
/////////
//Mid-Img
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg')
/////////
//Botton-Content Selectors
let servicesHeader = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
let servicesP = document.querySelector('.bottom-content .text-content:nth-child(1) p');
let productHeader = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
let productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
let visionHeader = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
let visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
//tests
console.log(servicesHeader);
console.log(servicesP);
console.log(productHeader);
console.log(productP);
console.log(visionHeader);
console.log(visionP);
//Bottom Content updated selector
servicesHeader.textContent = siteContent['main-content']['services-h4'];
servicesP.textContent = siteContent['main-content']['services-content'];
productHeader.textContent = siteContent['main-content']['product-h4'];
productP.textContent = siteContent['main-content']['product-content'];
visionHeader.textContent = siteContent['main-content']['vision-h4'];
visionP.textContent = siteContent['main-content']['vision-content'];
///////
//Contact Section Selectors
let contactHeader = document.querySelector('.contact h4'); //** this is child 1**
// let contactAddress = document.querySelector('.contact p:nth-child(2)');
let contactPhone = document.querySelector('.contact p:nth-child(3)');
let contactEmail = document.querySelector('.contact p:nth-child(4)');
//tests
console.log(contactHeader)
// console.log(contactAddress)
console.log(contactPhone)
console.log(contactEmail)
//Contact Section Updated Selectors
// contactHeader.textContent = siteContent['contact']['contact-h4'];
// contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];
//////
//break-line for the address
const contactEl = document.querySelector('.contact');
console.log(contactEl)
contactEl.querySelector('h4').textContent = siteContent.contact["contact-h4"];

const contactDetail = ['address', 'phone', 'email'];
console.log(contactDetail)
contactEl.querySelectorAll('p').forEach((curr,index) => {
  if (index !== 0) { 
    curr.textContent = siteContent.contact[contactDetail[index]];  
    // Update Contact - phone and email
  } else {
    const address = siteContent.contact[contactDetail[index]].split(' ');
    const stateInd = address.indexOf(address.find( curr => curr.includes(',')));
    // the street address
    const street = document.createElement('div');
    street.textContent = address.slice(0, stateInd).join(' ');
    curr.append(street);
    // the state address
    const state = document.createElement('div');
    state.textContent = address.slice(stateInd).join(' ');
    curr.append(state);
  }
});
// EVENT LISTENERS
// ctaButton.addEventListener('click', (event) => { event.target.style.backgroundColor = 'skyblue'; });


/*
"cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
*/

// let ctaContainer = document.querySelector('.cta');
// // contactEl.querySelector('h4').textContent = siteContent.contact["contact-h4"];
// // const contactDetail = ['address', 'phone', 'email'];
// ctaContainer.querySelector('h1').textContent = siteContent.contact['contact-h4'];

// const detail = ['address', 'phone', 'email'];

// ctaContainer.querySelector('p').forEach((curr, index) => {
//   if(index !== 0){
//     curr.textContent = siteContent.contact[detail[index]];  
//   }else {
//     // const address1 = siteContent.contact[detail[index]].split('');
//     const stateInd1 = address.indexOf(address.find(curr => curr.includes(',')));
//     // // the street address
//       const street1 = document.createElement('div');
//       street1.textContent = address.slice(0, stateInd1).join(' ');
//       curr.append(street1);
    

//     // // the state address
//     // const state = document.createElement('div');
//     // state.textContent = address.slice(stateInd).join(' ');
//     // curr.append(state);
//   }
  
// });


//Scrapped CODE
// //aNCHOR Selector (we only have one set of anchors)
// let anchor = document.querySelectorAll('a');
// console.log(anchor)
// anchor[0].textContent = 'Services';
// anchor[1].textContent = 'Product';
// anchor[2].textContent = 'Vision';
// anchor[3].textContent = 'Features';
// anchor[4].textContent = 'About';
// anchor[5].textContent = 'Contact';

// anchor[0].style.color = 'green';
// anchor[1].style.color = 'green';
// anchor[2].style.color = 'green';
// anchor[3].style.color = 'green';
// anchor[4].style.color = 'green';
// anchor[5].style.color = 'green';

//     //.appendChild()
// const appendChild = document.createElement('a');
// console.log(appendChild)
// appendChild.textContent = 'My appendChild';
// appendChild.setAttribute('href', '#');
// appendChild.style.color = 'green';
// const myAppendChild = document.querySelector('nav');
// myAppendChild.appendChild(appendChild)

//     //.prepend
// const appendEl = document.createElement('a');
// const myNav = document.querySelector('nav');
// console.log(appendEl);

// appendEl.textContent = 'My Prependage';
// appendEl.setAttribute('href', '#');
// appendEl.style.color = 'green';

// myNav.prepend(appendEl)


// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);


// //CTA Section Selector
// let callToAction = document.querySelector('.cta');

// //CTA-text Selector
// let ctaText = document.querySelector('.cta-text > h1');
// ctaText.textContent = 'DOM IS AWESOME';

// //CTA-text BUTTON Selector
// let ctaButton = document.querySelector('.cta-text > button');
// ctaButton.textContent = 'Get Started';

// //CTA-img Selector
// let ctaImage = document.getElementById('cta-img');
// ctaImage.setAttribute('src', 'img/header-img.png');


// //MAIN CONTENT SELECTOR
// let mainContent = document.querySelector('.main-content');
// //Top-content Selector
// let topContent = document.querySelector('.top-content');

// //TOP-CONTENT --> TEXT CONTENT Selectors (2 total)
// let topContentFirstH4 = document.querySelector('.top-content .text-content > h4');
// let topContentSecondH4 = document.querySelector('.top-content .text-content:nth-child(2) > h4');
// let topContentFirstP = document.querySelector('.top-content .text-content > p');
// let topContentSecondP = document.querySelector('.top-content .text-content:nth-child(2) > p');
//             //TextContent
// topContentFirstH4.textContent = 'Features';
// topContentSecondH4.textContent = 'About';
// topContentFirstP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// topContentSecondP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// //mid-img-Content  Selector
//         //img attr (src)
// let midImg = document.getElementById('middle-img');
// midImg.setAttribute('src', 'img/mid-page-accent.jpg');
// //Bottom-Content Slector (part of main)
// let bottomContentH4_1 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
// let bottomContentP_1 = document.querySelector('.bottom-content .text-content:nth-child(1) p');

// let bottomContentH4_2 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
// let bottomContentP_2 = document.querySelector('.bottom-content .text-content:nth-child(2) p');

// let bottomContentH4_3 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
// let bottomContentP_3 = document.querySelector('.bottom-content .text-content:nth-child(3) p');

//         //Text Content
// bottomContentH4_1.textContent = 'Services';
// bottomContentP_1.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// bottomContentH4_2.textContent = 'Product';
// bottomContentP_2.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// bottomContentH4_3.textContent = 'Vision';
// bottomContentP_3.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


// //CONTACT SECTION Selector
// let contactH4 = document.querySelector('.contact h4:nth-child(1)');
// let contactP1 = document.querySelector('.contact p:nth-child(2)');
// let contactP2 = document.querySelector('.contact p:nth-child(3)');
// let contactP3 = document.querySelector('.contact p:nth-child(4)');

// const contactEl = document.querySelector('.contact');
// contactEl.querySelector('h4').textContent = siteContent.contact["contact-h4"];

// const contactDetail = ['address', 'phone', 'email'];

// contactEl.querySelectorAll('p').forEach((e,i) => {
//   if (i !== 0) {
//     e.textContent = siteContent.contact[contactDetail[i]];  
//     // Update Contact - phone and email
//   } else {
//     const address = siteContent.contact[contactDetail[i]].split(' ');
//     const stateInd = address.indexOf(address.find( e => e.includes(',')));
//     // the street address
//     const street = document.createElement('div');
//     street.textContent = address.slice(0, stateInd).join(' ');
//     e.append(street);
//     // the state address
//     const state = document.createElement('div');
//     state.textContent = address.slice(stateInd).join(' ');
//     e.append(state);
//   }
// });

// //Footer Selector
// let footer = document.querySelector('footer');
// footer.textContent = 'Copyright Great Idea! 2018';

