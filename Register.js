let btnRegister = document.getElementById("btnregister");

btnRegister.addEventListener("click", evento => {
    saveFields()
        .then(message => {
            console.log("Mensaje de éxito:", message);
            alert("¡Registro exitoso!");
        })
        .catch(error => {
            console.error("Error al registrar:", error);
            alert("Error en el registro. Inténtalo nuevamente más tarde.");
        });
});

let saveFields = async () => {
    let fields = {};

    fields.username = document.getElementById("username").value;
    fields.firstname = document.getElementById("firstname").value;
    fields.lastname = document.getElementById("lastname").value;
    fields.phonenumber = document.getElementById("phonenumber").value;
    fields.email = document.getElementById("email").value;
    fields.password = document.getElementById("password").value;

    try {
        const request = await fetch("http://localhost:8080/auth/register", {
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
