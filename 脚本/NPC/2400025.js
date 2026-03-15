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
      var w = "可以移动到冒险岛世界的传送门。要去哪里呢？\r\n#b#L0#射手村#l \r\n#b#L1#神木村#l ";
      if (cm.getQuestStatus(40805) > 0) {
        w += "\r\n#b#L2#万神殿#l";
      }
      cm.askMenu(w, 0, 2400025);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 0) {
          cm.sendNormalTalk("移动到射手村。", 1, 2400025, false, true);
        } else if (selectionLog[1] == 1) {
          cm.sendNormalTalk("移动到神木村。", 1, 2400025, false, true);
        } else {
          cm.sendNormalTalk("移动到万神殿。", 1, 2400025, false, true);
        }
      } else {
        if (status === V++) {
          if (cm.getNumberFromQuestCustomData(40068) == 0) {
            cm.forceStartQuest(40068, '1');
          }
          cm.dispose();
          if (selectionLog[1] == 0) {
            cm.warp(100000000, 2, false);
          } else if (selectionLog[1] == 1) {
            cm.warp(240000000, 2, false);
          } else {
            cm.warp(400000000, 0, false);
          }
        }
      }
    }
  }
}