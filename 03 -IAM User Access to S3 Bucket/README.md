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


