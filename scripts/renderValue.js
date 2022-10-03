const valuesCategory = ["Entrada", "Saída"];
const semValor = document.querySelector(".sem_valor")

let somaTotal = 0

function renderValues (valores){

    const listaValores = document.querySelector(".valores")
    
    
    valores.forEach((valorInserido) => {
  
      const li = document.createElement("li")
      li.classList.add("item-valores")
    
      const valor = document.createElement("p")
      valor.classList.add("valor")
  
      const valorLista = Number(valorInserido.value).toFixed(2)
      valor.innerText = "R$" + valorLista
  
      const itemTipoContainer = document.createElement("div")
      itemTipoContainer.classList.add("item-tipo-container")
    
      const itemTipo = document.createElement("p")
  
      if (valorInserido.categoryID == 1){
        itemTipo.innerText = "Entrada"
      }
      else if (valorInserido.categoryID == 2){
        itemTipo.innerText = "Saida"
      }
  
      const removerValor = document.createElement("img")
      removerValor.src = "../../assets/lixeira-escuro.png"
      removerValor.alt = "botao de remover"
      removerValor.classList.add("item-remover")
    
      removerValor.addEventListener("click", function(){
        removerPeloId(valorInserido.id)
        li.remove()
  
        somaTotal -= parseFloat(`${valorInserido.value}`)
        document.querySelector("#valorTotal").innerHTML = "R$" + parseFloat(`${somaTotal}`).toFixed(2)
        displayValores()
        
      })
  
      itemTipoContainer.append(itemTipo, removerValor)
      li.append(valor, itemTipoContainer)
    
      listaValores.appendChild(li)
  
    })
  
    somarValores(valores)
    displayValores()  
  
  }
  
  function removerPeloId(id){
  
    const indexId = insertedValues.findIndex((valorInserido) =>{
      return id === valorInserido.id
    })
  
    if (indexId > -1){
      insertedValues.splice(indexId, 1)
    }
  }
  
  function somarValores (valores){
    valores.forEach((valor) => {somaTotal += parseFloat(`${valor.value}`)})
    document.querySelector("#valorTotal").innerHTML = "R$" + `${somaTotal.toFixed(2)}` 
  }
  
  renderValues(insertedValues)
  
  
  function displayValores (){
    somaTotal == 0 ? semValor.style.display = "flex" : semValor.style.display = "none"
  }
  
  function filterValue (valoresFiltro){
      const btnTodos      = document.querySelectorAll(".btn_categoria")
      const listaValores  = document.querySelector(".valores")
      
      btnTodos.forEach((btnCategoria) => {
          btnCategoria.addEventListener("click", (event) =>{
    
            const busca     = event.target
            const categoria = busca.innerHTML
    
            if(categoria == "Todos"){
              listaValores.innerHTML = ""
              somaTotal = 0
              renderValues(valoresFiltro)
            }
            const entrada = valoresFiltro.filter((categoria) => categoria.categoryID == 1) 
            const saida   = valoresFiltro.filter((categoria) => categoria.categoryID == 2) 
  
            if(categoria == "Entradas"){
              listaValores.innerHTML = ""
              somaTotal = 0
             renderValues(entrada)
            }
    
            if(categoria == "Saidas"){
              listaValores.innerHTML = ""
              somaTotal = 0
              renderValues(saida)
            }
            
          })
       })
  }
  
  filterValue(insertedValues)
  
  
        
  
  