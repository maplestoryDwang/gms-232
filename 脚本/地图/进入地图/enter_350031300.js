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
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.setPartner(1, 1540618, 80001613, 0);
      cm.setPartner(1, 1540619, 80001613, 0);
      cm.setPartner(1, 1540634, 80001613, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540617, "oid=22407687", -291, 17, 2, -341, -241, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22407687", "summon", 0, 0);
      cm.npc_ChangeController(1540629, "oid=22407688", -55, 17, 3, -105, -5, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22407688", "summon", 0, 0);
      cm.npc_ChangeController(1540630, "oid=22407689", 242, 17, 4, 192, 292, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22407689", 'summon', 0, 0);
      cm.npc_ChangeController(1540631, "oid=22407690", 490, 17, 5, 440, 540, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22407690", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=22407687", "down", -1, 1);
      cm.npc_SetSpecialAction("oid=22407688", "down2", -1, 1);
      cm.npc_SetSpecialAction("oid=22407689", "down2", -1, 1);
      cm.npc_SetSpecialAction("oid=22407690", 'down3', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……呃呃……", 37, 1540629, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("士兵们看起来状况都很不妙！快抓紧时间！", 37, 1540624, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else if (status === V++) {
                cm.setInGameDirectionMode(false, true, false);
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