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
      cm.removeAll(4000890);
      cm.setNumberForQuestInfo(33142, 'howto', 0);
      cm.setNumberForQuestInfo(33142, "box2", 0);
      cm.onHireTutorById(0, 80001600, 350013100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540500, "oid=12996890", -1770, 174, 142, -1820, -1720, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12996890", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("啊，我忘记了！你是谁？\r\n还是第一次有其他人来到这里呢。", 37, 1540500, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我？\r\n我负责守护奥尔卡的记忆。\r\n如果有怪物想要污染记忆，我就把它们~~全部清理掉。", 37, 1540500, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你想看奥尔卡的记忆？\r\n……本来这么做是不行的，但……我正好没事做。所以，我就为你介绍一下吧。", 37, 1540500, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=12996890");
                cm.npc_LeaveField("oid=12996890");
                cm.setInGameDirectionMode(false, true, false);
                cm.onHireTutorById(1, 80001600, 350013100);
                cm.dispose();
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