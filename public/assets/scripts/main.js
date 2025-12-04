document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const modal = document.getElementById('modalEmpresa');
    const btn = document.getElementById('conoceMasbtn');
    const span = document.getElementsByClassName('close')[0];

    console.log('Elementos cargados:', { modal, btn, span });

    // Abrir modal
    if (btn) {
        btn.addEventListener('click', function() {
            console.log('Botón clickeado');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Evitar scroll
            }
        });
    }

    // Cerrar modal con la X
    if (span) {
        span.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Cerrar modal haciendo clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});


//modal de boton inicio de sesion-------------------------------------------


document.addEventListener("DOMContentLoaded", () => {

    // ====== ELEMENTOS ======
    const loginBtn = document.getElementById("iniciarSesionbtn");
    const registerBtn = document.querySelector(".Registrarse");

    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    const closeLogin = document.querySelector(".close-login");
    const closeRegister = document.querySelector(".close-register");

    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    const loginError = document.getElementById("login-error");
    const passError = document.getElementById("pass-error");
    const regError = document.getElementById("reg-error");

    const navContainer = document.querySelector(".register-btn");

    // ====== ABRIR MODALES ======
    loginBtn.addEventListener("click", () => loginModal.style.display = "block");
    registerBtn.addEventListener("click", () => registerModal.style.display = "block");

    // ====== CERRAR MODALES ======
    closeLogin.addEventListener("click", () => loginModal.style.display = "none");
    closeRegister.addEventListener("click", () => registerModal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) loginModal.style.display = "none";
        if (e.target === registerModal) registerModal.style.display = "none";
    });

    // ============================================================
    //  REGISTRAR USUARIO
    // ============================================================
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById("regEmail").value.trim();
        let user = document.getElementById("regUser").value.trim();
        let pass = document.getElementById("regPass").value.trim();

        // Validaciones
        if (!email.includes("@") || user.length < 3 || pass.length < 8) {
            regError.style.display = "block";
            return;
        }

        regError.style.display = "none";

        // Guardar datos en localStorage
        let userData = { email, user, pass };
        localStorage.setItem("flowixUser", JSON.stringify(userData));

        alert("Cuenta creada con éxito ✔");

        registerModal.style.display = "none";
    });

    // ============================================================
    //  INICIAR SESIÓN
    // ============================================================
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let pass = document.getElementById("password").value.trim();

        let savedUser = JSON.parse(localStorage.getItem("flowixUser"));

        if (!savedUser || email !== savedUser.email || pass !== savedUser.pass) {
            loginError.textContent = "Correo o contraseña incorrectos.";
            loginError.style.display = "block";
            return;
        }

        loginError.style.display = "none";

        alert("Inicio de sesión exitoso ✔");

        loginModal.style.display = "none";

        // Cambiar header por el nombre del usuario
        navContainer.innerHTML = `
            <span class="user-name">👤 ${savedUser.user}</span>
        `;

        // Recargar la página
        location.reload();
    });

    // ============================================================
    //  MANTENER SESIÓN INICIADA
    // ============================================================
    const savedUser = JSON.parse(localStorage.getItem("flowixUser"));
    if (savedUser) {
       navContainer.innerHTML = `
    <div class="user-menu">
        👤 ${savedUser.user}
        <div class="user-dropdown">
            <a id="logoutBtn">Cerrar sesión</a>
        </div>
    </div>
`;

    }

    // ============================================================
//  MANEJO DEL MENÚ DE USUARIO Y CERRAR SESIÓN
// ============================================================

// Función para activar menú si hay usuario guardado
function activateUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (!userMenu) return;

    const dropdown = userMenu.querySelector(".user-dropdown");

    // Mostrar/ocultar menu al hacer clic
    userMenu.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Botón cerrar sesión
    const logout = document.getElementById("logoutBtn");
    logout.addEventListener("click", () => {
        localStorage.removeItem("flowixUser");
        alert("Sesión cerrada ✔");
        location.reload();
    });
}

// Ejecutar si ya está logueado
activateUserMenu();
});


//  MANEJO DEL MENÚ DE USUARIO Y CERRAR SESIÓN


// Función para activar menú si hay usuario guardado
function activateUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (!userMenu) return;

    const dropdown = userMenu.querySelector(".user-dropdown");

    // Mostrar/ocultar menu al hacer clic
    userMenu.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Botón cerrar sesión
    const logout = document.getElementById("logoutBtn");
    logout.addEventListener("click", () => {
        localStorage.removeItem("flowixUser");
        alert("Sesión cerrada ✔");
        location.reload();
    });
}

// Ejecutar si ya está logueado
activateUserMenu();


