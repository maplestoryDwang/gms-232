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
      cm.npc_ChangeController(9310567, "oid=96156", 592, -44, 64, 542, 642, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96157", 434, -45, 60, 384, 484, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96158", 324, -45, 60, 274, 374, 0, false, false);
      cm.npc_ChangeController(9310567, 'oid=96159', 201, -45, 60, 151, 251, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96160", 88, -43, 58, 38, 138, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96161", -430, 226, 17, -480, -380, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96162", 647, 226, 5, 597, 697, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96163", 356, 226, 14, 306, 406, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96164", 1220, -234, 55, 1170, 1270, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96165", 1031, -234, 55, 981, 1081, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96166", 814, -234, 55, 764, 864, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96167", 913, 226, 19, 863, 963, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96168", 393, -45, 60, 343, 443, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96169", 48, -42, 56, -2, 98, 0, false, false);
      cm.npc_ChangeController(9310567, 'oid=96170', 584, -44, 64, 534, 634, 1, false, false);
      cm.npc_ChangeController(9310567, "oid=96171", -111, 226, 8, -161, -61, 0, false, false);
      cm.npc_ChangeController(9310567, "oid=96172", -252, -45, 43, -302, -202, 0, false, false);
      cm.npc_ChangeController(9310564, "oid=39340563", 522, -180, 80, 472, 572, 1, false, false);
      cm.npc_SetSpecialAction("oid=39340563", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -868, 184);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 1100);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=39340563", "say", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_NormalSpeechBalloon("#fs20##e救命啊！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9310564, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 184);
              cm.effect_NormalSpeechBalloon("嗯？我刚才好像听到了什么声音？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=39340563", "say", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                  cm.effect_NormalSpeechBalloon("#fs20##e这里！！", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 9310564, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_NormalSpeechBalloon("#fs20##e在这里，这里！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9310564, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 500, -116);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=39340563", 'say', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                          cm.effect_NormalSpeechBalloon("#fs20##e我因为周围的#o9600313#，晚上都睡不了觉啊！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9310564, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 400, 234);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b(消灭100个周围的僵尸后，再和他对话吧。)", 57, 0, false, true);
                              } else if (status === V++) {
                                cm.forceStartQuest(62131, '');
                                cm.updateInfoQuest(62110, "DC0=1;FirstEnter=1");
                                cm.dispose();
                                cm.warp(701101030, 3);
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