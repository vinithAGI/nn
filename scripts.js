function addRow() {
  const tbody = document.getElementById("billBody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" placeholder="Product Name"></td>
    <td><input type="number" value="1" min="1" onchange="updateTotal(this)"></td>
    <td><input type="number" value="0" min="0" onchange="updateTotal(this)"></td>
    <td class="total">₹0</td>
    <td><button onclick="deleteRow(this)">❌</button></td>
  `;

  tbody.appendChild(row);
}

function updateTotal(el) {
  const row = el.parentElement.parentElement;
  const qty = row.cells[1].querySelector("input").value;
  const rate = row.cells[2].querySelector("input").value;
  const total = qty * rate;

  row.cells[3].textContent = "₹" + total;
  updateGrandTotal();
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
  updateGrandTotal();
}

function updateGrandTotal() {
  const rows = document.querySelectorAll("#billBody tr");
  let grandTotal = 0;

  rows.forEach(row => {
    const qty = row.cells[1].querySelector("input").value;
    const rate = row.cells[2].querySelector("input").value;
    grandTotal += qty * rate;
  });

  document.getElementById("grandTotal").textContent = "Grand Total: ₹" + grandTotal;
}

function printBill() {
  window.print();
}
