describe("Airport", function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("lands a plane", function(){
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('instructs a plane to take off', function(){
    airport.land(plane);
    airport.take_off(plane);
    expect(airport.planes()).not.toContain(plane);
  });

});
