//start time
//end time
//5:00 PM earliest start
//4:00 AM latest end time

//5p-9p : 8.00/hr
//9p-12:00 : 10.00/hr
//12-4:00 : 12.00/hr

//as a babysitter, if I start at 5pm, end at 6pm, how much do I get paid?

function calculate_pay(start,end){

    var evening = calculateEveningPay(start,end);
    var bedtime = calculateBedtimePay(start,end);
    var morning = calculateMorningPay(start,end);

    return evening + bedtime + morning;


}
function calculateEveningPay(start,end){

    if(start >=9){
        return 0;
    }

    if( (end >= 9) || (end < 5)){
        end = 9;
    }
    var time = end-start;

    return 8 * time;

}
function calculateBedtimePay(start,end){

    if((end < 9) && (end > 5)){
        return 0;
    }

    if(end < 5){
        end = 12;
    }
    if(start < 9){
        start = 9;
    }
    var time = end - start;
    return 10 * time;

}

function calculateMorningPay(start,end){

    if(end > 5){
        return 0;
    }

    if((start >=5) && (start <= 12)){
        start = 0;
    }

    var time = end  - start;
    return 12 * time;
}
