# ☁️ Laboratório 07 — Deploy de Site Estático na AWS com CI/CD

```

GitHub (push)
     │
     ▼
CodePipeline
     │
     ▼
CodeBuild (opcional)
     │
     ▼
S3 (private bucket)
     │
     ▼
CloudFront (OAC)
     │
     ▼
User (HTTPS)

```

☁️ Deploy de Site Estático com CI/CD na AWS
📖 Visão Geral

Este laboratório demonstra a implementação de um pipeline de CI/CD para aplicações frontend estáticas utilizando serviços da AWS.

A arquitetura segue boas práticas de segurança e distribuição, utilizando Amazon CloudFront como camada de entrega e Amazon S3 como origem privada.

🏗️ Arquitetura
GitHub (push)
     │
     ▼
CodePipeline
     │
     ▼
CodeBuild (opcional)
     │
     ▼
S3 (private bucket)
     │
     ▼
CloudFront (OAC)
     │
     ▼
User (HTTPS)


### 🧰 Serviços Utilizados
Amazon S3
Amazon CloudFront
AWS CodePipeline
AWS CodeBuild
AWS CodeStar Connections
GitHub
🎯 Objetivo

### utomatizar o deploy de um site estático com:

Trigger automático via GitHub
Deploy contínuo no S3
Distribuição global via CloudFront
Boas práticas de segurança (bucket privado)
🔒 Arquitetura Segura (IMPORTANTE)
S3 com Block Public Access habilitado
Bucket NÃO público
CloudFront acessa o bucket via Origin Access Control (OAC)
⚙️ Pipeline CI/CD
Stage: Source
Origem: GitHub (branch main)
Trigger automático via push
Stage: Build (Recomendado)

### Exemplo com AWS CodeBuild:

Validação de arquivos
Minificação (opcional)
Preparação de artefatos
Stage: Deploy
Deploy para S3 usando sync
Remoção de arquivos antigos
Stage: Post-Deploy (Melhoria crítica)
Invalidação automática do CloudFront:
/*

### 🔄 Fluxo de Deploy
Desenvolvedor faz push no GitHub
Pipeline é acionado automaticamente
(Opcional) Build é executado
Arquivos são enviados ao S3
Cache do CloudFront é invalidado
Nova versão disponível globalmente

### 📊 Resultado
Deploy automatizado funcional
Distribuição global via CDN
Arquitetura segura (sem bucket público)

🚨 Boas Práticas Aplicadas
Princípio do menor privilégio (IAM)
Origem privada no S3
Automação de deploy
Uso de CDN para performance

🔧 Considerações de Produção
Versionamento de assets (cache busting)
Logs do CloudFront
WAF (proteção adicional)
HTTPS com domínio customizado
Monitoramento com CloudWatch

🧠 Habilidades Demonstradas
CI/CD na AWS
Integração com GitHub
Distribuição de conteúdo global
Segurança em aplicações estáticas


  ### 📸 ScreenShots
  ![diagrama](images/StaticWebsite1.jpeg)
  
  ![diagrama](images/StaticWebsite2.jpeg)
  
  ![diagrama](images/StaticWebsite3.jpeg)
  
  ![diagrama](images/StaticWebsite4.jpeg)
  
  ![diagrama](images/StaticWebsite5.jpeg)
  
  ![diagrama](images/StaticWebsite6.jpeg)
  
  ![diagrama](images/StaticWebsite7.jpeg)


