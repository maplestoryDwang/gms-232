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
      cm.npc_ChangeController(1530340, "oid=38312729", -144, 250, 34, -194, -94, 0, false, false);
      cm.npc_SetSpecialAction("oid=38312729", "summon", 0, 0);
      cm.npc_ChangeController(1530260, "oid=38312730", 200, 250, 34, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=38312730", "summon", 0, 0);
      cm.npc_ChangeController(1530260, "oid=38312731", 400, 250, 34, 350, 450, 1, true, false);
      cm.npc_SetSpecialAction("oid=38312731", "summon", 0, 0);
      cm.npc_ChangeController(1530260, "oid=38312732", 500, 250, 34, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=38312732", "summon", 0, 0);
      cm.npc_ChangeController(1530260, "oid=38312733", 720, 250, 34, 670, 770, 0, true, false);
      cm.npc_SetSpecialAction("oid=38312733", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_Monologue("我是一名流浪剪裁师. \r\n", 0);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice2.img/Friends/CH5_00/1", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("我漂泊不定, 只为制作出好衣服. ", 0);
        cm.effect_Voice("Voice2.img/Friends/CH5_00/2", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("等到我的衣服不再有价值的那一天, 我就不再制作衣服. ", 0);
          cm.effect_Voice("Voice2.img/Friends/CH5_00/3", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("\r\n\r\n#fn黑体#―――――――#fn黑体#说不定, 那一天就是今天. ", 1);
            cm.effect_Voice("Voice2.img/Friends/CH5_00/4", 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("全部变成乌贼了吗？这么多的男学生…… 全部？", 33, 1530340, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_00/5", 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 250, 600, 280);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4502);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 250, -400, 280);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4002);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("即便他们穿上了我制作的校服……还是变成了乌贼？", 33, 1530340, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH5_00/6", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("之前我一直不相信“时不时尚看脸蛋” 这一事实. ", 0);
                                cm.effect_Voice("Voice2.img/Friends/CH5_00/7", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("直到我看到他的那一瞬间……", 1);
                                  cm.effect_Voice("Voice2.img/Friends/CH5_00/8", 100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你有什么事情吗？", 33, 1530203, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH5_00/9", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        cm.effect_NormalSpeechBalloon("...!!", 1, 0, 0, 2500, 1530340, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(1530203, "oid=38323137", 1000, 250, 35, 950, 1050, 1, false, 1000, false);
                                          cm.npc_SetSpecialAction("oid=38323137", "summon", 0, 0);
                                          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 900, 280);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2601);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("看到他的那一瞬间, 我才彻底明白. \r\n", 1);
                                                cm.effect_Voice("Voice2.img/Friends/CH5_00/10", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n#fn黑体#―――――――#fn黑体#时不时尚是要看脸蛋的. ", 1);
                                                    cm.effect_Voice("Voice2.img/Friends/CH5_00/11", 100);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(330002501, 0);
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