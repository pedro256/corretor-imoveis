
  

# corretor-imoveis
corretora de imóveis onde há perfil de usuários: cliente, corretor de imoveis, coordenador.
##  ATIVIDADES E RECURSOS DA APLICAÇÃO
(backend/frontend)
### coordenador

 - [x] aprovar imoveis 
- [x] dashboard
- [x] listar usuário 
- [x] gerar pdf relatorio de dashboard 
### corretor
- [x] criar/atualizar novos imoveis
- [x] atualizar dados do imovel que ele cadastrou 
- [x] lista de imoveis 
- [x] lista de usuário 
### cliente
- [x] atualizar dados
- [x] lista de imoveis
- [x] comprar imoveis 
- [x]  imoveis relacionados a você 
- [x] criar novo usuário
### Technologies
- **Angular**
- **Nestjs**
- **docker**
### Descrição
sistema de corretora de imoveis
# Rodando a aplicação
## via docker
```bash
# docker
$ docker-compose up #--build
```
## normal
ir em cada pasta ('backend', 'frontend') e instalar as dependencias
```bash
# cmd
$ npm install #--build
```
e executar as aplicações com :
```bash
# docker
$ npm start #--build
```  
após o processo o sistema acessar a url : http://localhost:4200/
# USUÁRIOS:
**USUÁRIO TIPO CLIENT:**
email: pedro@mail.com
senha: 1234

email: ticker@mail.com
senha: 1234

**USUÁRIO TIPO CORRETOR DE IMÓVEIS:**
email: fulano@mail.com
senha: 1234

**USUÁRIO COORDENADOR:**
email: edew@mail.com
senha: 1234
