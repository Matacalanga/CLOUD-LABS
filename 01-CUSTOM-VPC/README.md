# AWS Custom VPC Lab – Public & Private Subnets + EC2 Deployment

Hands-on AWS infrastructure lab focused on networking fundamentals, security configuration and EC2 deployment in a custom VPC environment.

---

# 🇺🇸 English Version

## Objective

Design and deploy a custom AWS VPC architecture with public and private subnets, configure internet connectivity, and launch an EC2 instance accessible via SSH and HTTP.

This lab reinforces practical understanding of AWS networking, routing behavior, and security controls.

---

## Architecture Overview

- VPC CIDR: 10.0.0.0/16
- Public Subnet: 10.0.1.0/24
- Private Subnet: 10.0.2.0/24
- Internet Gateway attached to VPC
- Public Route Table with route:
  - 0.0.0.0/0 → Internet Gateway
- EC2 instance deployed in public subnet
- Security Group allowing:
  - SSH (Port 22 – restricted to My IP)
  - HTTP (Port 80 – 0.0.0.0/0)

---
## VPC Configuration

![VPC Created](images/vpc.jpeg)

## Subnets Configuration

![Subnets](images/subnets.jpeg)

## Steps Performed

1. Created a custom VPC manually.
2. Defined public and private subnets.
3. Enabled auto-assign public IP for the public subnet.
4. Created and attached an Internet Gateway.
5. Configured a public route table with default route to IGW.
6. Associated route table with public subnet.
7. Launched Amazon Linux EC2 instance.
8. Configured Security Group rules (SSH + HTTP).
9. Installed Apache (httpd) manually.
10. Validated connectivity via SSH and browser.

---

## Issues Faced

- Initial HTTP access returned "Connection Refused".
- Root cause: Web server service was not installed or running.
- Resolution: Installed and enabled Apache using systemctl.

---

## Key Technical Learnings

- Public subnet requires both IGW and route table association.
- Security Groups act as stateful firewalls.
- EC2 instances do not serve HTTP without an active application.
- Difference between stopping and terminating an EC2 instance.
- Practical understanding of AWS networking flow.

---

# 🇧🇷 Versão em Português

## Objetivo

Projetar e implantar uma arquitetura de VPC personalizada na AWS contendo subnets pública e privada, configurar conectividade com a internet e lançar uma instância EC2 acessível via SSH e HTTP.

Este laboratório reforça o entendimento prático de redes na AWS, comportamento de roteamento e controles de segurança.

---

## Visão Geral da Arquitetura

- CIDR da VPC: 10.0.0.0/16
- Subnet Pública: 10.0.1.0/24
- Subnet Privada: 10.0.2.0/24
- Internet Gateway anexado à VPC
- Tabela de Rotas Pública com rota:
  - 0.0.0.0/0 → Internet Gateway
- Instância EC2 implantada na subnet pública
- Security Group permitindo:
  - SSH (Porta 22 – restrito ao meu IP)
  - HTTP (Porta 80 – 0.0.0.0/0)

---

## Etapas Executadas

1. Criação manual de VPC customizada.
2. Definição de subnet pública e privada.
3. Habilitação de IP público automático na subnet pública.
4. Criação e associação do Internet Gateway.
5. Configuração da tabela de rotas pública.
6. Associação da tabela de rotas à subnet pública.
7. Criação de instância EC2 Amazon Linux.
8. Configuração das regras de Security Group.
9. Instalação manual do servidor Apache (httpd).
10. Validação de conectividade via SSH e navegador.

---

## Problemas Encontrados

- Erro "Connection Refused" ao acessar via navegador.
- Causa: serviço web não estava instalado ou ativo.
- Solução: instalação e habilitação do Apache via systemctl.

---

## Aprendizados Técnicos

- Subnet pública exige IGW e associação correta de rota.
- Security Groups funcionam como firewall stateful.
- Instâncias EC2 não respondem HTTP sem aplicação ativa.
- Diferença prática entre Stop e Terminate.
- Compreensão do fluxo de rede dentro da AWS.
