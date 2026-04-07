# 📱 Banco Carrefour - Automação de Testes Mobile
Projeto de automação de testes para aplicações Android utilizando o ecossistema WebdriverIO 9 com Appium e relatórios Allure.

# 🚀 Tecnologias e Versões
Framework: WebdriverIO 9.

Runner: Mocha.

Driver: Appium (UIAutomator2).

Relatórios: Allure Reporter.

Linguagem: Node.js 20+ (ESM).

# 📦 Pré-requisitos
Para rodar este projeto localmente, você precisa de:

Node.js: Versão 20 ou superior.

Java JDK: Versão 17 (recomendada para Android SDK 34).

Android Studio: SDK configurado com as ferramentas de linha de comando.

Variáveis de Ambiente:

ANDROID_HOME / ANDROID_SDK_ROOT

JAVA_HOME

Adicionar ao PATH: platform-tools, emulator e cmdline-tools.

# ⚙️ Configuração do Projeto
1. Clonar e Instalar
Bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Instale as dependências do Node.js
npm install

# Instale o Appium e o Driver Android globalmente
npm install -g appium
appium driver install uiautomator2
2. Adicionar o Aplicativo (APK)
Para que o WebdriverIO localize o app, você deve criar uma pasta app na raiz e inserir o arquivo APK:

Caminho: ./app/wdio-demo.apk.

Nota: O nome do arquivo deve coincidir com o configurado em wdio.android.conf.js.

# ▶️ Execução dos Testes
Localmente
Certifique-se de que um emulador Android esteja aberto e funcional.

Execute o comando:

Bash
npm run test:android
No GitLab CI/CD
A pipeline está configurada para rodar automaticamente em cada merge_request ou push para main/develop.

Ambiente: Utiliza a imagem reactnativecommunity/react-native-android.

Fluxo: Cria um AVD dinamicamente, inicia o emulador em background e executa os testes.

# 📊 Relatórios e Evidências
Allure Report
O projeto gera relatórios detalhados com histórico de execução.

Gerar e abrir localmente:

Bash
npm run report
No GitLab: O relatório é gerado como um artefato no estágio report:allure e fica disponível para download por 30 dias.

Screenshots
Em caso de falha, o framework captura automaticamente um screenshot da tela do dispositivo e o anexa ao relatório Allure.

# 📁 Estrutura de Pastas
```
.
├── app/
├── config/
├── test/specs/
├── allure-results/
├── package.json
├── gitlab-ci.yml
├── wdio.base.conf.js
└── README.md
```

# ⚠️ Observações Técnicas
Porta do Appium: O projeto utiliza a porta padrão 4723.

Timeout: O tempo limite para inicialização e conexão com o emulador é de 120 segundos para evitar falhas em ambientes de CI lentos.
