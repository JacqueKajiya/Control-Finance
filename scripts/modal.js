
function createModal (){
    const modalWrapper      = document.createElement ("div")
    const modal             = document.createElement ("div")
    const modalCabecalho    = document.createElement ("div")
    const h3                = document.createElement ("h3")
    const closeBtn          = document.createElement ("img")
    const paragrafo         = document.createElement ("p")
    const formulario        = document.createElement ("form")
    const inserirValor      = document.createElement ("div")
    const labelInputValor   = document.createElement ("label")
    const inputValor        = document.createElement ("input")
    const tipoValor         = document.createElement ("div")
    const h4                = document.createElement ("h4")
    const divValorBtn       = document.createElement ("div")
    const labelEntrada      = document.createElement ("label")
    const btnEntrada        = document.createElement ("input")
    const labelSaida        = document.createElement ("label")
    const btnSaida          = document.createElement ("input")
    const modalSaida        = document.createElement ("div")
    const btnCancelar       = document.createElement ("button")
    const btnInserirValor   = document.createElement ("button") 

    modalWrapper.classList.add("modal_wrapper")
    modal.classList.add("modal")
    modalCabecalho.classList.add("modal_cabecalho")

    h3.innerText="Registro de Valor"

    closeBtn.classList.add("closeBtn")
    closeBtn.src = "/assets/Close.png"
    closeBtn.alt = "botao fechar"

    paragrafo.classList.add("modal_descricao")
    paragrafo.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"

    inserirValor.classList.add = "modal_inserir_valor"

    labelInputValor.classList.add = "modal_label_input"
    labelInputValor.innerText = "Valor"

    inputValor.classList.add("modal_valor")
    inputValor.type = "number"
    inputValor.required = true
    inputValor.placeholder = "R$"

    tipoValor.classList.add("tipo_valor")

    h4.classList.add("titulo_tipo_valor")
    h4.innerText = "Tipo de valor"

    divValorBtn.classList.add("div_tipo_valor")

    labelEntrada.classList.add("label_tipo_valor")
    labelEntrada.htmlFor= "entrada"
    labelEntrada.innerText = "Entrada"

    btnEntrada.classList.add("btn_entrada")
    btnEntrada.id = "entrada"
    btnEntrada.name = "tipo"
    btnEntrada.type = "radio"
    btnEntrada.value = "1"
    btnEntrada.checked = true

    labelSaida.classList.add("label_tipo_valor")
    labelSaida.htmlFor = "saida"
    labelSaida.innerText = "Saida"

    btnSaida.classList.add("btn_saida")
    btnSaida.id = "saida"
    btnSaida.name = "tipo"
    btnSaida.type = "radio"
    btnSaida.value = "2"

    modalSaida.classList.add("modal_saida")

    btnCancelar.classList.add("btn_cancelar")
    btnCancelar.innerText = "Cancelar"

    btnInserirValor.classList.add("btn_valor")
    btnInserirValor.type = "submit"
    btnInserirValor.innerText = "Inserir valor"

    formulario.addEventListener("submit", (event) =>{    
        event.preventDefault()
        
        const inputValor = document.querySelector(".modal_valor")

        const entrada = document.querySelector(".btn_entrada")
        const saida = document.querySelector(".btn_saida")
        

        let novoValor = {
            id: uuidv4(),
            value: inputValor.value,
            categoryID: entrada.checked ? 1 : 2,
        }

        const valorInserido = [novoValor]
        

        renderValues(valorInserido)
        insertedValues.push(novoValor)

       
        modalWrapper.remove()

    })

    console.log(insertedValues)

    modalCabecalho.append(h3, closeBtn)
    inserirValor.append (labelInputValor, inputValor)

    divValorBtn.append(btnEntrada, labelEntrada, btnSaida, labelSaida)
    tipoValor.append(h4, divValorBtn)

    modalSaida.append(btnInserirValor, btnCancelar)

    formulario.append(inserirValor, tipoValor, modalSaida)
    modal.append(modalCabecalho, paragrafo, formulario)
    modalWrapper.appendChild(modal)

    return modalWrapper

}

function showModal (){
    const btnRegistrarValor = document.getElementById("btn_registrar_valor")
    const main = document.querySelector("main")

    btnRegistrarValor.addEventListener("click", () => {
        const modal = createModal()
        main.appendChild(modal)
        closeModal()
    })
}

function closeModal (){
    const btnCloseModal = document.querySelector(".closeBtn")
    const cancelarValor = document.querySelector(".btn_cancelar") 
    const modalWrapper = document.querySelector(".modal_wrapper")

    btnCloseModal.addEventListener("click", () => {
        modalWrapper.remove()
    })

    cancelarValor.addEventListener("click", () => {
        modalWrapper.remove()
    })
}

showModal()