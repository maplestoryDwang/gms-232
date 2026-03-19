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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530275, "oid=36595232", 738, 58, 2, 688, 788, 0, true, false);
      cm.npc_SetSpecialAction("oid=36595232", "summon", 0, 0);
      cm.npc_ChangeController(1530309, "oid=36595233", 513, 58, 2, 463, 563, 1, true, false);
      cm.npc_SetSpecialAction("oid=36595233", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=36595232", 'suprise', -1, 1);
      cm.npc_SetSpecialAction("oid=36595233", "suprise", -1, 1);
      cm.npc_ChangeController(1530150, "oid=36595234", 870, 58, 3, 820, 920, 1, true, false);
      cm.npc_SetSpecialAction("oid=36595234", "summon", 0, 0);
      cm.npc_ChangeController(1530160, "oid=36595235", 400, 58, 1, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=36595235", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=36595234", "jealousy", -1, 1);
      cm.npc_SetSpecialAction("oid=36595235", "jealousy", -1, 1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 635, 58);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
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
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs26#下一个故事"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#你们在神圣的校园里做什么呢？ \r\n#fs12#(乳臭未干的家伙！)", 37, 1530160, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH3_00/7", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("作为学生，竟然恋爱？\r\n#fs12#(我都没恋爱过！)", 37, 1530150, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH3_00/8", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_Voice("Voice2.img/Friends/CH3_00/9", 100);
                    cm.effect_NormalSpeechBalloon("在学校内, ", 0, 0, 0, 1500, 1530160, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                      cm.effect_Voice("Voice2.img/Friends/CH3_00/10", 100);
                      cm.effect_NormalSpeechBalloon("恋爱！", 0, 0, 0, 1500, 1530150, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                        cm.effect_Voice("Voice2.img/Friends/CH3_00/11", 100);
                        cm.effect_NormalSpeechBalloon("#fs18##e绝对禁止！", 0, 0, 0, 1500, 1530150, cm.getPlayer().getId());
                        cm.effect_NormalSpeechBalloon("#fs18##e绝对禁止！", 0, 0, 0, 1500, 1530160, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/spinOff1/title", 0, 1500, 0, -50, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                              cm.effect_Text(["#fn黑体##fs24#Chapter 3\r\n#fs18#~ 校医希拉和体育老师麦格纳斯 ~"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0]);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(100000004, 0);
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