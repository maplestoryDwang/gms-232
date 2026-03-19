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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530030, "oid=39091077", 1011, 179, 7, 961, 1061, 1, true, false);
      cm.npc_SetSpecialAction("oid=39091077", "summon", 0, 0);
      cm.npc_ChangeController(1530050, "oid=39091078", 1122, 0, 1, 1072, 1172, 1, true, false);
      cm.npc_SetSpecialAction("oid=39091078", "summon", 0, 0);
      cm.npc_ChangeController(1530130, "oid=39091079", 537, 174, 5, 487, 587, 0, true, false);
      cm.npc_SetSpecialAction("oid=39091079", "summon", 0, 0);
      cm.npc_ChangeController(1530140, "oid=39091080", 668, 174, 6, 618, 718, 1, true, false);
      cm.npc_SetSpecialAction("oid=39091080", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 900, 179);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(451);
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
              cm.sendNormalTalk_Bottom("老师也真是的……只要有开始，肯定就会有结束啊。", 37, 1530050, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不过，#b如果有结束，肯定会有新的开始#k，不是吗？", 37, 1530030, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("话说，那些家伙怎么不知道疲惫啊。", 37, 1530030, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, 600, 179);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1998);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我究竟要跟你说多少次啊？我不喜欢你！你长得丑，腿也很短！", 37, 1530130, false, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_06/1", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#呃呃，太过分了~！！", 37, 1530140, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=39091079", -1);
                              cm.npc_SetSpecialAction("oid=39091080", "die", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fs18#  #fNpc/1033230.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 偶像角色 #fn黑体#：奥尔卡", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs18#  #fNpc/1033223.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 人偶狂热者角色 #fn黑体#：弗朗西斯", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.npc_setForceFlip("oid=39091079", 0);
                                        cm.dispose();
                                        cm.warp(330002516, 0);
                                        cm.inGameDirectionEvent_SetHideEffect(0);
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