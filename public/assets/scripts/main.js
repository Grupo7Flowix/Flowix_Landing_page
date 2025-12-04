document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('modalEmpresa');
    const btn = document.getElementById('conoceMasbtn');
    const span = document.getElementsByClassName('close')[0];

    console.log('Elementos cargados:', { modal, btn, span });

    if (btn) {
        btn.addEventListener('click', function() {
            console.log('Botón clickeado');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (span) {
        span.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {

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


    loginBtn.addEventListener("click", () => loginModal.classList.add("active"));

    registerBtn.addEventListener("click", () => registerModal.classList.add("active"));


    closeLogin.addEventListener("click", () => loginModal.classList.remove("active"));

    closeRegister.addEventListener("click", () => registerModal.classList.remove("active"));


    window.addEventListener("click", (e) => {
        if (e.target === loginModal) loginModal.classList.remove("active");

        if (e.target === registerModal) registerModal.style.display = "none";
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById("regEmail").value.trim();
        let user = document.getElementById("regUser").value.trim();
        let pass = document.getElementById("regPass").value.trim();

        if (!email.includes("@") || user.length < 3 || pass.length < 8) {
            regError.style.display = "block";
            return;
        }

        regError.style.display = "none";

        let userData = { email, user, pass };
        localStorage.setItem("flowixUser", JSON.stringify(userData));

        alert("Cuenta creada con éxito ✔");

        registerModal.style.display = "none";
    });

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

        loginModal.classList.remove("active");


        navContainer.innerHTML = `
            <span class="user-name">👤 ${savedUser.user}</span>
        `;

        location.reload();
    });

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

function activateUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (!userMenu) return;

    const dropdown = userMenu.querySelector(".user-dropdown");

    userMenu.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    const logout = document.getElementById("logoutBtn");
    logout.addEventListener("click", () => {
        localStorage.removeItem("flowixUser");
        alert("Sesión cerrada ✔");
        location.reload();
    });
}

activateUserMenu();
});

function activateUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (!userMenu) return;

    const dropdown = userMenu.querySelector(".user-dropdown");

    userMenu.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    const logout = document.getElementById("logoutBtn");
    logout.addEventListener("click", () => {
        localStorage.removeItem("flowixUser");
        alert("Sesión cerrada ✔");
        location.reload();
    });
}
activateUserMenu();


const menuBtn = document.querySelector('.menu-hamburguesa');
const navLinks = document.getElementById('navLinksMobile');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const btnGratis = document.querySelector('.btn-gratis');
    const btnPremium = document.querySelector('.btn-premium');
    
    if (btnGratis) {
        btnGratis.addEventListener('click', function() {
            alert('¡Excelente! Redirigiendo al registro gratuito...');
        });
    }
    
    if (btnPremium) {
        btnPremium.addEventListener('click', function() {
            alert('¡Genial! Comenzando tu prueba gratuita de 14 días...');
        });
    }
});


const descargarPdfBtn = document.getElementById('descargarPdf');

if (descargarPdfBtn) {
    descargarPdfBtn.addEventListener('click', function() {
        const nombreArchivo = 'informe.pdf';
        
        const rutaPdf = 'assets/docs/' + nombreArchivo;
        
        const link = document.createElement('a');
        link.href = rutaPdf;
        link.download = nombreArchivo;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

const botonDescargar = document.querySelector('.Descargar');
const modal = document.getElementById('simpleModal');
const cerrarBtn = document.getElementById('cerrarModal');

if (botonDescargar) {
    botonDescargar.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    cerrarBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const formSoporte = document.getElementById('formSoporte');
    
    if (formSoporte) {
        formSoporte.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const tipoProblema = document.getElementById('tipoProblema').value;
            const descripcion = document.getElementById('descripcion').value.trim();
            
            if (!nombre || !email || !tipoProblema || !descripcion) {
                alert('Por favor completa todos los campos obligatorios.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un correo electrónico válido.');
                return;
            }
            
            const boton = this.querySelector('.btn-enviar');
            const textoOriginal = boton.textContent;
            
            boton.textContent = 'Enviando...';
            boton.disabled = true;
            
            setTimeout(() => {
                alert(`✅ Gracias ${nombre}. Hemos recibido tu solicitud de soporte.\n\nTe responderemos a ${email} en menos de 24 horas.`);
                
                formSoporte.reset();
                boton.textContent = textoOriginal;
                boton.disabled = false;
            }, 1500);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollPosition > pageHeight * 0.75) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        backToTopBtn.classList.remove('show');
    });
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollPosition === 0) {
            backToTopBtn.classList.remove('show');
        }
    });
});
