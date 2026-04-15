# 🚀 Lab 12 — Secured Serverless API (API Gateway + Lambda + DynamoDB + Cognito)

## 🏗 Architecture

```
Client
  │
  ▼
Amazon Cognito (JWT Token)
  │
  ▼
API Gateway (JWT Authorizer)
  │
  ▼
Lambda Function
  │
  ▼
DynamoDB (userId partition key)
```

This lab extends the previously created serverless API by adding authentication using Amazon Cognito and JWT validation in API Gateway.  
The goal was to transform a public API into a secure multi-user API where only authenticated users can access data.

---

## 🎯 Objective

Implement managed authentication and protect API routes ensuring:

- Access only for authenticated users  
- Unique user identification  
- Data isolation (multi-tenant)  
- Security without a custom authentication backend  

---

## 🔐 Authentication with Cognito

Amazon Cognito was used as the identity provider responsible for authentication and JWT token generation.  
This approach removes the need to manually implement login, user storage, and token signing.

The client requests a token from Cognito and receives a signed JWT containing user information.  
This token is then sent in the Authorization header to API Gateway.

This design provides managed, scalable authentication with native AWS integration.

---

## 🛡 API Protection with JWT Authorizer

API Gateway was configured with a JWT Authorizer pointing to Cognito as the issuer.  
This ensures the token is validated before the request reaches the Lambda function.

Requests without a token or with an invalid token are automatically blocked by API Gateway.  
Lambda executes only for authenticated requests, reducing cost and centralizing security.

---

## 👤 User Identification

After JWT validation, API Gateway injects the token claims into the Lambda event.  
The unique user identifier is obtained from the `sub` claim.

```python
claims = event["requestContext"]["authorizer"]["jwt"]["claims"]
user_id = claims["sub"]
```

This value is stored as `userId` in DynamoDB, allowing data isolation per user.

This strategy turns the API into a multi-tenant architecture using a single table.

---

## 🔄 Evolution from Previous Lab

Previous lab:

- Public API  
- Fixed user  
- No authentication  
- Shared data  

This lab:

- Secured API  
- Authenticated users  
- JWT validation  
- Multi-tenant architecture  
- User data isolation  

The API evolves from a simple example to a production-ready secure architecture.

---

## ⚖️ Architecture Decision

Amazon Cognito was chosen instead of implementing custom authentication.

Cognito provides:

- User management  
- JWT token generation  
- Token signing  
- Native API Gateway integration  
- Automatic scaling  

A custom authentication solution would require:

- User database  
- Password hashing  
- Custom JWT generation  
- Refresh tokens  
- Key rotation  
- Security maintenance  

This would significantly increase operational complexity.

---

## ✅ Result

This lab implements:

- Secured serverless API  
- Cognito authentication  
- JWT validation in API Gateway  
- User-based identification  
- Multi-tenant DynamoDB design  
- Secure architecture  
- Production-ready serverless backend  
```
📸 Screeshots


  ![Architecture Diagram](images/api_protegida1.jpeg)

   ![Architecture Diagram](images/api_protegida2.jpeg)

   ![Architecture Diagram](images/api_protegida3.jpeg)

   ![Architecture Diagram](images/api_protegida4.jpeg)
  
   ![Architecture Diagram](images/api_protegida5.jpeg)

   ![Architecture Diagram](images/api_protegida6.jpeg)

   ![Architecture Diagram](images/api_protegida7.jpeg)
