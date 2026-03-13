🇧🇷 Monitoramento e Alertas com CloudWatch
Visão Geral

Este laboratório demonstra como monitorar uma instância EC2 utilizando Amazon CloudWatch e enviar alertas automaticamente quando o uso de recursos ultrapassa um limite definido.

O objetivo é simular um cenário real de operação, onde o monitoramento da infraestrutura detecta problemas e notifica a equipe responsável.

Arquitetura
EC2 Instance
     │
CloudWatch Metrics
     │
CloudWatch Alarm
     │
SNS Topic
     │
Email Notification

Serviços utilizados:

Amazon EC2

Amazon CloudWatch

Amazon Simple Notification Service

Objetivo

Configurar um alarme que dispare quando:

CPUUtilization > 70%
por 2 minutos consecutivos

Isso simula um servidor com uso anormal de CPU.

Passo 1 – Criar uma instância EC2

Criar uma instância para testes utilizando:

Tipo: t2.micro
AMI: Amazon Linux 2023


Passo 2 – Criar um Alarme no CloudWatch

Acessar:

CloudWatch → Alarms → Create Alarm

Selecionar a métrica:

EC2
→ Per-Instance Metrics
→ CPUUtilization


Passo 3 – Definir Condição do Alarme

Configuração:

CPUUtilization > 70%
Evaluation periods: 2
Period: 1 minute


Passo 4 – Configurar Notificação

Criar um tópico no SNS e cadastrar um email para receber alertas.


Passo 5 – Gerar Carga de CPU

Conectar via SSH na instância e executar:

yes > /dev/null &
yes > /dev/null &
yes > /dev/null &


Passo 6 – Encerrar o Teste

Para parar o consumo de CPU:

killall yes
Resultado

O alarme muda de estado:

OK → ALARM

e envia uma notificação por email através do SNS.

Habilidades Demonstradas

Monitoramento de infraestrutura

Criação de alarmes

Automação de alertas

Observabilidade em ambientes cloud

📷 Screenshots:

![Texto Alternativo](./Images/cloudwatch1.jpeg)


