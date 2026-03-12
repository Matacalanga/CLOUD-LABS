# 🇧🇷 Versão em Português

![diagrama](Images/custom-vpc1.jpeg)

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

## Configuração da VPC

---

## Configuração das Subnets

---

## Configuração da Tabela de Rotas

---

## Regras do Security Group

---

## Instância EC2 em Execução

---

## Validação HTTP

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
