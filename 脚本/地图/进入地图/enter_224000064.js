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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2074155, "oid=1942341", -839, -71, 110, -889, -789, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942341", "summon", 0, 0);
      cm.npc_ChangeController(2074153, "oid=1942342", -695, -70, 113, -745, -645, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942342", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -781, -19);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs18#大火灾爆发前一天#fs15##fn黑体#童话村附近山中"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#鬼怪啊，鬼怪啊。", 37, 2074153, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("怎么了，小白。", 37, 2074155, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#我不是让你不要这么叫我了嘛。", 37, 2074153, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你这么白才叫你小白的嘛，这个外号挺好的。", 37, 2074155, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#切，算了，\r\n你觉得要是现在你变得和自己完全不一样了，会怎么样？", 37, 2074153, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我不喜欢，多可怕啊，我觉得现在这样挺好的。", 37, 2074155, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("因为我现在不孤单了。", 37, 2074155, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#就算这样，嗯？\r\n万一呢……嗯，如果变成了人呢？\r\n不也是有可能的嘛？", 37, 2074153, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……这个嘛，倒也是有可能。", 37, 2074155, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯，要说我今天看到了什么啊，\r\n我找到了#b可以让人完全脱胎换骨的宝物#k。", 37, 2074153, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你，又去跟着朴大爷了啊，\r\n我已经说过了，和人类走得太近会有危险的……", 37, 2074155, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#没有啦，那个人可是唯一一个不拿我们当怪物看的人啊。", 37, 2074153, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你没必要和人类走得太近，\r\n我们自己好生相处就行。", 37, 2074155, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#切，可即便如此……", 37, 2074153, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("要是你再去见朴大爷，我有可能会生气哦。", 37, 2074155, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#嗯……我以后不见了。", 37, 2074153, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#啊！我刚刚还有事儿要做来着，一时给忘了呢。", 37, 2074153, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("有事要做？你能有什么事？", 37, 2074155, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#哦……啊，啊！对了，花！\r\n我好像今天忘了给花浇水了。", 37, 2074153, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("？？给花浇水不是老天爷做的事情吗？", 37, 2074155, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#没有啦，你这个傻瓜！一想到就得做啊，\r\n我去去就回！", 37, 2074153, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=1942342", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=1942342");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              cm.effect_NormalSpeechBalloon(".....??", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2074155, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("九尾狐并没有回来. ", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("然后第二天山上就起了巨大的火灾……", 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(224000065, 1, true);
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