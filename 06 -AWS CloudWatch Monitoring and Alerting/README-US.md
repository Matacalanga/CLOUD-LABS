# EN Monitoring and Alerts with CloudWatch

📖 Overview

This lab demonstrates how to implement infrastructure monitoring on AWS using Amazon CloudWatch, with automated alerting via Amazon SNS.

The goal is to simulate a real-world operational scenario where EC2 metrics are continuously monitored and alerts are triggered when abnormal behavior is detected.

🏗️ Architecture
EC2 → CloudWatch Metrics → CloudWatch Alarm → SNS → Email
🎯 Objective

Trigger an alert when:

CPUUtilization > 70%
for 2 consecutive periods (1 minute each)
⚙️ Implementation Steps
Launch EC2 (Amazon Linux 2023)
Create CloudWatch Alarm
Configure SNS Topic + Email subscription
Generate CPU load
Validate alarm trigger
📊 Result
Alarm state changes: OK → ALARM
Notification sent via SNS
🚨 Best Practices
Avoid relying on CPU alone
Use IAM Roles instead of static credentials
Restrict SSH access
Use multiple monitoring signals
🔒 Production Considerations
Auto Scaling integration
CloudWatch Dashboards
Custom metrics via CloudWatch Agent
Lambda-based remediation
📌 VEREDITO FINAL (SECO E HONESTO)

Seu lab atual:

🟡 Intermediário básico (bom para estudo)

Após correção:

🟢 Pronto para portfólio (nível júnior competitivo)

Se quiser evoluir ainda mais (nível que quase ninguém faz), o próximo passo seria:

CloudWatch + Auto Scaling
CloudWatch + Lambda (auto-remediation)
CloudWatch + Logs + Insights

## 📷 Screenshots

![cloudwatchs](./images/cloudwatch1.jpeg)

![cloudwatchs](./images/cloudwatch2.jpeg)

![cloudwatchs](./images/cloudwatch3.jpeg)

![cloudwatchs](./images/cloudwatch4.jpeg)

![cloudwatchs](./images/cloudwatch5.jpeg)
