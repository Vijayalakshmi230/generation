let varnum=0;
let vartype='m';

function generation(num,type)
{
    if(num>0)
    {
        if(type='m')
        {
            if(num==1)
            {
              console.log("son");
            }
            else if(num==2)
            {
                console.log("grandson");
            }
            else
            {
                console.log("great grandson");
            }
        }
        else if(num<0)
        {
            if(type=='m')
            {
                if (num==-1)
                {
                    console.log("father");
                }
                else if(num==-2)
                {
                    console.log("grandfather");
                }
                else{
                    console.log("great grandfather");
                }
            }
            else if(type=='f')
            {
                if(num==-1)
                {
                    console.log("daughter");
                }
                else if(num==2)
                {
                    console.log("granddaughter");
                }
                else{
                    console.log("great granddaughter");
                }
            }
            else if(type=='f')
            {
                if(num==-1)
                {
                    console.log("mother");
                }
                else if(num==-2)
                {
                    console.log("grandmother");
                }
                else
                {
                    console.log("great grandmother");
                }
            }
        }

    }
    else if(num==0)
    {
        console.log("me!")
    }
}