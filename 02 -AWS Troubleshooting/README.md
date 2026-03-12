# AWS Troubleshooting Lab 2 – HTTP Access Failure
---
![Troubles](Images/awstroubles.png)

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


