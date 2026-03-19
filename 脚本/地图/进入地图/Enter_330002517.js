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
      cm.npc_ChangeController(1530080, "oid=39104217", 131, 38, 3, 81, 181, 0, true, false);
      cm.npc_SetSpecialAction("oid=39104217", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=39104218", 231, 38, 5, 181, 281, 0, true, false);
      cm.npc_SetSpecialAction("oid=39104218", "summon", 0, 0);
      cm.npc_ChangeController(1530106, "oid=39104219", 331, 38, 7, 281, 381, 0, false, false);
      cm.npc_SetSpecialAction("oid=39104219", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=39104220", 431, 38, 6, 381, 481, 1, true, false);
      cm.npc_SetSpecialAction("oid=39104220", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=39104221", 531, 38, 12, 481, 581, 1, true, false);
      cm.npc_SetSpecialAction("oid=39104221", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 331, 38);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……你怎么又成了乌贼啊？", 37, 1530120, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH5_07/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("据说他又被女生甩掉了。", 37, 1530110, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_07/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('真是个傻瓜。', 37, 1530090, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH5_07/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你还是乖乖做个单身吧，怎么样？", 37, 1530080, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_07/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你们这些家伙，不要轻视男人的纯情~~！", 37, 1530100, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_07/5", 100);
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
                            cm.inGameDirectionEvent_Monologue("#fs18#   #fNpc/1101003.img/stand/0#  #fNpc/1101004.img/stand/0#  #fNpc/1101005.img/stand/0#  #fNpc/1101006.img/stand/0#  #fNpc/1101007.img/stand/0#  #fn黑体#   Casting\r\n#fs18##fn黑体#―――――――――――――――――――――――――――――――――――――――――\r\n#fs18##fn黑体# 剑道部部长角色       #fn黑体#：米哈尔\r\n#fs18##fn黑体# 推理小说部长 角色#fn黑体#：奥兹\r\n#fs18##fn黑体# 射箭部部长角色       #fn黑体#：伊莉娜\r\n#fs18##fn黑体# 局外人角色        #fn黑体#：伊卡尔特\r\n#fs18##fn黑体# 跆拳道部部长角色    #fn黑体#：胡克", 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330002518, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;