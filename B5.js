let a=+prompt("Mời bạn nhập vào số a : ");
let b=+prompt("Mời bạn nhập vào số b : ");
let power=Math.pow(a,b);
for(let i=0;i< 1;i++){
    if( isNaN(a) || isNaN(b)){
       document.write("Không hợp lệ");
       console.log("Không hợp lệ");
    }else{
        document.write(power);
        console.log(power);
    }
}