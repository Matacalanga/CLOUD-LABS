# 🚀 Lab 10 — Simulação de Produção com AWS (EC2 + S3 + IAM)

![Architecture Diagram](images/lab10-diagrama.png)

Este laboratório simula um ambiente real de produção na AWS, utilizando uma instância EC2, armazenamento de artefatos no S3 e autenticação segura via IAM Role, seguindo práticas modernas de DevOps.

---

## 📌 Objetivo

Simular um fluxo de deploy em ambiente de produção, incluindo:

- Provisionamento de servidor (EC2)
- Configuração de acesso seguro via IAM Role
- Armazenamento de artefatos no S3
- Deploy baseado em pull (EC2 consumindo do S3)
- Execução de aplicação web simples
- Cleanup completo para evitar custos

---

## 🧰 Tecnologias Utilizadas

- Python 3.x  
- Boto3 (AWS SDK for Python)  
- AWS CLI  
- Amazon EC2  
- Amazon S3  
- IAM (Identity and Access Management)  

---

## 🏗️ Arquitetura do Laboratório

