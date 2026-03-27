## **Lab 07 — Deploying a Static Site on AWS with CI/CD**


### ☁️ Static Website Deployment with CI/CD on AWS
📖 Overview

This project demonstrates how to build a CI/CD pipeline for a static frontend application using AWS services, following modern best practices for security, scalability, and automation.

The solution integrates a GitHub repository with AWS to enable automatic deployments whenever changes are pushed to the main branch.

```
GitHub
   │
   ▼
CodeStar Connections
   │
   ▼
CodePipeline
   │
   ▼
CodeBuild (optional)
   │
   ▼
S3 (private bucket)
   ▲
   │ (OAC)
   ▼
CloudFront (HTTPS)
   │
   ▼
Users
```


### 🧰 Services Used
Amazon S3
Amazon CloudFront
AWS CodePipeline
AWS CodeBuild
AWS CodeStar Connections
GitHub

### 🎯 Objective
Automate deployment of a static website
Trigger deployments from GitHub pushes
Deliver content globally using a CDN
Ensure secure architecture with a private S3 origin
🔒 Security Architecture

This implementation follows AWS security best practices:

S3 bucket configured with Block Public Access enabled
Bucket remains private
Amazon CloudFront accesses content via Origin Access Control (OAC)
No direct public access to S3

### ⚙️ CI/CD Pipeline
Stage: Source
Provider: GitHub
Branch: main
Trigger: automatic on push
Stage: Build (Recommended)

Using AWS CodeBuild:

Validate files
Optional minification
Artifact preparation
Stage: Deploy
Deploy artifacts to Amazon S3
Sync files to ensure consistency
Remove outdated objects
Stage: Post-Deploy (Critical Improvement)
Automatically invalidate cache in Amazon CloudFront:
/*

### 🔄 Deployment Flow
Developer pushes code to GitHub
Pipeline is triggered automatically
(Optional) Build stage runs
Files are deployed to S3
CloudFront cache is invalidated
Updated version is served globally

### 📊 Result
Fully automated deployment pipeline
Global content delivery via CDN
Secure architecture (no public S3 access)

🚨 Best Practices Applied
Least privilege IAM roles
Private S3 bucket with controlled access
Automated deployment pipeline
CDN-based performance optimization

🔧 Production Considerations
Asset versioning (cache busting)
CloudFront access logs
Integration with AWS WAF
Custom domain with HTTPS (ACM)
Monitoring via CloudWatch

🧠 Skills Demonstrated
CI/CD implementation on AWS
GitHub integration
Secure static website hosting
Cloud architecture best practices


  ### 📸 ScreenShots
  ![diagrama](images/StaticWebsite1.jpeg)
  
  ![diagrama](images/StaticWebsite2.jpeg)
  
  ![diagrama](images/StaticWebsite3.jpeg)
  
  ![diagrama](images/StaticWebsite4.jpeg)
  
  ![diagrama](images/StaticWebsite5.jpeg)
