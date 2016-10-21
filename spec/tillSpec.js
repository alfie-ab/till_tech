describe('Till', function() {

  var till;

  beforeEach(function() {
    till = new Till();
  });

  it('retains a users order', function(){
    expect(till.basket).toEqual([])
  });

  it('allows user to make an order', function(){
    till.order("Cafe Latte")
  });

});
