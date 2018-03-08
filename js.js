function formatDuration (seconds)
{
    if(seconds === 0)
    {
        return "now";
    }

    var second = 0;
    var minute = 0;
    var hour = 0;
    var day = 0;
    var year = 0;
    var time = "";

    for( var i = 1; i <= seconds; i++)
    {
        second += 1;
        if(second === 60)
        {
            minute += 1;
            second = 0;
        }

        if(minute === 60)
        {
            hour += 1;
            minute = 0;
        }

        if(hour === 24)
        {
            day += 1;
            hour = 0;
        }

        if(day === 365)
        {
            year += 1;
            day = 0;
        }
    }

    if(year !== 0)
    {
        if(year === 1)
        {
            time += year + " year";
        }

        else
        {
            time += year + " years";
        }
    }

    if(day !== 0)
    {
        if(year !== 0)
        {
            time += ", "
        }
        if(day === 1)
        {
            time += day + " day";
        }

        else
        {
            time += day + " days";
        }

    }

    if(hour !== 0)
    {
        if((day !== 0) || (year !==0))
        {
            time += ", "
        }

        if(hour === 1)
        {
            time += hour + " hour";
        }

        else
        {
            time += hour + " hours";
        }
    }

    if(minute !== 0)
    {
        if((second === 0) && (hour !== 0))
        {
            time += " and "
        }

        else if((hour !== 0) || (day !==0) || (year !==0))
        {
            time += ", "
        }

        if(minute === 1)
        {
            time += minute + " minute";
        }

        else
        {
            time += minute + " minutes";
        }
    }

    if(second !== 0)
    {
        if(minute !== 0)
        {
            time += " and "
        }

        else if((hour !==0) || (day !==0) || (year !==0))
        {
            time += ", ";
        }

        if(second === 1)
        {
            time += second + " second";
        }

        else
        {
            time += second + " seconds";
        }
    }

    return time;
}

console.log(formatDuration());