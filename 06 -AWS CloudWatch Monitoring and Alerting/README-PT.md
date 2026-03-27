# BR Monitoramento e Alertas com CloudWatch

📖 Visão Geral

Este laboratório demonstra a implementação de monitoramento básico de infraestrutura na AWS utilizando o Amazon CloudWatch, com envio de alertas via Amazon SNS.

O objetivo é simular um cenário real de operação, onde métricas de uma instância EC2 são monitoradas continuamente e notificações são disparadas automaticamente quando comportamentos anômalos são detectados.

                +---------------------+
                |     Amazon VPC      |
                |  (Public Subnet)    |
                +----------+----------+
                           |
                           v
                    +-------------+
                    |   EC2       |
                    | (Amazon     |
                    |  Linux 2023)|
                    +------+------+
                           |
                           v
                  +------------------+
                  | CloudWatch       |
                  | Metrics & Alarms |
                  +--------+---------+
                           |
                           v
                  +------------------+
                  | SNS Topic        |
                  +--------+---------+
                           |
                           v
                     Email Notification

🧰 Serviços Utilizados
Amazon EC2
Amazon CloudWatch
Amazon SNS
🎯 Objetivo

Configurar um alarme que dispare quando:

CPUUtilization > 70%
por 2 períodos consecutivos de 1 minuto
⚙️ Implementação
1. Criar infraestrutura
Criar uma instância EC2 (t2.micro)
Utilizar Amazon Linux 2023
Associar Security Group com:
SSH restrito ao seu IP
(Recomendado) Associar uma IAM Role
2. Criar Alarme no CloudWatch
Métrica: EC2 → CPUUtilization
Threshold: > 70%
Period: 1 minute
Evaluation periods: 2
3. Configurar SNS
Criar tópico: sns-infra-alerts
Criar subscription (Email)
Confirmar inscrição
4. Simular carga
yes > /dev/null &
yes > /dev/null &
yes > /dev/null &
5. Encerrar teste
killall yes
📊 Resultado

O alarme muda de estado:

OK → ALARM

E uma notificação é enviada via SNS para o email configurado.

🚨 Boas Práticas (Importante)
CPU isolada não define problema → usar múltiplas métricas
Evitar acesso SSH aberto (usar IP restrito)
Utilizar IAM Roles ao invés de credenciais estáticas
Nomear recursos de forma padronizada
🔒 Considerações de Produção
Integrar com Auto Scaling
Criar dashboards no CloudWatch
Usar CloudWatch Agent para métricas avançadas
Integrar com Lambda para automação de resposta
🧠 Habilidades Demonstradas
Monitoramento de infraestrutura
Configuração de alarmes
Automação de notificações
Fundamentos de observabilidade

## 📷 Screenshots

![cloudwatchs](./images/cloudwatch1.jpeg)

![cloudwatchs](./images/cloudwatch2.jpeg)

![cloudwatchs](./images/cloudwatch3.jpeg)

![cloudwatchs](./images/cloudwatch4.jpeg)

![cloudwatchs](./images/cloudwatch5.jpeg)

