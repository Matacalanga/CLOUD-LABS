🇺🇸 ENGLISH VERSION
📐 ARCHITECTURE DIAGRAM
       Internet
          |
  [Internet Gateway]
          |
-------------------------
|        VPC            |
|    10.0.0.0/16       |
|                      |
|  Public Subnet       |
|  10.0.1.0/24         |
|    |                 |
| [EC2 Public]         |
|    |                 |
| Route Table:         |
| 0.0.0.0/0 → IGW      |
|                      |
|----------------------|
|  Private Subnet      |
|  10.0.2.0/24         |
|    |                 |
| [EC2 Private]        |
|    |                 |
| Route Table:         |
| (no internet)        |
-------------------------
🎯 OBJECTIVE
Create a VPC with network segmentation

Implement public and private subnets

Configure internet access via Internet Gateway

Demonstrate resource isolation

Design and deploy a custom VPC architecture on AWS containing public and private subnets, configure internet connectivity, and launch an EC2 instance accessible via SSH and HTTP.

This lab reinforces practical understanding of AWS networking, routing behavior, and security controls.

🧠 ARCHITECTURE OVERVIEW
This lab demonstrates the creation of a custom VPC on AWS, including public and private subnets, with the goal of understanding network isolation and access control.

The VPC was created with the CIDR block 10.0.0.0/16, allowing for future expansion.

The public subnet (10.0.1.0/24) has internet access via an Internet Gateway.

The private subnet (10.0.2.0/24) does not have direct internet access, ensuring isolation.

Routes were configured separately for each subnet.

🌐 COMMUNICATION FLOW
Resources in the public subnet access the internet through the Internet Gateway.

Resources in the private subnet do not have direct internet access.

Communication between subnets occurs internally via the VPC network.

🔐 SECURITY
Private subnet isolated from the internet

Traffic control via route tables

Use of segmented architecture to reduce the attack surface

💰 COSTS
This lab uses resources within the Free Tier (VPC, subnets, and route tables).

There are no significant additional costs, unless EC2 instances are added.

⚠️ LIMITATIONS
The private subnet does not have internet access (no NAT Gateway).

This environment is not suitable for applications that require external access.

🖥️ RUNNING EC2 INSTANCE
🌍 HTTP VALIDATION
⚙️ STEPS EXECUTED
Manual creation of custom VPC

Definition of public and private subnets

Enabling automatic public IP in the public subnet

Creation and association of the Internet Gateway

Configuration of the public route table

Association of the route table to the public subnet

Creation of an Amazon Linux EC2 instance

Configuration of Security Group rules

Manual installation of the Apache server (httpd)

Validation of connectivity via SSH and browser

🛠️ PROBLEMS ENCONTERED
"Connection Refused" error when accessing via browser

Cause: web service was not installed or active

Solution: installation and enablement of Apache via systemctl

📚 TECHNICAL LEARNINGS
Public subnet requires IGW and correct route association

Security Groups function as a stateful firewall

EC2 instances do not respond to HTTP without an active application

Practical difference between Stop and Terminate

Understanding of network flow within AWS

📸 ScreeShots

![diagrama](images/custom-vpc1.jpeg)

![diagrama](images/custom-vpc2.jpeg)

![diagrama](images/custom-vpc3.jpeg)

![diagrama](images/custom-vpc4.jpeg)

![diagrama](images/custom-vpc5.jpeg)

![diagrama](images/custom-vpc6.jpeg)
