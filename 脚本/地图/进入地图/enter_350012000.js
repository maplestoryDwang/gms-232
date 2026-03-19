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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540451, "oid=12990656", -1881, -350, 28, -1931, -1831, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=12990656", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=12990657", -1781, -350, 29, -1831, -1731, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=12990657", 'summon', 0, 0);
      cm.npc_ChangeController(1540462, "oid=12990658", -1681, -350, 30, -1731, -1631, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=12990658", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -2059, -1450);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("SoundEff.img/blackHeaven/signal_l", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(502);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 150, -2059, -250);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.addPopupSay(1540451, 2500, "你来啦. \r\n你来这里的途中, 没有发生什么事吧?", '', 0);
                  cm.addPopupSay(1540451, 2500, "详细的情况我们边走边说吧. \r\n因为女皇正在等你呢. ", '', 0);
                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                    cm.effect_Text(["#fn黑体##fs18#作战开始4天前   #fs15##fn黑体#女皇之岛——圣地"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350012010, 0, true);
                      cm.setInGameDirectionMode(false, true, false);
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