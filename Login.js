let btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", evento => {
    saveFields()
        .then(message => {
            console.log("Mensaje de éxito:", message);
            alert("¡Registro exitoso!");
            window.location.href = 'importacion.html';
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
        return response.message; // Suponiendo que el servidor devuelve un objeto con una propiedad "message".
    } catch (error) {
        throw error;
    }
}
