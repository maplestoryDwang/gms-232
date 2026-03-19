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
      cm.npc_ChangeController(1530060, "oid=20450057", 241, 58, 1, 191, 291, 0, true, false);
      cm.npc_SetSpecialAction("oid=20450057", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=20450058", 547, 58, 2, 497, 597, 0, true, false);
      cm.npc_SetSpecialAction("oid=20450058", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs26#国际神兽学校\r\n#fs14#~希纳斯的办公室~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=20450057", 1, 100, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1800);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("南哈特。", 37, 1530060, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH1_02/1", 100);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=20450058");
                cm.npc_LeaveField("oid=20450058");
                cm.npc_ChangeController(1530070, "oid=20452122", 547, 58, 2, 497, 597, 1, true, false);
                cm.npc_SetSpecialAction("oid=20452122", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('是，小姐。', 37, 1530070, false, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_02/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哈哈……南~哈~特？", 37, 1530060, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH1_02/3", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=20450057", 'love', -1, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.playerMessage(-1, "希纳斯使用了肉麻攻击（lv. 9）技能. ");
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.playerMessage(-1, "南哈特利用自己的忍耐力抵挡住了. ");
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……你这么叫我一定是遇到什么有趣的事了吧。是什么呢？", 37, 1530070, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH1_02/4", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 634, 58);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=20450057");
                                cm.npc_SetForceMove("oid=20450057", 1, 350, 200);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=20452122", 1, 100, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.playerMessage(-1, "希纳斯的攻击还在继续. ");
                                    cm.sendNormalTalk_Bottom("南~哈~特，你听说过有关命运之转学生的事吗？", 37, 1530060, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH1_02/5", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("命运的……转校生？", 37, 1530070, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH1_02/6", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=20450057", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯，命运之转学生。你不知道吗？这个是最近最热门的传闻了。", 37, 1530060, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH1_02/7", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("这所学校流传着一个有关命运之转学生的传说. ", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("那就是命运之转学生转到这所学校之后, 就会和神兽集团的独生女结下不解之缘. ", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#据说如果那个转校生是女生，那么两个人就会成为一辈子的好朋友。而如果是男生的话……诶，真是的，据说两个人就会陷入#r爱河#k呢。我也不太清楚~", 37, 1530060, false, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH1_02/8", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=20450057", "love", -1, 0);
                                                      cm.sendNormalTalk_Bottom("……你究竟是在哪里听说那种传闻的？", 37, 1530070, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH1_02/9", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=20450057"], [30000, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.sendNormalTalk_Bottom("啊哈哈哈", 37, 1530060, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/NPC_cyg/5", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=20452122"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("……好吧，我知道了。我会去调查一下的。", 37, 1530070, false, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH1_02/10", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.npc_setForceFlip("oid=20450057", 0);
                                                              cm.dispose();
                                                              cm.warp(330002101, 0);
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