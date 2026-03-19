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
      cm.npc_ChangeController(1530203, "oid=38087721", 1037, 62, 3, 987, 1087, 1, false, false);
      cm.npc_SetSpecialAction("oid=38087721", "summon", 0, 0);
      cm.npc_ChangeController(1530305, "oid=38087722", 860, 62, 3, 810, 910, 0, false, false);
      cm.npc_SetSpecialAction("oid=38087722", 'summon', 0, 0);
      cm.npc_ChangeController(1530306, "oid=38087723", 730, 62, 2, 680, 780, 0, false, false);
      cm.npc_SetSpecialAction("oid=38087723", "summon", 0, 0);
      cm.npc_ChangeController(1530307, "oid=38087724", 600, 62, 2, 550, 650, 0, false, false);
      cm.npc_SetSpecialAction("oid=38087724", "summon", 0, 0);
      cm.npc_ChangeController(1530272, "oid=38087725", 470, 62, 1, 420, 520, 0, false, false);
      cm.npc_SetSpecialAction("oid=38087725", "summon", 0, 0);
      cm.npc_ChangeController(1530282, "oid=38087726", 340, 62, 1, 290, 390, 0, false, false);
      cm.npc_SetSpecialAction("oid=38087726", 'summon', 0, 0);
      cm.npc_ChangeController(1530370, "oid=38087727", 1203, 62, 3, 1153, 1253, 1, true, false);
      cm.npc_SetSpecialAction("oid=38087727", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38087722", "love", -1, 1);
      cm.npc_SetSpecialAction("oid=38087723", 'love', -1, 1);
      cm.npc_SetSpecialAction("oid=38087724", "love", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("今天的课程到此结束。你们有什么疑问吗？", 37, 1530203, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH5_03/15", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('老师，你有女朋友吗？', 37, 1530310, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH5_03/25", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不，没有。", 37, 1530203, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_03/26", 100);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=38087722", 'happy', -1, 1);
                  cm.npc_SetSpecialAction("oid=38087723", "happy", -1, 1);
                  cm.npc_SetSpecialAction("oid=38087724", 'happy', -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon('...!!!!!!!', 0, 0, 0, 2000, 1530305, cm.getPlayer().getId());
                  cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530306, cm.getPlayer().getId());
                  cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530307, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38087727"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087722"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                    cm.effect_Voice("Game.img/CaptureSuccess", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087722"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087723"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087723"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087724"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38087724"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                    cm.effect_Text(["#fn黑体##fs24#Chapter 5\r\n#fs18#~ 来路不明的实习老师与危机中的学生们 ~"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0]);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;