function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let n = customers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

console.log(
  sortCustomerName(["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"])
);

// ตอบคำถามตรงนี้จ้า
// Bubble Sort Algorithm มี Big O เป็น n*2 เพราะ มีการทำงานของ for loop 2 ครั้ง
