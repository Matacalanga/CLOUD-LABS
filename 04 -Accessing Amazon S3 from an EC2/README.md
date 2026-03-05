# AWS Lab – Accessing Amazon S3 from an EC2 Instance

# Laboratório AWS – Acessando Amazon S3 a partir de uma Instância EC2

---

# 🇺🇸 English Version

## Objective

This lab demonstrates how to configure an **Amazon EC2 instance** with the appropriate permissions to access an **Amazon S3 bucket** using **IAM Roles** and the **AWS CLI**.

---

## Architecture

Insert the architecture diagram here.

```
/images/architecture.png
```

Example:

![Roel-policy1](Images/role-policy1.jpeg)

---

## Lab Steps

### 1 – Create an S3 Bucket

1. Go to the **AWS Management Console**
2. Navigate to **Amazon S3**
3. Click **Create bucket**
4. Choose a globally unique bucket name

Example:

lab-s3-access-bucket

Insert screenshot:

```
/Images/role-policy2.jpeg
```

---

### 2 – Create an IAM Policy

Navigate to:

IAM → Policies → Create Policy

Use the following JSON policy:

```json
{
 "Version": "2012-10-17",
 "Statement": [
  {
   "Effect": "Allow",
   "Action": [
    "s3:ListBucket"
   ],
   "Resource": "arn:aws:s3:::lab-s3-access-bucket"
  },
  {
   "Effect": "Allow",
   "Action": [
    "s3:GetObject",
    "s3:PutObject"
   ],
   "Resource": "arn:aws:s3:::lab-s3-access-bucket/*"
  }
 ]
}
```

Policy name:

EC2-S3-Access-Policy

Insert screenshot:

```
/images/create-policy.png
```

---

### 3 – Create an IAM Role

Navigate to:

IAM → Roles → Create role

Select:

AWS Service → EC2

Attach the policy:

EC2-S3-Access-Policy

Role name:

EC2-S3-Access-Role

Insert screenshot:

```
/images/create-role.png
```

---

### 4 – Launch EC2 Instance

Navigate to:

EC2 → Launch Instance

Configuration example:

AMI
Amazon Linux 2

Instance Type
t2.micro

IAM Role
EC2-S3-Access-Role

Insert screenshot:

```
/images/create-ec2.png
```

---

### 5 – Connect to EC2

Example SSH connection:

```bash
ssh -i key.pem ec2-user@EC2-PUBLIC-IP
```

Insert screenshot:

```
/images/ssh-connection.png
```

---

### 6 – Test S3 Access

List buckets:

```bash
aws s3 ls
```

Create test file:

```bash
echo "Testing upload to S3" > teste.txt
```

Upload file:

```bash
aws s3 cp teste.txt s3://lab-s3-access-bucket
```

List objects inside bucket:

```bash
aws s3 ls s3://lab-s3-access-bucket
```

Insert screenshot:

```
/images/upload-test.png
```

---

## Expected Result

* EC2 successfully accesses S3
* File upload works
* Object appears in bucket

---

## Conclusion

This lab demonstrates how **IAM Roles** allow **secure access from EC2 to S3** without storing credentials on the instance.

This follows **AWS security best practices using temporary credentials**.

---

# 🇧🇷 Versão em Português

## Objetivo

Este laboratório demonstra como configurar uma **instância Amazon EC2** com permissões adequadas para acessar um **bucket Amazon S3** utilizando **IAM Roles** e **AWS CLI**.

---

## Arquitetura

Inserir diagrama da arquitetura.

```
/images/architecture.png
```

Exemplo:

![Arquitetura](images/architecture.png)

---

## Passos do Laboratório

### 1 – Criar um Bucket S3

1. Acesse o **AWS Management Console**
2. Vá para **Amazon S3**
3. Clique em **Create bucket**
4. Escolha um nome único globalmente

Exemplo:

lab-s3-access-bucket

Inserir screenshot:

```
/images/create-bucket.png
```

---

### 2 – Criar Policy IAM

Navegue para:

IAM → Policies → Create Policy

Use a policy:

```json
{
 "Version": "2012-10-17",
 "Statement": [
  {
   "Effect": "Allow",
   "Action": [
    "s3:ListBucket"
   ],
   "Resource": "arn:aws:s3:::lab-s3-access-bucket"
  },
  {
   "Effect": "Allow",
   "Action": [
    "s3:GetObject",
    "s3:PutObject"
   ],
   "Resource": "arn:aws:s3:::lab-s3-access-bucket/*"
  }
 ]
}
```

Nome da policy:

EC2-S3-Access-Policy

Inserir screenshot:

```
/images/create-policy.png
```

---

### 3 – Criar Role IAM

Navegue para:

IAM → Roles → Create role

Selecione:

AWS Service → EC2

Anexe a policy:

EC2-S3-Access-Policy

Nome da role:

EC2-S3-Access-Role

Inserir screenshot:

```
/images/create-role.png
```

---

### 4 – Criar Instância EC2

Navegue para:

EC2 → Launch Instance

Configuração exemplo:

AMI
Amazon Linux 2

Instance Type
t2.micro

IAM Role
EC2-S3-Access-Role

Inserir screenshot:

```
/images/create-ec2.png
```

---

### 5 – Conectar na EC2

Exemplo:

```bash
ssh -i key.pem ec2-user@EC2-PUBLIC-IP
```

Inserir screenshot:

```
/images/ssh-connection.png
```

---

### 6 – Testar acesso ao S3

Listar buckets:

```bash
aws s3 ls
```

Criar arquivo de teste:

```bash
echo "Testing upload to S3" > teste.txt
```

Enviar arquivo:

```bash
aws s3 cp teste.txt s3://lab-s3-access-bucket
```

Listar arquivos no bucket:

```bash
aws s3 ls s3://lab-s3-access-bucket
```

Inserir screenshot:

```
/images/upload-test.png
```

---

## Resultado Esperado

* A instância EC2 acessa o S3
* O upload funciona corretamente
* O arquivo aparece dentro do bucket

---

## Conclusão

Este laboratório demonstra como **IAM Roles permitem acesso seguro do EC2 ao S3**, sem necessidade de armazenar credenciais na instância.

Isso segue **boas práticas de segurança da AWS usando credenciais temporárias**.

