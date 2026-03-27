## 🌍 ENGLISH VERSION

---

## 📐 ARCHITECTURE DIAGRAM

```
[EC2 Instance]
      |
      | (Request AWS Credentials)
      ↓
[Instance Metadata Service (IMDS)]
      |
      ↓
[IAM Role]
      |
      | (Temporary Credentials)
      ↓
   [Amazon S3 Bucket]
```

---

## 📌 OVERVIEW

This lab demonstrates how to securely access an S3 bucket from an EC2 instance using an IAM Role.

Instead of storing credentials on the instance, EC2 retrieves temporary credentials automatically via AWS.

---

## 🔐 SECURITY

* No hardcoded credentials
* Temporary credentials with automatic rotation
* Reduced risk of credential leakage
* Least Privilege enforced

---

## 🔄 ACCESS FLOW

1. EC2 requests credentials from IMDS
2. IMDS returns temporary credentials
3. EC2 uses credentials to access S3
4. IAM evaluates permissions
5. Access is allowed or denied

---

## 🧠 IMPROVEMENT (CUSTOM POLICY)

Use restricted policies instead of broad managed ones.

---

## 📚 LEARNINGS

* IAM Roles replace static credentials
* Secure service-to-service communication
* Importance of scoped permissions

---


### 📸 Screenshots
 
![Architecture](images/role-policy1.jpeg)

![Architecture](images/role-policy2.jpeg)

![Architecture](images/role-policy3.jpeg)

![Architecture](images/role-policy4.jpeg)
