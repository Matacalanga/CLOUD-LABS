## 🌍 ENGLISH VERSION

---

## 📌 OBJECTIVE

Automate AWS operations using Python and Boto3, applying DevOps and Infrastructure as Code principles.

---

## 🧠 DEVOPS VIEW

Replace manual operations with code-driven automation.

---

## 🔁 IDEMPOTENCY EXAMPLE

```python
try:
    s3.head_bucket(Bucket=bucket_name)
except ClientError:
    s3.create_bucket(Bucket=bucket_name)
```

---

## ⚠️ BEST PRACTICES

* Use IAM Roles instead of access keys
* Avoid hardcoded values
* Implement error handling
* Ensure idempotency

---

## 📚 LEARNINGS

* AWS automation with SDK
* API interaction
* Infrastructure as code concepts

---


## 📸 screenshots
![diagrama](images/pythonboto1.jpeg)
![diagrama](images/pythonboto2.jpeg)
![diagrama](images/pythonboto3.jpeg)
![diagrama](images/pythonboto4.jpeg)
![diagrama](images/pythonboto5.jpeg)
