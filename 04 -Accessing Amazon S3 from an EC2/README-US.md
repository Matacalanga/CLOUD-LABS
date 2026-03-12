# AWS EC2 + S3 Access Using IAM Role

## 🇺🇸 English

### Project Overview
This project demonstrates how to configure secure access between an EC2 instance and an S3 bucket using an IAM Role. Instead of storing AWS credentials inside the instance, the EC2 instance assumes an IAM Role that grants permission to access the S3 bucket.

This approach follows AWS security best practices and the principle of least privilege.

### Architecture
Components used in this project:

- EC2 Instance: Runs commands to interact with S3
- IAM Role: Grants permission for the EC2 instance to access S3
- S3 Bucket: Stores objects accessible by EC2

Access flow:

EC2 Instance → IAM Role → S3 Bucket

### Technologies Used

- Amazon EC2
- Amazon S3
- AWS IAM
- AWS CLI
- Amazon Linux

### Steps Performed

#### 1. Create an S3 Bucket

1. Open the AWS S3 Console
2. Click Create bucket
3. Use default security settings

Example bucket name:

my-ec2-s3-test-bucket

#### 2. Create an IAM Role

1. Go to IAM → Roles
2. Click Create Role
3. Select AWS Service
4. Choose EC2
5. Attach the policy:

AmazonS3ReadOnlyAccess

6. Name the role:

EC2-S3-Access-Role

#### 3. Launch EC2 Instance

1. Go to EC2 → Launch Instance
2. Select Amazon Linux
3. Choose instance type t2.micro
4. Attach the IAM Role:

EC2-S3-Access-Role

#### 4. Connect to the Instance

Connect using SSH or EC2 Instance Connect.

Update packages:

```bash
sudo yum update -y
```

Check AWS CLI version:

```bash
aws --version
```

#### 5. Test Access to S3

List buckets:

```bash
aws s3 ls
```

List files inside the bucket:

```bash
aws s3 ls s3://my-ec2-s3-test-bucket
```

If configured correctly, the EC2 instance will access S3 without using access keys.

### Key Learning Points

- Using IAM Roles to improve AWS security
- Allowing EC2 to access AWS services without storing credentials
- Basic AWS CLI interaction with S3
- Practical implementation of the least privilege principle
---

### Screenshots
 
![Architecture](images/architecture.png)




# Acesso EC2 ao S3 Usando IAM Role
