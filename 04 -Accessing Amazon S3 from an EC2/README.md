# AWS IAM Role + EC2 + S3 Access Lab

## 🇺🇸 English

This lab demonstrates how to securely grant an **EC2 instance read-only access to an S3 bucket using IAM Roles**, without using static credentials.

The objective is to understand how **IAM Roles, Instance Metadata Service (IMDSv2), and S3 permissions** work together.

---

## Architecture

EC2 Instance → IAM Role → S3 Bucket

The EC2 instance assumes an IAM role which grants **read-only access** to a specific S3 bucket.

---

## Technologies Used

- AWS EC2
- AWS S3
- AWS IAM
- Amazon Linux 2023
- AWS CLI
- IMDSv2 (Instance Metadata Service)

---

## Step 1 — Create IAM Role

Create a role that EC2 instances can assume.

Service:
EC2

Trust policy example:

```json
{
 "Version": "2012-10-17",
 "Statement": [
  {
   "Effect": "Allow",
   "Principal": {
    "Service": "ec2.amazonaws.com"
   },
   "Action": "sts:AssumeRole"
  }
 ]
}
