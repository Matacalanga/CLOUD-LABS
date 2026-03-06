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

### Screenshots

Architecture  
![Architecture](images/architecture.png)

S3 Bucket  
![S3 Bucket](images/s3-bucket.png)

IAM Role  
![IAM Role](images/iam-role.png)

EC2 Test  
![EC2 Test](images/ec2-s3-test.png)

### Project Structure

```
### Key Learning Points

- Using IAM Roles to improve AWS security
- Allowing EC2 to access AWS services without storing credentials
- Basic AWS CLI interaction with S3
- Practical implementation of the least privilege principle

---

# Acesso EC2 ao S3 Usando IAM Role

## 🇧🇷 Português

### Visão Geral do Projeto

Este projeto demonstra como configurar acesso seguro entre uma instância EC2 e um bucket S3 utilizando uma IAM Role.

Em vez de armazenar credenciais da AWS dentro da instância, a EC2 assume uma IAM Role que concede permissão para acessar o bucket S3.

Essa abordagem segue as boas práticas de segurança da AWS e o princípio do menor privilégio.

### Arquitetura

Componentes utilizados:

- EC2 Instance: executa comandos para interagir com o S3
- IAM Role: concede permissão para a EC2 acessar o S3
- S3 Bucket: armazena os arquivos acessados pela EC2

Fluxo de acesso:

EC2 Instance → IAM Role → S3 Bucket

### Tecnologias Utilizadas

- Amazon EC2
- Amazon S3
- AWS IAM
- AWS CLI
- Amazon Linux

### Etapas Realizadas

#### 1. Criar um Bucket S3

1. Acesse o AWS S3 Console
2. Clique em Create bucket
3. Utilize as configurações padrão de segurança

Exemplo de nome do bucket:

my-ec2-s3-test-bucket

#### 2. Criar uma IAM Role

1. Vá em IAM → Roles
2. Clique em Create Role
3. Selecione AWS Service
4. Escolha EC2
5. Anexe a policy:

AmazonS3ReadOnlyAccess

6. Nome da role:

EC2-S3-Access-Role

#### 3. Criar a Instância EC2

1. Acesse EC2 → Launch Instance
2. Escolha Amazon Linux
3. Tipo de instância: t2.micro
4. Em IAM Role selecione:

EC2-S3-Access-Role

#### 4. Conectar na Instância

Conecte utilizando SSH ou EC2 Instance Connect.

Atualize os pacotes:

```bash
sudo yum update -y
```

Verifique a versão do AWS CLI:

```bash
aws --version
```

#### 5. Testar Acesso ao S3

Listar buckets:

```bash
aws s3 ls
```

Listar arquivos dentro do bucket:

```bash
aws s3 ls s3://my-ec2-s3-test-bucket
```

Se configurado corretamente, a instância EC2 conseguirá acessar o S3 sem utilizar chaves de acesso.

### Screenshots

Arquitetura  
![Architecture](images/architecture.png)

Bucket S3  
![S3 Bucket](images/s3-bucket.png)

IAM Role  
![IAM Role](images/iam-role.png)

Teste EC2  
![EC2 Test](images/ec2-s3-test.png)

### Estrutura do Projeto

```
### Principais Aprendizados

- Uso de IAM Roles para melhorar a segurança na AWS
- Permitir que EC2 acesse serviços AWS sem armazenar credenciais
- Uso básico do AWS CLI com S3
- Implementação prática do princípio do menor privilégio
