var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(3003656, "oid=2273618", -450, 150, 1, -500, -400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2273618", "summon", 0, 0);
      cm.npc_ChangeController(3003902, "oid=2273619", -270, 150, 1, -320, -220, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2273619", "summon", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -80, 188);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#成功……了吗？", 37, 3003902, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2273618", 1, 250, 150);
              cm.sendNormalTalk_Bottom("#face0##h0#？！#h0#？！", 37, 3003750, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2273619"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4##h0#！你成功了！！", 37, 3003750, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#……？！", 37, 3003902, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm22/DespairOnDevil", 0, 0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=16777214"], [0, 0, 0, 1, 0, 12, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6#啊……", 37, 3003750, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_SetHideEffect(1);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face6#怎么……会……", 37, 3003750, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face6#这样……", 37, 3003750, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2273618", "hit", -1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#巨人又开始动了！", 37, 3003695, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#希纳斯，我们必须马上离开。", 37, 3003696, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('#face6#……', 37, 3003750, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#横竖是办不到的。引擎全烧了，巨人的外皮也合拢了。", 37, 3003698, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face4#……', 37, 3003902, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#暂时借你们舰船的魔力一用。", 37, 3003902, false, true);
                                                  } else if (status === V++) {
                                                    cm.npc_LeaveField("oid=2273618");
                                                    cm.npc_LeaveField("oid=2273618");
                                                    cm.npc_LeaveField("oid=2273619");
                                                    cm.npc_LeaveField("oid=2273619");
                                                    cm.dispose();
                                                    cm.warp(993070085, 0, false);
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