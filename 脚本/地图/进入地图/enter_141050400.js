var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1514000, "oid=51680402", -369, 105, 11, -419, -319, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680402", "summon", 0, 0);
      cm.npc_ChangeController(1514001, "oid=51680403", -187, 105, 17, -237, -137, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680403", "summon", 0, 0);
      cm.npc_ChangeController(1514001, "oid=51680404", -107, 105, 18, -157, -57, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680404", 'summon', 0, 0);
      cm.npc_ChangeController(1514001, "oid=51680405", -27, 105, 16, -77, 23, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680405", "summon", 0, 0);
      cm.npc_ChangeController(1514008, "oid=51680406", -723, 105, 13, -773, -673, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680406", "summon", 0, 0);
      cm.npc_ChangeController(1514008, "oid=51680407", -803, 105, 26, -853, -753, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680407", "summon", 0, 0);
      cm.npc_ChangeController(1514008, "oid=51680408", -883, 105, 25, -933, -833, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680408", 'summon', 0, 0);
      cm.npc_ChangeController(1514008, "oid=51680409", -963, 105, 24, -1013, -913, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680409", "summon", 0, 0);
      cm.npc_ChangeController(1514007, "oid=51680410", -1043, 105, 27, -1093, -993, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680410", "summon", 0, 0);
      cm.npc_ChangeController(1514007, "oid=51680411", -1123, 105, 27, -1173, -1073, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680411", "summon", 0, 0);
      cm.npc_ChangeController(1514007, "oid=51680412", -1203, 105, 28, -1253, -1153, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680412", "summon", 0, 0);
      cm.npc_ChangeController(1514007, "oid=51680413", -1283, 105, 23, -1333, -1233, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=51680413", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 180, -300, 43);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(4763);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("提督大人，捣乱者越来越靠近了。", 5, 1514001, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("…………", 5, 1514000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("提督大人，你得快点做决定了。", 5, 1514001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("各位，你们有没有见过生命即将消逝那一瞬间的情景？", 5, 1514000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('……呃？', 5, 1514001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我是见过无数遍了。我曾经见过许多战友在我的臂弯里死去。", 5, 1514000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("在濒死的瞬间，人类和动物是一样的。在断气之前，他们的身体簌簌发抖，望着映入眼中的最后景象，仿佛要抓住最后一丝生命的希望。", 5, 1514000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("可是最终，那恳切的眼神会逐渐黯去，曾经温暖的身体也会变得冰冷。讽刺的是，在临终的那一瞬间，却带有某种崇高的美感，即使在那之后，只剩下沉寂。", 5, 1514000, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……看来是时候离开这里了。", 5, 1514000, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("我们已经向敌人泄漏了很多信息了。不能再让敌人打探到任何重要信息。航海士，我给你10分钟。你去把证物全部销毁，然后离开这里。听明白了吗？", 5, 1514000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('是，提督大人！', 5, 1514001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我们已经获取了足够的资源。你去给那帮家伙留个深刻印象吧。", 5, 1514000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("就交给我去办吧。那帮家伙会迎来#r盖奥勒克#k的。#r盖奥勒克#k能毁坏的东西可不只有冰川。", 5, 1514001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=51680406");
                                      cm.npc_LeaveField("oid=51680406");
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=51680408");
                                        cm.npc_LeaveField("oid=51680408");
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=51680409");
                                          cm.npc_LeaveField("oid=51680409");
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=51680407");
                                            cm.npc_LeaveField("oid=51680407");
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=51680410");
                                              cm.npc_LeaveField("oid=51680410");
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=51680413");
                                                cm.npc_LeaveField("oid=51680413");
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=51680412");
                                                  cm.npc_LeaveField("oid=51680412");
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=51680411");
                                                    cm.npc_LeaveField("oid=51680411");
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=51680403");
                                                      cm.npc_LeaveField("oid=51680403");
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=51680404");
                                                        cm.npc_LeaveField("oid=51680404");
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=51680405");
                                                          cm.npc_LeaveField("oid=51680405");
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("……一帮蠢货。他们再怎么顽抗也是没用的。他们的末日就要到了。", 5, 1514000, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 180, -800, 43);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2779);
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.eventSKill(0);
                                                                cm.warp(141050000, 0, false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=51680402");
                                                                cm.npc_LeaveField("oid=51680402");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;