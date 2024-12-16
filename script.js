const img = document.querySelectorAll('.plus-minus');


// Yeni bir resim kaynağı belirle
const newSrc = "./assets/images/icon-minus.svg";

// Resim kaynağını değiştirmek ve yazıyı görünür yapmak  için bir fonksiyon oluştur

img.forEach((element)=>{
    element.addEventListener("click",()=>{
        const paragraph = element.closest('.first').querySelector('p'); // En yakın parent div'deki p öğesini bul
        
        if (element.src.includes("icon-plus.svg")) {
            element.src = newSrc; // Yeni resme geç
            paragraph.style.display ="block";
        
          } else {
            element.src = "./assets/images/icon-plus.svg"; // Eski resme geri dön
            paragraph.style.display ="none";
          }

    })
});





