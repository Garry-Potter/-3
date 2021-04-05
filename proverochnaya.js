//1
let transport = prompt('Выберите транспорт');
if (transport  == "а"){
    тревога("210")
}
else if (transport == "в") {
    alert("60")
}
иначе если (транспорт == "м") {
    тревога("325")
}
else if (transport == "с") {
    тревога("1120")
}
else if (transport == "п") {
    тревога("300")
}
//2
 номер функции(x){
  
    пусть arr = [];
    для (Пусть i = 0; i < x; i++){
    arr.push(+prompt("Введите число",""));
    }
    пусть min = Math.min(...arr);
    тревога(мин);
    
}
 
number(+prompt("Введите кол-во чисел", ""));