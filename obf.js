const p = "aHR0cHM6Ly9naXRodWIuY29tL0VERHhhbXBsZQ==";
document.getElementById(p).href = atob(p);
document.getElementById(p).innerText = atob(p);

const h =
  "aHR0cHM6Ly9naXRodWIuY29tL0VERHhhbXBsZS80RC1Qb2x5dG9wZS1WaXN1YWxpemVyX19Qcm9jZXNzaW5n";
document.getElementById(h).href = atob(h);

const i = "NEQgUG9seXRvcGUgVmlzdWFsaXplcg==";
document.getElementById(i).href = atob(h);
document.getElementById(i).innerText = atob(i);
