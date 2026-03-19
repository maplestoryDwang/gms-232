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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1540472, "oid=33440", 5073, 208, 111, 5023, 5123, 0, false, 0, false);
      cm.npc_ChangeController(1540472, "oid=33441", 5024, 208, 112, 4974, 5074, 1, false, 0, false);
      cm.npc_ChangeController(1540472, 'oid=33442', 4867, 208, 113, 4817, 4917, 0, false, 0, false);
      cm.npc_ChangeController(1540472, "oid=33443", 4089, 208, 102, 4039, 4139, 0, false, 0, false);
      cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540500, "oid=12999055", -2050, 191, 257, -2100, -2000, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12999055", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001600, 350013100);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你不走吗？\r\n刚刚所看的记忆并不是你要找的记忆？", 37, 1540500, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这里的怪物太多了，想要看到记忆有些困难。", 37, 1540500, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不过有我在，一切都会没事吧。好了，我们走吧。", 37, 1540500, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=12999055");
                cm.npc_LeaveField("oid=12999055");
                cm.setInGameDirectionMode(false, true, false);
                cm.onHireTutorById(1, 80001600, 350013200);
                cm.updateInfoQuest(33159, "map=200");
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