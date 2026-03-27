# AWS Lab 10 — Production Simulation with EC2, S3 and IAM

---

## 📐 ARCHITECTURE DIAGRAM

```
Developer
   |
   | Upload Artifact
   ↓
[Amazon S3]
   |
   | (Pull-based Deployment)
   ↓
[EC2 Instance]
   |
   ↓
[Web Application]
```

---

## 📌 OBJECTIVE

This lab simulates a real-world production environment on AWS using EC2, S3, and IAM Roles, implementing a secure and automated **pull-based deployment model**.

The goal is to demonstrate how application artifacts can be stored, retrieved, and deployed in a controlled and secure manner.

---

## 🧠 OVERVIEW

This architecture reflects a common production pattern where:

* Application artifacts are stored in Amazon S3
* EC2 instances retrieve artifacts dynamically
* Access is controlled via IAM Roles
* No static credentials are used

This approach improves both **security** and **operational flexibility**.

---

## 🏗️ ARCHITECTURE COMPONENTS

* Amazon EC2 (application server)
* Amazon S3 (artifact storage)
* IAM Role (secure access control)

---

## 🔐 SECURITY

* No hardcoded credentials
* IAM Role attached to EC2 instance
* Least Privilege access to S3
* Secure communication within AWS

---

## 🔄 DEPLOYMENT FLOW

1. Developer uploads application artifact to S3
2. EC2 instance retrieves artifact using IAM Role
3. Files are downloaded and extracted
4. Application is executed locally on EC2

---

## ⚙️ IMPLEMENTATION

### 1. Upload Artifact to S3

```
aws s3 cp app.zip s3://my-bucket/
```

---

### 2. Retrieve Artifact from EC2

```
aws s3 cp s3://my-bucket/app.zip .
```

---

### 3. Deploy Application

```
unzip app.zip
python app.py
```

---

## 🔐 IAM ROLE CONFIGURATION

Example of minimum required permissions:

```json
{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

---

## 🧠 DEPLOYMENT MODEL

This lab uses a:

### Pull-based deployment strategy

### Advantages:

* EC2 instances control when updates occur
* Reduced exposure compared to push-based models
* Better alignment with secure environments

---

## 🛠️ TROUBLESHOOTING

Common issues:

* ❌ AccessDenied → incorrect IAM Role permissions
* ❌ NoSuchBucket → wrong bucket name
* ❌ NoSuchKey → missing artifact
* ❌ AWS CLI not configured properly

---

## 📚 LEARNINGS

* Integration between EC2 and S3
* Secure access using IAM Roles
* Real-world deployment flow
* Application of Least Privilege
* Practical DevOps workflow

---

## ⚠️ BEST PRACTICES

* Avoid static credentials
* Use IAM Roles whenever possible
* Implement logging (CloudWatch recommended)
* Use unique bucket names
* Automate deployment steps

---


## 📸 Screenshots

![Architecture Diagram](images/production-simulation1.jpeg)

![Architecture Diagram](images/production-simulation2.jpeg)

![Architecture Diagram](images/production-simulation3.jpeg)

![Architecture Diagram](images/production-simulation4.jpeg)
