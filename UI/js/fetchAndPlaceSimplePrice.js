/*
fetch('https://api.agify.io/?name=' + nameInput).then((response) => response.json()).then((resBody) => {
    let i = 
    document.querySelector('#result-name').innerText = resBody.name;
    document.getElementById('result-age').innerText = resBody.age;
}).catch((err) => console.error(err));
*/

fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Cbinance-usd%2Cbitcoin%2Ccardano%2Cdogecoin%2Cethereum%2Cpolkadot%2Csolana%2Ctether%2Cusd-coin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true", {
    "method": "GET"
    /*,
    "headers": {
        "x-rapidapi-host": "host",
        "x-rapidapi-key": "key",
    }
    */
}).then(
    response => {
        response.json().then(
            data => {

                console.log(data);
                var temp = "";

                data.records.forEach((x) => {
                    temp += "<tr>";
                    temp += "<td>" + x.id + "</td>";
                    temp += "<td>" + x.usd + "</td>";
                    temp += "<td class='rightNum'>" + x.usd_24h_change + "</td>";
                    temp += "<td class='popStyle'>" + x.last_updated_at + "</td>";
                    temp += "</tr>"
                });

                document.getElementById("data").innerHTML += temp;
            }
        )
    })