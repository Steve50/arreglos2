const btnMulti = document.getElementById("multi");
const btnMayus = document.getElementById("mayusName");
const btnMinus = document.getElementById("minusName");
const btnFilter = document.getElementById("fiterName");
const btnSum = document.getElementById("sum");
const nombres = [
  "alberto",
  "paty",
  "Jose",
  "daniel",
  "luis",
  "antonio",
  "Luis",
  "paty",
  "luis",
];
const mayusNames = [];
const numeros = [2, 4, 6, 8, 10];

btnMulti.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("multi2");
  result.textContent = "";
  for (i = 1; i <= 10; i++) {
    const p = document.createElement("p");
    p.textContent = `2 * ${i} = ${2 * i}`;
    result.appendChild(p);
  }
});

btnMayus.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("showMayus");
  result.textContent = "";
  nombres.forEach((name) => {
    const p = document.createElement("p");
    p.textContent = name.toUpperCase();
    result.appendChild(p);
    mayusNames.push(name.toUpperCase());
  });
});

btnMinus.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("showMinus");
  result.textContent = "";
  let minusNames = mayusNames.map((name) => {
    return name.toLowerCase();
  });
  minusNames.forEach((name) => {
    const p = document.createElement("p");
    p.textContent = name;
    result.appendChild(p);
  });
});

btnFilter.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("showFilter");
  result.textContent = "";
  let filtroNombres = nombres.filter((name) => name.toLowerCase() === "luis");
  const p = document.createElement("p");
  p.textContent = filtroNombres;
  result.appendChild(p);
});

btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.getElementById("showSum");
  const totalsum = sumArray(numeros);
  result.textContent = numeros + " = " + totalsum;
});

function sumArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}
