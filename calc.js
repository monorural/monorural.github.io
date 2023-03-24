        function multiplyByTwo() {
            const inputNumber = document.getElementById("inputNumber");
            const resultElement = document.getElementById("result");
            const number = parseFloat(inputNumber.value);

        /*    if (!isNaN(number)) {
                const result = number * 2;
                resultElement.textContent = result;
            } else {
                resultElement.textContent = "Invalid input";
         */  if (true) {
                const translation_x = "{x}:(0), {x+6}:(1), {x+12}:(0),";
                const range_x = "0,36,18";
                const [ini, fin, step] = range_x.split(",").map(Number);

    let y = "";
                let step_text = document.getElementById("inputNumber");
                let step = parseFloat(step_text.value);
    if (step !== 0) {
        for (let x = ini; x < fin; x += step) {
            const foo = eval("`" + translation_x + "`");
            y += foo;
        }
        y = y.trim().replace(/,$/, "");
    }

    resultElement.textContent = y;
}
            }
        }
