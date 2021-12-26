import fetchData from "./fetchData.js";


const dateUpdated = document.getElementById("updated");
const currentRate = document.getElementById("currentRate");

const documentInputs = {
    top: document.getElementById("currencyTop"),
    bottom: document.getElementById("currencyBottom")
};

const documentButtons = [
    { selector: document.getElementById("buying"), value: 1 },
    { selector: document.getElementById("mean"), value: 1 },
    { selector: document.getElementById("selling"), value: 1 }
];

let selectedRate = 1;


fetchData().then(data => {
    documentButtons[0].value = parseFloat((data[12]['Kupovni za devize']).replace(",", "."));
    documentButtons[1].value = parseFloat((data[12]['Srednji za devize']).replace(",", "."));
    documentButtons[2].value = parseFloat((data[12]['Prodajni za devize']).replace(",", "."));
    dateUpdated.textContent = `Updated: ${data[12]['Datum primjene']}.`;
    selectedRate = documentButtons[1].value;
}).catch(() => { dateUpdated.textContent = "Server offline" });

Object.values(documentInputs).forEach(e => {
    e.addEventListener("keyup", () => {
        calculateAmmount();
    });
    e.addEventListener("focus", () => {
        Object.values(documentInputs).forEach(e => {
            e.classList.remove("selected");
            e.previousElementSibling.classList.remove("selected");
        });
        event.target.classList.add("selected");
        event.target.previousElementSibling.classList.add("selected")
        calculateAmmount();
    })
});

function calculateAmmount() {
    if (documentInputs.top.attributes[3].textContent == "selected") {
        documentInputs.bottom.value = (documentInputs.top.value / parseFloat(selectedRate)).toFixed(2);
        let currentRateHRK = (1 / parseFloat(selectedRate)).toFixed(4);
        currentRate.textContent = `1 HRK = ${currentRateHRK} EUR`
    } else {
        documentInputs.top.value = (documentInputs.bottom.value * parseFloat(selectedRate)).toFixed(2);
        let currentRateEUR = (parseFloat(selectedRate)).toFixed(4);
        currentRate.textContent = `1 EUR = ${currentRateEUR} HRK`;
    }
}

documentButtons.forEach(e => {
    e.selector.addEventListener("click", () => {
        let unselectButtons = documentButtons.filter(selected => selected !== e);
        unselectButtons.forEach (e => {
            e.selector.classList.remove("selected");
        })
        e.selector.classList.add("selected");
        selectedRate = e.value;
        calculateAmmount();
    })
})