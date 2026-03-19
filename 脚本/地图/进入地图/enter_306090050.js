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
      cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", 'normal', '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.npc_ChangeController(2550005, "oid=1766363", -480, -170, 38, -530, -430, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1766363", "summon", 0, 0);
      cm.npc_ChangeController(2550006, "oid=1766364", -600, -170, 42, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1766364", "summon", 0, 0);
      cm.npc_ChangeController(2550010, "oid=1766365", -300, -170, 39, -350, -250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1766365", 'summon', 0, 0);
      cm.npcMove(2550006, 0, 10, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -260, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_Text(["#fn黑体##fs18#几天后……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3000, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("果然……这是只有在冰峰雪域才能见到的#r神之诅咒#k啊。", 37, 2550006, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("是啊……就像是之前神将这里遗忘了一样。", 37, 2550005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("如果这种程度还没能灭亡人类……", 37, 2550005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("…………", 37, 2550006, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("话说，到现在还没能占领关卡，是因为这暴风雪吗？", 37, 2550006, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("咳咳，咳咳……暴风雪太强了……咳咳。\r\n他们泼水制作冰块……从城墙上方往下扔……", 37, 2550010, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("都是一群很擅长在冰天雪地中战斗的人啊。", 37, 2550005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不过也只是无谓的挣扎而已了。结果不会改变的。", 37, 2550005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("加强攻势。在大部队到达之前，尽可能消耗他们的精力。", 37, 2550005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('咳咳，咳咳……', 37, 2550010, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=1766365", 0, 1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("总～感觉你有点不安呢，是因为心情不好吗。\r\n别误会。我不是不相信你。", 37, 2550006, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那我就先回去了。我可受不了这冷风。", 37, 2550006, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("随你。", 37, 2550005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -600, -150, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                cm.npc_LeaveField("oid=1766364");
                                                cm.npc_LeaveField("oid=1766364");
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("佣兵啊……", 37, 2550005, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你想燃起烽火，向所有人示警吗？\r\n就凭岌岌可危的城池，和一群残兵败将，真的能做到吗？", 37, 2550005, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("希望……这东西我曾经也有过。", 37, 2550005, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#fs16#某种意义上……我有点羡慕你呢。", 37, 2550005, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else if (status === V++) {
                                                            cm.updateInfoQuest(32689, "enter=1");
                                                            cm.dispose();
                                                            cm.warp(306030000, 0, false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=1766363");
                                                            cm.npc_LeaveField("oid=1766363");
                                                            cm.npc_LeaveField("oid=1766365");
                                                            cm.npc_LeaveField("oid=1766365");
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