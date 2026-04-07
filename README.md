# 📱 Banco Carrefour - Automação de Testes Mobile

Projeto de automação de testes mobile utilizando **WebdriverIO + Appium**, com geração de relatórios via **Allure Report**.

---

## 📁 Estrutura do Projeto

```
├── allure-report/        # Relatório gerado
├── allure-results/       # Resultados dos testes
├── app/                  # APK/APP para testes
├── config/               # Configurações do WebdriverIO
├── test/
│   ├── pageobjects/      # Page Objects
│   └── specs/            # Casos de teste
├── package.json
├── wdio.base.conf.js
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

- Node.js
- WebdriverIO
- Appium
- Mocha
- Allure Report

### Dependências principais

- @wdio/*
- appium-uiautomator2-driver
- allure-commandline

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

### 🔹 1. Node.js

Versão recomendada: **>= 20**

```bash
node -v
npm -v
```

---

### 🔹 2. Java (JDK)

Necessário para rodar o Appium

```bash
java -version
```

---

### 🔹 3. Android Studio

Instalar:

- Android SDK
- Emulator (AVD)

Configurar variáveis de ambiente:

```
ANDROID_HOME
PATH += platform-tools
PATH += tools
```

---

### 🔹 4. Appium

Instalar globalmente:

```bash
npm install -g appium
```

Instalar driver Android:

```bash
appium driver install uiautomator2
```

---

### 🔹 5. Allure CLI

```bash
npm install -g allure-commandline
```

---

## 📦 Instalação do Projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd Banco-Carrefour-Automação-de-Testes-Mobile
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando os Testes

### 🤖 Android

```bash
npm run test:android
```

---

### 🍎 iOS

```bash
npm run test:ios
```

---

## 📊 Gerando Relatórios

Após rodar os testes:

```bash
npm run report
```

Esse comando irá:

- Gerar o relatório Allure
- Abrir automaticamente no navegador

---

## 🧪 Estrutura de Testes

### 📁 Page Objects

Local: `test/pageobjects/`

Responsável por:

- Mapear elementos
- Criar métodos reutilizáveis

Ex:

- login_page.js
- home_page.js

---

### 📁 Specs

Local: `test/specs/`

Contém:

- Casos de teste automatizados

Ex:

- login.spec.js
- navigation.spec.js

---

## ⚙️ Configuração

Arquivos principais:

- wdio.base.conf.js
- config/wdio.android.conf.js
- config/wdio.ios.conf.js

Aqui você pode configurar:

- Capabilities
- Devices
- Timeouts
- Serviços

---

## 📌 Boas Práticas

- Utilizar Page Object Pattern
- Evitar código duplicado
- Criar testes independentes
- Manter dados de teste organizados

---

## 🐛 Troubleshooting

### Erro comum: Appium não conecta

```bash
appium
```

Verifique se está rodando.

---

### Erro de device não encontrado

```bash
adb devices
```

---

### Limpar resultados do Allure

```bash
rm -rf allure-results allure-report
```

---

## 📬 Contribuição

1. Crie uma branch  
2. Faça suas alterações  
3. Abra um Pull Request  

---

## 📄 Licença

Este projeto é de uso interno para fins de estudo e automação.
