## 🌍 ENGLISH VERSION

---

## 📐 ARCHITECTURE DIAGRAM

```
User (Admin)
     |
     | SSH (22)
     ↓
Internet
     |
[Internet Gateway]
     |
-----------------------------
|           VPC             |
|      10.0.0.0/16         |
|                          |
|  Public Subnet           |
|  10.0.1.0/24             |
|     |                    |
|  [Bastion Host]          |
|     | SSH                |
|--------------------------|
|  Private Subnet          |
|  10.0.2.0/24             |
|     |                    |
|  [Private EC2]           |
|                          |
|  (No Internet Access)    |
-----------------------------
```

---

## 📌 OVERVIEW

This lab demonstrates a secure architecture using a Bastion Host to access resources in a private subnet.

---

## 🔐 SECURITY

* No public IP on private instances
* SSH access restricted through Bastion
* Reduced attack surface

---

## 🔄 ACCESS FLOW

1. User connects to Bastion via SSH
2. Bastion connects to private EC2
3. Private instance remains isolated

---

## ⚠️ CONNECTIVITY NOTE

No NAT Gateway is configured:

* No outbound internet access
* Only internal communication

---

## 📚 LEARNINGS

* Bastion architecture design
* Network segmentation
* Secure SSH access
* Route table troubleshooting

---
