//start time
//end time
//5:00 PM earliest start
//4:00 AM latest end time

//5p-9p : 8.00/hr
//9p-12:00 : 10.00/hr
//12-4:00 : 12.00/hr

//as a babysitter, if I start at 5pm, end at 6pm, how much do I get paid?

// 4*8


describe('the babysitter tests',function(){

    it('returns 8',function(){
        expect(calculate_pay(5,6)).toBe(8);
    });

    it('returns 16 if duration is for 5p-7p',function(){
        expect(calculate_pay(5,7)).toBe(16);
    });

    it('returns 10 for 9p-10p',function(){
        expect(calculate_pay(9,10)).toBe(10);
    });

    it('returns 18 for 8p-10p',function(){
        expect(calculate_pay(8,10)).toBe(18);
    });

    it('returns 12 for 12p-1a',function(){
        expect(calculate_pay(12,1)).toBe(12);
    });

    it('returns 110 for 5p-4a',function(){
        expect(calculate_pay(5,4)).toBe(110);
    });

});


