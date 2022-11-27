export class Estilo{

    novoEstilo(valor,array){
        let maq = []
        array.forEach((n,i)=>{
            maq.push(array[i])
    
            if(valor != maq[i].value){
                maq[i].style.background = '#ffffff'
                maq[i].style.color = 'black'
            }
            else{
                maq[i].style.background = '#00AD0C'
                maq[i].style.color = '#ffffff'
            }
        })  
    }
}