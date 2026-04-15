# 🧪 Lab 11 — Serverless API (API Gateway + Lambda + DynamoDB)

## 🏗 Architecture

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

This lab implements a fully serverless REST API using API Gateway, Lambda, and DynamoDB.  
The objective was to build a backend capable of receiving HTTP requests, processing business logic, and persisting data without provisioning or managing servers.

The architecture follows a synchronous request flow where API Gateway exposes the endpoint, Lambda handles execution, and DynamoDB stores task data.

---

## 🎯 Objective

Build a serverless REST API capable of:

- Receiving HTTP requests  
- Executing business logic  
- Persisting data in NoSQL database  
- Scaling automatically  
- Operating without server management  

---

## 🛠 Architecture Design

API Gateway was used as the HTTP entry point responsible for routing requests to Lambda.  
Lambda executes the business logic and writes data into DynamoDB.

This design removes the need for application servers and allows automatic scaling based on request volume.

The request flow:

POST /tasks → API Gateway → Lambda → DynamoDB

---

## 📦 Data Layer (DynamoDB)

DynamoDB was selected as the persistence layer due to its low latency and serverless scaling model.  
A single table named `Tasks` stores task items using a generated UUID as partition key.

Example item:

```json
{
  "id": "uuid",
  "title": "Study AWS",
  "status": "pending"
}
```

This schema supports simple write-heavy workloads without requiring relational modeling.

---

## ⚙️ Compute Layer (Lambda)

The Lambda function is responsible for:

- Parsing HTTP request body  
- Generating unique task ID  
- Creating task object  
- Writing item to DynamoDB  
- Returning HTTP response  

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

This function executes on demand and scales automatically with incoming requests.

---

## 🌐 API Layer (API Gateway)

API Gateway exposes the HTTP endpoint and integrates directly with Lambda.  
A POST route `/tasks` was configured to invoke the createTask function.

This approach provides:

- Managed HTTP endpoint  
- Native Lambda integration  
- Automatic scaling  
- No server provisioning  

---

## ⚖️ Architecture Decisions

### API Gateway

Used to expose HTTP endpoints without managing web servers.  
It provides routing, scaling, and integration with Lambda.

### Lambda

Chosen for compute due to event-driven execution and pay-per-request model.  
No infrastructure management is required.

### DynamoDB

Selected for persistence because of:

- Serverless scaling  
- Low latency  
- No connection management  
- Simple key-value access pattern  

---

## 🔄 Request Flow

1. Client sends POST request to `/tasks`  
2. API Gateway receives HTTP request  
3. Lambda function executes business logic  
4. Task item is written to DynamoDB  
5. Lambda returns HTTP response  

---

## ✅ Result

This lab implements:

- Serverless REST API  
- API Gateway HTTP endpoint  
- Lambda compute layer  
- DynamoDB persistence  
- Fully managed architecture  
- Automatic scaling  
- Cloud-native backend  

---

## 📸 Screenshots

![Architecture Diagram](images/api_serverless1.jpeg)

![Architecture Diagram](images/api_serverless2.jpeg)

![Architecture Diagram](images/api_serverless3.jpeg)

![Architecture Diagram](images/api_serverless4.jpeg)

![Architecture Diagram](images/api_serverless5.jpeg)
