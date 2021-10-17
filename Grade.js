

const marks = prompt(" Enter your marks ");
scanf("value",marks);
if(marks<0 || marks>100)
{
    prompt("Wrong Entry");
}
else if(marks>=90 && marks<100)
{
    prompt("Grade A");
}
else if(marks>=80 && marks<89)
{
    prompt("Grade B");
}
else if(marks>=70 && marks<79)
{
    prompt("Grade C");
}
else if(marks>=60 && marks<69)
{
    prompt("Grade D");
}
else if(marks<59)
{
    prompt("Grade F");
}

