var value = [];

function validate(n)
{
    if(n.length === undefined)
    {
      n = n.toString();

      for(var i = 0; i < n.length; i++)
      {
          value.push(n.charAt(i));
      }

      n = [];

      for(var i = 0; i < value.length; i++)
      {
        n.push((parseInt(value[i])));
      }
    }

    value = [];

    if(n.length % 2 === 0)
    {
        n = evenNumber(n);
    }

    else
    {
        n = oddNumber(n);
    }
    
    return(n = checkValueBeforeSum(n) % 10 === 0) ? true : false;
}

evenNumber = function (arr)
{
    for(var i = 0; i < arr.length; i++)
    {
       if(i % 2 === 0)
       {
            value.push(arr[i] * 2);
       }

       else
       {
           value.push(arr[i]);
       }
    }

    return value;
};

oddNumber = function (arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(i % 2 !== 0)
        {
            value.push(arr[i] * 2);
        }

        else
        {
            value.push(arr[i]);
        }
    }

    return value;
};

checkValueBeforeSum = function (arr)
{
    value = [];

    for(var i = 0; i < arr.length; i++)
    {
        value.push(arr[i].toString());
    }

    arr = [];

   for(var i = 0; i < value.length; i++)
   {
       if(value[i].length > 1)
       {
          arr.push(parseInt(value[i].charAt(0))+ parseInt(value[i].charAt(1)));
       }

       else
       {
           arr.push(parseInt(value[i]));
       }
   }

   value = 0;

   for (var i = 0; i< arr.length; i++)
   {
       value += arr[i];
   }

   return value;
};

alert(validate()); //<--- add Value //
