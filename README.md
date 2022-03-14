# Nilai Duplikat Pertama
Diberikan sebuah array bilangan bulat antara `1` dan `n`, (inclusive), dimana `n` adalah panjang array, tulis fungsi yang mengembalikan bilangan bulat pertama yang muncul lebih dari sekali (ketika array dibaca dari kiri ke kanan).

Dengan kata lain, dari semua bilangan bulat yang mungkin muncul lebih dari sekali dalam array masukan, fungsi harus mengembalikan yang nilai duplikat pertamanya memiliki indeks minimum.

Jika tidak ada bilangan bulat yang muncul lebih dari sekali, fungsi harus mengembalikan `-1`.

Perhatikan bahwa Anda dapat mengubah array (memutasi) input.

### Input
```js
array = [2, 1, 5, 2, 3, 3, 4]
```

### Output
```js
2 // 2 adalah bilangan bulat pertama yang muncul lebih dari sekali.
// 3 juga muncul lebih dari sekali, tetapi 3 kedua muncul setelah yang kedua 2.
```

## Instructions
1. Anda harus menyelesaikan fungsi firstDuplicateValue pada file `firstDuplicateValue.js`.
2. Fungsi harus mengembalikan nilai duplikat pertama yang muncul lebih dari sekali.
3. Jalankan program dan lakukan tes dengan menggunakan perintah `node run`