function howManyPalindromes(s)
{
    var result = s.length;
    var k = 0;


    for(var i = 0;i<s.length;i++)
    {
        if(i === s.length-1)
        {
            break;
        }

        for(var j = s.length - 1; j > i; j--)
        {
          k = j;
          if(j===i)
          {
              break;
          }

          for(var b = i; b <= j; b++)
          {
              if(s.charAt(b) === s.charAt(k))
              {
                  k--
              }

              else
              {
                  break;
              }

              if(k <= b)
              {
                  result += 1;
                  break;
              }

          }
        }
    }

    console.log(result);
}

howManyPalindromes('feetea');
