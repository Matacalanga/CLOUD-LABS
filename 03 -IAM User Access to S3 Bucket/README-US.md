## 🌍 ENGLISH VERSION

---

## 📐 ACCESS FLOW DIAGRAM

```
[IAM User]
     |
     |  Request (S3 Action)
     ↓
     [IAM Policy Evaluation]
            |
      ✅ Allow / ❌ Deny
            |
            ↓
        [S3 Bucket]
```

---

## 📌 DESCRIPTION

This lab demonstrates how to configure access control to Amazon S3 using AWS IAM.

The goal is to allow a specific IAM user to access an S3 bucket using permission policies, following the **Principle of Least Privilege**.

---

## ⚙️ RESOURCES USED

* AWS IAM
* Amazon S3
* IAM Policies
* AWS Console

---

## 👤 IAM USER

```
lab-user-s3
```

---

## 🪣 S3 BUCKET

```
lab-iam-s3-access-ti
```

---

## 🔐 PERMISSIONS CONFIGURED

Custom policy allowing only:

* `s3:ListBucket`
* `s3:GetObject`
* `s3:PutObject`

The `DeleteObject` action is intentionally **not allowed** to enforce security.

---

## 🧾 POLICY EXAMPLE

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::lab-iam-s3-access-ti"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::lab-iam-s3-access-ti/*"
    }
  ]
}
```

---

## 🌐 ACCESS FLOW

1. IAM user logs into AWS
2. A request is made to access S3
3. IAM evaluates attached policies
4. Request is allowed or denied
5. S3 responds accordingly

---

## 📚 TECHNICAL LEARNINGS

* IAM evaluates permissions before granting access
* Permissions must be scoped by action and resource
* Difference between bucket-level and object-level permissions
* Practical implementation of Least Privilege

---

## ⚠️ BEST PRACTICES

* Avoid overly broad permissions (`*`)
* Define specific actions
* Restrict access to minimum required
* Regularly review policies

---
📸 ScreenShot

![Bucket](images/bucket.png)
