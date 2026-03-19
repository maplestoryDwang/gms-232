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
      cm.npc_ChangeController(1540487, "oid=32973", -87, 95, 2, -109, -71, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -43, 25);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呼，真是吓死人了……我们看到的究竟是什么啊？", 37, 1540503, false, true);
            cm.effect_Voice("Voice3.img/BlackHeaven/3_7/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("巨型粉碎机，无数的机械士兵……", 37, 1540504, true, true);
              cm.effect_Voice("Voice3.img/BlackHeaven/3_7/2", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不，不仅如此。还有#r更恐怖的东西#k。", 37, 1540502, true, true);
                cm.effect_Voice("Voice3.img/BlackHeaven/3_7/3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……我们快回到希纳斯女皇那里。", 37, 1540504, false, true);
                    cm.effect_Voice("Voice3.img/BlackHeaven/3_7/4", 100);
                  } else {
                    if (status === V++) {
                      cm.npcMove(1540487, 50, 50, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npcMove(1540487, -3000, -3000, 20000);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                          cm.forceCompleteQuest(33137);
                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(350012000, 0, true);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;