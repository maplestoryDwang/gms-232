var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      if (cm.getNumberFromQuestInfo(58748, "underCover") >= 5) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(58748, "underCover=5");
      cm.sendNormalTalk_Bottom("(也许是因为没有活动的原因，接见室里空荡荡的。真走运……)", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("(为了以防有人过来，我还是动作快点！)", 57, 0, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}