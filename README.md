# 📱 Banco Carrefour - Automação de Testes Mobile

Projeto de automação de testes mobile utilizando **WebdriverIO + Appium + Mocha + Allure**.

---

## 🚀 Tecnologias

* WebdriverIO 9
* Appium
* Mocha
* Allure Reporter
* Node.js

---

## 📦 Pré-requisitos

Antes de rodar o projeto, instale:

* Node.js (>= 18)
* Java JDK (>= 11)
* Android Studio (com SDK configurado)
* Emulador Android criado

---

## ⚙️ Configuração do Ambiente

```bash
# Clonar o projeto
git clone <URL_DO_REPOSITORIO>
cd Banco-Carrefour-Automacao-de-Testes-Mobile

# Instalar dependências
npm install

# Instalar Appium globalmente
npm install -g appium
appium driver install uiautomator2
```

### Variáveis de ambiente necessárias

* ANDROID_HOME
* ANDROID_SDK_ROOT
* JAVA_HOME

---

## ▶️ Execução dos Testes

### Subir o emulador

```bash
emulator -avd <NOME_DO_EMULADOR>
```

### Rodar testes Android

```bash
npm run test:android
```

### Rodar testes iOS (se aplicável)

```bash
npm run test:ios
```

---

## 📊 Relatórios (Allure)

```bash
npm run report
```

* Gera resultados em `allure-results`
* Abre automaticamente o relatório

---

## 📁 Estrutura do Projeto

```
.
├── config/
├── test/specs/
├── allure-results/
├── package.json
├── wdio.base.conf.js
└── README.md
```

---

## 🔄 CI/CD (GitLab)

Pipeline configurado com:

1. Instalação de dependências
2. Execução dos testes Android (emulador)
3. Geração de relatório Allure

Arquivo:

```
.gitlab-ci.yml
```

---

## 📸 Evidências

* Screenshot automático em caso de falha
* Anexado no Allure

---

## ⚠️ Observações

* O APK deve estar no caminho configurado no projeto
* O emulador precisa estar 100% iniciado
* Driver utilizado: `uiautomator2`

---
