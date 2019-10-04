//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final MidTerm points: "));

floatFinPts = parseFloat(prompt("Please enter final points: " ));

floatTotalPts = parseFloat(??);

intGradeOption = parseFloat(prompt("Enter 1 for pass/fail grading option, enter 2 for regular grading option: "));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "pass";
    }
    else{
        stringFinalGrade = "fail";
    }
}
else if (intGradeOption===2)
{
    switch(floatTotalPts)
    {
        case floatTotalPts>=90:
            stringFinalGrade = "A";
        case floatTotalPts>=80&&floatTotalPts<90:
            stringFinalGrade =  "B";
        case floatTotalPts>=70&&floatTotalPts<80:
            stringFinalGrade = "C";
        case floatTotalPts>=60&&floatTotalPts<70:
            stringFinalGrade = "D";
        case floatTotalPts<60:
            stringFinalGrade = "F";

    }
    
}







alert("Your final grade is: " +stringFinalGrade);
