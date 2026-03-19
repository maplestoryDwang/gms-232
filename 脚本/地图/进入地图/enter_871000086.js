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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -240, 250);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400932, "oid=91699160", -100, 240, 1, -150, -50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91699160", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=91699161", -50, 240, 1, -100, 0, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91699161", 'summon', 0, 0);
      cm.npc_ChangeController(9400928, "oid=91699162", 0, 240, 1, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91699162", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=91699163", 70, 240, 1, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91699163", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -80, 350]);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face1#这么快就搞定啦！ #h0#，谢谢你。", 37, 9400920, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b不是的。话说回来现在咖啡店已经像模像样了呢！真的是艾丹和米兰达做的吗？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#当然！哈哈哈", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#家具大部分都是我买回来的。", 37, 9400920, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#安置它们也是一种实力呢！哈哈哈", 37, 9400923, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#米兰达负责指挥，艾丹负责搬运。", 37, 9400920, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#搬运它们的力量也是一种实力！哈哈哈", 37, 9400923, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b米兰达，艾丹。你们真了不起。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#区区小事，不足挂齿。", 37, 9400924, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#明天装修也结束了，万事俱备，只欠咖啡师……会有很多人来面试吗？", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9400934, "oid=91699721", 300, 240, 1, 250, 350, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=91699721", "summon", 0, 0);
                                cm.sendNewEffects(12, [2000, 50, 350, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=91699721", -1, 50, 100);
                                  cm.sendNormalTalk_Bottom("#face1#艾米！你现在真有点老板的样子了呢？", 37, 9400925, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=91699163", 1);
                                    cm.npc_setForceFlip("oid=91699162", 1);
                                    cm.npc_setForceFlip("oid=91699160", 1);
                                    cm.npc_setForceFlip("oid=91699161", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/6", "oid=91699721"], [4000, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face2#先把担忧抛在脑后吧~大家快来尝尝我做的沙拉！", 37, 9400925, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#又……？", 37, 9400924, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#我一定要做出和艾米的果汁很搭的沙拉。", 37, 9400925, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=91699163", 1, 50, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=91699162", 1, 50, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=91699161", 1, 50, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=91699160", 1, 50, 100);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#已经很好吃了！", 37, 9400923, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#还有2%不足！", 37, 9400925, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#难道艾米的“不是这味道”病转移了……？", 37, 9400921, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/birdsong", 100);
                                                            cm.forceCompleteQuest(65437);
                                                            cm.updateInfoQuest(65437, "chk1=1;chk2=1;table=1");
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.effect_Text(["#fn黑体##fs20##e第二天早上……"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNewEffects(19, [0]);
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.warp(871000085, 0, true);
                                                                cm.eventSKill(0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=91699160");
                                                                cm.npc_LeaveField("oid=91699161");
                                                                cm.npc_LeaveField("oid=91699162");
                                                                cm.npc_LeaveField("oid=91699163");
                                                                cm.npc_LeaveField("oid=91699721");
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
        }
      }
    }
  }
}