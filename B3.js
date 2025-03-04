let n=parseInt(prompt("Mời bạn nhập 1 số bất kì : "));
let m= 0,tmp=n;
while(n != 0){
    m = m * 10 + n % 10; 
    n /= 10;
}
    if(tmp == m){ 
    document.write("Đây là số đối xứng");
    console.log("Đây là số đối xứng");
    }else{
    document.write("Đây không phải là số đối xứng");
    console.log("Đây không phải là số đối xứng");
    }
    
