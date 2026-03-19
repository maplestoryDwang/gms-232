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
      cm.npc_ChangeController(2103002, "oid=247941", 661, 194, 3, 611, 711, 1, false, false);
      cm.npc_ChangeController(2184010, "oid=247942", 83, 164, 8, 33, 133, 1, false, false);
      cm.npc_ChangeController(2184011, "oid=42819749", 288, 184, 1, 238, 338, 1, true, false);
      cm.npc_SetSpecialAction("oid=42819749", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(8000);
        cm.effect_Text(["#fn黑体##fs20#两天后, 阿里安特宫殿"], [100, 3000, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_NormalSpeechBalloon("愚蠢的士兵们, 连个流浪吉普赛人都比不上.", 1, 0, 0, 3500, 1, 0, 0, 0, 4, 2184010, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_NormalSpeechBalloon("嗯, 永远的青春~", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2184010, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("hilah/Use", 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
                cm.effect_NormalSpeechBalloon("哦~我感觉到了年轻的力量.呵呵呵呵呵.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184010, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                  cm.effect_NormalSpeechBalloon("我要赐予你足够享用一生的奖赏.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184010, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                    cm.effect_NormalSpeechBalloon("好了, 你可以走了~", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2184010, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("谢谢您, 王妃.", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2184011, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm35.img/TragicForest", 0, 0);
                        cm.inGameDirectionEvent_PushMoveInfo(0, 100, -150, 155);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=42819749", -1, 330, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(5200);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2184009, "oid=42829369", -95, 184, 2, -145, -45, 1, true, false);
                            cm.npc_SetSpecialAction("oid=42829369", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=42829369", -1, 130, 100);
                            cm.npc_LeaveField("oid=42819749");
                            cm.npc_LeaveField("oid=42819749");
                            cm.inGameDirectionEvent_AskAnswerTime(470);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 800, -262, 155);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=42829369", "say", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.effect_NormalSpeechBalloon("#fn黑体##r从阿里安特开始", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2184009, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=42829369", "say", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        cm.effect_NormalSpeechBalloon("#fn黑体##r重新开始……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184009, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=42829369", -1, 500, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("呵呵呵呵呵", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 2184009, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(262010000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;