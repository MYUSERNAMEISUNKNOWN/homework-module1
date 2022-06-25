{
  /* <script> */
}
const partnerEl = document.querySelector("#partners .container .row");
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
  return `<div class="col-lg-2 col-md-4 col-sm-6 mb-3">
            <div class="partner">
              <img class="img-fluid" src="images/partners/partner-${image}.png"  alt="Partner ${alts[index]}"/>
            </div>
          </div>
        `;
});
partnerEl.innerHTML = completedImages.join("");
{
  /* </script> */
}
