describe('countUp', function() {
    it('counts up if both inputs are the same', function() {
        expect(countUp(5,5)).to.eql([5]);
    });

    it('counts up if maxNum is higher than interval', function() {
        expect(countUp(5,30)).to.eql([5,10,15,20,25,30]);
    });

    it('if multiple does not divide maxNum then it counts up to GCM that <= maxNum', function() {
        expect(countUp(7,50)).to.eql([7,14,21,28,35,42,49]);
    });

    it('if maxNum is smaller than the multiple it works anyways bwahahah', function() {
        expect(countUp(30, 5)).to.eql([5,10,15,20,25,30]);
    });

    it("if multiple or maxNum is 0 then it returns an error message", function() {
        expect(countUp(0,30)).to.eql(["Positive integers only please!"]);
    });
});
