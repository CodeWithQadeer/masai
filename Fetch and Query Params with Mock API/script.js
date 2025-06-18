async function applyFilters() {
  const category = document.getElementById("category").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const statusDiv = document.getElementById("status");
  const productsDiv = document.getElementById("products");

  // Clear previous state
  productsDiv.innerHTML = "";
  statusDiv.textContent = "Loading...";

  // Construct query parameters
  let url = new URL("https://fakestoreapi.com/products");
  let params = {};

  if (category) params.category = category;
  if (minPrice) params.min_price = minPrice;
  if (maxPrice) params.max_price = maxPrice;
  params.sort = "asc";

  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    
    const data = await response.json();
    console.log(data)
    if (data.length === 0) {
      statusDiv.textContent = "No products found.";
      return;
    }

    statusDiv.textContent = `Showing ${data.length} products`;

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}" />
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
      `;

      productsDiv.appendChild(card);
    });
  } catch (error) {
    statusDiv.textContent = "Failed to load products.";
    console.error("Error fetching products:", error);
  }
}
applyFilters()
