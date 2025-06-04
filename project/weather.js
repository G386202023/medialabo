let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

// 課題3-2 のプログラムはこの関数の中に記述すること

console.log("緯度: " + data.coord.lat);
console.log("経度: " + data.coord.lon);
console.log("天気: " + data.weather[0].description);
console.log("最低気温: " + data.main.temp_min + " °C");
console.log("最高気温: " + data.main.temp_max + " °C");
console.log("湿度: " + data.main.humidity + " %");
console.log("風速: " + data.wind.speed + " m/s");
console.log("風向: " + data.wind.deg);
console.log("都市名: " + data.name);

let b1 = document.querySelector('button#sendRequest');
    b1.addEventListener('click',sendRequest);

function sendRequest(){
    let a = document.querySelector('select#toshi');
    let b = a.selectedIndex;
    let c = a.querySelectorAll('option');
    let d = c.item(b);
    let k = d.value;
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+k+".json";
    console.log(url);


    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      
}

function showResult(resp) {
    let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    let data1 = document.querySelector("span#v1");
    data1.textContent = data.name;
    let data2 = document.querySelector("span#v2");
    data2.textContent = data.coord.lat;
    let data3 = document.querySelector("span#v3");
    data3.textContent = data.coord.lon;
    let data4 = document.querySelector("span#v4");
    data4.textContent = data.weather[0].description;
    let data5 = document.querySelector("span#v5");
    data5.textContent = data.main.temp_min+"度";
    let data6 = document.querySelector("span#v6");
    data6.textContent = data.main.temp_max+"度";
    let data7 = document.querySelector("span#v7");
    data7.textContent = data.main.humidity+"%";
    let data8 = document.querySelector("span#v8");
    data8.textContent = data.wind.speed+"m/s";
    let data9 = document.querySelector("span#v9");
    data9.textContent = data.wind.deg;

}

function showError(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.wind.deg);
console.log(data.wind.speed);
