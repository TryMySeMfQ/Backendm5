---
sidebar_position: 2
---

# Entenda como funciona a API

## Requisitos do Sistema Alere 
 Esta seção detalha os requisitos funcionais e não funcionais do sistema Alere, descrevendo suas capacidades, objetivos e como ele se integra com o modelo de dados para combater o desperdício de alimentos e a insegurança alimentar no Brasil.

## Visão Geral do Sistema
O Alere visa conectar doadores a famílias em situação de vulnerabilidade, promovendo a monitoração de alimentos desde o transporte até a doação final. Nosso objetivo é criar um ciclo de solidariedade e conscientização, proporcionando uma experiência transparente e conectada para famílias, doadores e distribuidores. Além disso, o sistema gerará indicadores que auxiliam na análise de impacto social e no acompanhamento de iniciativas educacionais.

### Funcionalidades do Sistema
A seguir, as principais funcionalidades do Alere e as tabelas de banco de dados que as representam:

  **Cadastro e Gestão de Famílias em Vulnerabilidade Social**

Representado pela tabela Receptores, que armazena dados como nome, tipo, endereço, contato, capacidade de recebimento e histórico de alimentos recebidos.

  **Conexão entre Doadores e Famílias**

Garante a rastreabilidade das doações. Mapeado pela tabela doacao, que inclui doador_nome, receptor (via relacionamento com Agendamento), alimentoId, data_doacao e validado.

  **Acompanhamento do Impacto das Doações e Ações Educativas**
  
Registrado na tabela Estatistica, que armazena informações como qtd_total_doados, qtd_total_recebidos, ranking_categoria e mais_desperdicados.

### Objetivos do Sistema
Os objetivos do Alere são guiar o desenvolvimento e a operação do sistema, garantindo que ele cumpra sua missão:

  **Facilitar a Conexão entre Doadores e Famílias** 

 O sistema permitirá que doadores encontrem facilmente famílias registradas (tabela Receptores) e aptas a receber ajuda, direcionando as doações para o ponto de distribuição mais próximo (tabelas distribuidor e Agendamento).

  **Garantir Transparência e Rastreabilidade das Doações**

 Os doadores poderão acompanhar o impacto social de suas doações (tabela doacao), com visibilidade sobre os alimentos doados, a quem foram destinados e quando a entrega ocorreu (via Agendamento).

  **Monitorar os Alimentos desde a Origem**

 O sistema acompanhará os alimentos desde o cadastro (tabela alimento) até o recebimento pela família beneficiada, garantindo um controle eficiente sobre prazos de validade, categorias e estados de conservação.

  **Criar um Histórico de Participação em Doações**
O sistema manterá um histórico detalhado das doações realizadas, tanto por parte dos doadores quanto das famílias receptoras (tabelas doacao, Receptores), além de possibilitar análises gerais por meio da tabela Estatistica.

### Requisitos Funcionais
Detalhes das funcionalidades essenciais do sistema:

 **Cadastro de Famílias (Tabela: Receptores)**

Objetivo: Registrar famílias receptoras no sistema, incluindo informações como nome, tipo, endereço, contato e capacidade de recebimento.

   *Validação de Dados:*  Verificação de campos obrigatórios como nome, tipo e contato.

   *Acompanhamento de Recebimentos:* O campo alimentos_recebidos permite monitorar o total recebido por família.

   *Filtro e Busca:* O sistema pode utilizar dados como endereço e tipo para filtrar famílias por localização ou perfil.

***Endpoints:***

| Método    |  Rota                     |  Descrição                           |
|-----------|---------------------------|--------------------------------------|
| POST      |  /receptor/cadastro       |  Cadastro de nova família receptora  |
| PUT       |  /receptor/atualizar/:id  |  Atualiza dados do receptor          |
| DELETE    |  /receptor/deletar/:id    |  Remove um receptor                  |



 **Cadastro de Pontos de Distribuição (Tabela: distribuidor)**

Objetivo: Registrar os distribuidores responsáveis por fazer a ponte entre doações e famílias.

*Dados Registrados:* Nome, contato, documento, região de atuação e alimentos vinculados.

*Multiplicidade:* Suporte a múltiplos distribuidores, cada um podendo atuar em diferentes regiões.

***Endpoints:***

| Método   |  Rota                         |  Descrição              |
|----------|-------------------------------|-------------------------|
| POST     |	/distribuidor/cadastro	     |  Cadastra distribuidor  |
| PUT	     |  /distribuidor/atualizar/:id  |	Atualiza distribuidor  |
| DELETE   |  /distribuidor/deletar/:id	   |  Remove distribuidor    |



  **Cadastro de Alimentos (Tabela: alimento)**

Objetivo: Gerenciar o cadastro de alimentos disponíveis para doação.

*Campos Principais:* Nome, descrição, peso, validade, categoria, estado e imagem.

*Rastreabilidade:* As datas de criação e atualização dos alimentos ajudam a manter o controle de entrada no sistema.

***Endpoints:***

| Método  |  Rota                         |  Descrição              |
|---------|-------------------------------|-------------------------|
| POST	  | /alimento/cadastro	          | Cadastra alimento       |
| PUT	    | /alimento/atualizar/:id       |	Atualiza alimento       |
| DELETE	| /alimento/deletar/:id	        | Remove alimento         |



  **Cadastro e Registro de Doações (Tabela: doacao)**
Objetivo: Registrar doações feitas ao sistema, ligando alimentos a doadores.

*Dados Armazenados:* Alimento doado, quantidade, nome do doador, localização, data e status de validação.

*Histórico:* Permite aos doadores acompanharem suas contribuições.

***Endpoints:***

| Método  |  Rota                     |  Descrição          |
|---------|---------------------------|---------------------|
| POST    |	/doacao/cadastro          |	Cadastra doação     |
| PUT	    | /doacao/atualizar/:id	    | Atualiza doação     |
| DELETE	| /doacao/deletar/:id	      | Remove doação       |


  **Agendamento de Entregas (Tabela: Agendamento)**

Objetivo: Gerenciar a logística de entrega entre doadores, distribuidores e famílias.

*Relacionamentos:* Cada agendamento vincula um alimento a um receptor e um distribuidor.

*Campos Adicionais:* Data e hora, status, observações.
*Rastreamento:* Permite saber quando e como uma entrega foi (ou será) realizada.

***Endpoints:***

| Método  |  Rota                       |  Descrição           |
|---------|-----------------------------|----------------------|
| POST    |	/agendamento/cadastro	      | Cadastra agendamento |
| PUT	    | /agendamento/atualizar/:id  |	Atualiza agendamento |
| DELETE  |	/agendamento/deletar/:id	  | Remove agendamento   |


  **Notificações (Tabela: Notificacoes)**

Objetivo: Enviar mensagens informativas dentro do sistema para os usuários.

 *Tipos de Mensagens:* Classificadas por categoria, podem ser direcionadas a usuários específicos.

*Controle de Leitura:* Indicação se a notificação foi lida ou não.

***Endpoints:***

| Método  |  Rota                        |  Descrição           |
|---------|------------------------------|----------------------|
| POST	  | /notificacoes/cadastro	     | Cadastra notificação |
| PUT	    | /notificacoes/atualizar/:id	 | Atualiza notificação |
| DELETE	| /notificacoes/deletar/:id	   | Remove notificação   |


 **Estatísticas e Monitoramento (Tabela: Estatistica)**

Objetivo: Fornecer dados consolidados para análise e combate ao desperdício.

*Informações Geradas:* Alimentos mais desperdiçados, totais doados e recebidos, ranking por categoria.

*Apoio à Gestão:* Permite que o sistema visualize padrões e melhore processos de doação.

***Endpoints:***

| Método  |  Rota                        |  Descrição           |
|---------|------------------------------|----------------------|
| POST	  | /estatistica/cadastro	       | Cadastra estatística |
| PUT	    | /estatistica/atualizar/:id	 | Atualiza estatística |
| DELETE	| /estatistica/deletar/:id	   | Remove estatística   |
