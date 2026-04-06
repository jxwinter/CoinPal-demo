/* ============================================
   CoinPal i18n - Multi-language support
   Supported: English, Español, हिन्दी, Português, Français
   ============================================ */
(function() {
    const translations = {
        en: {
            // Sidebar
            "nav.business": "Business",
            "nav.manage": "Manage",
            "nav.overview": "Overview",
            "nav.assets": "Assets",
            "nav.orders": "Orders",
            "nav.receive": "Receive",
            "nav.send": "Send",
            "nav.paymentLinks": "Payment Links",
            "nav.checkout": "Checkout",
            "nav.reports": "Reports",
            "nav.store": "Store",
            "nav.account": "Account",

            // Topbar
            "topbar.accountSettings": "Account Settings",
            "topbar.signOut": "Sign Out",

            // Breadcrumbs
            "breadcrumb.dashboard": "Dashboard",

            // Common actions
            "action.save": "Save",
            "action.cancel": "Cancel",
            "action.delete": "Delete",
            "action.edit": "Edit",
            "action.add": "Add",
            "action.search": "Search",
            "action.export": "Export",
            "action.create": "Create",
            "action.continue": "Continue",
            "action.back": "Back",
            "action.submit": "Submit",
            "action.approve": "Approve",
            "action.reject": "Reject",
            "action.view": "View",
            "action.retry": "Retry",
            "action.copy": "Copy",
            "action.download": "Download",
            "action.upload": "Upload",
            "action.confirm": "Confirm",
            "action.close": "Close",
            "action.all": "All",
            "action.viewAll": "View All",

            // Common labels
            "label.status": "Status",
            "label.amount": "Amount",
            "label.currency": "Currency",
            "label.date": "Date",
            "label.time": "Time",
            "label.actions": "Actions",
            "label.details": "Details",
            "label.name": "Name",
            "label.email": "Email",
            "label.password": "Password",
            "label.network": "Network",
            "label.fee": "Fee",
            "label.total": "Total",

            // Login page
            "login.welcomeBack": "Welcome back",
            "login.subtitle": "Sign in to your CoinPal merchant account",
            "login.emailAddress": "Email address",
            "login.password": "Password",
            "login.rememberMe": "Remember me",
            "login.forgotPassword": "Forgot password?",
            "login.signIn": "Sign In",
            "login.orContinueWith": "or continue with",
            "login.noAccount": "Don't have an account?",
            "login.createAccount": "Create Account",
            "login.2faTitle": "Two-Factor Authentication",
            "login.2faDesc": "Enter the 6-digit code from your authenticator app",
            "login.verifySignIn": "Verify & Sign In",
            "login.resendCode": "Resend code",
            "login.backToSignIn": "Back to sign in",
            "login.resetPassword": "Reset password",
            "login.resetDesc": "Enter your email and we'll send you a reset link",
            "login.sendResetLink": "Send Reset Link",
            "login.emailPlaceholder": "name@company.com",
            "login.passwordPlaceholder": "Enter your password",
            "login.termsAgree": "By signing in, you agree to our",
            "login.termsOfService": "Terms of Service",
            "login.and": "and",
            "login.privacyPolicy": "Privacy Policy",

            // Register page
            "register.title": "Create your account",
            "register.subtitle": "Start accepting crypto payments in minutes",
            "register.step1": "Account",
            "register.step2": "Business",
            "register.step3": "Verify",
            "register.firstName": "First Name",
            "register.lastName": "Last Name",
            "register.businessEmail": "Business Email",
            "register.password": "Password",
            "register.confirmPassword": "Confirm Password",
            "register.continue": "Continue",
            "register.companyName": "Company Name",
            "register.websiteUrl": "Website URL",
            "register.industry": "Industry",
            "register.country": "Country",
            "register.monthlyVolume": "Expected Monthly Volume",
            "register.verifyEmail": "Verify your email",
            "register.verifyDesc": "We've sent a verification code to",
            "register.verifyBtn": "Verify Email",
            "register.haveAccount": "Already have an account?",
            "register.signIn": "Sign In",
            "register.orSignUpWith": "or sign up with",

            // Overview page
            "overview.welcomeBack": "Welcome back",
            "overview.todayRevenue": "Today's Revenue",
            "overview.totalOrders": "Total Orders",
            "overview.conversionRate": "Conversion Rate",
            "overview.totalBalance": "Total Balance",
            "overview.revenueTrend": "Revenue Trend",
            "overview.recentOrders": "Recent Orders",
            "overview.actionRequired": "Action Required",
            "overview.assetDistribution": "Asset Distribution",

            // Assets page
            "assets.totalBalance": "Total Balance",
            "assets.withdraw": "Withdraw",
            "assets.transfer": "Transfer",
            "assets.deposit": "Deposit",
            "assets.coinBalances": "Coin Balances",
            "assets.transactionHistory": "Transaction History",

            // Orders
            "orders.allOrders": "All Orders",
            "orders.paid": "Paid",
            "orders.unresolved": "Unresolved",
            "orders.failed": "Failed",
            "orders.totalOrders": "Total Orders",
            "orders.totalReceived": "Total Received",

            // Send orders
            "sendOrders.newPayout": "New Payout",
            "sendOrders.batchPayout": "Batch Payout",
            "sendOrders.totalSent": "Total Sent",
            "sendOrders.pendingApproval": "Pending Approval",
            "sendOrders.processing": "Processing",
            "sendOrders.completed": "Completed",

            // Payment links
            "paymentLinks.createLink": "Create Link",
            "paymentLinks.activeLinks": "Active Links",
            "paymentLinks.totalCollected": "Total Collected",

            // Store
            "store.storeInfo": "Store Info",
            "store.paymentConfig": "Payment Config",
            "store.flexiblePayments": "Flexible Payments",
            "store.integration": "Integration",

            // Account
            "account.security": "Security",
            "account.identity": "Identity",
            "account.team": "Team",
            "account.preferences": "Preferences",
            "account.addressBook": "Address Book",
            "account.addAddress": "Add Address",

            // Status
            "status.paid": "Paid",
            "status.pending": "Pending",
            "status.failed": "Failed",
            "status.completed": "Completed",
            "status.processing": "Processing",
            "status.active": "Active",
            "status.expired": "Expired"
        },

        es: {
            "nav.business": "Negocio",
            "nav.manage": "Administrar",
            "nav.overview": "Resumen",
            "nav.assets": "Activos",
            "nav.orders": "Pedidos",
            "nav.receive": "Recibir",
            "nav.send": "Enviar",
            "nav.paymentLinks": "Enlaces de Pago",
            "nav.checkout": "Pago",
            "nav.reports": "Informes",
            "nav.store": "Tienda",
            "nav.account": "Cuenta",

            "topbar.accountSettings": "Configuración de Cuenta",
            "topbar.signOut": "Cerrar Sesión",

            "breadcrumb.dashboard": "Panel",

            "action.save": "Guardar",
            "action.cancel": "Cancelar",
            "action.delete": "Eliminar",
            "action.edit": "Editar",
            "action.add": "Añadir",
            "action.search": "Buscar",
            "action.export": "Exportar",
            "action.create": "Crear",
            "action.continue": "Continuar",
            "action.back": "Atrás",
            "action.submit": "Enviar",
            "action.approve": "Aprobar",
            "action.reject": "Rechazar",
            "action.view": "Ver",
            "action.retry": "Reintentar",
            "action.copy": "Copiar",
            "action.download": "Descargar",
            "action.upload": "Subir",
            "action.confirm": "Confirmar",
            "action.close": "Cerrar",
            "action.all": "Todos",
            "action.viewAll": "Ver Todo",

            "label.status": "Estado",
            "label.amount": "Monto",
            "label.currency": "Moneda",
            "label.date": "Fecha",
            "label.time": "Hora",
            "label.actions": "Acciones",
            "label.details": "Detalles",
            "label.name": "Nombre",
            "label.email": "Correo",
            "label.password": "Contraseña",
            "label.network": "Red",
            "label.fee": "Comisión",
            "label.total": "Total",

            "login.welcomeBack": "Bienvenido de nuevo",
            "login.subtitle": "Inicia sesión en tu cuenta de comerciante CoinPal",
            "login.emailAddress": "Correo electrónico",
            "login.password": "Contraseña",
            "login.rememberMe": "Recuérdame",
            "login.forgotPassword": "¿Olvidaste tu contraseña?",
            "login.signIn": "Iniciar Sesión",
            "login.orContinueWith": "o continúa con",
            "login.noAccount": "¿No tienes una cuenta?",
            "login.createAccount": "Crear Cuenta",
            "login.2faTitle": "Autenticación de Dos Factores",
            "login.2faDesc": "Introduce el código de 6 dígitos de tu app de autenticación",
            "login.verifySignIn": "Verificar e Iniciar Sesión",
            "login.resendCode": "Reenviar código",
            "login.backToSignIn": "Volver al inicio de sesión",
            "login.resetPassword": "Restablecer contraseña",
            "login.resetDesc": "Introduce tu correo y te enviaremos un enlace para restablecer",
            "login.sendResetLink": "Enviar Enlace",
            "login.emailPlaceholder": "nombre@empresa.com",
            "login.passwordPlaceholder": "Introduce tu contraseña",
            "login.termsAgree": "Al iniciar sesión, aceptas nuestros",
            "login.termsOfService": "Términos de Servicio",
            "login.and": "y",
            "login.privacyPolicy": "Política de Privacidad",

            "register.title": "Crea tu cuenta",
            "register.subtitle": "Comienza a aceptar pagos en cripto en minutos",
            "register.step1": "Cuenta",
            "register.step2": "Negocio",
            "register.step3": "Verificar",
            "register.firstName": "Nombre",
            "register.lastName": "Apellido",
            "register.businessEmail": "Correo de negocio",
            "register.password": "Contraseña",
            "register.confirmPassword": "Confirmar contraseña",
            "register.continue": "Continuar",
            "register.companyName": "Nombre de la empresa",
            "register.websiteUrl": "URL del sitio web",
            "register.industry": "Industria",
            "register.country": "País",
            "register.monthlyVolume": "Volumen mensual esperado",
            "register.verifyEmail": "Verifica tu correo",
            "register.verifyDesc": "Hemos enviado un código de verificación a",
            "register.verifyBtn": "Verificar correo",
            "register.haveAccount": "¿Ya tienes una cuenta?",
            "register.signIn": "Iniciar sesión",
            "register.orSignUpWith": "o regístrate con",

            "overview.welcomeBack": "Bienvenido de nuevo",
            "overview.todayRevenue": "Ingresos de Hoy",
            "overview.totalOrders": "Total de Pedidos",
            "overview.conversionRate": "Tasa de Conversión",
            "overview.totalBalance": "Saldo Total",
            "overview.revenueTrend": "Tendencia de Ingresos",
            "overview.recentOrders": "Pedidos Recientes",
            "overview.actionRequired": "Acción Requerida",
            "overview.assetDistribution": "Distribución de Activos",

            "assets.totalBalance": "Saldo Total",
            "assets.withdraw": "Retirar",
            "assets.transfer": "Transferir",
            "assets.deposit": "Depositar",
            "assets.coinBalances": "Saldos de Monedas",
            "assets.transactionHistory": "Historial de Transacciones",

            "orders.allOrders": "Todos los Pedidos",
            "orders.paid": "Pagados",
            "orders.unresolved": "Sin Resolver",
            "orders.failed": "Fallidos",
            "orders.totalOrders": "Total de Pedidos",
            "orders.totalReceived": "Total Recibido",

            "sendOrders.newPayout": "Nuevo Pago",
            "sendOrders.batchPayout": "Pago en Lote",
            "sendOrders.totalSent": "Total Enviado",
            "sendOrders.pendingApproval": "Pendiente de Aprobación",
            "sendOrders.processing": "Procesando",
            "sendOrders.completed": "Completados",

            "paymentLinks.createLink": "Crear Enlace",
            "paymentLinks.activeLinks": "Enlaces Activos",
            "paymentLinks.totalCollected": "Total Recaudado",

            "store.storeInfo": "Información de Tienda",
            "store.paymentConfig": "Configuración de Pagos",
            "store.flexiblePayments": "Pagos Flexibles",
            "store.integration": "Integración",

            "account.security": "Seguridad",
            "account.identity": "Identidad",
            "account.team": "Equipo",
            "account.preferences": "Preferencias",
            "account.addressBook": "Libreta de Direcciones",
            "account.addAddress": "Añadir Dirección",

            "status.paid": "Pagado",
            "status.pending": "Pendiente",
            "status.failed": "Fallido",
            "status.completed": "Completado",
            "status.processing": "Procesando",
            "status.active": "Activo",
            "status.expired": "Expirado"
        },

        hi: {
            "nav.business": "व्यापार",
            "nav.manage": "प्रबंधन",
            "nav.overview": "अवलोकन",
            "nav.assets": "संपत्ति",
            "nav.orders": "आदेश",
            "nav.receive": "प्राप्त करें",
            "nav.send": "भेजें",
            "nav.paymentLinks": "भुगतान लिंक",
            "nav.checkout": "चेकआउट",
            "nav.reports": "रिपोर्ट",
            "nav.store": "स्टोर",
            "nav.account": "खाता",

            "topbar.accountSettings": "खाता सेटिंग्स",
            "topbar.signOut": "साइन आउट",

            "breadcrumb.dashboard": "डैशबोर्ड",

            "action.save": "सहेजें",
            "action.cancel": "रद्द करें",
            "action.delete": "हटाएं",
            "action.edit": "संपादित करें",
            "action.add": "जोड़ें",
            "action.search": "खोजें",
            "action.export": "निर्यात",
            "action.create": "बनाएं",
            "action.continue": "जारी रखें",
            "action.back": "वापस",
            "action.submit": "जमा करें",
            "action.approve": "अनुमोदन",
            "action.reject": "अस्वीकार",
            "action.view": "देखें",
            "action.retry": "पुनः प्रयास",
            "action.copy": "कॉपी करें",
            "action.download": "डाउनलोड",
            "action.upload": "अपलोड",
            "action.confirm": "पुष्टि करें",
            "action.close": "बंद करें",
            "action.all": "सभी",
            "action.viewAll": "सभी देखें",

            "label.status": "स्थिति",
            "label.amount": "राशि",
            "label.currency": "मुद्रा",
            "label.date": "दिनांक",
            "label.time": "समय",
            "label.actions": "कार्रवाई",
            "label.details": "विवरण",
            "label.name": "नाम",
            "label.email": "ईमेल",
            "label.password": "पासवर्ड",
            "label.network": "नेटवर्क",
            "label.fee": "शुल्क",
            "label.total": "कुल",

            "login.welcomeBack": "वापसी पर स्वागत है",
            "login.subtitle": "अपने CoinPal व्यापारी खाते में साइन इन करें",
            "login.emailAddress": "ईमेल पता",
            "login.password": "पासवर्ड",
            "login.rememberMe": "मुझे याद रखें",
            "login.forgotPassword": "पासवर्ड भूल गए?",
            "login.signIn": "साइन इन",
            "login.orContinueWith": "या इसके साथ जारी रखें",
            "login.noAccount": "खाता नहीं है?",
            "login.createAccount": "खाता बनाएं",
            "login.2faTitle": "द्वि-कारक प्रमाणीकरण",
            "login.2faDesc": "अपने प्रमाणक ऐप से 6-अंकीय कोड दर्ज करें",
            "login.verifySignIn": "सत्यापित करें और साइन इन करें",
            "login.resendCode": "कोड पुनः भेजें",
            "login.backToSignIn": "साइन इन पर वापस जाएं",
            "login.resetPassword": "पासवर्ड रीसेट करें",
            "login.resetDesc": "अपना ईमेल दर्ज करें और हम आपको रीसेट लिंक भेजेंगे",
            "login.sendResetLink": "रीसेट लिंक भेजें",
            "login.emailPlaceholder": "name@company.com",
            "login.passwordPlaceholder": "अपना पासवर्ड दर्ज करें",
            "login.termsAgree": "साइन इन करके, आप हमारी",
            "login.termsOfService": "सेवा की शर्तों",
            "login.and": "और",
            "login.privacyPolicy": "गोपनीयता नीति से सहमत हैं",

            "register.title": "अपना खाता बनाएं",
            "register.subtitle": "मिनटों में क्रिप्टो भुगतान स्वीकार करना शुरू करें",
            "register.step1": "खाता",
            "register.step2": "व्यवसाय",
            "register.step3": "सत्यापन",
            "register.firstName": "पहला नाम",
            "register.lastName": "उपनाम",
            "register.businessEmail": "व्यावसायिक ईमेल",
            "register.password": "पासवर्ड",
            "register.confirmPassword": "पासवर्ड की पुष्टि करें",
            "register.continue": "जारी रखें",
            "register.companyName": "कंपनी का नाम",
            "register.websiteUrl": "वेबसाइट URL",
            "register.industry": "उद्योग",
            "register.country": "देश",
            "register.monthlyVolume": "अपेक्षित मासिक मात्रा",
            "register.verifyEmail": "अपना ईमेल सत्यापित करें",
            "register.verifyDesc": "हमने एक सत्यापन कोड भेजा है",
            "register.verifyBtn": "ईमेल सत्यापित करें",
            "register.haveAccount": "पहले से खाता है?",
            "register.signIn": "साइन इन करें",
            "register.orSignUpWith": "या इसके साथ साइन अप करें",

            "overview.welcomeBack": "वापसी पर स्वागत है",
            "overview.todayRevenue": "आज का राजस्व",
            "overview.totalOrders": "कुल आदेश",
            "overview.conversionRate": "रूपांतरण दर",
            "overview.totalBalance": "कुल शेष",
            "overview.revenueTrend": "राजस्व प्रवृत्ति",
            "overview.recentOrders": "हाल के आदेश",
            "overview.actionRequired": "कार्रवाई आवश्यक",
            "overview.assetDistribution": "संपत्ति वितरण",

            "assets.totalBalance": "कुल शेष",
            "assets.withdraw": "निकासी",
            "assets.transfer": "स्थानांतरण",
            "assets.deposit": "जमा",
            "assets.coinBalances": "सिक्का शेष",
            "assets.transactionHistory": "लेन-देन इतिहास",

            "orders.allOrders": "सभी आदेश",
            "orders.paid": "भुगतान किया",
            "orders.unresolved": "अनसुलझे",
            "orders.failed": "विफल",
            "orders.totalOrders": "कुल आदेश",
            "orders.totalReceived": "कुल प्राप्त",

            "sendOrders.newPayout": "नया भुगतान",
            "sendOrders.batchPayout": "बैच भुगतान",
            "sendOrders.totalSent": "कुल भेजा गया",
            "sendOrders.pendingApproval": "अनुमोदन लंबित",
            "sendOrders.processing": "प्रसंस्करण",
            "sendOrders.completed": "पूर्ण",

            "paymentLinks.createLink": "लिंक बनाएं",
            "paymentLinks.activeLinks": "सक्रिय लिंक",
            "paymentLinks.totalCollected": "कुल एकत्रित",

            "store.storeInfo": "स्टोर जानकारी",
            "store.paymentConfig": "भुगतान कॉन्फ़िग",
            "store.flexiblePayments": "लचीला भुगतान",
            "store.integration": "एकीकरण",

            "account.security": "सुरक्षा",
            "account.identity": "पहचान",
            "account.team": "टीम",
            "account.preferences": "प्राथमिकताएं",
            "account.addressBook": "पता पुस्तिका",
            "account.addAddress": "पता जोड़ें",

            "status.paid": "भुगतान किया",
            "status.pending": "लंबित",
            "status.failed": "विफल",
            "status.completed": "पूर्ण",
            "status.processing": "प्रसंस्करण",
            "status.active": "सक्रिय",
            "status.expired": "समाप्त"
        },

        pt: {
            "nav.business": "Negócios",
            "nav.manage": "Gerenciar",
            "nav.overview": "Visão Geral",
            "nav.assets": "Ativos",
            "nav.orders": "Pedidos",
            "nav.receive": "Receber",
            "nav.send": "Enviar",
            "nav.paymentLinks": "Links de Pagamento",
            "nav.checkout": "Finalizar",
            "nav.reports": "Relatórios",
            "nav.store": "Loja",
            "nav.account": "Conta",

            "topbar.accountSettings": "Configurações da Conta",
            "topbar.signOut": "Sair",

            "breadcrumb.dashboard": "Painel",

            "action.save": "Salvar",
            "action.cancel": "Cancelar",
            "action.delete": "Excluir",
            "action.edit": "Editar",
            "action.add": "Adicionar",
            "action.search": "Pesquisar",
            "action.export": "Exportar",
            "action.create": "Criar",
            "action.continue": "Continuar",
            "action.back": "Voltar",
            "action.submit": "Enviar",
            "action.approve": "Aprovar",
            "action.reject": "Rejeitar",
            "action.view": "Ver",
            "action.retry": "Tentar Novamente",
            "action.copy": "Copiar",
            "action.download": "Baixar",
            "action.upload": "Carregar",
            "action.confirm": "Confirmar",
            "action.close": "Fechar",
            "action.all": "Todos",
            "action.viewAll": "Ver Todos",

            "label.status": "Status",
            "label.amount": "Valor",
            "label.currency": "Moeda",
            "label.date": "Data",
            "label.time": "Hora",
            "label.actions": "Ações",
            "label.details": "Detalhes",
            "label.name": "Nome",
            "label.email": "E-mail",
            "label.password": "Senha",
            "label.network": "Rede",
            "label.fee": "Taxa",
            "label.total": "Total",

            "login.welcomeBack": "Bem-vindo de volta",
            "login.subtitle": "Entre na sua conta de comerciante CoinPal",
            "login.emailAddress": "Endereço de e-mail",
            "login.password": "Senha",
            "login.rememberMe": "Lembrar-me",
            "login.forgotPassword": "Esqueceu a senha?",
            "login.signIn": "Entrar",
            "login.orContinueWith": "ou continue com",
            "login.noAccount": "Não tem uma conta?",
            "login.createAccount": "Criar Conta",
            "login.2faTitle": "Autenticação de Dois Fatores",
            "login.2faDesc": "Digite o código de 6 dígitos do seu app autenticador",
            "login.verifySignIn": "Verificar e Entrar",
            "login.resendCode": "Reenviar código",
            "login.backToSignIn": "Voltar para login",
            "login.resetPassword": "Redefinir senha",
            "login.resetDesc": "Digite seu e-mail e enviaremos um link de redefinição",
            "login.sendResetLink": "Enviar Link",
            "login.emailPlaceholder": "nome@empresa.com",
            "login.passwordPlaceholder": "Digite sua senha",
            "login.termsAgree": "Ao entrar, você concorda com nossos",
            "login.termsOfService": "Termos de Serviço",
            "login.and": "e",
            "login.privacyPolicy": "Política de Privacidade",

            "register.title": "Crie sua conta",
            "register.subtitle": "Comece a aceitar pagamentos em cripto em minutos",
            "register.step1": "Conta",
            "register.step2": "Negócio",
            "register.step3": "Verificar",
            "register.firstName": "Nome",
            "register.lastName": "Sobrenome",
            "register.businessEmail": "E-mail comercial",
            "register.password": "Senha",
            "register.confirmPassword": "Confirmar senha",
            "register.continue": "Continuar",
            "register.companyName": "Nome da empresa",
            "register.websiteUrl": "URL do site",
            "register.industry": "Setor",
            "register.country": "País",
            "register.monthlyVolume": "Volume mensal esperado",
            "register.verifyEmail": "Verifique seu e-mail",
            "register.verifyDesc": "Enviamos um código de verificação para",
            "register.verifyBtn": "Verificar E-mail",
            "register.haveAccount": "Já tem uma conta?",
            "register.signIn": "Entrar",
            "register.orSignUpWith": "ou cadastre-se com",

            "overview.welcomeBack": "Bem-vindo de volta",
            "overview.todayRevenue": "Receita de Hoje",
            "overview.totalOrders": "Total de Pedidos",
            "overview.conversionRate": "Taxa de Conversão",
            "overview.totalBalance": "Saldo Total",
            "overview.revenueTrend": "Tendência de Receita",
            "overview.recentOrders": "Pedidos Recentes",
            "overview.actionRequired": "Ação Necessária",
            "overview.assetDistribution": "Distribuição de Ativos",

            "assets.totalBalance": "Saldo Total",
            "assets.withdraw": "Retirar",
            "assets.transfer": "Transferir",
            "assets.deposit": "Depositar",
            "assets.coinBalances": "Saldos de Moedas",
            "assets.transactionHistory": "Histórico de Transações",

            "orders.allOrders": "Todos os Pedidos",
            "orders.paid": "Pagos",
            "orders.unresolved": "Não Resolvidos",
            "orders.failed": "Falhados",
            "orders.totalOrders": "Total de Pedidos",
            "orders.totalReceived": "Total Recebido",

            "sendOrders.newPayout": "Novo Pagamento",
            "sendOrders.batchPayout": "Pagamento em Lote",
            "sendOrders.totalSent": "Total Enviado",
            "sendOrders.pendingApproval": "Aguardando Aprovação",
            "sendOrders.processing": "Processando",
            "sendOrders.completed": "Concluídos",

            "paymentLinks.createLink": "Criar Link",
            "paymentLinks.activeLinks": "Links Ativos",
            "paymentLinks.totalCollected": "Total Arrecadado",

            "store.storeInfo": "Informações da Loja",
            "store.paymentConfig": "Configuração de Pagamento",
            "store.flexiblePayments": "Pagamentos Flexíveis",
            "store.integration": "Integração",

            "account.security": "Segurança",
            "account.identity": "Identidade",
            "account.team": "Equipe",
            "account.preferences": "Preferências",
            "account.addressBook": "Lista de Endereços",
            "account.addAddress": "Adicionar Endereço",

            "status.paid": "Pago",
            "status.pending": "Pendente",
            "status.failed": "Falhou",
            "status.completed": "Concluído",
            "status.processing": "Processando",
            "status.active": "Ativo",
            "status.expired": "Expirado"
        },

        fr: {
            "nav.business": "Entreprise",
            "nav.manage": "Gérer",
            "nav.overview": "Aperçu",
            "nav.assets": "Actifs",
            "nav.orders": "Commandes",
            "nav.receive": "Recevoir",
            "nav.send": "Envoyer",
            "nav.paymentLinks": "Liens de Paiement",
            "nav.checkout": "Paiement",
            "nav.reports": "Rapports",
            "nav.store": "Boutique",
            "nav.account": "Compte",

            "topbar.accountSettings": "Paramètres du Compte",
            "topbar.signOut": "Déconnexion",

            "breadcrumb.dashboard": "Tableau de bord",

            "action.save": "Enregistrer",
            "action.cancel": "Annuler",
            "action.delete": "Supprimer",
            "action.edit": "Modifier",
            "action.add": "Ajouter",
            "action.search": "Rechercher",
            "action.export": "Exporter",
            "action.create": "Créer",
            "action.continue": "Continuer",
            "action.back": "Retour",
            "action.submit": "Soumettre",
            "action.approve": "Approuver",
            "action.reject": "Rejeter",
            "action.view": "Voir",
            "action.retry": "Réessayer",
            "action.copy": "Copier",
            "action.download": "Télécharger",
            "action.upload": "Envoyer",
            "action.confirm": "Confirmer",
            "action.close": "Fermer",
            "action.all": "Tout",
            "action.viewAll": "Voir Tout",

            "label.status": "Statut",
            "label.amount": "Montant",
            "label.currency": "Devise",
            "label.date": "Date",
            "label.time": "Heure",
            "label.actions": "Actions",
            "label.details": "Détails",
            "label.name": "Nom",
            "label.email": "E-mail",
            "label.password": "Mot de passe",
            "label.network": "Réseau",
            "label.fee": "Frais",
            "label.total": "Total",

            "login.welcomeBack": "Bon retour",
            "login.subtitle": "Connectez-vous à votre compte marchand CoinPal",
            "login.emailAddress": "Adresse e-mail",
            "login.password": "Mot de passe",
            "login.rememberMe": "Se souvenir de moi",
            "login.forgotPassword": "Mot de passe oublié?",
            "login.signIn": "Se connecter",
            "login.orContinueWith": "ou continuer avec",
            "login.noAccount": "Vous n'avez pas de compte?",
            "login.createAccount": "Créer un compte",
            "login.2faTitle": "Authentification à deux facteurs",
            "login.2faDesc": "Entrez le code à 6 chiffres de votre application d'authentification",
            "login.verifySignIn": "Vérifier et se connecter",
            "login.resendCode": "Renvoyer le code",
            "login.backToSignIn": "Retour à la connexion",
            "login.resetPassword": "Réinitialiser le mot de passe",
            "login.resetDesc": "Entrez votre e-mail et nous vous enverrons un lien de réinitialisation",
            "login.sendResetLink": "Envoyer le lien",
            "login.emailPlaceholder": "nom@entreprise.com",
            "login.passwordPlaceholder": "Entrez votre mot de passe",
            "login.termsAgree": "En vous connectant, vous acceptez nos",
            "login.termsOfService": "Conditions d'utilisation",
            "login.and": "et",
            "login.privacyPolicy": "Politique de confidentialité",

            "register.title": "Créez votre compte",
            "register.subtitle": "Commencez à accepter les paiements crypto en quelques minutes",
            "register.step1": "Compte",
            "register.step2": "Entreprise",
            "register.step3": "Vérifier",
            "register.firstName": "Prénom",
            "register.lastName": "Nom",
            "register.businessEmail": "E-mail professionnel",
            "register.password": "Mot de passe",
            "register.confirmPassword": "Confirmer le mot de passe",
            "register.continue": "Continuer",
            "register.companyName": "Nom de l'entreprise",
            "register.websiteUrl": "URL du site web",
            "register.industry": "Secteur",
            "register.country": "Pays",
            "register.monthlyVolume": "Volume mensuel prévu",
            "register.verifyEmail": "Vérifiez votre e-mail",
            "register.verifyDesc": "Nous avons envoyé un code de vérification à",
            "register.verifyBtn": "Vérifier l'e-mail",
            "register.haveAccount": "Vous avez déjà un compte?",
            "register.signIn": "Se connecter",
            "register.orSignUpWith": "ou inscrivez-vous avec",

            "overview.welcomeBack": "Bon retour",
            "overview.todayRevenue": "Revenus d'Aujourd'hui",
            "overview.totalOrders": "Total des Commandes",
            "overview.conversionRate": "Taux de Conversion",
            "overview.totalBalance": "Solde Total",
            "overview.revenueTrend": "Tendance des Revenus",
            "overview.recentOrders": "Commandes Récentes",
            "overview.actionRequired": "Action Requise",
            "overview.assetDistribution": "Distribution des Actifs",

            "assets.totalBalance": "Solde Total",
            "assets.withdraw": "Retirer",
            "assets.transfer": "Transférer",
            "assets.deposit": "Déposer",
            "assets.coinBalances": "Soldes des Monnaies",
            "assets.transactionHistory": "Historique des Transactions",

            "orders.allOrders": "Toutes les Commandes",
            "orders.paid": "Payées",
            "orders.unresolved": "Non Résolues",
            "orders.failed": "Échouées",
            "orders.totalOrders": "Total des Commandes",
            "orders.totalReceived": "Total Reçu",

            "sendOrders.newPayout": "Nouveau Paiement",
            "sendOrders.batchPayout": "Paiement par Lots",
            "sendOrders.totalSent": "Total Envoyé",
            "sendOrders.pendingApproval": "En Attente d'Approbation",
            "sendOrders.processing": "Traitement",
            "sendOrders.completed": "Terminées",

            "paymentLinks.createLink": "Créer un Lien",
            "paymentLinks.activeLinks": "Liens Actifs",
            "paymentLinks.totalCollected": "Total Collecté",

            "store.storeInfo": "Informations Boutique",
            "store.paymentConfig": "Configuration des Paiements",
            "store.flexiblePayments": "Paiements Flexibles",
            "store.integration": "Intégration",

            "account.security": "Sécurité",
            "account.identity": "Identité",
            "account.team": "Équipe",
            "account.preferences": "Préférences",
            "account.addressBook": "Carnet d'Adresses",
            "account.addAddress": "Ajouter une Adresse",

            "status.paid": "Payé",
            "status.pending": "En attente",
            "status.failed": "Échoué",
            "status.completed": "Terminé",
            "status.processing": "En cours",
            "status.active": "Actif",
            "status.expired": "Expiré"
        }
    };

    const langLabels = {
        en: 'EN',
        es: 'ES',
        hi: 'HI',
        pt: 'PT',
        fr: 'FR'
    };

    const langNames = {
        en: 'English',
        es: 'Español',
        hi: 'हिन्दी',
        pt: 'Português',
        fr: 'Français'
    };

    function getLang() {
        return localStorage.getItem('coinpal_lang') || 'en';
    }

    function t(key) {
        const lang = getLang();
        return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
    }

    function apply() {
        const lang = getLang();

        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) el.textContent = val;
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (val) el.setAttribute('placeholder', val);
        });

        // Translate title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-title');
            const val = t(key);
            if (val) el.setAttribute('title', val);
        });

        // Update lang label in trigger button
        document.querySelectorAll('.lang-label').forEach(function(el) {
            el.textContent = langLabels[lang] || 'EN';
        });

        // Update active state in menu
        document.querySelectorAll('.lang-menu-item').forEach(function(el) {
            const l = el.getAttribute('data-lang');
            if (l) {
                el.classList.toggle('active', l === lang);
            }
        });

        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    function setLang(lang) {
        if (!translations[lang]) return;
        localStorage.setItem('coinpal_lang', lang);
        apply();
        // Close the dropdown
        document.querySelectorAll('.lang-dropdown.open').forEach(function(el) {
            el.classList.remove('open');
        });
    }

    // Expose global helpers
    window.CoinPalI18n = { t: t, setLang: setLang, getLang: getLang, apply: apply, langNames: langNames };
    window.setLang = setLang;

    // Auto-apply on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
