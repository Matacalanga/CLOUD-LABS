☁️ Static Website Deployment with CI/CD on AWS
📖 Overview

This project demonstrates a CI/CD pipeline for static frontend applications using AWS services, following security and scalability best practices.

🏗️ Architecture
GitHub → CodePipeline → (CodeBuild) → S3 (private) → CloudFront → Users
🎯 Objective
Automate deployments from GitHub
Deliver content globally via CDN
Secure S3 origin using CloudFront OAC
🔒 Security
Private S3 bucket
CloudFront with Origin Access Control (OAC)
No public access to S3
🚀 Pipeline Flow
Push to GitHub
Pipeline triggered
Build stage (optional)
Deploy to S3
CloudFront cache invalidation
🚨 Best Practices
Least privilege IAM
No public S3 buckets
Automated cache invalidation
CDN optimization
🔧 Production Considerations
Asset versioning
Logging and monitoring
WAF integration
Custom domain with HTTPS
📌 VEREDITO FINAL

Seu lab atual:

🟡 Intermediário (bom, mas com falhas sérias de segurança)

Após correção:

🟢 Nível profissional (portfólio internacional sólido)

🚀 PRÓXIMO PASSO ESTRATÉGICO

Se você quiser subir MUITO de nível, faça uma versão 2:

CI/CD com:
CodeBuild real (build + lint)
Invalidation automática
CloudFront + WAF
Deploy com CDK ou Terraform
