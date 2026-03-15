var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (!cm.isQuestActive(41209)) {
    cm.sendNormalTalk("（一只孤零零的猫。）", 2, 2450017, false, true);
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("终于抓到你了，你这家伙！再也逃不掉了吧！", 2, 2450019, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("喵喵~喵喵~", 0, 2450019, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("来，这次真的要回家了。家……你命还真好，至少还有个家。", 2, 2450019, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(41219, '3');
          cm.updateInfoQuest(41209, "clear=clear");
          cm.dispose();
        }
      }
    }
  }
}