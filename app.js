const textCity = document.getElementById("inp-city");
const btnSearch = document.getElementById("btn-search");

const apiKey = "304b72c3686e39360fe983806e070c49";

btnSearch.addEventListener('click',async() => {
 const city = textCity.value;

 if( city !== ""){
    try{
        // 1. Fazer a requisição (O pedido)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
        // 2. Transformar em dados legíveis
            const data = await response.json();
        // 3. Testar se a API encontrou a cidade
            if (data.cod === "404") {
                alert("City not found!");
            } else {
                console.log(data); // Veja a "mágica" no console!
                alert(`Temperatura em ${data.name}: ${data.main.temp}°C`);
            }
    }catch(error){
        alert("Erro ao conectar com o servidor da gringa.");
    }
   
 }else{
    alert("Digite um valor")
 }

    
})

