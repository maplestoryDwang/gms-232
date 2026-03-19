function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(v, L, x) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else {
    if (status === K++) {
      cm.dispose();
      switch (cm.getMapId()) {
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
        case 105200410:
        case 105200810:
          cm.openNpc(9091021, "BOSS_贝伦入场");
          break;
      }
    }
  }
}