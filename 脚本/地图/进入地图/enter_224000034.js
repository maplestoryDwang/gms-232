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
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 222, 400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074105, "oid=2596847", 242, 375, 62, 192, 292, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2596847", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2596848", 60, 437, 46, 10, 110, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2596848", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2596848", 1, 100, 100);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#鬼怪岭#fs15##fn黑体#约好要和朴大爷见面的地方"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#爷爷，这里是哪里啊？", 37, 2074100, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("小可爱，你来图书馆多久了啊？", 37, 2074105, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#有几年了吧？具体我记不太清了……", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你还记得之前你在哪里的吗？", 37, 2074105, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074100, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#这个，不太记得了……", 37, 2074100, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#……我不是个被遗弃的孩子嘛。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这里就是最开始发现你的地方。", 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("是威兹发现了晕倒的你，将你带了回来。", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#什，什么？你说我晕倒在这里吗？", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("而那一天，\r\n正是童话村爆发了重大火灾后的第二天……", 37, 2074105, true, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(224000035, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;