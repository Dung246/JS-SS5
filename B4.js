let input=String(prompt("Mời bạn nhập một giá trị bất kì :"));
let input2=String(prompt("Mời bạn nhập kí tự cần tìm kiếm :"));
    if(input.includes(input2)){
        document.write(`Tồn tại từ cần tìm kiếm`);
        console.log(`Tồn tại từ cần tìm kiếm`);
    }else{
        document.write(`Không tồn tại từ cần tìm kiếm `);
        console.log(`Không tồn tại từ cần tìm kiếm`);
    }
