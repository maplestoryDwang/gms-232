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
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.updateInfoQuest(33213, "area=D1_Z33;x=3;y=1");
      cm.updateInfoQuest(33213, "area=D1_Z33;x=0;y=1");
      cm.updateInfoQuest(33213, "area=D1_Z33;x=0;y=2");
      cm.updateInfoQuest(33214, "ul=1000");
      cm.updateInfoQuest(33214, "ul=801000");
      cm.openUI(254);
      if (cm.getNumberFromQuestInfo(33226, "check1450") > 0) {
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
        cm.sendNormalTalk_Bottom('请重新看看雷达。', 37, 1540451, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("红色标记的部分是我们要去的升降机所在地。\r\n还有，黄色标记的部分好像是拥有出入证的保安负责人所在的地方。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("也就是说，我们必须经过黄点所在的地方，移动到红色标记的地方。\r\n既然已经做了简单的整理。那我们出发吧。", 37, 1540451, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.setNumberForQuestInfo(33226, 'check2050', 1);
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