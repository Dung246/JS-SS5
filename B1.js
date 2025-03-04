let inputN=parseInt(prompt("Mời bạn nhập một giá trị bất kì : "));
let sum=0;
for(let i=0;i < inputN;i++){
 if( inputN <= 0 && isNaN(inputN)){
     document.write("Dữ liệu nhập vào không hợp lệ");
     console.log("Dữ liệu nhập vào không hợp lệ");
 }else{
    sum=sum + i;
}
}
 console.log(sum);
 document.write(sum);