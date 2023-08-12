## API Vacancies Integration

Projeto JavaScript para integração com a API de vagas. Este guia descreve a estrutura do projeto e como utilizá-lo.

Estrutura do Projeto

```lua
/js
|-- config/
|   |-- apiConfig.js
|
|-- helpers/
|   |-- fetchHelper.js
|
|-- services/
|   |-- vacanciesService.js
|
|-- main.js
```

### Descrição dos Diretórios:

`config/`: Contém as configurações da API, incluindo URL base, endpoints e credenciais.

`helpers/`: Funções auxiliares, incluindo uma função genérica para fazer requisições fetch.

`services/`: Serviços relacionados à API, como obter um token e buscar vagas.

### Configuração

Antes de começar, certifique-se de que as credenciais em /js/config/apiConfig.js estejam corretas.

### Como usar

Obtendo Vagas:
No seu arquivo HTML principal, importe o script main.js.
O script fará a chamada automaticamente ao ser importado.

```html
<script type="module" src="/js/main.js"></script>
```

Dentro do arquivo main.js, você pode modificar o nome da empresa conforme necessário:

```javascript
listVacancies("NomeDaEmpresa"); // Substitua pelo nome da empresa.
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
Para dúvidas ou problemas, entre em contato com [Nome ou E-mail do Responsável].
