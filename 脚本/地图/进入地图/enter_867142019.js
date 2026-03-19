var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(9400457, "oid=200611", 577, 314, 61, 527, 627, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("在那种情况下，阿特利埃研究员[杰斯]找到了你。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("虽然他也是制造拟真机器人的人员之一，", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("制造拟真机器人过程中发生的", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("看到各种不人道的残酷行为", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("拯救饱受痛苦的拟真机器人，", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("向世界告知阿特利埃隐藏的丑恶面貌。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
                        cm.dispose();
                        cm.warp(867142020, 0, true);
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
}