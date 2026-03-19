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
      cm.forceStartQuest(58772, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("#face0#这是第一个试炼。\r\n试炼内容是穿过这片竹林，到达目的地。", 37, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#通关提示是#r摒弃执念！#k", 37, 9111018, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("摒弃……执念？", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#这竹林像迷宫一样非常复杂，在里面很容易迷路，但#b只要你摒弃执念，就可以发现出路。#k", 37, 9111018, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('嗯……', 57, 0, true, true);
            } else if (status === V++) {
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}