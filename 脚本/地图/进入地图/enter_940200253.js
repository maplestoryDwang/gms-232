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
      cm.forceStartQuest(34472, '');
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003350, "oid=1832856", 607, 473, 19, 557, 657, 0, true, false);
      cm.npc_SetSpecialAction("oid=1832856", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 480, 500);
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
            cm.sendNormalTalk_Bottom("#b(伴随着哐当一声，石头破裂，而后出现在眼前的却是一个洞穴。)#k", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#啊，这好像是通往池塘下面的通道啊？", 37, 3003301, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#虽然没有水流出现……不过如果沿着这条路走下去，说不定就能找到水源堵塞的地方了。", 37, 3003301, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1832856", 1, 400, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(450005400, 1, true);
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