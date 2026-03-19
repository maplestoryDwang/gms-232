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
      cm.npc_ChangeController(1540719, "oid=37137", 1226, 61, 14, 1176, 1276, 1, false, 0, false);
      cm.updateInfoQuest(33213, "area=D1_Z05;x=3;y=0");
      cm.updateInfoQuest(33213, "area=D1_Z05;x=3;y=1");
      cm.openUI(254);
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      if (cm.getNumberFromQuestInfo(33226, 'check1450') == 0) {
        cm.setPartner(1, 1540733, 80001594, 0);
        cm.setPartner(1, 1540734, 80001595, 0);
        cm.setPartner(1, 1540735, 80001596, 0);
      }
      cm.onSetBackEffect('bh_1300_1', 1, 0, 0, 0);
      cm.地图特效_开关落脚点([18], [1]);
      cm.onSetBackEffect('bh_1300_2', 1, 0, 0, 0);
      cm.地图特效_开关落脚点([17], [1]);
      cm.onSetBackEffect("bh_1300_3", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([16], [1]);
      cm.onSetBackEffect("bh_1300_4", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([15], [1]);
      if (cm.getNumberFromQuestInfo(33226, "check1300") > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 1370, 49);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你及时回来啦。升降机就在那里。\r\n我们去确认一下受损的安全芯片中有没有可以用的吧。", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 1200, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.setNumberForQuestInfo(33226, "check1300", 1);
                  }
                }
              }
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