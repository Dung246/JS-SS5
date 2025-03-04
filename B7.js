let n = +prompt("Nhập số lượng số Fibonacci cần hiển thị:");
if (isNaN(n) || parseInt(n) <= 0) {
    console.log("Không hợp lệ");
    document.write("Không hợp lệ");
} else {
    n = parseInt(n);
    let fib = [1, 1];
    console.log(1);
    document.write(1)
    if (n > 1) {
        console.log(1);
        document.write(1);
    }
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        console.log(fib[i]);
        document.write(fib[i]);
    }
}
