let Labeluser = document.getElementById("username");
let username = localStorage.getItem("username");
Labeluser.textContent = username;

let token = localStorage.getItem("token")


let btnImpo = document.getElementById("btnimpo");

btnImpo.addEventListener("click", evento => {
    saveFields()
        .then(message => {
            console.log("Mensaje de éxito:", message);
            alert("¡Guardado con exito!");
        })
        .catch(error => {
            console.error("Error al registrar:", error);
            alert("Error al guadar.Verifique e Inténtelo nuevamente más tarde.");
        });
});

let saveFields = async () => {
    let fields = {};

    fields.correlativo = document.getElementById("correlativo").value;
    fields.user_impo = username; 
    fields.mandantei = document.getElementById("mandantei").value;
    fields.folder = document.getElementById("folder").value;
    fields.typeof = document.getElementById("typeof").value;
    fields.owner = document.getElementById("owner").value;
    fields.pricing = document.getElementById("pricing").value;
    fields.sales = document.getElementById("sales").value;
    fields.executive = document.getElementById("executive").value;

    fields.agent = document.getElementById("agent").value;
    fields.network = document.getElementById("network").value;
    fields.incoterm = document.getElementById("incoterm").value;
    fields.carriage = document.getElementById("carriage").value;
    fields.commodity = document.getElementById("commodity").value;

    fields.country = document.getElementById("country").value;
    fields.route = document.getElementById("route").value;
    fields.ziparea = document.getElementById("ziparea").value;
    fields.zipcode = document.getElementById("zipcode").value;
    fields.placeofr = document.getElementById("placeofr").value;
    fields.pol = document.getElementById("pol").value;
    fields.pod = document.getElementById("pod").value;
    fields.pode = document.getElementById("pode").value;
    fields.carrier = document.getElementById("carrier").value;
    fields.tofc = document.getElementById("tofc").value;
    fields.volumen = document.getElementById("volumen").value;
    fields.cargort = document.getElementById("cargort").setAttribute("UTC-4").value;
    fields.addservice = document.getElementById("addservice").value;
    
    fields.customer = document.getElementById("customer").value;
    fields.shipper = document.getElementById("shipper").value;
    fields.consignee = document.getElementById("consignee").value;
    fields.notify = document.getElementById("notify").value;
    fields.facturar = document.getElementById("facturar").value;
    fields.aduana = document.getElementById("aduana").value;
    fields.transport = document.getElementById("transport").value;
    fields.reference = document.getElementById("reference").value;
    fields.invoicen = document.getElementById("invoicen").value;
    fields.invoicea = document.getElementById("invoicea").value;
    fields.packing = document.getElementById("packing").value;

    console.log("Valores de los campos antes de la solicitud POST:", fields); // Agregar esta línea

    try {
        const request = await fetch("http://localhost:8080/api/v1/saveimpo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'User-Agent': 'GlgApp' 
            },
            body: JSON.stringify(fields)
        });

        const response = await request.json();
        console.log("Respuesta del servidor:", response);
        return response.message; // Suponiendo que el servidor devuelve un objeto con una propiedad "message".
    } catch (error) {
        throw error;
    }
}

document.getElementById('btncorrelativo').addEventListener('click', function() {
    
    fetch("http://localhost:8080/api/v1/correlativo", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'GlgApp'
        }
    })
    .then(response => response.text())
    .then(data => {
        var correlativo = data;
        document.getElementById('correlativo').value = correlativo;
    })
    .catch(error => {
        console.error('Error al obtener correlativo:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch("http://localhost:8080/api/v1/findlist", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'GlgApp'
        }
    })
    .then(response => response.json())
    .then(data => {
        var correlativoArray = data; // Supongo que 'data' es el array que recibes

        // Ordenar el array por la propiedad 'correlativo'
        correlativoArray.sort((a, b) => a.correlativo.localeCompare(b.correlativo));

        const table = document.querySelector('.list table');

        // Definir el arreglo de propiedades que deseas mostrar en la lista
        const propertiesToShow = ['correlativo', 'folder', 'mandantei', 'customer', 'carrier', 'pol', 'pod', 'booking', 'mblNumber', 'hblNumber', 'eta'];

        // Crear una fila por cada objeto en el array
        correlativoArray.forEach(function(item) {
            const row = document.createElement('tr');

            // Crear una celda por cada propiedad seleccionada y asignar el valor correspondiente
            propertiesToShow.forEach(function(prop) {
                const cell = document.createElement('td');
                cell.textContent = item[prop] || ''; // Manejar el caso en que la propiedad esté vacía
                row.appendChild(cell);
            });

            table.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al obtener correlativo:', error);
    });
});






