var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var O = [32663, 32664, 32665, 32698, 32990];
      var b = 0;
      for (var V = 0; V < O.length; V++) {
        if (cm.isQuestFinished(O[V])) {
          b++;
        }
      }
      cm.setNumberForQuestInfo(32666, 'clear', b);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;