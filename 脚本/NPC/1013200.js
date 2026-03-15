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
      if (cm.getMapId() != 900020110) {
        var w = cm.getPlayer().getPosition();
        if (Math.abs(w.x - 1922) > 100) {
          cm.getTopMsgFont('再靠近一些', 3, 20, 20, 0);
          cm.dispose();
          return;
        }
      } else {
        cm.npc_ChangeController(1013200, "oid=207407", 943, -265, 70, 893, 993, 1, false, 0, false);
        cm.setStandAloneMode(false);
        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/8/0"]);
        if (cm.getItemQuantity(4032449) == 0) {
          cm.gainItem(4032449, 1);
          cm.gainItem(1372005, 1);
        }
      }
    } else if (status === V++) {
      cm.forceStartQuest(22015, '');
      cm.updateInfoQuest(22014, "egg=o;mo30=o;mo40=o;mo50=o;mo41=o;mo60=o;mo42=o");
      cm.forceCompleteQuest(22015);
      cm.playerMessage(5, "救出了小猪。");
      cm.sendNormalTalk("小猪已经带出来了。", 16, 1013200, false, true);
      cm.dispose();
    }
  }
}