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
      cm.useItem(2210132, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1530270, "oid=37594418", 357, 20, 3, 307, 407, 0, true, false);
      cm.npc_SetSpecialAction("oid=37594418", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=37594419", 457, 20, 9, 407, 507, 0, true, false);
      cm.npc_SetSpecialAction("oid=37594419", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##r好痛——#k", 1);
          cm.effect_Voice("Voice2.img/Friends/GHOST/4", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_NormalSpeechBalloon(" !!", 1, 0, 0, 3000, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon(" 呀, 不要开玩笑！", 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你在说什么啊，我们什么都没做啊？快去快回。", 37, 1530270, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我好想上厕所，你快去啊，我们才能早点回家。", 37, 1530280, true, true);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
                      cm.setAmbience("Ambience.img/wind", 100, 60);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;