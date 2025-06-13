let barangList = [];

function addBarang() {
  const name = document.getElementById("name").value;
  const ukuran = document.getElementById("ukuran").value;
  const warna = document.getElementById("warna").value;
  const stok = parseInt(document.getElementById("stok").value);
  const harga = parseInt(document.getElementById("harga").value);

  if (!name || !ukuran || !warna || isNaN(stok) || isNaN(harga)) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  barangList.push({ name, ukuran, warna, stok, harga });
  renderTable();
  clearForm();
}

function renderTable() {
  const table = document.getElementById("tabelBarang");
  table.innerHTML = "";
  barangList.forEach((item, index) => {
    const total = item.stok * item.harga;
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.ukuran}</td>
        <td>${item.warna}</td>
        <td>${item.stok}</td>
        <td>Rp${item.harga.toLocaleString()}</td>
        <td>Rp${total.toLocaleString()}</td>
        <td>
          <button onclick="ubahStok(${index}, 1)">➕</button>
          <button onclick="ubahStok(${index}, -1)">➖</button>
        </td>
      </tr>
    `;
  });
}

function ubahStok(index, delta) {
  barangList[index].stok += delta;
  if (barangList[index].stok < 0) barangList[index].stok = 0;
  renderTable();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("ukuran").value = "";
  document.getElementById("warna").value = "";
  document.getElementById("stok").value = "";
  document.getElementById("harga").value = "";
}
