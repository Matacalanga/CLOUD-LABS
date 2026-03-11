
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

📷 Screenshot:
![Texto Alternativo](./Images/cloudwatch1.jpeg)

Passo 2 – Criar um Alarme no CloudWatch

Acessar:

CloudWatch → Alarms → Create Alarm

Selecionar a métrica:

EC2
→ Per-Instance Metrics
→ CPUUtilization

📷 Screenshot:

![Texto Alternativo](./Images/cloudwatch2.jpeg)
Passo 3 – Definir Condição do Alarme

Configuração:

CPUUtilization > 70%
Evaluation periods: 2
Period: 1 minute

📷 Screenshot:

![Texto Alternativo](./Images/cloudwatch3.jpeg)
Passo 4 – Configurar Notificação

Criar um tópico no SNS e cadastrar um email para receber alertas.

📷 Screenshot:

images/05-email-notification.png
Passo 5 – Gerar Carga de CPU

Conectar via SSH na instância e executar:

yes > /dev/null &
yes > /dev/null &
yes > /dev/null &

📷 Screenshot:

![Texto Alternativo](./Images/cloudwatch4.jpeg)
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

![Texto Alternativo](./Images/cloudwatch5.jpeg)



🇺🇸 AWS CloudWatch Monitoring and Alerting
Overview

This lab demonstrates how to monitor an EC2 instance using Amazon CloudWatch and automatically send notifications when resource usage exceeds a defined threshold.

The objective is to simulate a real-world operational scenario where infrastructure monitoring triggers alerts to notify the operations team.

Architecture
EC2 Instance
     │
CloudWatch Metrics
     │
CloudWatch Alarm
     │
SNS Topic
     │
Email Notification

Services used:

Amazon EC2

Amazon CloudWatch

Amazon Simple Notification Service

Objective

Configure monitoring to trigger an alert when:

CPUUtilization > 70%
for 2 consecutive minutes

This simulates abnormal CPU load on a server.

Step 1 – Launch an EC2 Instance

Create a test instance using:

Instance type: t2.micro
AMI: Amazon Linux 2023

This instance will generate metrics consumed by CloudWatch.

📷 Screenshot:

images/01-ec2-instance.png
Step 2 – Create a CloudWatch Alarm

Navigate to:

CloudWatch → Alarms → Create Alarm

Select the metric:

EC2
→ Per-Instance Metrics
→ CPUUtilization

📷 Screenshot:

images/02-create-alarm.png
Step 3 – Configure Alarm Conditions

Set the threshold:

CPUUtilization > 70%
Evaluation periods: 2
Period: 1 minute

📷 Screenshot:

images/03-metric-selection.png
Step 4 – Configure SNS Notification

Create a topic in SNS and subscribe your email.

When the alarm state changes to ALARM, an email notification will be sent.

📷 Screenshot:

images/05-email-notification.png
Step 5 – Generate CPU Load

SSH into the instance and simulate CPU stress:

yes > /dev/null &
yes > /dev/null &
yes > /dev/null &

This increases CPU utilization above the threshold.

📷 Screenshot:

images/04-alarm-triggered.png
Step 6 – Stop the Load Test

To stop CPU stress:

killall yes
Result

The CloudWatch alarm transitions from:

OK → ALARM

and sends a notification through SNS email.

This demonstrates a basic monitoring and alerting workflow used in production environments.

Skills Demonstrated

Cloud infrastructure monitoring

Metric-based alerting

Operational incident detection

Cloud observability fundamentals

Future Improvements

Possible enhancements:

CloudWatch dashboards

Auto scaling policies

Slack or webhook notifications

Log monitoring
