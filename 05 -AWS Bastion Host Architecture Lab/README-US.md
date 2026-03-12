# AWS Bastion Host Architecture Lab
🇺🇸 English |

## Objective

This laboratory demonstrates a secure architecture pattern using a **Bastion Host** to access resources located in a **private subnet** within an AWS VPC.

The objective is to simulate a common production environment where internal servers cannot be accessed directly from the internet, enforcing controlled administrative access.

---

## Architecture Overview

The environment consists of:

* A custom **VPC**
* One **Public Subnet**
* One **Private Subnet**
* A **Bastion Host (EC2)** in the public subnet
* A **Private EC2 instance** in the private subnet
* **Security Groups** controlling SSH access
* **Internet Gateway** enabling public connectivity for the Bastion Host

Access flow:

User → Bastion Host → Private Server

---

## Architecture Diagram

![Architecture Diagram](Images-bastion.png)

---

## AWS Services Used

* Amazon VPC
* Amazon EC2
* Internet Gateway
* Route Tables
* Security Groups

---

## Network Configuration

### VPC

```
CIDR: 10.0.0.0/16
```

### Public Subnet

```
CIDR: 10.0.1.0/24
Purpose: Bastion Host
```

### Private Subnet

```
CIDR: 10.0.2.0/24
Purpose: Internal Server
```

---

## Security Configuration

### Bastion Security Group

Inbound rules:

```
SSH (Port 22)
Source: My Public IP
```

This ensures that **only the administrator's machine can connect to the Bastion Host**.

---

### Private Instance Security Group

Inbound rules:

```
SSH (Port 22)
Source: Bastion Security Group
```

This prevents direct access from the internet and allows only the Bastion Host to connect.

---

## Instance Configuration

### Bastion Host

```
Instance Type: t2.micro
AMI: Amazon Linux
Subnet: Public Subnet
Public IP: Enabled
```

---

### Private Server

```
Instance Type: t2.micro
AMI: Amazon Linux
Subnet: Private Subnet
Public IP: Disabled
```

---

## SSH Access Workflow

### Step 1 — Connect to Bastion Host

```
ssh -i lab-key.pem ec2-user@BASTION_PUBLIC_IP
```

---

### Step 2 — Access the Private Instance

From the Bastion Host:

```
ssh ec2-user@PRIVATE_IP
```

---

## Troubleshooting Scenario

During the initial deployment, SSH access to the Bastion Host failed due to a **network routing misconfiguration**.

### Issue

Connection timeout when attempting to SSH into the Bastion Host.

### Root Cause

The **Public Subnet was not associated with the Public Route Table**, preventing traffic from reaching the instance through the Internet Gateway.

### Resolution

Associated the **public subnet** with the **public route table** containing the route:

```
0.0.0.0/0 → Internet Gateway
```

After the correction, SSH access worked as expected.

---

## Security Considerations

* Private instances do not expose public IP addresses
* SSH access is restricted to a single trusted IP
* Internal communication is controlled using Security Groups

This architecture reduces the attack surface and follows **AWS security best practices**.

---

## Cost Considerations

This lab was designed using **AWS Free Tier eligible resources**:

* EC2 t2.micro instances
* VPC networking components

To avoid unexpected charges, instances should be **stopped when not in use**.

---

## Learning Outcomes

By completing this lab, the following cloud engineering concepts were practiced:

* VPC network design
* Subnet segmentation
* Bastion Host architecture
* Secure SSH access patterns
* Route table configuration
* Troubleshooting connectivity issues

---
