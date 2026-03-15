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
      if (cm.getMapId() == 303030000) {
        cm.askMenu("准备好了的话，就把目的地告诉我！ \r\n\r\n#b#L0#前往梅花鹿森林。#l\r\n#L1#前往蟠桃高原。#l\r\n#L2#前往桔梗种植园。", 0, 2521001);
      } else {
        cm.askAcceptDecline("你要回陈道人的药材收集场吗？", 0, 2521001);
      }
    } else {
      if (status === V++) {
        if (cm.getMapId() == 303030000) {
          if (selectionLog[1] == 0) {
            cm.sendNormalTalk("好，就去梅花鹿森林。", 0, 2521001, false, true);
          } else if (selectionLog[1] == 1) {
            cm.sendNormalTalk("好，就去蟠桃高原。", 0, 2521001, false, true);
          } else {
            cm.sendNormalTalk("好，就去桔梗种植园。", 0, 2521001, false, true);
          }
        } else {
          cm.dispose();
          cm.warp(303030000, 0, false);
        }
      } else {
        if (status === V++) {
          if (selectionLog[1] == 0) {
            cm.warp(303030100, 0, false);
          } else if (selectionLog[1] == 1) {
            cm.warp(303030300, 0, false);
          } else {
            cm.warp(303030200, 0, false);
          }
          cm.dispose();
        }
      }
    }
  }
}