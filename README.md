## API Vacancies Integration

Projeto JavaScript para integração com a API de vagas. Este guia descreve a estrutura do projeto e como utilizá-lo.

Estrutura do Projeto

```lua
/js
|-- helpers/
|   |-- fetchHelper.js
|
|-- services/
|   |-- vacanciesService.js
|
|-- main.js
```

### Descrição dos Diretórios:

`helpers/`: Funções auxiliares, incluindo uma função genérica para fazer requisições fetch.

`services/`: Serviços relacionados à API, como obter um token e buscar vagas.

### Configuração

Antes de começar, configure as variáveis de ambiente necessárias. O arquivo apiConfig.js será gerado dinamicamente com base nessas variáveis.

### Como usar

Obtendo Vagas:
Primeiramente, no seu script onde vai usar o listVacancies, importe da seguinte maneira:

```js
import { listVacancies } from '/js/vacancies/main.js';
```

Após a importação, você pode fazer a chamada à função listVacancies e definir os callbacks conforme desejado:

```js
// Para usar:
listVacancies(
    "NomeDaEmpresa", 
    {
        onInit: () => console.log('Inicializando...'),
        onLoad: () => console.log('Carregando...'),
        onSuccess: (data) => {
            console.log('Dados carregados:', data);
            console.log('Vagas: ', data.vacancies)
        },
        onError: (error) => console.error('Erro:', error.message),
    }
); // Substitua pelo nome da empresa e altere os callbacks conforme desejado.
```

### Considerações Importantes

Segurança: Evite armazenar credenciais sensíveis no lado do cliente. Para produção, considere mover a obtenção do token para o servidor ou utilize outras estratégias de segurança.

Compatibilidade: O código usa módulos ES6. Certifique-se de que seu servidor web ou host suporte a sintaxe ES6 de módulos. Se precisar dar suporte a navegadores mais antigos, considere usar uma ferramenta de bundling como Webpack junto com Babel.

Dependências: Não há dependências externas. Todo o código é JavaScript puro.

### Desenvolvimento

Ao fazer alterações ou expandir a funcionalidade:

Mantenha a modularização em mente.
Siga a estrutura atual de separar configurações, funções auxiliares e serviços.
Mantenha a documentação atualizada.

### Suporte
Para dúvidas ou problemas, entre em contato com [dev@jogajunto.com.br].
