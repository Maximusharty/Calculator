function addNumbers(...arg){
 let arrayofNumbers=[...arg];
 return arrayofNumbers.reduce((sum,current)=>sum+current);


}
let value="none";

const answer=document.createElement('div');
     
const screen=document.querySelector('.display');
screen.appendChild(answer);
answer.classList.add('answer');
function subtractNumbers(...arg){
    let arrayofNumbers=[...arg];
    return arrayofNumbers.reduce((sum,current)=>sum-current);
}
function multiply(...arg){
    let arrayofNumbers=[...arg];
    return arrayofNumbers.reduce((sum,current)=>sum*current);
}
function division(...arg){
    let arrayofNumbers=[...arg];
    return arrayofNumbers.reduce((sum,current)=>sum/current);
}
function operation(number,...args){
    if(number=='+'){
        return addNumbers(...args)
    }
    else if(number=='-'){
        return subtractNumbers(...args);
    }
    else if(number=='X'){
        return multiply(...args);
    }
    else if(number=='/'){
        return division(...args);
    }
}




const numbers=document.querySelectorAll('.number');

numbers.forEach((number)=>{
    const display=document.querySelector('.upperdisplay');
   

    
    number.addEventListener('click',()=>{
        if(value!="none"&&!Number.isNaN(value)){
            
            if(number.textContent!='DEL'&&number.textContent!='='){
                if(number.textContent=='X'||number.textContent=='-'||number.textContent=='+'||number.textContent=='/'){
                
           
          
                display.textContent=value+number.textContent;
                answer.textContent='';
                value="none";
                
                }
                else{
                    
                    display.textContent=number.textContent;
                    
                    value="none";
                    answer.textContent='';
                }
                    
                
                
            }
            else{
                display.textContent+='';
            }
            
        }
        else if(Number.isNaN(value)){
            display.textContent="Math Error";
            answer.textContent='';
        }
        
       
       
        else{
       
        
       
           
        if(number.textContent!='DEL'&&number.textContent!='='&&!Number.isNaN(value)){
            
          
            display.textContent+=number.textContent;
            
        }
        else{
            display.textContent+='';
        }
    }
      
        
        
        
            
           
     

    
        
    })
}
)
const backspace=document.querySelector('#backspace');
const display=document.querySelector('.upperdisplay');
    backspace.addEventListener('click',()=>{
        answer.textContent='';
        
        let textValue=display.textContent;
        
        
        display.textContent=textValue.slice(0,-1);
        
        
    })
    
    
    const equals=document.querySelector('#equals');
    equals.addEventListener('click',()=>{
        
       
        answer.textContent='';
        
        
       

        
        
       const displayText=display.textContent;
      
     
       const arrayText=(displayText.split(/[+\-/X]/)).filter((str)=>str!=='')
       const includeArray=['+','/','X','-'];
       const displayTextarray=Array.from(displayText);
       operatorArray=[];
       for(i=0;i<displayTextarray.length;i++){
        for(j=0;j<includeArray.length;j++){
            if(displayTextarray[i]==includeArray[j]){
                operatorArray.push(displayTextarray[i]);
            }
        }
        
       }
       
       
      
       
        
      
    
       
       
       for(i=0;i<operatorArray.length;i++){
       
        
       
           
        
        
        
        
        if(operatorArray[i]=='+'){
            if(i==0){
                value=operation('+',Number(arrayText[0]),Number(arrayText[i+1]));
                
                
            }
            else{
            value=operation('+',value,Number(arrayText[i+1]));
            
        }

            


        }
        else if(operatorArray[i]=='-'){
            if(i==0){
                value=operation('-',Number(arrayText[0]),Number(arrayText[i+1]));
                
            }
            else{
            value=operation('-',value,Number(arrayText[i+1]));
            console.log(value);
            
        }
            
            

        }
        else if(operatorArray[i]=='X'){
            if(i==0){
                value=operation('X',Number(arrayText[0]),Number(arrayText[i+1]));
                
            }
            else{
            value=operation('X',value,Number(arrayText[i+1]));
           
        }
            

        }
        else if(operatorArray[i]=='/'){
            if(i==0){
                value=operation('/',Number(arrayText[0]),Number(arrayText[i+1]));
                
            }
            else{
            value=operation('/',value,Number(arrayText[i+1]));
           
        
    }
            

        }


       }
    
     
        if(Number.isNaN(value)){
            display.textContent="Math Error"
            answer.textContent='';
        }
        else{
        answer.textContent=value;
        }
       
        

       
      
      
       
       
       




    })




       const clear=document.querySelector('#clear');
        clear.addEventListener('click',()=>{
            display.textContent='';
            answer.textContent='';
            value=0;
    })
    


