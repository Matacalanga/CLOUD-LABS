# CLOUD-LABS
# VPC Customizada com Subnets Pública e Privada + Deploy de EC2

## Objetivo

Criar uma arquitetura de VPC personalizada contendo subnet pública e privada, configurar conectividade com Internet Gateway e implantar uma instância EC2 acessível via SSH e HTTP.

---

## Visão Geral da Arquitetura

- CIDR da VPC: 10.0.0.0/16
- Subnet Pública: 10.0.1.0/24
- Subnet Privada: 10.0.2.0/24
- Internet Gateway anexado à VPC
- Tabela de Rotas Pública (0.0.0.0/0 → IGW)
- Instância EC2 na subnet pública
- Security Group liberando:
  - SSH (porta 22)
  - HTTP (porta 80)

---

## Etapas Executadas

1. Criação manual da VPC.
2. Criação das subnets pública e privada.
3. Habilitação do IP público automático na subnet pública.
4. Criação e associação do Internet Gateway.
5. Configuração da tabela de rotas pública.
6. Associação da tabela de rotas à subnet pública.
7. Criação da instância EC2 Linux.
8. Configuração do Security Group.
9. Instalação do servidor Apache (httpd).
10. Validação de acesso via SSH e navegador.

---

## Problemas Encontrados

- Erro "Connection Refused" ao acessar via navegador.
- Causa: serviço web não estava instalado/executando.
- Solução: instalação e inicialização do httpd na instância.

---

## Aprendizados Técnicos

- Diferença prática entre subnet pública e privada.
- Importância da associação correta da tabela de rotas.
- Papel do Internet Gateway na comunicação externa.
- Funcionamento do Security Group como firewall stateful.
- EC2 não responde HTTP sem serviço ativo.
