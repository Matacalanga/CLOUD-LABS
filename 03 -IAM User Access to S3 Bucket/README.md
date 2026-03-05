# AWS Lab — IAM User Access to S3 Bucket

## 🇧🇷 Português

### 📌 Descrição

Este laboratório demonstra como configurar **controle de acesso ao Amazon S3 utilizando AWS IAM**.

O objetivo é permitir que um usuário IAM específico tenha acesso controlado a um bucket S3 utilizando **políticas de permissão (IAM Policies)**, seguindo o princípio de **Least Privilege (Menor Privilégio)**.

---

### 🏗 Arquitetura

![Bucket](images/bucket.png)

---

### ⚙️ Recursos Utilizados

* AWS IAM
* Amazon S3
* IAM Policies
* AWS Console

---

### 👤 Usuário IAM criado

```
lab-user-s3
```

---

### 🪣 Bucket S3 criado

```
lab-iam-s3-access-ti
```

---

### 🔐 Permissões configuradas

Policy personalizada permitindo:

* `s3:ListBucket`
* `s3:GetObject`
* `s3:PutObject`

A ação **DeleteObject não foi permitida**, garantindo maior segurança.

---

### 🔄 Fluxo de acesso

1. Usuário IAM faz login na AWS
2. Policy é avaliada pelo IAM
3. Usuário acessa o bucket S3
4. Operações permitidas:

   * Listar arquivos
   * Fazer upload
   * Fazer download

Operações **não permitidas**:

* Deletar objetos do bucket

---

### 📤 Teste realizado

Upload de arquivo `.txt` no bucket utilizando o usuário IAM configurado.

Resultado esperado:

✅ Upload permitido
❌ Delete bloqueado

---

### 🎯 Objetivo do laboratório

Demonstrar na prática:

* Criação de usuário IAM
* Criação de policy customizada
* Controle de acesso ao S3
* Aplicação do princípio **Least Privilege**

---

---

# 🇺🇸 English

## 📌 Description

This lab demonstrates how to configure **controlled access to an Amazon S3 bucket using AWS IAM**.

The objective is to allow a specific IAM user to access an S3 bucket through **IAM policies**, following the **Principle of Least Privilege**.

---

### 🏗 Architecture

![Bucket](images/bucket.png)

---

### ⚙️ Technologies Used

* AWS IAM
* Amazon S3
* IAM Policies
* AWS Management Console

---

### 👤 IAM User Created

```
lab-user-s3
```

---

### 🪣 S3 Bucket Created

```
lab-iam-s3-access-ti
```

---

### 🔐 Permissions Configured

Custom policy allowing:

* `s3:ListBucket`
* `s3:GetObject`
* `s3:PutObject`

The **DeleteObject permission was intentionally not granted** to enforce security.

---

### 🔄 Access Flow

1. IAM User logs into AWS
2. IAM evaluates the attached policy
3. User accesses the S3 bucket
4. Allowed operations:

   * List objects
   * Upload files
   * Download files

Blocked operation:

* Delete objects from the bucket

---

### 📤 Test Performed

Upload of a `.txt` file to the bucket using the configured IAM user.

Expected result:

✅ Upload allowed
❌ Delete blocked

---

### 🎯 Lab Objective

Demonstrate in practice:

* IAM user creation
* Custom policy configuration
* S3 access control
* Implementation of the **Least Privilege Principle**

