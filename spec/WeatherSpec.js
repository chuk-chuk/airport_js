describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("can be calm", function (){
    spyOn(Math,'random').and.returnValue(0.49);
    expect(weather.stormy()).toEqual(false);
  });

  it("can be stormy", function (){
    spyOn(Math,'random').and.returnValue(0.51);
    expect(weather.stormy()).toEqual(true);
  });

});
