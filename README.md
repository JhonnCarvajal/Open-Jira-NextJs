# NextJS OpenJira app

To run locally is necessary a mongo db

docker-compose up -d

- -d flag means **detached**
- Mongo DB local
```
mongodb://localhost:27017/entriesdb
```

## Configurar vairables de entorno
Renombrar el archivo __.env.template__ a __.env__
##Llenar la base de datos con informacion de pruebas
llamar a 
```
localhost:3000/api/seed
```