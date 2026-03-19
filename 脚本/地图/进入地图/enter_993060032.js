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
      cm.npc_ChangeController(3003670, "oid=275739", 819, 123, 5, 769, 869, 1, true, 0, false);
      cm.npc_ChangeController(3003670, "oid=275740", 1050, 161, 7, 1000, 1100, 1, true, 0, false);
      cm.npc_ChangeController(3003670, 'oid=275741', 1275, 162, 7, 1225, 1325, 1, true, 0, false);
      cm.npc_ChangeController(3003670, "oid=275742", 1429, 163, 7, 1379, 1479, 1, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275743", -19, 116, 4, -69, 31, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275744", -111, 116, 3, -161, -61, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275745", -199, 116, 3, -249, -149, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275746", -287, 115, 3, -337, -237, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275747", 66, 115, 4, 16, 116, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3003674, "oid=2201531", 400, 90, 4, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2201531", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -920, 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 350, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3003658, "oid=2201532", -450, 90, 3, -500, -400, 0, true, 1000, false);
              cm.npc_SetSpecialAction("oid=2201532", "summon", 0, 0);
              cm.npc_SetForceMove("oid=2201532", 1, 630, 150);
              cm.inGameDirectionEvent_AskAnswerTime(8000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我来是想把出征的消息告诉你，伊黛娜。", 37, 3003658, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#时候终于到了。", 37, 3003674, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("给，这个……是出征之前送给大家的证物。\r\n感谢你能加入到这次远征之中。", 37, 3003658, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#别客气。该感谢的人是我们。\r\n在夺回赫里希安的过程中，冒险岛联盟为我们提供了很大的帮助。", 37, 3003674, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#对这段时间所发生的一切，我们心怀感恩，\r\n我们将誓死保卫世界，谨以此收下该证物。", 37, 3003674, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("诺巴的大魔法师能那样说，我心里踏实多了。", 37, 3003658, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#赫丽娜，我想你应该很清楚，黑魔法师的意念\r\n跨越了神秘河，对这个世界也产生了影响。", 37, 3003674, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("而且随着时间的推移而愈演愈烈。", 37, 3003658, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是的，没错。", 37, 3003674, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#虽然我们协助以汉斯为首的冒险岛世界的贤者们，\r\n制定了相应的对策，但是心里还是非常担心。", 37, 3003674, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#因为敌人是黑魔法师的意念创造出来的东西。", 37, 3003674, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#所以……赫丽娜，\r\n留在这里坚守岗位的勇士们还请你多多关照。", 37, 3003674, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("嗯，我会竭尽所能保护他们的。好了，祝你好运。", 37, 3003658, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#也祝你好运。", 37, 3003674, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=2201531");
                                                            cm.npc_LeaveField("oid=2201531");
                                                            cm.npc_LeaveField("oid=2201532");
                                                            cm.npc_LeaveField("oid=2201532");
                                                            cm.dispose();
                                                            cm.warp(993060033, 0, false);
                                                            cm.setStandAloneMode(false);
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