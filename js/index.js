
document.getElementById('text-style').addEventListener('click', function(){
    styleColor('text-style');
})

document.getElementById('blog-style').addEventListener('click', function(){
    styleColor('blog-style');
})

function styleColor(e){
    const idv = document.getElementById(e);
    idv.style.color = 'rgb(220,20,60)';
}

document.getElementById('players-id').style.backgroundColor = 'rgb(230,230,250)';


document.getElementById('add-new').addEventListener('click', function(){
  
  createLiList();
  inputNumber();
})

function createLiList(){
    const list =  document.getElementById('list');
    // const li = document.createElement('li');
    const inputValue = document.createElement('input');
    const buttonCreate = document.createElement('button');
    inputValue.value = ' ';
    buttonCreate.innerText = 'Submit Now';
    buttonCreate.style.color = 'red';
        list.appendChild(buttonCreate);
        list.appendChild(inputValue);
    
}

function inputNumber(){
    let equalValue = 5;
    const number = document.getElementById('input-value');
    const numbers = number.value;
    const incrementValue = parseFloat(numbers) + 1;
    number.value = incrementValue;
    if( incrementValue == 5){
        
        document.getElementById('add-new').disabled = true;
        document.getElementById('warning-p').style.display = 'block';
        console.log(' click this 5 time over');
    }
    // else{
    //     if(incrementValue == 5){
        
        
    // } 

    else{
        // document.getElementById('color-red').innerText.style.display ='block';
        
            
        
    }
    
}

