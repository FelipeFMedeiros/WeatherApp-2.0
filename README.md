# WeatherApp 2.0
Este é um projeto de clima que estou criando e aprimorando com o tempo.
<br/>
Ainda serão adicionados muitas funções e melhorias na precisão dos resultados.
- [Clique para ver projeto](https://weatherapp-felipefmedeiros.vercel.app/)


## Como rodar o projeto?

#### 1) Instale as dependências:
```bash
npm install
```

#### 2) Crie um servidor local:
```bash
npm run dev
```

## Como buildar o projeto para prod?
```bash
npm run build 
```

## Como fazer deploy do projeto?

#### Usando npm:
```bash
npm run deploy
```

#### Usando vercel:
```bash
cd dist
vercel
```

## Variáveis de Ambiente
Para rodar esse projeto, você vai precisar criar um arquivo chamado `.env` e adicionar as seguintes variáveis de ambiente no seu `.env`:

`VITE_GOOGLE_API_KEY` com a chave da sua API do Google para usar o Google Geocoding

`VITE_WEATHER_API_KEY` com a chave da sua API do OpenWeatherMap

Exemplo:
```js
VITE_GOOGLE_API_KEY=ExeMpleK3y
VITE_WEATHER_API_KEY=ExeMpleK3y
```

# Screenshot
Aqui virão screenshots do projeto:

## Autores

- [@FelipeFMedeiros](https://www.github.com/felipefmedeiros)

<br/>

# Ícones
Os ícones usados neste projeto foram baseados nos ícones presentes no repositório [weather-icons de Bas Milius](https://github.com/basmilius/weather-icons/tree/dev).