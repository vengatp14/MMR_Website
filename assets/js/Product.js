const products = [
  { name: "Asian Paints Royale", img: "assets/img/iteams/1.jpg" },
  { name: "Fybros LED Lights", img: "assets/img/iteams/2.jpg" },
  { name: "Switch Panel Fybros", img: "assets/img/iteams/3.jpg" },
  { name: "Dulux Paints", img: "assets/img/iteams/4.jpg" },
  { name: "Wires & Cables", img: "assets/img/iteams/5.jpg" },
  { name: "1000v Electrical Tools", img: "assets/img/iteams/6.jpg" },
  { name: "Abrasives", img: "assets/img/iteams/7.jpg" },
  { name: "Accessories", img: "assets/img/iteams/8.jpg" },
  { name: "Air Duster", img: "assets/img/iteams/9.jpg" },
  { name: "Air Needle Scaler", img: "assets/img/iteams/10.jpg" },
  { name: "Air Tools", img: "assets/img/iteams/11.jpg" },
  { name: "Angle Grinder", img: "assets/img/iteams/12.jpg" },
  { name: "ARC Welding Machines", img: "assets/img/iteams/13.jpg" },
  { name: "Chain Hoist", img: "assets/img/iteams/14.jpg" },
  { name: "Chemicals", img: "assets/img/iteams/15.jpg" },
  { name: "Clamps", img: "assets/img/iteams/16.jpg" },
  { name: "Cold Cutter", img: "assets/img/iteams/17.jpg" },
  { name: "Construction Tools", img: "assets/img/iteams/18.jpg" },
  { name: "Consumer Products", img: "assets/img/iteams/19.jpg" },
  { name: "Cordless Drill", img: "assets/img/iteams/20.jpg" },
  { name: "Cut Off Machine", img: "assets/img/iteams/21.jpg" },
  { name: "Cutting Disc", img: "assets/img/iteams/22.jpg" },
  { name: "Die Grinder", img: "assets/img/iteams/23.jpg" },
  { name: "Drill Machine", img: "assets/img/iteams/24.jpg" },
  { name: "Electrical Products", img: "assets/img/iteams/25.jpg" },
  { name: "Featured Products", img: "assets/img/iteams/26.jpg" },
  { name: "Fiberglass Ladders", img: "assets/img/iteams/27.jpg" },
  { name: "Garden / Carpentry Tools", img: "assets/img/iteams/28.jpg" },
  { name: "Gas Cutter", img: "assets/img/iteams/29.jpg" },
  { name: "Grease Lubricator", img: "assets/img/iteams/30.jpg" },
  { name: "Oil and Grease Pumps", img: "assets/img/iteams/31.jpg" },
  { name: "Grinders", img: "assets/img/iteams/32.jpg" },
  { name: "Hand-Tools", img: "assets/img/iteams/33.jpg" },
  { name: "Welding Head Shield", img: "assets/img/iteams/34.jpg" },
  { name: "High Pressure Washer", img: "assets/img/iteams/35.jpg" },
  { name: "Versatile Hinged Cutter", img: "assets/img/iteams/36.jpg" },
  { name: "Hose & Fitting", img: "assets/img/iteams/37.jpg" },
  { name: "Hydraulic", img: "assets/img/iteams/38.jpg" },
  { name: "Hydraulic Cylinder", img: "assets/img/iteams/39.jpg" },
  { name: "Hydraulic Jack", img: "assets/img/iteams/40.jpg" },
  { name: "Hydraulic Pipe Bender", img: "assets/img/iteams/41.jpg" },
  { name: "Hydraulic Torque Wrench", img: "assets/img/iteams/42.jpg" },
  { name: "Hydraulic Wedge Spreader", img: "assets/img/iteams/43.jpg" },
  { name: "Impact Drill", img: "assets/img/iteams/44.jpg" },
  { name: "Impact Wrench", img: "assets/img/iteams/45.jpg" },
  { name: "Kyowa Test Pump", img: "assets/img/iteams/46.jpg" },
  { name: "Ladders", img: "assets/img/iteams/47.jpg" },
  { name: "Lever Hoist", img: "assets/img/iteams/48.jpg" },
  { name: "Lifting Table", img: "assets/img/iteams/49.jpg" },
  { name: "Lubricating & Painting", img: "assets/img/iteams/50.jpg" },
  { name: "Magnetic Drill", img: "assets/img/iteams/51.jpg" },
  { name: "Material Handling", img: "assets/img/iteams/52.jpg" },
  { name: "Measurement Tools", img: "assets/img/iteams/53.jpg" },
  { name: "MIG Welding Machine", img: "assets/img/iteams/54.jpg" },
  { name: "Non-Sparking Safety Tools", img: "assets/img/iteams/55.jpg" },
  { name: "PALLET TRUCK & PALLET JACK", img: "assets/img/iteams/56.jpg" },
  { name: "Personal Protective Equipment", img: "assets/img/iteams/57.jpg" },
  { name: "Pipe Wrench", img: "assets/img/iteams/58.jpg" },
  { name: "Pneumatic Blower", img: "assets/img/iteams/59.jpg" },
  { name: "Pneumatic Torque Wrench", img: "assets/img/iteams/60.jpg" },
  { name: "Portable Saw", img: "assets/img/iteams/61.jpg" },
  { name: "Power Threading Machine", img: "assets/img/iteams/62.jpg" },
  { name: "Power Tools", img: "assets/img/iteams/63.jpg" },
  { name: "Safety Equipments / PPE", img: "assets/img/iteams/64.jpg" },
  { name: "Safety Shoes", img: "assets/img/iteams/65.jpg" },
  { name: "Screwdriver", img: "assets/img/iteams/66.jpg" },
  { name: "Shutdown and Maintenance Tools", img: "assets/img/iteams/67.jpg" },
  { name: "Spray Bottle", img: "assets/img/iteams/68.jpg" },
  { name: "PALLET STACKER", img: "assets/img/iteams/69.jpg" },
  { name: "Submersible Pump", img: "assets/img/iteams/70.jpg" },
  { name: "TIG Welding Machines", img: "assets/img/iteams/71.jpg" },
  { name: "Tool Cabinets", img: "assets/img/iteams/72.jpg" },
  { name: "Industrial Standard Torque Wrench in Singapore", img: "assets/img/iteams/73.jpg" },
  { name: "Trolley & castor", img: "assets/img/iteams/74.jpg" },
  { name: "Tungsten Carbide Burrs", img: "assets/img/iteams/75.jpg" },
  { name: "Valve Wheel Wrench", img: "assets/img/iteams/76.jpg" },
  { name: "Ventilation Fan", img: "assets/img/iteams/77.jpg" },
  { name: "Vernier Calipers", img: "assets/img/iteams/78.jpg" },
  { name: "Welding Machine", img: "assets/img/iteams/79.jpg" },
  { name: "Welding Products", img: "assets/img/iteams/80.jpg" },
  { name: "Workbench", img: "assets/img/iteams/81.jpg" }
];

const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");
const productList = document.getElementById("productList");

// Render products in cards
function renderProducts(list) {
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = `
      <div class="col-12">
        <div class="card text-center shadow-sm p-4">
          <h5 class="card-title text-danger">Oops! No products found</h5>
          <p class="card-text">Please contact our admin for assistance.</p>
          <div class="d-flex justify-content-center gap-3">
            <a href="tel:09500579890" class="btn btn-primary">
              <i class="bi bi-telephone-fill me-1"></i> Call Now
            </a>
            <a href="contact.html" class="btn btn-outline-secondary">
              <i class="bi bi-envelope-fill me-1"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  list.forEach(p => {
    productList.innerHTML += `
      <div class="col-md-2 col-6 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.name}" onerror="this.onerror=null;this.src='assets/img/iteams/1.jpg';">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
          </div>
        </div>
      </div>
    `;
  });
}

// Initial load
renderProducts(products);

// Search autocomplete + filter
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  results.innerHTML = "";

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));

  // Autocomplete dropdown
  if (query && filtered.length > 0) {
    filtered.forEach(p => {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.innerHTML = `<img src="${p.img}" alt="" onerror="this.onerror=null;this.src='assets/img/iteams/1.jpg';"> <span>${p.name}</span>`;
      item.addEventListener("click", () => {
        searchBar.value = p.name;
        results.classList.add("d-none");
        renderProducts([p]);
      });
      results.appendChild(item);
    });
    results.classList.remove("d-none");
  } else {
    results.classList.add("d-none");
  }

  // Show filtered cards
  renderProducts(filtered);
});

// Close results when clicking outside
document.addEventListener("click", (e) => {
  if (!results.contains(e.target) && e.target !== searchBar) {
    results.classList.add("d-none");
  }
});