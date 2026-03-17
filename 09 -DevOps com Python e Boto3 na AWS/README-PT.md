# 🚀 Lab 09 — DevOps com Python e Boto3 na AWS

![Architecture Diagram](images/pythonboto.png)

Este laboratório demonstra, na prática, como automatizar tarefas na AWS utilizando Python e o SDK Boto3, seguindo princípios de DevOps e Infrastructure as Code (IaC).

---

## 📌 Objetivo

Automatizar operações na AWS de forma programática, incluindo:

- Autenticação segura via CLI
- Criação de infraestrutura (S3)
- Scripts idempotentes
- Upload de arquivos
- Deploy de diretórios
- Limpeza automática de recursos

---

## 🧰 Tecnologias Utilizadas

- Python 3.x  
- Boto3 (AWS SDK for Python)  
- AWS CLI  
- Amazon S3  
- IAM (Identity and Access Management)  

---

## 🏗️ Arquitetura do Laboratório

```
[ Python Scripts ]
        ↓
[ Boto3 SDK ]
        ↓
[ AWS CLI / Credenciais IAM ]
        ↓
[ AWS API ]
        ↓
[ Amazon S3 ]
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, você precisa:

- Conta ativa na AWS  
- AWS CLI instalado  
- Python instalado  
- Usuário IAM com permissões adequadas  
- Ambiente virtual Python configurado  

---

## 🔐 Configuração de Credenciais

Execute:

```
aws configure
```

Informe:

```
AWS Access Key ID
AWS Secret Access Key
Region: us-east-1
Output: json
```

---

## 📂 Estrutura do Projeto

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

## 🧪 Etapas do Laboratório

### 1. Listar Buckets S3

```
python list_s3.py
```

### 2. Criar Bucket

```
python create_bucket.py
```

### 3. Script Idempotente

Evita erro caso o bucket já exista:

```
python ensure_bucket.py
```

### 4. Upload de Arquivo

```
python upload_file.py
```

### 5. Listar Objetos do Bucket

```
python list_objects.py
```

### 6. Deploy de Pasta Completa

```
python deploy_folder.py
```

### 7. Limpeza do Bucket

```
python cleanup_bucket.py
```

---

## 🧠 Conceitos DevOps Aplicados

- Automação de infraestrutura  
- Idempotência  
- Integração com APIs AWS  
- Deploy automatizado  
- Scripts reutilizáveis  
- Gerenciamento de credenciais  

---

## ⚠️ Boas Práticas

- Nunca versionar Access Keys  
- Utilizar IAM com menor privilégio possível  
- Evitar nomes fixos para buckets (usar nomes únicos)  
- Utilizar variáveis de ambiente em produção  
- Monitorar custos no AWS Billing  

---

## 💡 Possíveis Evoluções

- Provisionar EC2 com Boto3  
- Criar pipelines CI/CD  
- Automatizar backups  
- Deploy de site estático completo  
- Integração com Terraform  

---

## 🧹 Limpeza de Recursos

Para evitar custos:

```
python cleanup_bucket.py
```

E opcionalmente deletar o bucket via console AWS.

---

## 📚 Referências

- https://boto3.amazonaws.com/v1/documentation/api/latest/index.html  
- https://docs.aws.amazon.com/cli/  
- https://aws.amazon.com/s3/  

---

## 📸 screenshots
![diagrama](images/pythonboto1.jpeg)
![diagrama](images/pythonboto2.jpeg)
![diagrama](images/pythonboto3.jpeg)
![diagrama](images/pythonboto4.jpeg)
![diagrama](images/pythonboto5.jpeg)
