# AWS Lab 04 — Accessing Amazon S3 from an EC2 Instance

---

## 🇧🇷 VERSÃO EM PORTUGUÊS

---

## 📐 DIAGRAMA DE ARQUITETURA

```
[EC2 Instance]
      |
      | (Request AWS Credentials)
      ↓
[Instance Metadata Service (IMDS)]
      |
      ↓
[IAM Role Attached to EC2]
      |
      | (Temporary Credentials)
      ↓
   [Amazon S3 Bucket]
```

---

## 📌 VISÃO GERAL

Este laboratório demonstra como configurar acesso seguro entre uma instância EC2 e um bucket S3 utilizando uma IAM Role.

Ao invés de armazenar credenciais diretamente na instância, a EC2 utiliza credenciais temporárias fornecidas automaticamente pela AWS através da IAM Role.

Essa abordagem segue as melhores práticas de segurança e o princípio do menor privilégio.

---

## 🏗️ ARQUITETURA

Componentes:

* EC2 Instance: executa comandos para acessar o S3
* IAM Role: fornece permissões temporárias
* Instance Metadata Service (IMDS): entrega credenciais para a EC2
* S3 Bucket: armazena os arquivos

---

## 🔐 SEGURANÇA

* Nenhuma credencial estática armazenada na instância
* Uso de credenciais temporárias automaticamente rotacionadas
* Redução de risco de vazamento de chaves
* Aplicação do princípio de **Least Privilege**

---

## ⚙️ RECURSOS UTILIZADOS

* Amazon EC2
* Amazon S3
* AWS IAM
* AWS CLI
* Amazon Linux

---

## 🔄 FLUXO DE ACESSO

1. A instância EC2 solicita credenciais ao IMDS
2. O IMDS retorna credenciais temporárias associadas à IAM Role
3. A EC2 utiliza essas credenciais para acessar o S3
4. O IAM avalia permissões da role
5. O acesso é permitido ou negado

---

## ⚙️ ETAPAS REALIZADAS

### 1. Criar Bucket S3

* Nome: `my-ec2-s3-test-bucket`
* Configuração padrão

---

### 2. Criar IAM Role

* Serviço: EC2
* Policy anexada: `AmazonS3ReadOnlyAccess`
* Nome: `EC2-S3-Access-Role`

---

### 3. Criar EC2

* Amazon Linux
* Tipo: t2.micro
* Associar IAM Role

---

### 4. Testar via CLI

```bash
aws s3 ls
aws s3 ls s3://my-ec2-s3-test-bucket
```

---

## 🧠 MELHORIA (POLICY CUSTOMIZADA)

Exemplo mais seguro:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::my-ec2-s3-test-bucket"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::my-ec2-s3-test-bucket/*"
    }
  ]
}
```

---

## 🛠️ TROUBLESHOOTING

Problemas comuns:

* ❌ `AccessDenied`
* ❌ Role não associada à EC2
* ❌ Policy sem permissão correta
* ❌ Região incorreta

---

## 📚 APRENDIZADOS

* IAM Roles eliminam necessidade de access keys
* Uso de credenciais temporárias via IMDS
* Integração segura entre serviços AWS
* Diferença entre policy gerenciada e customizada

---


