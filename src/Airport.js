function Airport(weather){
  this._planes = [];
  this._weather = weather;
}

Airport.prototype.planes = function (){
  return this._planes;
};

Airport.prototype.land = function (plane) {
  if(this._weather.stormy) {
    throw 'Cannot land due to stormy conditions';
  }
  else {
    this._planes += plane;
  }
};

Airport.prototype.take_off = function(plane) {
  this._planes -= plane;
};
