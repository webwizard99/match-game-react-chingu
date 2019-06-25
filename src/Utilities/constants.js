const constants = (function(){
  const matchDelay = 500;

  return {
    getMatchDelay: function() {
      return matchDelay;
    }
  }
}());

export default constants;