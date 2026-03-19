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
      cm.Hidden_background("alika01", 0);
      cm.Hidden_background("alika02", 0);
      cm.Hidden_background("up00", 0);
      cm.playerMessage(-1, "跟着怪物军团移动到树上吧。");
      cm.setPartner(1, 9400646, 80011692, 0);
      cm.forceStartQuest(64088, '');
      cm.sendNormalTalk_Bottom("#b艾丽卡，你能跳过去吗？", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#我会试试的！", 37, 9400580, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(64088, '');
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;