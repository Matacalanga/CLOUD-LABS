# AWS Lab — Bastion Host Architecture

---

## 🇧🇷 VERSÃO EM PORTUGUÊS

---

## 📐 DIAGRAMA DE ARQUITETURA

```
User (Admin)
     |
     | SSH (22)
     ↓
Internet
     |
[Internet Gateway]
     |
-----------------------------
|          VPC              |
|     10.0.0.0/16          |
|                          |
|  Public Subnet           |
|  10.0.1.0/24             |
|     |                    |
|  [Bastion Host]          |
|     | SSH                |
|--------------------------|
|  Private Subnet          |
|  10.0.2.0/24             |
|     |                    |
|  [Private EC2]           |
|                          |
|  (No Internet Access)    |
-----------------------------
```

---

## 📌 OBJETIVO

Demonstrar uma arquitetura segura utilizando um **Bastion Host** para acessar recursos em uma subnet privada, evitando exposição direta à internet.

---

## 🧠 VISÃO GERAL

Esta arquitetura simula um ambiente de produção onde servidores internos não possuem IP público e só podem ser acessados através de um ponto de entrada controlado.

---

## 🏗️ ARQUITETURA

Componentes:

* VPC customizada
* Subnet pública (Bastion Host)
* Subnet privada (servidor interno)
* Internet Gateway
* Security Groups

---

## 🔐 SEGURANÇA

* Instâncias privadas sem IP público
* Acesso SSH restrito ao Bastion
* Bastion acessível apenas via IP confiável
* Redução da superfície de ataque

---

## ⚠️ SOBRE CONECTIVIDADE

A subnet privada **não possui NAT Gateway**, portanto:

* ❌ Sem acesso à internet
* ✔️ Apenas comunicação interna

---

## 🔄 FLUXO DE ACESSO

1. Usuário conecta via SSH no Bastion Host
2. Bastion acessa a instância privada via rede interna
3. A instância privada nunca é exposta diretamente à internet

---

## ⚙️ CONFIGURAÇÃO DE REDE

### VPC

```
10.0.0.0/16
```

### Subnet Pública

```
10.0.1.0/24
```

### Subnet Privada

```
10.0.2.0/24
```

---

## 🔐 SECURITY GROUPS

### Bastion

* SSH (22) permitido apenas do IP do administrador

### Instância Privada

* SSH permitido apenas do Security Group do Bastion

---

## 💻 CONEXÃO SSH

### Passo 1 — Bastion

```bash
ssh -i lab-key.pem ec2-user@BASTION_PUBLIC_IP
```

### Passo 2 — Private EC2

```bash
ssh ec2-user@PRIVATE_IP
```

---

## 🛠️ TROUBLESHOOTING

### Problema

Timeout ao conectar via SSH no Bastion

### Causa Raiz

Subnet pública não associada à route table correta

### Solução

Associar subnet à route table com:

```
0.0.0.0/0 → Internet Gateway
```

---

## 📚 APRENDIZADOS

* Arquitetura Bastion Host
* Segmentação de rede
* Uso de Security Groups para controle de acesso
* Troubleshooting de conectividade
* Importância de route tables

---
### 📸 ScreenShots
