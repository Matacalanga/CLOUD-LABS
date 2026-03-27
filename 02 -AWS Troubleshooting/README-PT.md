# AWS Troubleshooting – HTTP Access Failure

---

## 🇧🇷 VERSÃO EM PORTUGUÊS

---

## 📐 DIAGRAMA DE ARQUITETURA (PROBLEMA)

```
User (Browser)
      |
   Internet
      |
[Internet Gateway]
      |
   [VPC]
      |
[Public Subnet]
      |
   [EC2]
      |
   ❌ HTTP BLOCKED
   (Security Group - porta 80 não liberada)
```

---

## 📌 CENÁRIO

Uma instância EC2 localizada em uma subnet pública, executando um servidor Apache (httpd), não estava acessível via navegador, apesar de estar em execução e com acesso SSH funcional.

---

## 🏗️ AMBIENTE

* Amazon Linux 2023
* EC2 em subnet pública
* VPC customizada
* Internet Gateway
* Security Group

---

## 🚨 SINTOMAS

* Timeout ao acessar o IP público via navegador
* Conectividade SSH funcionando normalmente

---

## 🔎 PROCESSO DE INVESTIGAÇÃO

O diagnóstico foi conduzido seguindo uma abordagem em camadas:

### 1. Sistema Operacional

* Verificação do status do Apache (`systemctl status httpd`)
* Confirmação de que o serviço estava ativo

### 2. Aplicação

* Teste local com `curl localhost`
* Resposta válida confirmando funcionamento do servidor web

### 3. Rede

* Confirmação de que a instância estava em subnet pública
* Verificação de rota para Internet Gateway

### 4. Segurança

* Análise das regras de entrada do Security Group
* Identificação da ausência da porta 80 (HTTP)

---

## 🧠 CAUSA RAIZ

O Security Group não possuía uma regra permitindo tráfego de entrada na porta 80 (HTTP), bloqueando o acesso externo ao servidor web.

Como Security Groups são **stateful**, apenas conexões explicitamente permitidas são aceitas.

---

## ✅ SOLUÇÃO

Adicionada regra de entrada no Security Group:

* Tipo: HTTP
* Porta: 80
* Origem: `0.0.0.0/0`

Após a alteração, o acesso HTTP foi restabelecido com sucesso.

---

## 📚 APRENDIZADOS TÉCNICOS

* Security Groups atuam como firewalls stateful na AWS
* Tráfego não permitido explicitamente é bloqueado por padrão
* Testes locais (`curl`) são essenciais para isolar problemas de rede
* Troubleshooting deve seguir uma abordagem estruturada (sistema → aplicação → rede → segurança)

---

## 🧪 CHECKLIST DE TROUBLESHOOTING (HTTP EC2)

* [ ] Instância está em execução
* [ ] Serviço web está ativo (`httpd`)
* [ ] Teste local (`curl localhost`) responde corretamente
* [ ] Subnet possui acesso à internet (IGW)
* [ ] Security Group permite porta 80
* [ ] IP público está configurado corretamente

---
