# Laboratório de Arquitetura Bastion Host na AWS

🇧🇷 Português

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
