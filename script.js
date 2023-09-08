// calculator

let displayScreen = document.getElementById('displayScreen');
let currentScreenValue = '';

  
  const equalsFunction = () => {
    try{
        if(currentScreenValue.includes("X")){
            currentScreenValue = eval(multiply());
            if(typeof currentScreenValue === 'number'){
                displayScreen.value = currentScreenValue;
            }
            else{
                displayScreen.value= "Error...";
            }
        }else{
            currentScreenValue = eval(currentScreenValue);
            if(typeof currentScreenValue === 'number'){
                displayScreen.value = currentScreenValue;
            }
            else{
                displayScreen.value= "Error...";
            }
        }
    }catch(error){
        displayScreen.value = "Error...";
    }
  };

  const multiply = () =>{
        let mul = (currentScreenValue.split('X').join('*'));
        return mul;
  }
  
  function display(value){
    currentScreenValue += value;
    displayScreen.value = currentScreenValue;
  };

  function delFunction(){
    currentScreenValue = currentScreenValue.slice(0,-1);
    displayScreen.value = currentScreenValue;
  };

  function resetFunction(){
    currentScreenValue = '';
    displayScreen.value = currentScreenValue;
  }