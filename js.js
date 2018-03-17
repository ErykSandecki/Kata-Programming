var tabAccessLetter = [];
var tabNumber = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
var result=[];
function originalNumber(s)
{
    for(var i = 0 ; i < s.length; i++)
    {
        tabAccessLetter.push(true);
    }

    while(checkBlockAllLetter())
    {
        for(var j = 0; j<tabNumber.length;j++)
        {
            for(var i = 0; i < s.length;i++)
            {
                if(checkValueZero(s,tabNumber[j],j))
                {
                    break;
                }
            }
        }
    }

    return result.sort();
}

checkBlockAllLetter = function ()
{
  for(var i = 0; i<tabAccessLetter.length;i++)
  {
      if(tabAccessLetter[i])
      {
          return true;
      }
  }

  return false;
};

checkValueZero = function (text, textValue,number)
{
    var posTab = [];
    for(var i = 0; i<textValue.length;i++)
    {
        posTab.push(-1);
    }

    for(var i = 0 ; i < textValue.length; i++)
    {
        for(var j = 0; j < text.length;j++)
        {
            if((textValue.charAt(i) === text.charAt(j)) && (tabAccessLetter[j]))
            {
                posTab[i] = j;
                tabAccessLetter[j] = false;
                break;
            }
        }

    }

    for(var i = 0; i < posTab.length; i++)
    {
        if(posTab[i] === -1)
        {
            for(var j = 0; j < posTab.length;j++)
            {
                tabAccessLetter[posTab[j]] = true;
            }

            return  false;
        }


        if(i === posTab.length-1)
        {
            result.push(number);

            return true;
        }


    }

};

console.log(originalNumber("RHIIHTOOIIZETEXGRVENOUNEEENFEOWTSREVESFN"));

