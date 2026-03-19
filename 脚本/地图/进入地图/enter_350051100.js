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
      cm.npc_ChangeController(1540718, "oid=36876", 1615, 61, 8, 1565, 1665, 1, false, 0, false);
      cm.updateInfoQuest(33213, "area=D1_Z05;x=1;y=0");
      cm.updateInfoQuest(33214, "ul=203");
      cm.openUI(254);
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540733, 80001594, 0);
      cm.setPartner(1, 1540734, 80001595, 0);
      cm.setPartner(1, 1540735, 80001596, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      if (cm.getQuestStatus(33225) > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("啊，我刚刚没有说清楚，如果要使用这内部的升降机，需要用到获得认可的#b安全芯片#k。", 37, 1540451, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("好像可以使用智能机器人内置的安全芯片，所以请消灭智能机器人，搜集10个安全芯片吧。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.forceStartQuest(33225, '');
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;