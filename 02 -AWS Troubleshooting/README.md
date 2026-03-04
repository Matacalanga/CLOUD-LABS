# AWS Troubleshooting Lab 2 – HTTP Access Failure
---
![diagrama](Images/awstroubles.png)
## 🇧🇷 Versão em Português

### 📌 Cenário
Uma instância EC2 em subnet pública executando Apache não estava acessível via navegador.

### 🏗 Ambiente
- Amazon Linux 2023
- EC2 em subnet pública
- VPC customizada
- Internet Gateway
- Security Group

### 🚨 Sintomas
- Timeout ao acessar o IP público
- Conexão SSH funcionando normalmente

### 🔎 Investigação
1. Verificação do status do serviço Apache (httpd)
2. Teste local utilizando `curl localhost`
3. Análise das regras de entrada do Security Group

### 🧠 Causa Raiz
Regra de entrada HTTP (porta 80) ausente no Security Group.

### ✅ Solução
Adicionada regra:
- Tipo: HTTP
- Porta: 80
- Origem: 0.0.0.0/0

### 📚 Aprendizados
Security Groups são firewalls stateful e bloqueiam qualquer tráfego não explicitamente permitido.

---

## 🇺🇸 English Version

### 📌 Scenario
A public EC2 instance running Apache was not accessible via browser.

### 🏗 Environment
- Amazon Linux 2023
- EC2 in public subnet
- Custom VPC
- Internet Gateway
- Security Group

### 🚨 Symptoms
- Browser timeout when accessing public IP
- SSH access working normally

### 🔎 Investigation
1. Verified Apache service status
2. Tested local connectivity using `curl localhost`
3. Reviewed Security Group inbound rules

### 🧠 Root Cause
Missing inbound rule allowing HTTP traffic (port 80).

### ✅ Resolution
Added inbound rule:
- Type: HTTP
- Port: 80
- Source: 0.0.0.0/0

### 📚 Lessons Learned
Security Groups are stateful firewalls and require explicit inbound rules to allow traffic.
