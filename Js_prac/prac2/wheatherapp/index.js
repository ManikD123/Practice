        const temperatureField = document.querySelector(".temp")
        const cityField = document.querySelector(".time_location p")
        const dateField = document.querySelector(".time_location span")
        const emojiField = document.querySelector(".weather_condition img");
        const weatherField = document.querySelector(".weather_condition span");
        const searchField = document.querySelector(".searchField");
        const form = document.querySelector("form");

let target = "Hyderabad"
async function fetchData(target){
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=8b6d5f63a04a485fa5351525232908&q=${target}&aqi=no`

        const response = await fetch(url)

        console.log(response)
        const data = await response.json()

        form.addEventListener('submit', search)

        function search(e){

    e.preventDefault()
    target = searchField.value

    fetchData(target)
}

        // console.log(data)
        let currentTemp = data.current.temp_c
        let currentCondition = data.current.condition.text
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon   
        // console.log(currentTemp) 
        //  console.log(currentCondition) 
        //   console.log(locationName) 
        //    console.log(localTime) 
        //     console.log(conditionEmoji) 

        console.log(currentTemp ,currentCondition ,locationName , localTime , conditionEmoji )

    }
    catch(error){
        console.log(error)
    }
}

fetchData(target)