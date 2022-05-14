# maria_confeccoes_api
API para comunicação da loja Maria e Maria Confecções

Para que todas as funcionalidades funcione corretamente, adicione a seu arquivo a pasta config o arquivo default.json, nele deve-se especificar os seguintes dados:

{
    "mysql": {
        "data": "Nome do banco de dados",
        "host": "Endereço do servidor",
        "port": "Porta do servidor",
        "user": "Usuario para acesso",
        "password": "Senha do usuario"
    },
    "server": {
        "port": 8000
    }
}

A opção "server" a porta deve estar inutilizada em sua máquina. Caso esteja altere-a na opção "port".

Para que a aplicação funcione corretamente, precisa-se que esteja instalado localmente o NodeJS.
https://nodejs.org/

Quando baixado o repositório, rode os seguintes comandos no terminal:
- npm install  -  Será instaldo os pacotes: expressJS, sequelizeJS, momentJS, bodyParser, config, mysql2.
- node api/structures/Database/Inicialize/tables.js  -  Construção das tabelas no banco de dados (precisa ter o database já criado e indicado no campo mysql.data do default)
- npm start  -  Fará com que o servidor express inicie na porta especificada no arquivo de config usando nodemon de forma temporária.
