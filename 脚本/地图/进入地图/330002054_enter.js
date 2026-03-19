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
      cm.npc_ChangeController(1530230, "oid=20398515", 859, 128, 8, 809, 909, 1, true, false);
      cm.npc_SetSpecialAction("oid=20398515", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 859, 128);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3001);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("吼吼吼……这应该算你在这所学校展开的第一场对决吧？", 37, 1530230, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("别以为你是女生我就会对你怜香惜玉。我要让你好好尝尝无视我的后果。哈哈哈……", 37, 1530230, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("好了，上吧！转校生！我要让你清楚地认识到谁才是这所学校的老大。", 37, 1530230, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                        cm.effect_Text(["#r#fn黑体##fs26#……你产生了……想要在战斗中取胜的迫切心理……#k"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=20398515", 1);
                          cm.npc_SetForceMove("oid=20398515", 1, 50, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("……? 搞什么, 谁在那里? ", 1, 0, 0, 2000, 1530230, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=20398515", -1, 50, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_NormalSpeechBalloon('...?', 1, 0, 0, 2000, 1530230, cm.getPlayer().getId());
                              cm.effect_Text(["#r#fn黑体##fs26#你的决定……就让我来替你下吧！#k"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                cm.effect_NormalSpeechBalloon("……！！！呃啊！", 1, 0, 0, 2000, 1530230, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                  cm.npc_SetSpecialAction("oid=20398515", 'die', -1, 1);
                                  cm.npc_setForceFlip("oid=20398515", 0);
                                  cm.npc_ChangeController(1530530, "oid=20404939", 759, 128, 10, 709, 809, 1, true, false);
                                  cm.npc_SetSpecialAction("oid=20404939", "summon", 0, 0);
                                  cm.forceStartQuest(33036, '');
                                  cm.forceStartQuest(32716, '');
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      cm.effect_Text(["#r#fn黑体##fs26#怒拳闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 359, 128);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Text(["#fn黑体##fs16#这就是激发对手想要在战斗中取胜的迫切心理的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0]);
                                          cm.effect_Voice("Voice2.img/Friends/Narration_01/1", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(3001);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("真奇怪。明明说这个世界没有怪物的啊……？在被别人发现以前赶紧把他消灭掉吧！", 57, 0, false, true);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(330001600, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;