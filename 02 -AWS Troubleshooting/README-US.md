## 🌍 ENGLISH VERSION

---

## 📐 ARCHITECTURE DIAGRAM (ISSUE)

```
User (Browser)
      |
   Internet
      |
[Internet Gateway]
      |
   [VPC]
      |
[Public Subnet]
      |
   [EC2]
      |
   ❌ HTTP BLOCKED
   (Security Group - port 80 not allowed)
```

---

## 📌 SCENARIO

An EC2 instance running Apache (httpd) in a public subnet was not accessible via web browser, even though the instance was running and SSH access was working properly.

---

## 🏗️ ENVIRONMENT

* Amazon Linux 2023
* EC2 in public subnet
* Custom VPC
* Internet Gateway
* Security Group

---

## 🚨 SYMPTOMS

* HTTP request timed out when accessing the public IP
* SSH connectivity working normally

---

## 🔎 INVESTIGATION PROCESS

The issue was diagnosed using a layered troubleshooting approach:

### 1. Operating System

* Checked Apache status (`systemctl status httpd`)
* Confirmed the service was running

### 2. Application

* Tested locally using `curl localhost`
* Valid response confirmed web server functionality

### 3. Network

* Verified the instance was in a public subnet
* Checked route to Internet Gateway

### 4. Security

* Reviewed inbound rules in the Security Group
* Identified missing HTTP (port 80) rule

---

## 🧠 ROOT CAUSE

The Security Group did not allow inbound traffic on port 80 (HTTP), blocking external access to the web server.

Since Security Groups are **stateful**, only explicitly allowed traffic is permitted.

---

## ✅ SOLUTION

Added inbound rule to the Security Group:

* Type: HTTP
* Port: 80
* Source: `0.0.0.0/0`

After applying the rule, HTTP access was successfully restored.

---

## 📚 TECHNICAL LEARNINGS

* Security Groups act as stateful firewalls in AWS
* Traffic is denied by default unless explicitly allowed
* Local testing (`curl`) helps isolate network issues
* Troubleshooting should follow a structured approach (OS → application → network → security)

---

## 🧪 TROUBLESHOOTING CHECKLIST (HTTP EC2)

* [ ] Instance is running
* [ ] Web service is active (`httpd`)
* [ ] Local test (`curl localhost`) works
* [ ] Subnet has internet access (IGW)
* [ ] Security Group allows port 80
* [ ] Public IP is properly assigned

---
