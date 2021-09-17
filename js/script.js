
 let dinheiro = 0
 let pessoas = 0
 let porcentagem = 0
 let gorjeta = 0
  

function selecaoPorcentagem ( porcenta ) {  
  porcentagem = porcenta
  focus ( )
  calculoGorjeta ( )
  divisaoValor ( )
  selecaoPessoas ( )
} 


function focus ( ) {
  let focus_5  = document.getElementById ('box-5')
  let focus_10 = document.getElementById ('box-10')
  let focus_15 = document.getElementById ('box-15')
  let focus_25 = document.getElementById ('box-25')
  let focus_50 = document.getElementById ('box-50')
  let focus_custom = document.getElementById ('box-custom')
  let focus_reset = document.getElementById ('box-reset')
  
  switch ( porcentagem ) {
     case 5:
      focus_5.className = 'box-focus'
      focus_10.className = 'box'
      focus_15.className = 'box'
      focus_25.className = 'box'
      focus_50.className = 'box'
      focus_custom.className = 'custom'
      focus_custom.value = 'Custom'
      focus_reset.className = 'box-reset-focus'
     break

     case 10: 
     focus_5.className  = 'box'
     focus_10.className = 'box-focus'
     focus_15.className = 'box'
     focus_25.className = 'box'
     focus_50.className = 'box'
     focus_custom.className = 'custom'
     focus_custom.value = 'Custom'
     focus_reset.className = 'box-reset-focus'
     break

     case 15: 
     focus_5.className  = 'box'
     focus_10.className = 'box'
     focus_15.className = 'box-focus'
     focus_25.className = 'box'
     focus_50.className = 'box'
     focus_custom.className = 'custom'
     focus_custom.value = 'Custom'
     focus_reset.className = 'box-reset-focus'
    break

     case 25:
      focus_5.className  = 'box'
      focus_10.className = 'box'
      focus_15.className = 'box'
      focus_25.className = 'box-focus'
      focus_50.className = 'box'
      focus_custom.className = 'custom'
      focus_custom.value = 'Custom'
      focus_reset.className = 'box-reset-focus'
     break

     case 50:
      focus_5.className  = 'box'
      focus_10.className = 'box'
      focus_15.className = 'box'
      focus_25.className = 'box'
      focus_50.className = 'box-focus'
      focus_custom.className = 'custom'
      focus_custom.value = 'Custom'
      focus_reset.className = 'box-reset-focus'
    break;

    case 'custom':
      focus_5.className  = 'box'
      focus_10.className = 'box'
      focus_15.className = 'box'
      focus_25.className = 'box'
      focus_50.className = 'box'
      focus_custom.className = 'custom-input'
      focus_reset.className = 'box-reset-focus'
      inputCustom ( )
    break;

    case 'reset':
      focus_5.className  = 'box'
      focus_10.className = 'box'
      focus_15.className = 'box'
      focus_25.className = 'box'
      focus_50.className = 'box'
      focus_custom.className = 'custom'
      focus_custom.value = 'Custom'
      focus_reset.className = 'box-reset'
      document.getElementById ( 'entradaDinheiro' ).value =  ' '
      document.getElementById ( 'entradaPessoas' ).value =  ' '
    break;
    default:
    alert ( "default" )
  }
}


function inputCustom ( ) {
        let custom = document.getElementById ( 'box-custom' ).value
  
        console.log ( custom )

        if ( custom > 0 ) {
          porcentagem = custom
          selecaoPessoas ( )

          console.log ( 'custom: ' + porcentagem )
        } else if ( custom == '') {
          document.getElementById ( 'box-custom' ).value = 0
        } else {
          console.log ( 'normal: ' + porcentagem )
        }
} 

function selecaoDinheiro (  ) {
  dinheiro = document.getElementById ( 'entradaDinheiro' ).value 
  dinheiro = parseFloat ( dinheiro ) 
  dinheiro = dinheiro ? dinheiro : 0
  calculoGorjeta ( )
 divisaoValor ( )
}


function selecaoPessoas ( ) { 
  pessoas = document.getElementById ( 'entradaPessoas' ).value 
  pessoas = parseFloat ( pessoas ) 
  pessoas = pessoas ? pessoas : 0
 calculoGorjeta ( )
 divisaoValor ( )
}



 function calculoGorjeta (  ) {
   if ( porcentagem > 0 && pessoas > 0  ) {
    gorjeta =  ( dinheiro * ( porcentagem / 100 ) ) / pessoas
    document.getElementById ( 'saidaGorjeta' ).innerText =  `$${ gorjeta.toFixed(2) }`
    console.log ( `gorjeta = ${ gorjeta }` )
    divisaoValor ( ) 
   } else {
    document.getElementById ( 'saidaGorjeta' ).innerText = '$0.00'
   }
 } 


 function divisaoValor (  ) {
   if ( porcentagem > 0 && pessoas > 0 ) {
    let dividir = ( dinheiro / pessoas ) + gorjeta 
    dividir = parseFloat ( dividir )
    dividir = dividir.toFixed(2)
    console.log (  `dividir = ${ dividir }`  )  
    document.getElementById ( 'saidaTotal' ).innerText = `$${dividir}`
   } else {
    document.getElementById ( 'saidaTotal' ).innerText = '$0.00'
   }
 }