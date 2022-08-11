# Manifesto

# imagem
FROM node:14.17.0-slim

# cria diretorio dentro do container
WORKDIR /home/node/app

# executado no momento em que foi gerado, comando pro container ficar em pé
CMD [ "tail", "-f", "/dev/null" ]

#comando para criar imagem a partir do manifesto docker build -t minha-imagem-node .    -- tem que estar no diretorio o dockerfile

# rodar o container docker run -d -v $(pwd):/home/node/app -p 8000:3000  minha-imagem-node

# docker ps

# docker exec -it idImagem /bin/bash