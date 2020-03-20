## Teste prático Crawler Mercado Livre

A API permite enviar informações através metodos POST, API foi desenvolvida em NODE.js 10.16.1;

### Endereço

Para usar a API, utilize o endereço:

`http://localhost:3000/[command]`

Onde [command] pode ser um dos serviços listados abaixo:

### Eventos Teste
Metodo: GET
Comando: `/`<br/>
Retorno: Verifica se o servidor esta ativo e a versão da API.<br/>

Exemplo:

`http://localhost:3000/`

### Eventos consultar produtos Mercado Livre
Metodo: POST 
Comando: `/consulta`<br/>
Retorno: Um JSON com as ifnormações dos produtos mercado livre.<br/>

Exemplo:

Envio de JSON via POST
{
"search": "tenis branco",
"limit": 3
}

`http://localhost:3000/consulta/`

Retorno:
[
    {
        "name": " Tênis Feminino Casual Sapatênis Original Chiquiteira 60101 ",
        "link": "https://produto.mercadolivre.com.br/MLB-1009916607-tnis-feminino-casual-sapatnis-original-chiquiteira-60101-_JM?searchVariation=33458217493#searchVariation=33458217493&position=1&type=item&tracking_id=7c5e1052-ef01-4422-8756-ea5298f7ebfc",
        "price": "39.99",
        "store": "  por Chiquiteira  ",
        "state": ""
    },
    {
        "name": " Tênis Feminino Casual Sapatênis Original Chiquiteira 60106 ",
        "link": "https://produto.mercadolivre.com.br/MLB-993630117-tnis-feminino-casual-sapatnis-original-chiquiteira-60106-_JM?searchVariation=46669369874#searchVariation=46669369874&position=2&type=item&tracking_id=7c5e1052-ef01-4422-8756-ea5298f7ebfc",
        "price": "39.",
        "store": "  por Chiquiteira  ",
        "state": ""
    },
    {
        "name": " Tênis Feminino Casual Sapatênis Vizz Original Flat Form ",
        "link": "https://produto.mercadolivre.com.br/MLB-1280235810-tnis-feminino-casual-sapatnis-vizz-original-flat-form-_JM?searchVariation=43203806811#searchVariation=43203806811&position=3&type=item&tracking_id=7c5e1052-ef01-4422-8756-ea5298f7ebfc",
        "price": "34.99",
        "store": "",
        "state": ""
    }
]

### Depedências

body-parser: 1.19.0, <br/>
debug": 4.1.1, <br/>
express: 4.17.1, <br/>
http: 0.0.0" <br/>
request: 2.88.2" <br/>
cheerio: 1.0.0" <br/>
request-promise: 4.2.5" <br/>





