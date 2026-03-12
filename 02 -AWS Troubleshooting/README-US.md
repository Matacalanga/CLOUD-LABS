## 🇺🇸 English Version

### 📌 Scenario
A public EC2 instance running Apache was not accessible via browser.

### 🏗 Environment
- Amazon Linux 2023
- EC2 in public subnet
- Custom VPC
- Internet Gateway
- Security Group

### 🚨 Symptoms
- Browser timeout when accessing public IP
- SSH access working normally

### 🔎 Investigation
1. Verified Apache service status
2. Tested local connectivity using `curl localhost`
3. Reviewed Security Group inbound rules

### 🧠 Root Cause
Missing inbound rule allowing HTTP traffic (port 80).

### ✅ Resolution
Added inbound rule:
- Type: HTTP
- Port: 80
- Source: 0.0.0.0/0

### 📚 Lessons Learned
Security Groups are stateful firewalls and require explicit inbound rules to allow traffic.
