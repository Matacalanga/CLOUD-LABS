## 🌍 ENGLISH VERSION

---

## 📐 AUTHORIZATION FLOW

```
[IAM User]
     |
     | Request (S3 Action)
     ↓
[IAM Policy Evaluation]
     |
   ✅ Allow / ❌ Deny
     ↓
[Amazon S3]
```

---

## 📌 OBJECTIVE

Demonstrate the **Principle of Least Privilege** by granting minimal permissions to an IAM user for accessing Amazon S3.

---

## 🧠 LEAST PRIVILEGE CONCEPT

Least Privilege means:

* Grant only required permissions
* Avoid excessive access
* Reduce security risks

---

## 🔐 POLICY

```json
{
  "Effect": "Allow",
  "Action": [
    "s3:ListAllMyBuckets",
    "s3:GetBucketLocation"
  ],
  "Resource": "*"
}
```

---

## ⚠️ NOTE

This policy uses global access (`*`) and only allows bucket listing.

---

## 📚 LEARNINGS

* IAM evaluates permissions before access
* Least Privilege = action + resource restriction
* Difference between global and scoped permissions

---


### 📸 ScreenShots

![diagrama](images/iam-last1.jpeg)

![diagrama](images/iam-last2.jpeg)

![diagrama](images/iam-last3.jpeg)

![diagrama](images/iam-last4.jpeg)
