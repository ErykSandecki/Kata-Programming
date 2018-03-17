alphabetSmall = [];
alphabetHigh = [];
var checkSmallLetter = false;
var checkHighLetter = false;

function genCharArraySmall(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; i++) {
        alphabetSmall.push(String.fromCharCode(i));
    }
    return a;
}



function genCharArrayHigh(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; i++) {
        alphabetHigh.push(String.fromCharCode(i));
    }
    return a;
}


function findMissingLetter(array)
{
    var k = 0;
    var tabLetter = [];
    if(!Array.isArray(array))
    {
        for(var i = 0; i<arguments.length;i++)
        {
            tabLetter.push(arguments[i]);
        }

        array = tabLetter;
    }

    console.log(array);

    genCharArrayHigh('A', 'Z');
    genCharArraySmall('a', 'z');

    for(var i = 0; i < alphabetHigh.length;i++)
    {
        if(array[0] === alphabetHigh[i])
        {
            checkHighLetter = true;
            break;
        }
    }

    for(var i = 0; i < alphabetSmall.length;i++)
    {
        if(array[0] === alphabetSmall[i])
        {
            checkSmallLetter = true;
        }
    }

    if(checkHighLetter)
    {
        for(var i = 0; i<alphabetHigh.length;i++)
        {
            if(array[0] === alphabetHigh[i])
            {
                for(var j = i; j<alphabetHigh.length;j++)
                {
                    if(array[k] !== alphabetHigh[j])
                    {
                        return alphabetHigh[j];
                    }
                    k++;
                }
            }
        }
    }

    else
    {
        for(var i = 0; i<alphabetSmall.length;i++)
        {
            if(array[0] === alphabetSmall[i])
            {
                for(var j = i; j<alphabetSmall.length;j++)
                {
                    if(array[k] !== alphabetSmall[j])
                    {
                        return alphabetSmall[j];
                    }
                    k++;
                }
            }
        }
    }


}

console.log(findMissingLetter('p','q','r','s','u'));
