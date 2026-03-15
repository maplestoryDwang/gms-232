var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(k, A, o) {
  if (status == 0 && k == 0) {
    cm.dispose();
    return;
  }
  if (k == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = o;
  var Y = -1;
  if (status <= Y++) {
    cm.dispose();
  } else {
    if (status === Y++) {
      cm.dispose();
      switch (cm.getMapId()) {
        case 105200100:
        case 105200410:
          cm.openNpc(9091021, 'BOSS_贝伦入场');
          break;
        case 105200110:
        case 105200510:
          cm.openNpc(9091021, "BOSS_半半入场");
          break;
        case 105200210:
        case 105200610:
          cm.openNpc(9091021, "BOSS_皮埃尔入场");
          break;
        case 105200310:
        case 105200710:
          cm.openNpc(9091021, "BOSS_血腥女王入场");
          break;
      }
    } else {
      cm.dispose();
    }
  }
}