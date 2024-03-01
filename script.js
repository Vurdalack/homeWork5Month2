function test_prime(n) {
        if (n <= 1) {
            return false; // Не является простым, если меньше или равно 1
        }
        
        // Проверяем делители от 2 до корня из n
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 2)  {
                return false; // Не является простым, если делится без остатка
            }
        }return true; // Является простым, если не нашлось делителей
    
    
    
};

console.log((test_prime(51)));