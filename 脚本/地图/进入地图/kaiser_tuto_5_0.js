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
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(3000131, "oid=1053543", -390, 170, 1, -440, -340, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053543", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=1053544", -740, 170, 2, -790, -690, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053544", "summon", 0, 0);
      cm.npc_ChangeController(3000125, "oid=1053545", -640, 170, 2, -690, -590, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053545", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_OneTimeAction(474, 0);
        cm.inGameDirectionEvent_头顶图片(["Skill/6112.img/skill/61121100/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cm.fieldEffect_PlayFieldSound("Kaiser/61121100", 100);
        cm.inGameDirectionEvent_AskAnswerTime(150);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=1053544", "die1", 0, 0);
          cm.npc_SetSpecialAction("oid=1053545", "die1", 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Skill/6112.img/skill/61121100/hit", "oid=1053544"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Skill/6112.img/skill/61121100/hit", "oid=1053545"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.effect_Voice("Skill.img/61121100/Hit", 100);
            cm.npc_LeaveField("oid=1053544");
            cm.npc_LeaveField("oid=1053545");
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, -600, 178);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1002);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("了不起，真是令人惊叹的实力，狂龙战士。你已经消灭多少个了？我看再来几个就能凑个整数啦？", 9, 3000131, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("下面该轮到你了，麦格纳斯。", 17, 3000131, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(0);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3000128, "oid=1053546", -750, 170, 2, -800, -700, 1, false, 0, false);
                        cm.npc_SetSpecialAction("oid=1053546", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(210);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3000128, "oid=1053547", -650, 170, 2, -700, -600, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=1053547", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(210);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3000128, "oid=1053548", -550, 170, 2, -600, -500, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=1053548", 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(210);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3000128, "oid=1053549", -1150, 170, 3, -1200, -1100, 0, false, 0, false);
                              cm.npc_SetSpecialAction("oid=1053549", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(210);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3000128, "oid=1053550", -1250, 170, 3, -1300, -1200, 0, false, 0, false);
                                cm.npc_SetSpecialAction("oid=1053550", 'summon', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(210);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3000128, "oid=1053551", -1350, 170, 3, -1400, -1300, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=1053551", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(210);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 178);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(666);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("还有很多幽灵呢，别着急啊。啊，是因为你寿命将尽了？", 9, 3000131, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("瞧你躲在这些靠着向达尔摩尔臣服获得的部下背后的小样儿，畏首畏尾，哪里还有一个战士的气势。", 17, 3000131, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("嘿嘿，你尽管可以当成是我的恶趣味啊。我还想再欣赏一下你像个落水狗一样拼死挣扎的模样呢。", 9, 3000131, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("别担心，最后关头我肯定亲手送你上黄泉路。今天我就要看看会不断转生的狂龙战士是如何被打败的，哈哈哈哈。", 9, 3000131, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
                                                  cm.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
                                                  cm.sendNormalTalk("(毒素扩散得很快。只能速战速决了吗？情况很不妙，但如果在这里倒下，就辜负了狂龙战士这个称号。)", 17, 3000131, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("哪怕你家伙死了重新转生，肯定比现在的你更弱。等你转生后重新恢复现在的水平，所有事情早就大局已定。", 9, 3000131, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("婆婆妈妈，不像你的风格啊，麦格纳斯。来跟我一决死战吧。", 17, 3000131, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/Effect/0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                          cm.npc_ChangeController(3000142, "oid=1053553", -900, 170, 2, -950, -850, 0, false, 0, false);
                                                          cm.npc_SetSpecialAction("oid=1053553", "summon", 0, 0);
                                                          cm.sendNormalTalk("嘿嘿，我等的就是这个，你正在担心是否毒素已经扩散到让你无法变身了吧，哈哈。我这就灭了你，然后登上诺巴最强战士的宝座！", 9, 3000131, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=1053543");
                                                            cm.npc_LeaveField("oid=1053546");
                                                            cm.npc_LeaveField("oid=1053547");
                                                            cm.npc_LeaveField("oid=1053548");
                                                            cm.npc_LeaveField("oid=1053549");
                                                            cm.npc_LeaveField("oid=1053550");
                                                            cm.npc_LeaveField("oid=1053551");
                                                            cm.npc_LeaveField("oid=1053553");
                                                            cm.dispose();
                                                            cm.warp(940002030, 0, false);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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