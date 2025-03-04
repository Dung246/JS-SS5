let input=parseInt(prompt("Mời bạn nhập một số bất kì :"));
for(let i=0;i <= input;i++){
    if( i%5==0 && i >= 0){
        document.write(`Các số chia hết cho 5 từ 1 đến ${input} là : `+i + "<br>");
        console.log(`Các số chia hết cho 5 từ 1 đến ${input} là : `+ i + "<br>");
    }
}
    if( input < 0 || isNaN(input) || input.includes("-") ){
      document.write("Dữ liệu nhập vào không hợp lệ");
      console.log("Dữ liệu nhập vào không hợp lệ");
    }