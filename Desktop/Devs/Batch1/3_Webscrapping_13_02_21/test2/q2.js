let obj = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    length: 5,
    };
    function f() {
    for (let i = 1; i < obj.length; i++) {
    obj[i] = obj[i] + 1;
    }
    delete obj["length"];
    for (let x in obj) {
    console.log(`at index ${x} we have value ${obj[x]}`);
    }
    }
    f();