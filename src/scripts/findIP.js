export const findIP = () => {
    let location = 'Rio de Janeiro';
    return fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((dataIP) => {
        return fetch(`http://ip-api.com/json/${dataIP.ip}`)
        .then((response) => response.json())
        .then((dataLoc) => {
            if (dataLoc.error) { // Tratamento de erro: IP não esperado
                console.error(`Erro na pesquisa do local. IP: ${dataIP.ip}\nerror: ${dataLoc.error}`);
                return location;
            }
            const city = dataLoc.city;
            const region = dataLoc.region;
            const country = dataLoc.country;
    
            location = `${city} ${region} ${country}`;
            return location;
        })
        .catch((error) => { // Tratamento de erro na API de localização
            console.error("Erro em localizar user location: ", error);
            return location;
        });
    })
    .catch((error) => { // Tratamento de erro na API de IP
        console.error("Erro em localizar user ip: ", error);
        return location;
    });
}
