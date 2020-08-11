# CodeDebugging

Code debugging built with NodeJs

### Penjelasan Debugging Code

1. Permasalahannya adalah ketika memanggil dotenv setelah mendeklarasi variabel config. Sehingga semua data dalam variabel config berisi undefined. Kemudian variabel config disini dieksport sebagai object lagi padahal variabel config sudah berisi object. Sehingga menyebabkan error saat memanggil variabel config di luar file authService.js

2. Terdapat typo saat mengeksport fungsi redirectUri() seharusnya module.exports bukan module.export

3. Pada file authCallbackService.js saya menambahkan asynchronus function pada variabel user dan mengganti variabel res menjadi resp dikarenakan res telah digunakan

4. Pada file userInfoService.js juga terdapat typo saat mengeksport fungsi dan juga fungsi getUserInfo tidak mengembalikan apa apa oleh karena itu saya tambahkan return untuk menggembalikan data dari axios