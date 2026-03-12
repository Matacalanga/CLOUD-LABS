# 🇺🇸 English

## 📌 Description

This lab demonstrates how to configure **controlled access to an Amazon S3 bucket using AWS IAM**.

The objective is to allow a specific IAM user to access an S3 bucket through **IAM policies**, following the **Principle of Least Privilege**.

---

### 🏗 Architecture

![Bucket](images/bucket.png)

---

### ⚙️ Technologies Used

* AWS IAM
* Amazon S3
* IAM Policies
* AWS Management Console

---

### 👤 IAM User Created

```
lab-user-s3
```

---

### 🪣 S3 Bucket Created

```
lab-iam-s3-access-ti
```

---

### 🔐 Permissions Configured

Custom policy allowing:

* `s3:ListBucket`
* `s3:GetObject`
* `s3:PutObject`

The **DeleteObject permission was intentionally not granted** to enforce security.

---

### 🔄 Access Flow

1. IAM User logs into AWS
2. IAM evaluates the attached policy
3. User accesses the S3 bucket
4. Allowed operations:

   * List objects
   * Upload files
   * Download files

Blocked operation:

* Delete objects from the bucket

---

### 📤 Test Performed

Upload of a `.txt` file to the bucket using the configured IAM user.

Expected result:

✅ Upload allowed
❌ Delete blocked

---

### 🎯 Lab Objective

Demonstrate in practice:

* IAM user creation
* Custom policy configuration
* S3 access control
* Implementation of the **Least Privilege Principle**
