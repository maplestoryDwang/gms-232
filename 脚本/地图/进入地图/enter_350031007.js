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
      cm.npc_ChangeController(1540634, "oid=22401523", 5, 17, 3, -45, 55, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22401523", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=22401523", "down", -1, 1);
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
            cm.sendNormalTalk_Bottom("呃……呃呃……", 37, 1540619, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("啊！如果再这样下去，我就要窒息了。必须让他尽快振作起来！", 37, 1540624, true, true);
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