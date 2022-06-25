{
  /* <script> */
}
const partnerEl = document.getElementById("partners");
const images = [
  "bustour",
  "cabinrental",
  "campingadv",
  "collegetours",
  "rentalbike",
  "tourgroup",
];
const alts = [
  "Bus Tour",
  "Cabin Rental",
  "Camping Adventure",
  "College Tours",
  "Bike Rentals",
  "Tour Group",
];
let completedImages = [];
completedImages = images.map((image, index) => {
  return `<li class="partner">
          <img src="images/partners/partner-${image}.png"  alt="Partner ${alts[index]}"/>
        </li>
        `;
});
partnerEl.innerHTML = completedImages.join("");


// Hide and Show element based on the selection
let wayOfContactElement = document.querySelector('#way-of-contact');
let emailElement = document.querySelector('#email');
let phoneElement = document.querySelector('#phone');

emailElement.style.display = 'none';
phoneElement.style.display = 'none';

wayOfContactElement.addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'email':
      emailElement.style.display = 'block';
      phoneElement.style.display = 'none';
      break;
    case 'phone':
      phoneElement.style.display = 'block';
      emailElement.style.display = 'none';
      break;
    default:
      emailElement.style.display = 'none';
      phoneElement.style.display = 'none';
      break;
  }
})
{
  /* </script> */
}
