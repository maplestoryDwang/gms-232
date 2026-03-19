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
      cm.sendNormalTalk("附近的黑暗气息很浓。是什么原因呢？", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这是古瓦洛的残渣……？！", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("消灭所有古瓦洛的残渣，前往右方的传送口吧。感到有种莫名其妙的吸引。", 17, 0, true, true);
        } else if (status === V++) {
          cm.forceCompleteQuest(25649);
          cm.dispose();
          cm.warp(930020001, 0, false);
        }
      }
    }
  }
}