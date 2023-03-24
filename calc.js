if (true) {
    const translation_x = "{x}:(0), {x+6}:(1), {x+12}:(0),";
    const range_x = "0,36,18";
    const [ini, fin, step] = range_x.split(",").map(Number);

    let y = "";
    if (step !== 0) {
        for (let x = ini; x < fin; x += step) {
            const foo = eval("`" + translation_x + "`");
            y += foo;
        }
        y = y.trim().replace(/,$/, "");
    }

    console.log(y);
}
