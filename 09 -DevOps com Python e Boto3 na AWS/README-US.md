# AWS Lab 09 — DevOps with Python and Boto3

---

## 📐 ARCHITECTURE DIAGRAM

```
Developer
   |
   | Executes Python Script
   ↓
[Boto3 SDK]
   |
   | Authentication (IAM / CLI / Environment)
   ↓
[AWS API]
   |
   ↓
[Amazon S3]
```

---

## 📌 OBJECTIVE

The purpose of this lab is to demonstrate how to automate AWS operations using Python and the Boto3 SDK, applying core **DevOps** and **Infrastructure as Code (IaC)** principles.

The lab focuses on replacing manual interactions with AWS services by programmatic and repeatable automation workflows.

---

## 🧠 DEVOPS CONTEXT

In traditional environments, infrastructure tasks are often executed manually through the AWS Console.

This lab demonstrates a shift to a DevOps approach where:

* Infrastructure is managed through code
* Operations are automated and repeatable
* Human error is minimized
* Environments can be reproduced consistently

---

## 🧰 TECHNOLOGIES USED

* Python 3.x
* Boto3 (AWS SDK for Python)
* AWS CLI
* Amazon S3
* AWS IAM

---

## ⚠️ AUTHENTICATION MODEL

For lab purposes, authentication was configured using:

```
aws configure
```

This method stores credentials locally for CLI and SDK usage.

### 🔴 Production Considerations

In real-world environments, this approach should be avoided.

Recommended alternatives:

* IAM Roles (for EC2, Lambda, etc.)
* Environment variables
* AWS credential management services

This prevents credential leakage and improves security posture.

---

## 📂 PROJECT STRUCTURE

```
aws-lab-09-boto3/
│
├── list_s3.py
├── create_bucket.py
├── ensure_bucket.py
├── upload_file.py
├── list_objects.py
├── deploy_folder.py
├── cleanup_bucket.py
│
├── deploy/
│   ├── index.html
│   └── app.js
│
└── arquivo.txt
```

---

## 🧪 LAB IMPLEMENTATION

### 1. Listing S3 Buckets

The script retrieves all buckets available in the account:

```
python list_s3.py
```

This validates connectivity and permissions.

---

### 2. Creating an S3 Bucket

A Python script is used to create a new bucket:

```python
import boto3

s3 = boto3.client("s3")

def create_bucket(bucket_name):
    s3.create_bucket(Bucket=bucket_name)
```

---

### 3. Idempotent Bucket Creation

To avoid errors when the bucket already exists, an idempotent approach is implemented:

```python
import boto3
from botocore.exceptions import ClientError

s3 = boto3.client("s3")

def ensure_bucket(bucket_name):
    try:
        s3.head_bucket(Bucket=bucket_name)
    except ClientError:
        s3.create_bucket(Bucket=bucket_name)
```

This ensures the desired state without duplicating resources.

---

### 4. Uploading Files

A file is uploaded to the S3 bucket using:

```python
s3.upload_file("arquivo.txt", bucket_name, "arquivo.txt")
```

---

### 5. Listing Bucket Objects

Objects stored in the bucket are retrieved programmatically:

```
python list_objects.py
```

---

### 6. Deploying a Directory

A script iterates over local files and uploads them to S3, enabling simple static deployments.

---

### 7. Resource Cleanup

To prevent unnecessary costs, all objects in the bucket are removed:

```python
def cleanup(bucket):
    objects = s3.list_objects_v2(Bucket=bucket)
    for obj in objects.get("Contents", []):
        s3.delete_object(Bucket=bucket, Key=obj["Key"])
```

---

## 🧠 DEVOPS CONCEPTS APPLIED

* Infrastructure automation via SDK
* Idempotent operations
* API-driven resource management
* Automated deployment workflows
* Script reusability and modularity

---

## ⚠️ BEST PRACTICES

* Never commit AWS credentials to source control
* Prefer IAM Roles over static access keys
* Use unique naming conventions for S3 buckets
* Implement proper error handling
* Monitor resource usage and costs

---

## 🚀 POSSIBLE EXTENSIONS

* Automate EC2 provisioning with Boto3
* Integrate scripts into CI/CD pipelines
* Deploy static websites fully via automation
* Implement backup and lifecycle policies
* Combine with Terraform for hybrid IaC approach

---

## 📚 KEY LEARNINGS

* How to interact with AWS services programmatically
* The role of SDKs in DevOps workflows
* Importance of idempotency in automation
* Secure credential management strategies
* Practical implementation of Infrastructure as Code concepts

---



## 📸 screenshots
![diagrama](images/pythonboto1.jpeg)
![diagrama](images/pythonboto2.jpeg)
![diagrama](images/pythonboto3.jpeg)
![diagrama](images/pythonboto4.jpeg)
![diagrama](images/pythonboto5.jpeg)
