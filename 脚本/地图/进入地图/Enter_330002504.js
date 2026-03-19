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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530106, "oid=38389376", 715, 50, 2, 665, 765, 1, false, false);
      cm.npc_SetSpecialAction("oid=38389376", 'summon', 0, 0);
      cm.npc_ChangeController(1530110, "oid=38389377", 568, 50, 2, 518, 618, 0, true, false);
      cm.npc_SetSpecialAction("oid=38389377", 'summon', 0, 0);
      cm.npc_ChangeController(1530120, "oid=38389378", 448, 50, 1, 398, 498, 0, true, false);
      cm.npc_SetSpecialAction("oid=38389378", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=38389379", 950, 50, 3, 900, 1000, 1, true, false);
      cm.npc_SetSpecialAction("oid=38389379", "summon", 0, 0);
      cm.npc_ChangeController(1530060, "oid=38389380", 849, 50, 3, 799, 899, 1, true, false);
      cm.npc_SetSpecialAction("oid=38389380", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=38389381", 1050, 50, 3, 1000, 1100, 1, true, false);
      cm.npc_SetSpecialAction("oid=38389381", 'summon', 0, 0);
      cm.npc_ChangeController(1530090, "oid=38389382", 1133, 50, 3, 1083, 1183, 1, true, false);
      cm.npc_SetSpecialAction("oid=38389382", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(1501);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 534, 58);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1667);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……胡克从教务室回来之后，就一直是这个状态。", 37, 1530070, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_02/10", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 715, 58);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1404);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呜呜，爱情根本一文不值。", 37, 1530100, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_02/11", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("可怜，真可怜。", 37, 1530120, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_02/12", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#好吧，要走就走吧。反正我和你这样的女生在一起只是为了玩……那个叫什么来着……是为了engine而已。", 37, 1530100, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH5_02/13", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("应该是enjoy吧，笨蛋。难怪你会被女生抛弃呢。", 37, 1530120, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH5_02/14", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#咳咳，为什么要在我伤口上撒盐……！#fs20#乌#fs22#乌#fs24#乌#fs26#乌！！", 37, 1530100, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH5_02/15", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.forceCompleteQuest(33001);
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.dispose();
                                cm.warp(330001100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;