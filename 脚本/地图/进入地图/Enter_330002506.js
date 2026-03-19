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
      cm.npc_ChangeController(1530200, "oid=38675806", 1037, 62, 3, 987, 1087, 1, true, false);
      cm.npc_SetSpecialAction("oid=38675806", "summon", 0, 0);
      cm.npc_ChangeController(1530305, "oid=38675807", 860, 62, 3, 810, 910, 0, false, false);
      cm.npc_SetSpecialAction("oid=38675807", "summon", 0, 0);
      cm.npc_ChangeController(1530306, "oid=38675808", 730, 62, 2, 680, 780, 0, false, false);
      cm.npc_SetSpecialAction("oid=38675808", "summon", 0, 0);
      cm.npc_ChangeController(1530307, "oid=38675809", 600, 62, 2, 550, 650, 0, false, false);
      cm.npc_SetSpecialAction("oid=38675809", 'summon', 0, 0);
      cm.npc_ChangeController(1530272, "oid=38675810", 470, 62, 1, 420, 520, 0, false, false);
      cm.npc_SetSpecialAction("oid=38675810", "summon", 0, 0);
      cm.npc_ChangeController(1530282, "oid=38675811", 340, 62, 1, 290, 390, 0, false, false);
      cm.npc_SetSpecialAction("oid=38675811", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=38675812", 1203, 62, 3, 1153, 1253, 1, true, false);
      cm.npc_SetSpecialAction("oid=38675812", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38675807", "happy", -1, 1);
      cm.npc_SetSpecialAction("oid=38675808", "happy", -1, 1);
      cm.npc_SetSpecialAction("oid=38675809", "happy", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1839, -6);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_Text(["#fn黑体##fs26#教学实习\r\n#fs14# 第2周课程"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咳，大家注意。我有个好消息要宣布。", 37, 1530370, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_04/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("为了更好地教育你们，实习老师决定采取顾问指导的教育方式。也就是说，在接下来的时间里，实习老师会跟你们进行1对1面谈。", 37, 1530370, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH5_04/2", 100);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=38675807", 'love', -1, 1);
                    cm.npc_SetSpecialAction("oid=38675808", "love", -1, 1);
                    cm.npc_SetSpecialAction("oid=38675809", "love", -1, 1);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38675807"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38675808"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38675809"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom(" 天啊，太棒了。", 37, 1530310, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_04/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("一对一吗？和实习老师单独？", 37, 1530300, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_04/4", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我该怎么办，真是太棒了！", 37, 1530310, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH5_04/5", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那我们周末能和老师约会了吗？", 37, 1530300, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH5_04/6", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你们这些家伙，周末进行什么面谈啊？面谈都是平时进行的。", 37, 1530370, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH5_04/7", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("平时进行面谈的话，时间会不会太短啊？我们周末也可以面谈的，老师~！", 37, 1530300, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH5_04/8", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你们这些家伙，不要这么欺负实习老师。老师也有自己的生活啊！", 37, 1530370, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH5_04/9", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这个么，一天程度还是可以考虑下的。", 37, 1530200, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH5_04/10", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530305, cm.getPlayer().getId());
                                      cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530306, cm.getPlayer().getId());
                                      cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530307, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=38675807", "shine", -1, 1);
                                        cm.npc_SetSpecialAction("oid=38675808", 'shine', -1, 1);
                                        cm.npc_SetSpecialAction("oid=38675809", "shine", -1, 1);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38675812"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675807"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                        cm.effect_Voice("Game.img/CaptureSuccess", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675807"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675808"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675808"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675809"], [5000, 0, -100, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Map/Effect.img/Yut/goal", "oid=38675809"], [5000, -20, -50, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                    cm.forceCompleteQuest(33017);
                                                    cm.updateInfoQuest(32720, "sms=193");
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