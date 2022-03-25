## Dependências utilizadas
    - express
    - mysql2
    - reflect-metadata
    - typeorm@0.2.41
    - uuid

    - @type/express -D
    - @type/nodemon -D
    - nodemon -D
    - ts-node-dev -D
    - typescripts -D

## Passo a passo para o programa funcionar
    0. Antes de tudo, é importante ter o bd já criado, então veja a sessão do bando aqui neste README.md. Ela está por aqui em algum lugar.
    1. Instale as dependências
    2. Vá em package.json
        2.1. Altere o "main" para 'src/server.ts'
        2.2. Adicione em "scripts":
            2.2.1. "dev":"nodemon --transpile-only src/server.ts"
            2.2.2. "typeorm":"ts-node-dev node_modules/.bin/typeorm"
    3. Inicialize o typescript com "yarn tsc --init"
        3.1. Vá em tsconfig.json e descomente as opções:
            3.1.1. Descomente:
                3.1.1.1. "experimentalDecorators"
                3.1.1.2. "emitDecoratorMetadata"
            3.1.2. Altere:
                3.1.2.1. "strict":"false" para "scrict":"true"
    4. Crie o arquivo .env e coloque as variáveis de ambiente referentes as credenciais do banco de dados e typeorm. No meu caso foram:
        TYPEORM_CONNECTION = mysql
        TYPEORM_HOST = localhost
        TYPEORM_USERNAME = root
        TYPEORM_PASSWORD = admin
        TYPEORM_DATABASE = api_node_typescript_mysql
        TYPEORM_PORT = 3307
        TYPEORM_MIGRATIONS_DIR = src/database/migrations
        TYPEORM_MIGRATIONS = src/database/migrations/*.ts
        TYPEORM_ENTITIES = src/entities/*.ts
        TYPEORM_DIR = src/entities

        OBS.: Essas são as configs do meu projeto LOCAL, no seu projeto você vai alterar as configs com relação ao seu banco. Para mais infos acesse a doc do typeorm.

## Para criar o Banco de Dados
    OBS.: No meu caso, eu utilizei o mysql. As credenciais estão na seção anterior. Atenção para a porta '3307' que, por padrão é 3306, porém eu utilizei a 3307.

    1. Instale o mysql, link na seção de links
    2. Faça login no MySQL Server com o comando:
        - mysql -h 127.0.0.1 -P 3307 -u root -p
    3. Crie o BD com o comando:
        - create database <nome da sua base de dados>

## Alguns comandos úteis do typeorm
    * Para criar a sua migração:
        - yarn typeorm migration:create -n <Nome da sua migration>
    * Para rodar as migrações e criar as tabelas no bd
        - yarn typeorm migration:run