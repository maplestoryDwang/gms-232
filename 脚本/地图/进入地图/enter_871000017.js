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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400932, "oid=19758063", 0, 295, 7, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=19758063", "summon", 0, 0);
      cm.npc_ChangeController(9400934, "oid=19758064", 90, 295, 11, 40, 140, 1, true, false);
      cm.npc_SetSpecialAction("oid=19758064", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 85, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs20#传来叫声的森林"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.effect_NormalSpeechBalloon("你在那里干嘛呢？", 1, 0, 0, 2000, 9400932, 6711706);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("只是因为路过的时候发现花太美了，\r\n所以看看而已！", 1, 0, 0, 2000, 9400934, 6711706);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=19758064"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("哎？看花？！", 1, 0, 0, 2000, 9400932, 6711706);
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("多么美丽啊。又有迷人的香气。\r\n我喜欢花。", 1, 0, 0, 2000, 9400934, 6711706);
                      cm.npc_setForceFlip("oid=19758063", -1);
                      cm.sendNewEffects(13, [1000, -80, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##h0#！你找来肉了啊，快给杰弗里吧！", 37, 9400923, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b杰弗里？你们这么快就变熟了啊？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你，你说什么呢！我？", 37, 9400923, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=19758063"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#请给我肉……咳，一想到就要吐了呢。", 37, 9400925, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=19758064"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=19758063", 1);
                                      cm.sendNormalTalk_Bottom("#b你……你真的要吃吗？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#…", 37, 9400923, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#如果我真的吃了，你们可得相信我啊。", 37, 9400925, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, 9400934);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=19758064"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#啊啊！杰弗里，你没事吧？", 37, 9400923, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#我没事……", 37, 9400925, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b全身通红！脸上也全部肿起来了！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#抱歉，杰弗里！我都干了什么啊！", 37, 9400923, true, true);
                                                    } else if (status === V++) {
                                                      cm.eventSKill(0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.warp(871000002, 1);
                                                      cm.forceCompleteQuest(64622);
                                                      cm.gainItem(2010001, -10);
                                                      cm.npc_LeaveField("oid=19758063");
                                                      cm.npc_LeaveField("oid=19758064");
                                                      cm.dispose();
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