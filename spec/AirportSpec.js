describe("Airport", function(){

  var airport;
  var plane;
  var dummyWeather;

  beforeEach(function(){
    plane = new Plane();
    // weather = new Weather();
    dummyWeather = jasmine.createSpyObj("Weather", ['stormy']);
    airport = new Airport(dummyWeather);
  });

  describe("good conditions", function(){
    beforeEach(function(){
      // spyOn(airport._weather, 'stormy').and.returnValue(false);
      dummyWeather.stormy.and.returnValue(false);
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

  describe("stormy conditions", function(){
    beforeEach(function(){
      spyOn(weather, 'stormy').and.returnValue(true);
    });

    it("does not land a plane", function(){
      expect(airport.land(plane)).toThrowError("Cannot land due to stormy conditions!");
    });

    // it('does not allow take off', function(){
    //   spyOn(weather, 'stormy').and.returnValue(false);
    //   airport.land(plane);
    //   spyOn(weather, 'stormy').and.returnValue(true);
    //   airport.take_off(plane);
    //   expect(airport.planes()).not.toContain(plane);
    // });
  });

});
