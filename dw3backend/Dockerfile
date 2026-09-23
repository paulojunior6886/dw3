# 1. Imagem base oficial do Node.js em versão leve (Alpine Linux)
FROM node:18-alpine

# 2. Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# 3. Copia apenas os arquivos de definição de pacotes primeiro
COPY package*.json ./

# 4. Executa a instalação das dependências limpas dentro do Linux do contêiner
RUN npm install

# 5. Copia todo o restante dos arquivos do projeto (respeitando o .dockerignore)
COPY . .

# 6. Informa ao Docker que a aplicação escuta na porta 40000
EXPOSE 40000

# 7. Comando executado ao inicializar o contêiner
CMD ["node", "app.js"]