# 🧪 Lab 11 — Serverless API with AWS (API Gateway + Lambda + DynamoDB)

## 🎯 Objective

Build a fully serverless REST API using AWS managed services without provisioning servers.

The API will allow creating tasks and storing them in a low-latency NoSQL database.

---

# 🏗 Architecture

Client → API Gateway → Lambda → DynamoDB

Request flow:

POST /tasks
↓
API Gateway
↓
Lambda (createTask)
↓
DynamoDB (Tasks)

---

# 🧠 Scenario

An application needs a simple backend for task management:

* Create tasks
* Persist data
* Automatic scaling
* No server management

The solution will be fully serverless.

---

# 🔧 Services Used

* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* AWS IAM

---

# 📦 Step 1 — Create DynamoDB table

Table:

Tasks

Partition key:

id (String)

Example item:

{
"id": "1",
"title": "Study AWS",
"status": "pending"
}

---

# 📦 Step 2 — Create Lambda function

Name:

createTask

Runtime:

Python 3.12

Add IAM permission:

AmazonDynamoDBFullAccess

---

# 📦 Step 3 — Lambda code

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

Deploy the function.

---

# 📦 Step 4 — Create API Gateway

Type:

HTTP API

Configuration:

Method: POST
Route: /tasks
Integration: createTask
Stage: dev

---

# 🌐 Endpoint

POST /tasks

Invoke URL:

https://xxxxx.execute-api.us-east-1.amazonaws.com/tasks

---

# 🧪 API Test

Request:

{
"title": "My first task"
}

Response:

{
"message": "Task created",
"id": "uuid"
}

---

# 📊 Item stored in DynamoDB

{
"id": "uuid",
"title": "My first task",
"status": "pending"
}

---

# 🧠 What you must understand

## Why API Gateway?

* exposes HTTP endpoint
* route management
* Lambda integration
* throttling
* authentication

## Why Lambda?

* on-demand execution
* serverless
* automatic scaling
* pay per execution

## Why DynamoDB?

* NoSQL database
* low latency
* horizontal scaling
* fully managed

---

# ⚖️ Trade-offs

DynamoDB | RDS
NoSQL | SQL
Auto scaling | Manual provisioning
Low latency | Complex queries
Simple | More control

---

# 🎯 Result

You built:

* serverless REST API
* real backend
* NoSQL persistence
* cloud-native architecture
* synchronous integration

  
  
  
  ## 📸screenshots
  
![Architecture Diagram](images/api_serverless1.jpeg)

![Architecture Diagram](images/api_serverless2.jpeg)

![Architecture Diagram](images/api_serverless3.jpeg)

![Architecture Diagram](images/api_serverless4.jpeg)

![Architecture Diagram](images/api_serverless5.jpeg)
