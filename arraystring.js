// 1. Antrian awal
let queue = ["Ray", "Fiki", "Fadhilla", "Farah"];

// 2. Datang 1 pembeli, yaitu Nabila
queue.push("Nabila");

// 3. Datang 2 pembeli, yaitu Maza dan Elsi
queue.push("Maza", "Elsi");

// 4. Antrian terakhir (Elsi) tidak jadi antri dan pulang
queue.pop();

// 5. Antrian pertama (Ray) sudah mendapatkan belanjaannya
queue.shift();

// 6. Antrian kedua (Fiki) juga sudah mendapatkan belanjaannya
queue.shift();

// 7. Datang pembeli baru, yaitu Tomi, yang nyerobot antrian (masuk paling depan)
queue.unshift("Tomi");

// Hasil akhir antrian
console.log("Hasil akhir antrian:", queue);
