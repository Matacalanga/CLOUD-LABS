# 🇺🇸 ENGLISH VERSION

---

## 📐 ARCHITECTURE DIAGRAM

```
       Internet
          |
  [Internet Gateway]
          |
-------------------------
|        VPC            |
|    10.0.0.0/16       |
|                      |
|  Public Subnet       |
|  10.0.1.0/24         |
|    |                 |
| [EC2 Public]         |
|    |                 |
| Route Table:         |
| 0.0.0.0/0 → IGW      |
|                      |
|----------------------|
|  Private Subnet      |
|  10.0.2.0/24         |
|    |                 |
| [EC2 Private]        |
|    |                 |
| Route Table:         |
| (no internet access) |
-------------------------
```

---

## 🎯 OBJECTIVE

* Create a VPC with network segmentation
* Implement public and private subnets
* Configure internet access using an Internet Gateway
* Demonstrate resource isolation

Design and deploy a custom VPC architecture in AWS, including public and private subnets, configure internet connectivity, and launch an EC2 instance accessible via SSH and HTTP.

This lab reinforces practical understanding of AWS networking, routing behavior, and security controls.

---

## 🧠 ARCHITECTURE OVERVIEW

This lab demonstrates how to build a custom VPC in AWS, including public and private subnets, focusing on network isolation and controlled access.

* The VPC was created using the CIDR block `10.0.0.0/16`, allowing future scalability.
* The public subnet (`10.0.1.0/24`) has internet access through an Internet Gateway.
* The private subnet (`10.0.2.0/24`) does not have direct internet access, ensuring isolation.
* Separate route tables were configured for each subnet.

---

## 🌐 NETWORK FLOW

1. Resources in the public subnet access the internet through the Internet Gateway.
2. Resources in the private subnet do not have direct internet access.
3. Communication between subnets occurs internally within the VPC network.

---

## 🔐 SECURITY

* Private subnet isolated from the internet
* Traffic control managed via route tables
* Segmented architecture to reduce attack surface

---

## 💰 COST

This lab uses resources within the AWS Free Tier (VPC, subnets, and route tables).

There are no significant additional costs unless EC2 instances are used beyond the Free Tier limits.

---

## ⚠️ LIMITATIONS

* The private subnet does not have internet access (no NAT Gateway configured).
* This environment is not suitable for applications requiring outbound internet connectivity from private resources.

---

## 🖥️ RUNNING EC2 INSTANCE

---

## 🌍 HTTP VALIDATION

---

## ⚙️ IMPLEMENTATION STEPS

1. Manually created a custom VPC
2. Defined public and private subnets
3. Enabled auto-assign public IP in the public subnet
4. Created and attached an Internet Gateway
5. Configured the public route table
6. Associated the route table with the public subnet
7. Launched an Amazon Linux EC2 instance
8. Configured Security Group rules
9. Installed Apache web server (httpd) manually
10. Validated connectivity via SSH and web browser

---

## 🛠️ ISSUES ENCOUNTERED

* "Connection Refused" error when accessing via browser
* Root cause: web server was not installed or running
* Solution: installed and enabled Apache using `systemctl`

---

## 📚 TECHNICAL LEARNINGS

* Public subnets require an Internet Gateway and proper route association
* Security Groups act as stateful firewalls
* EC2 instances do not respond to HTTP requests without a running application
* Practical difference between Stop and Terminate
* Understanding AWS internal network traffic flow

---

## 📸 SCREENSHOTS

![diagram](images/custom-vpc1.jpeg)

![diagram](images/custom-vpc2.jpeg)

![diagram](images/custom-vpc3.jpeg)

![diagram](images/custom-vpc4.jpeg)

![diagram](images/custom-vpc5.jpeg)

![diagram](images/custom-vpc6.jpeg)
