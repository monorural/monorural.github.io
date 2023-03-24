        function multiplyByTwo() {
            const inputNumber = document.getElementById("inputNumber");
            const resultElement = document.getElementById("result");
            const number = parseFloat(inputNumber.value);

            if (!isNaN(number)) {
                const result = number * 2;
                resultElement.textContent = result;
            } else {
                resultElement.textContent = "Invalid input";
            }
        }
