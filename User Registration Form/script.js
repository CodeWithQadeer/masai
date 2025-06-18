document.getElementById("registrationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageDiv = document.getElementById("message");

  messageDiv.textContent = "";
  messageDiv.className = "";

  if (!name || !email || !password) {
    messageDiv.textContent = "All fields are required.";
    messageDiv.className = "error";
    return;
  }

  try {
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (res.ok) {
      const data = await res.json();
      messageDiv.textContent = "Registration successful!";
      messageDiv.className = "success";
      // Optionally clear form
      document.getElementById("registrationForm").reset();
    } else {
      const errData = await res.json();
      messageDiv.textContent = errData.message || "Registration failed. Try a different email.";
      messageDiv.className = "error";
    }
  } catch (error) {
    messageDiv.textContent = "Network error. Please try again later.";
    messageDiv.className = "error";
    console.error(error);
  }
});
