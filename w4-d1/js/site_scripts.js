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
{
  /* </script> */
}
