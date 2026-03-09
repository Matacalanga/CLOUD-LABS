# Laboratório de Arquitetura Bastion Host na AWS

🇧🇷 Português | 🇺🇸 [English

![Architecture Diagram](Images-bastion.png)
---

## Objetivo

Este laboratório demonstra um padrão de arquitetura segura utilizando um **Bastion Host** para acessar recursos localizados em uma **subnet privada** dentro de uma VPC na AWS.

O objetivo é simular um ambiente comum de produção onde servidores internos **não podem ser acessados diretamente pela internet**, garantindo controle e segurança no acesso administrativo.

---

## Visão Geral da Arquitetura

O ambiente consiste em:

* Uma **VPC personalizada**
* Uma **Subnet Pública**
* Uma **Subnet Privada**
* Um **Bastion Host (EC2)** na subnet pública
* Uma **instância EC2 privada** na subnet privada
* **Security Groups** controlando acesso SSH
* **Internet Gateway** permitindo acesso público ao Bastion

Fluxo de acesso:

Usuário → Bastion Host → Servidor Privado

---

## Serviços AWS Utilizados

* Amazon VPC
* Amazon EC2
* Internet Gateway
* Route Tables
* Security Groups

---

## Configuração de Rede

### VPC

```
CIDR: 10.0.0.0/16
```

### Subnet Pública

```
CIDR: 10.0.1.0/24
Finalidade: Bastion Host
```

### Subnet Privada

```
CIDR: 10.0.2.0/24
Finalidade: Servidor Interno
```

---

## Configuração de Segurança

### Security Group do Bastion

Regras de entrada:

```
SSH (Porta 22)
Origem: Meu IP público
```

Isso garante que **apenas o computador do administrador possa acessar o Bastion Host**.

---

### Security Group da Instância Privada

Regras de entrada:

```
SSH (Porta 22)
Origem: Security Group do Bastion
```

Isso impede acesso direto da internet e permite acesso apenas através do Bastion.

---

## Configuração das Instâncias

### Bastion Host

```
Tipo: t2.micro
AMI: Amazon Linux
Subnet: Pública
IP Público: Habilitado
```

### Servidor Privado

```
Tipo: t2.micro
AMI: Amazon Linux
Subnet: Privada
IP Público: Desabilitado
```

---

## Fluxo de Conexão SSH

### Passo 1 — Conectar no Bastion

```
ssh -i lab-key.pem ec2-user@BASTION_PUBLIC_IP
```

### Passo 2 — Acessar a Instância Privada

A partir do Bastion:

```
ssh ec2-user@PRIVATE_IP
```

---

## Cenário de Troubleshooting

Durante a implementação inicial, a conexão SSH com o Bastion falhou devido a um problema de roteamento na rede.

### Problema

Timeout ao tentar conectar via SSH no Bastion Host.

### Causa Raiz

A **subnet pública não estava associada à route table pública**, impedindo que o tráfego chegasse à instância através do Internet Gateway.

### Solução

Associar a **public subnet** à **public route table** contendo a rota:

```
0.0.0.0/0 → Internet Gateway
```

Após a correção, o acesso SSH funcionou normalmente.

---

## Considerações de Segurança

* Instâncias privadas não possuem IP público
* Acesso SSH restrito a um IP confiável
* Comunicação interna controlada por Security Groups

Essa arquitetura reduz a superfície de ataque e segue **boas práticas de segurança da AWS**.

---

## Considerações de Custo

Este laboratório foi projetado utilizando recursos elegíveis ao **AWS Free Tier**:

* Instâncias EC2 t2.micro
* Componentes de rede da VPC

Para evitar custos inesperados, recomenda-se **parar as instâncias quando não estiverem em uso**.

---

## Resultados de Aprendizado

Após completar este laboratório foram praticados os seguintes conceitos:

* Design de rede em VPC
* Segmentação de subnets
* Arquitetura Bastion Host
* Acesso seguro via SSH
* Configuração de Route Tables
* Troubleshooting de conectividade


# AWS Bastion Host Architecture Lab
🇺🇸 English |

## Objective

This laboratory demonstrates a secure architecture pattern using a **Bastion Host** to access resources located in a **private subnet** within an AWS VPC.

The objective is to simulate a common production environment where internal servers cannot be accessed directly from the internet, enforcing controlled administrative access.

---

## Architecture Overview

The environment consists of:

* A custom **VPC**
* One **Public Subnet**
* One **Private Subnet**
* A **Bastion Host (EC2)** in the public subnet
* A **Private EC2 instance** in the private subnet
* **Security Groups** controlling SSH access
* **Internet Gateway** enabling public connectivity for the Bastion Host

Access flow:

User → Bastion Host → Private Server

---

## Architecture Diagram

![Architecture Diagram](Images-bastion.png)

---

## AWS Services Used

* Amazon VPC
* Amazon EC2
* Internet Gateway
* Route Tables
* Security Groups

---

## Network Configuration

### VPC

```
CIDR: 10.0.0.0/16
```

### Public Subnet

```
CIDR: 10.0.1.0/24
Purpose: Bastion Host
```

### Private Subnet

```
CIDR: 10.0.2.0/24
Purpose: Internal Server
```

---

## Security Configuration

### Bastion Security Group

Inbound rules:

```
SSH (Port 22)
Source: My Public IP
```

This ensures that **only the administrator's machine can connect to the Bastion Host**.

---

### Private Instance Security Group

Inbound rules:

```
SSH (Port 22)
Source: Bastion Security Group
```

This prevents direct access from the internet and allows only the Bastion Host to connect.

---

## Instance Configuration

### Bastion Host

```
Instance Type: t2.micro
AMI: Amazon Linux
Subnet: Public Subnet
Public IP: Enabled
```

---

### Private Server

```
Instance Type: t2.micro
AMI: Amazon Linux
Subnet: Private Subnet
Public IP: Disabled
```

---

## SSH Access Workflow

### Step 1 — Connect to Bastion Host

```
ssh -i lab-key.pem ec2-user@BASTION_PUBLIC_IP
```

---

### Step 2 — Access the Private Instance

From the Bastion Host:

```
ssh ec2-user@PRIVATE_IP
```

---

## Troubleshooting Scenario

During the initial deployment, SSH access to the Bastion Host failed due to a **network routing misconfiguration**.

### Issue

Connection timeout when attempting to SSH into the Bastion Host.

### Root Cause

The **Public Subnet was not associated with the Public Route Table**, preventing traffic from reaching the instance through the Internet Gateway.

### Resolution

Associated the **public subnet** with the **public route table** containing the route:

```
0.0.0.0/0 → Internet Gateway
```

After the correction, SSH access worked as expected.

---

## Security Considerations

* Private instances do not expose public IP addresses
* SSH access is restricted to a single trusted IP
* Internal communication is controlled using Security Groups

This architecture reduces the attack surface and follows **AWS security best practices**.

---

## Cost Considerations

This lab was designed using **AWS Free Tier eligible resources**:

* EC2 t2.micro instances
* VPC networking components

To avoid unexpected charges, instances should be **stopped when not in use**.

---

## Learning Outcomes

By completing this lab, the following cloud engineering concepts were practiced:

* VPC network design
* Subnet segmentation
* Bastion Host architecture
* Secure SSH access patterns
* Route table configuration
* Troubleshooting connectivity issues

---

## Author

Cloud Engineering Study Lab
AWS Hands-on Practice



