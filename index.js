describe('index.js', function() {
    describe('distanceFromHqInBlocks()', function() {
      it('returns a distance in blocks', function() {
        // Test case: Checks if the function returns a distance of 1 block for input 43
        expect(distanceFromHqInBlocks(43)).to.equal(1);
      });
  
      it('returns a distance in blocks', function() {
        // Test case: Checks if the function returns a distance of 8 blocks for input 50
        expect(distanceFromHqInBlocks(50)).to.equal(8);
      });
  
      it('calculates distances below 42nd street', function() {
        // Test case: Checks if the function calculates distances below 42nd street correctly (e.g., 34)
        expect(distanceFromHqInBlocks(34)).to.equal(8);
      });
    });
  
    describe('distanceFromHqInFeet()', function() {
      it('returns a distance in feet', function() {
        // Test case: Checks if the function returns a distance of 264 feet for input 43
        expect(distanceFromHqInFeet(43)).to.equal(264);
      });
  
      it('returns a distance in feet', function() {
        // Test case: Checks if the function returns a distance of 2112 feet for input 50
        expect(distanceFromHqInFeet(50)).to.equal(2112);
      });
  
      it('calculates distances below 42nd street', function() {
        // Test case: Checks if the function calculates distances below 42nd street correctly (e.g., 34)
        expect(distanceFromHqInFeet(34)).to.equal(2112);
      });
    });
  
    describe('distanceTravelledInFeet()', function() {
      it('returns the distance travelled in feet', function() {
        // Test case: Checks if the function returns the correct distance traveled in feet (e.g., 43 to 48)
        expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
      });
  
      it('returns a distance in feet', function() {
        // Test case: ...
        expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
      });
  
      it('returns distance when destination is below distance', function() {
        // Test case: ...
        expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
      });
    });
  
    describe('calculatesFarePrice(start, destination)', function() {
      it('gives customers a free sample', function() {
        // Test case: ...
        expect(calculatesFarePrice(43, 44)).to.equal(0);
      });
  
      it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
        // Test case: ...
        expect(calculatesFarePrice(34, 32)).to.equal(2.56);
      });
  
      it('charges 25 dollars for a distance over 2000 feet', function() {
        // Test case: ...
        expect(calculatesFarePrice(50, 58)).to.equal(25);
      });
  
      it('does not allow rides over 2500 feet', function() {
        // Test case: ...
        expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
      });
    });
  });
  