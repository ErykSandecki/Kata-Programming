squareRootMe = function (sqrt)
{
    var i = 1;

    while(true)
    {
        if(i * i === sqrt)
        {
            return i;
        }

        else if(i * i > sqrt)
        {
            return "Not square";
        }

        i++;
    }
};

alert(squareRootMe(5477));
