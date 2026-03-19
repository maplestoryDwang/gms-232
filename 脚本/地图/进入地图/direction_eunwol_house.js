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
      cm.npc_ChangeController(3002013, "oid=254130", -3, 13, 25, -53, 47, 1, false, 0, false);
      cm.updateInfoQuest(38903, '');
      cm.forceStartQuest(38903, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.npc_ChangeController(3002003, "oid=110527237", -512, 5, 4, -562, -462, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110527237", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("隐月，大事不好！", 1, 3002003, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("……嗯？我现在的情况也不算是什么小事。还有什么大事啊？", 3, 3002003, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('村里……村里下雨了！', 1, 3002003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("下雨？回想起来，我在这里确实好像没见过下雨。不过这又算什么大事呢？水坝要垮塌了吗？", 3, 3002003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("不是那个问题！下雨，我们村里下雨……不，详细的情况，最好让村长来跟你解释。现在不是站着发呆的时候！你快去找村长！", 1, 3002003, true, true);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=110527237");
                  cm.npc_LeaveField("oid=110527237");
                  cm.updateInfoQuest(38019, '');
                  cm.forceStartQuest(38019, '');
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(410000001, 0, false);
                } else {
                  cm.dispose();
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