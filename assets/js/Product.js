 const products = [
      { name: "Asian Paints Royale", img: "https://via.placeholder.com/300x200?text=Asian+Paints" },
      { name: "Fybros LED Lights", img: "https://via.placeholder.com/300x200?text=Fybros+LED" },
      { name: "Switch Panel Fybros", img: "https://via.placeholder.com/300x200?text=Switch+Panel" },
      { name: "Dulux Paints", img: "https://via.placeholder.com/300x200?text=Dulux+Paints" },
      { name: "Wires & Cables", img: "https://via.placeholder.com/300x200?text=Wires+Cables" },
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
          <div class="col-md-4 col-6 mb-4">
            <div class="card shadow-sm h-100">
              <img src="${p.img}" class="card-img-top" alt="${p.name}">
              <div class="card-body">
                <h5 class="card-title">${p.name}</h5>
               <!-- <p class="card-text">High-quality product available at MMR Electrical Hardware.</p> 
                <a href="#" class="btn btn-primary">View Product</a> -->
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
          item.innerHTML = `<img src="${p.img}" alt=""> <span>${p.name}</span>`;
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