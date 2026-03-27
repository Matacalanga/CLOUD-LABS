# AWS Lab 09 — DevOps com Python e Boto3

---

## 🇧🇷 VERSÃO EM PORTUGUÊS

---

## 📐 DIAGRAMA DE ARQUITETURA

```
Developer
   |
   | Executa Script Python
   ↓
[Boto3 SDK]
   |
   | Autenticação (IAM / CLI / Env)
   ↓
[AWS API]
   |
   ↓
[Amazon S3]
```

---

## 📌 OBJETIVO

Automatizar operações na AWS utilizando Python e Boto3, aplicando conceitos de **DevOps** e **Infrastructure as Code (IaC)**.

---

## 🧠 VISÃO DEVOPS

Este laboratório demonstra como substituir operações manuais por automação programática, permitindo:

* Repetibilidade
* Escalabilidade
* Redução de erro humano

---

## 🧰 TECNOLOGIAS

* Python 3
* Boto3
* AWS CLI
* Amazon S3
* IAM

---

## ⚠️ AUTENTICAÇÃO (IMPORTANTE)

Para ambiente de laboratório foi utilizado:

```
aws configure
```

### 🔴 Em produção:

* Utilizar IAM Roles
* Evitar uso de Access Keys locais

---

## 📂 ESTRUTURA DO PROJETO

```
aws-lab-09-boto3/
├── scripts/
│   ├── list_s3.py
│   ├── create_bucket.py
│   ├── ensure_bucket.py
│   ├── upload_file.py
│   ├── deploy_folder.py
│   └── cleanup_bucket.py
```

---

## 🧪 EXEMPLO DE AUTOMAÇÃO

### Criação de Bucket com Boto3

```python
import boto3

s3 = boto3.client("s3")

def create_bucket(bucket_name):
    s3.create_bucket(Bucket=bucket_name)
```

---

## 🔁 IDEMPOTÊNCIA

Script garante que o bucket exista sem erro:

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

---

## 📤 UPLOAD DE ARQUIVO

```python
s3.upload_file("arquivo.txt", bucket_name, "arquivo.txt")
```

---

## 📁 DEPLOY DE DIRETÓRIO

Automatiza envio de múltiplos arquivos para o S3.

---

## 🧹 LIMPEZA DE RECURSOS

```python
def cleanup(bucket):
    objects = s3.list_objects_v2(Bucket=bucket)
    for obj in objects.get("Contents", []):
        s3.delete_object(Bucket=bucket, Key=obj["Key"])
```

---

## 🧠 CONCEITOS APLICADOS

* Automação com SDK
* Idempotência
* Interação com APIs AWS
* Deploy automatizado
* Gerenciamento de recursos

---

## ⚠️ BOAS PRÁTICAS

* Nunca versionar credenciais
* Utilizar IAM Roles
* Usar nomes únicos para buckets
* Implementar tratamento de erro
* Monitorar custos

---

## 🚀 EVOLUÇÃO

* Automação de EC2
* Integração com CI/CD
* Uso de Lambda
* Infraestrutura com Terraform

---

## 📸 screenshots

![diagrama](images/pythonboto1.jpeg)

![diagrama](images/pythonboto2.jpeg)

![diagrama](images/pythonboto3.jpeg)

![diagrama](images/pythonboto4.jpeg)

![diagrama](images/pythonboto5.jpeg)
