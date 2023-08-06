let btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", evento => {
    saveFields()
        .then(({token, username}) => {
            console.log("Token recibido:", token);
            console.log("Usuario:", username);
            alert("¡Registro exitoso!");
            window.location.href = 'importacion.html';
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
        })
        .catch(error => {
            console.error("Error al registrar:", error);
            alert("Error en el registro. Inténtalo nuevamente más tarde.");
        });
});

let saveFields = async () => {
    let fields = {};

    fields.username = document.getElementById("username").value;
    fields.password = document.getElementById("password").value;

    try {
        const request = await fetch("http://localhost:8080/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        });

        const response = await request.json();
        return { token: response.token, username: fields.username };
    } catch (error) {
        throw error;
    }
}

let token = response.btnLogin

alert (token);
alert (username);
localStorage.setItem("token",token);
localStorage.setItem("usename",username);

