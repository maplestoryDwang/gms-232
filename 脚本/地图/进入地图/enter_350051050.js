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
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540733, 80001594, 0);
      cm.setPartner(1, 1540734, 80001595, 0);
      cm.setPartner(1, 1540735, 80001596, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.updateInfoQuest(33213, "area=D1_Z05;x=0;y=0");
      cm.updateInfoQuest(33214, "ul=201");
      cm.openUI(254);
      if (cm.getNumberFromQuestInfo(33225, "say1") > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你看到左上方的#b雷达#k了吗？\r\n那是根据从弗朗西斯那里获得的设计图制作出来的。", 37, 1540451, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("好像能够正常启动。\r\n雷达内用#r红色#k标记的地方是#r升降机#k所在的位置。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("由于时间紧迫，我没有更新所有结构。\r\n我们只能边走边进行记录了。\r\n好了，我们快移动吧。", 37, 1540451, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.setNumberForQuestInfo(33225, "say1", 1);
              cm.dispose();
            }
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