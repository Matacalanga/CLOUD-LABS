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

Step 2 – Create a CloudWatch Alarm

Navigate to:

CloudWatch → Alarms → Create Alarm

Select the metric:

EC2
→ Per-Instance Metrics
→ CPUUtilization

Step 3 – Configure Alarm Conditions

Set the threshold:

CPUUtilization > 70%
Evaluation periods: 2
Period: 1 minute

Step 4 – Configure SNS Notification

Create a topic in SNS and subscribe your email.

When the alarm state changes to ALARM, an email notification will be sent.


Step 5 – Generate CPU Load

SSH into the instance and simulate CPU stress:

yes > /dev/null &
yes > /dev/null &
yes > /dev/null &

This increases CPU utilization above the threshold.


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

📷 Screenshot:
