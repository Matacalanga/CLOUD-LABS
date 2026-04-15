# 🧪 Lab 11 — API Serverless com AWS (API Gateway + Lambda + DynamoDB)

## 🏗 Arquitetura

```
Client
  │
  ▼
API Gateway (HTTP API)
  │
  ▼
Lambda Function (createTask)
  │
  ▼
DynamoDB (Tasks table)
```

Este laboratório implementa uma API REST totalmente serverless utilizando API Gateway, Lambda e DynamoDB.  
O objetivo foi construir um backend capaz de receber requisições HTTP, executar lógica de negócio e persistir dados sem provisionar ou gerenciar servidores.

A arquitetura segue um fluxo síncrono onde o API Gateway expõe o endpoint, a Lambda executa a lógica e o DynamoDB armazena os dados.

---

## 🎯 Objetivo

Construir uma API REST serverless capaz de:

- Receber requisições HTTP  
- Executar lógica de negócio  
- Persistir dados em banco NoSQL  
- Escalar automaticamente  
- Operar sem gerenciamento de servidores  

---

## 🛠 Decisão de Arquitetura

O API Gateway foi utilizado como ponto de entrada HTTP responsável por rotear as requisições para a Lambda.  
A Lambda executa a lógica da aplicação e grava os dados no DynamoDB.

Esse modelo elimina a necessidade de servidores de aplicação e permite escalabilidade automática baseada na quantidade de requisições.

Fluxo da requisição:

POST /tasks → API Gateway → Lambda → DynamoDB

---

## 📦 Camada de Dados (DynamoDB)

O DynamoDB foi escolhido como camada de persistência devido à baixa latência e modelo serverless.  
Uma tabela chamada `Tasks` armazena os itens utilizando UUID como chave primária.

Exemplo de item:

```json
{
  "id": "uuid",
  "title": "Estudar AWS",
  "status": "pending"
}
```

Esse schema suporta operações simples de escrita sem necessidade de modelagem relacional.

---

## ⚙️ Camada de Compute (Lambda)

A função Lambda é responsável por:

- Ler o body da requisição HTTP  
- Gerar ID único  
- Criar objeto da task  
- Persistir no DynamoDB  
- Retornar resposta HTTP  

```python
import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Tasks')

def lambda_handler(event, context):

    body = json.loads(event['body'])

    task_id = str(uuid.uuid4())

    item = {
        'id': task_id,
        'title': body['title'],
        'status': 'pending'
    }

    table.put_item(Item=item)

    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': 'Task created',
            'id': task_id
        })
    }
```

A função executa sob demanda e escala automaticamente conforme o volume de requisições.

---

## 🌐 Camada de API (API Gateway)

O API Gateway expõe o endpoint HTTP e integra diretamente com a Lambda.  
Uma rota POST `/tasks` foi configurada para invocar a função createTask.

Essa abordagem fornece:

- Endpoint HTTP gerenciado  
- Integração nativa com Lambda  
- Escalabilidade automática  
- Sem provisionamento de servidores  

---

## ⚖️ Decisões Técnicas

### API Gateway

Utilizado para expor endpoints HTTP sem necessidade de servidores web.  
Gerencia roteamento e integração com Lambda.

### Lambda

Escolhida como camada de execução por ser event-driven e serverless.  
Executa apenas sob demanda e escala automaticamente.

### DynamoDB

Selecionado como banco de dados devido a:

- Escala automática  
- Baixa latência  
- Sem gerenciamento de conexão  
- Modelo serverless  

---

## 🔄 Fluxo da Requisição

1. Cliente envia POST para `/tasks`  
2. API Gateway recebe requisição HTTP  
3. Lambda executa lógica de negócio  
4. Item é salvo no DynamoDB  
5. Lambda retorna resposta HTTP  

---

## ✅ Resultado

Este laboratório implementa:

- API REST serverless  
- Endpoint HTTP com API Gateway  
- Camada de execução com Lambda  
- Persistência NoSQL com DynamoDB  
- Arquitetura totalmente gerenciada  
- Escalabilidade automática  
- Backend cloud-native  

---

## 📸 Screenshots

![Architecture Diagram](images/api_serverless1.jpeg)

![Architecture Diagram](images/api_serverless2.jpeg)

![Architecture Diagram](images/api_serverless3.jpeg)

![Architecture Diagram](images/api_serverless4.jpeg)

![Architecture Diagram](images/api_serverless5.jpeg)
