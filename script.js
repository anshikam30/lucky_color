
 const changecolor=() =>{
    const zodiac = document.getElementById("zodiac");
    const container = document.body;
    switch(zodiac.value){
        case "aries": 
        container.style.backgroundColor = "maroon";
        break;
        case "aquarius": 
        container.style.backgroundColor = "green";
        break;
        case "taurus": 
        container.style.backgroundColor = "orange";
        break;
        case "pisces": 
        container.style.backgroundColor = "yellow";
        break;
        case "leo": 
        container.style.backgroundColor = "blue";
        break;
        case "capricon": 
        container.style.backgroundColor = "white";
        break;
        case "cancer": 
        container.style.backgroundColor = "pink";
        break;
        case "gemini": 
        container.style.backgroundColor = "purple";
        break;
        case "libra": 
        container.style.backgroundColor = "brown";
        break;
        case "virgo": 
        container.style.backgroundColor = "red";
        break;
        case "sagittarius": 
        container.style.backgroundColor = "cyan";
        break;
        case "scorpio": 
        container.style.backgroundColor = "lime";
        break;
        default: break;
    }

 }