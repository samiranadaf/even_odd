/*function evenOdd(number){
    if(number % 2 === 0 )
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}
evenOdd(23);*/
    function is_even_recursion(number)  
    {  
      if (number < 0)   
      {  
        number = Math.abs(number);  
      } 
      if (number===0)   
      {  
        return true;  
      }  
      if (number===1)   
      {  
        return false;  
      }  
      else   
      {  
        number = number % 2;  
        return is_even_recursion(number);  
      }  
    }  
    console.log(is_even_recursion(234)); //true  
    console.log(is_even_recursion(45)); // false  
    console.log(is_even_recursion(-85)); // false  