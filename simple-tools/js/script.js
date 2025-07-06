function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!username || !password) {
    error.textContent = "Tous les champs sont requis.";
    return;
  }

  error.textContent = "";
  alert("Tentative de connexion avec " + username);
}

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute("data-theme");
  body.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}
