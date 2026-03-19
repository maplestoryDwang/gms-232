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
      cm.npc_ChangeController(1530160, "oid=39098530", 876, 58, 6, 826, 926, 1, true, false);
      cm.npc_SetSpecialAction("oid=39098530", "summon", 0, 0);
      cm.npc_ChangeController(1530150, "oid=39098531", 1031, -40, 1, 981, 1081, 1, true, false);
      cm.npc_SetSpecialAction("oid=39098531", 'summon', 0, 0);
      cm.npc_ChangeController(1530210, "oid=39098532", 670, 0, 5, 620, 720, 0, false, false);
      cm.npc_SetSpecialAction("oid=39098532", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=39098531", 'sick', -1, 1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 800, 58);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(383);
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
              cm.sendNormalTalk_Bottom("你又有哪里不舒服？要不要给你红药水？", 37, 1530160, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我…我的心不舒服…总想流眼泪……", 37, 1530210, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=39098532", "cry", -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39098530"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39098531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
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
                          cm.inGameDirectionEvent_Monologue("#fs18#  #fMob/8870000.img/stand/0# #fNpc/3000131.img/stand/0# #fMob/9300711.img/stand/0# #fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――――――――――――――――――――――\r\n#fs18##fn黑体# 医务室老师角色 #fn黑体#：希拉\r\n#fs18##fn黑体# 体育老师角色 #fn黑体#：麦格纳斯\r\n#fs18##fn黑体# 爱白会会长角色 #fn黑体#：艾菲尼娅", 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(330002517, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;