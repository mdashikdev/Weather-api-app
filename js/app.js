 const API_KEY = `a148e7bfb8598bf3748481e8456d425d`;

function searchTemperature(){
    const city = document.getElementById('city-name').value;
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
   .then(data => test(data))
    .catch(err => console.log(err.message))
}

const setText=(id,text)=>{
    document.getElementById(id).innerText=text;
}

const test=(temp)=>{
    console.log(temp)
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`)
    
    setText('city',temp.name);
    setText('temperature',temp.main.temp);
    setText('condition',temp.weather[0].main);


}