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
    fields.mandante = document.getElementById("mandanteii").value;
    fields.folderi = document.getElementById("folderi").value;
    fields.typeofo = document.getElementById("typeofoi").value;
    fields.owner = document.getElementById("owneri").value;
    fields.pricing = document.getElementById("pricinginput").value;
    fields.sales = document.getElementById("salesi").value;
    fields.executive = document.getElementById("executivei").value;

    fields.agent = document.getElementById("agenti").value;
    fields.network = document.getElementById("network").value;
    fields.incoterms = document.getElementById("incotermsi").value;
    fields.carriage = document.getElementById("carriagei").value;
    fields.commodity = document.getElementById("commodityi").value;

    fields.country = document.getElementById("countryi").value;
    fields.route = document.getElementById("routei").value;
    fields.ziparea = document.getElementById("zipareai").value;
    fields.zipcoden = document.getElementById("zipcodeni").value;
    fields.placeofr = document.getElementById("placeofri").value;
    fields.poli = document.getElementById("poli").value;
    fields.podi = document.getElementById("podi").value;
    fields.pode = document.getElementById("podei").value;
    fields.carrier = document.getElementById("carrieri").value;
    fields.tofc = document.getElementById("tofci").value;
    fields.volumen = document.getElementById("volumeni").value;
    fields.cargort = document.getElementById("cargorti").value;
    fields.addservice = document.getElementById("addservicei").value;
    
    fields.customer = document.getElementById("customeri").value;
    fields.shipper = document.getElementById("shipperi").value;
    fields.consignee = document.getElementById("consigneei").value;
    fields.notify = document.getElementById("notifyi").value;
    fields.facturar = document.getElementById("facturari").value;
    fields.aduana = document.getElementById("aduanai").value;
    fields.transporte = document.getElementById("transpori").value;
    fields.reference = document.getElementById("referencei").value;
    fields.invoicen = document.getElementById("invoiceni").value;
    fields.invoicea = document.getElementById("invoiceai").value;
    fields.packing = document.getElementById("packingi").value;

    try {
        const request = await fetch("http://localhost:8080/api/v1/saveimpo", {
            method: 'POST',
            headers: {
                'mode': 'no-cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'User-Agent': 'GlgApp' 
            },
            body: JSON.stringify(fields)
        });

        const response = await request.json();
        return response.message; // Suponiendo que el servidor devuelve un objeto con una propiedad "message".
    } catch (error) {
        throw error;
    }
}
