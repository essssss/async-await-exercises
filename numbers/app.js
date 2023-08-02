let favNumber = 5;
let baseURL = "http://numbersapi.com";

async function partOne() {
    res = await axios.get(`${baseURL}/${favNumber}`);
    console.log(res.data);
}

let favNumbers = [1, 2, 3, 6];
async function partTwo() {
    res = await axios.get(`${baseURL}/${favNumbers}`);
    // for (let item of res) {
    //     console.log(item.data);
    // }
    console.log(res.data);
}

async function partThree() {
    let resArray = [];
    for (let i = 0; i < 4; i++) {
        res = await axios.get(`${baseURL}/${favNumber}`);
        resArray.push(res.data);
    }
    console.log(resArray);
}
