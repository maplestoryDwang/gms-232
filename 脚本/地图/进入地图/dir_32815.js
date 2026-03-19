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
      cm.npc_ChangeController(1530140, "oid=37648295", 370, 280, 34, 320, 420, 0, true, false);
      cm.npc_SetSpecialAction("oid=37648295", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=37648296", 450, 280, 34, 400, 500, 0, true, false);
      cm.npc_SetSpecialAction("oid=37648296", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=37648297", 550, 280, 34, 500, 600, 1, true, false);
      cm.npc_SetSpecialAction("oid=37648297", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=37648298", 630, 280, 34, 580, 680, 1, true, false);
      cm.npc_SetSpecialAction("oid=37648298", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 500, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(449);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_NormalSpeechBalloon("来了！", 1, 0, 1, 1500, 1530140, cm.getPlayer().getId());
              cm.effect_NormalSpeechBalloon("准备！", 1, 0, 1, 1500, 1530100, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                cm.npc_ChangeController(1530160, "oid=37650063", 100, 280, 34, 50, 150, 0, true, false);
                cm.npc_SetSpecialAction("oid=37650063", "summon", 0, 0);
                cm.npc_ChangeController(1530150, "oid=37650064", 900, 280, 35, 850, 950, 1, true, false);
                cm.npc_SetSpecialAction("oid=37650064", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=37650064", -1, 150, 100);
                  cm.npc_SetForceMove("oid=37650063", 1, 150, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你们听说过吗？奥尔卡只要见过人一次，就绝对不会忘记的，大家都知道吧？", 37, 1530080, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH3_02/1", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是的，没错。奥尔卡是绝对不会忘记的。", 37, 1530100, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH3_02/2", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("可是奥尔卡却偏偏不记得希拉老师和麦格纳斯老师。", 37, 1530080, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH3_02/3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37650063"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37650064"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哇，好神奇啊！", 37, 1530100, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH3_02/4", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这不也正是命运吗？", 37, 1530070, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH3_02/5", 100);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=37650064", -1, 400, 200);
                                cm.npc_SetForceMove("oid=37650063", 1, 400, 200);
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 1, 1500, 1530160, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 1, 1500, 1530150, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=37650063", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_NormalSpeechBalloon('!', 1, 0, 1, 1500, 1530160, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=37650063", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=37650063", 1, 500, 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=37650064", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                        cm.effect_NormalSpeechBalloon('??', 1, 0, 1, 1500, 1530150, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=37650064", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=37650064", -1, 500, 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=37650064");
                                              cm.npc_LeaveField("oid=37650064");
                                              cm.npc_LeaveField("oid=37650063");
                                              cm.npc_LeaveField("oid=37650063");
                                              cm.sendNormalTalk_Bottom("看到了吧？看到了吧？他们在彼此关注！这完全是已经心照不宣了啊！", 37, 1530100, false, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH3_03/1", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("一定是我们的表演起作用了！不如借此机会加入表演部吧？", 37, 1530080, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH3_03/2", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("为什么我一句台词都没有？", 37, 1530140, true, true);
                                                  cm.effect_Voice("Voice2.img/Friends/CH3_03/3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37648297"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#以后这种事别再让我干。", 37, 1530070, false, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH3_03/4", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                        cm.forceCompleteQuest(32815);
                                                        cm.dispose();
                                                        cm.warp(330000500, 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;