let input=parseInt(prompt("Mời bạn nhập 1 số nguyên bât kì :"));
let flag=-1;
 if( input < 2){
    document.write("Đây không phải số nguyên tố ");
    console.log("Đây không phải là số nguyên tố ");
 }
 for( let i =2;i < Math.sqrt(input);i++){
    if(input% i==0){
        flag=0;
        document.write("Đây không phải số nguyên tố ");
        console.log("Đây không phải số nguyên tố ");
    }else{
        document.write("Đây là số nguyên tố");
        console.log("Đây là số nguyên tố");

    }
 }