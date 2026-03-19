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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.forceStartQuest(34836, '');
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.forceCompleteQuest(34836);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.updateInfoQuest(34836, "exp=1;052=1");
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.gainExp(141292);
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2460, -10);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3001300, 'oid=671830', 2700, 65, 9, 2650, 2750, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=671830", 'summon', 0, 0);
                        cm.npc_ChangeController(3001312, "oid=671831", 2800, 65, 7, 2750, 2850, 1, false, 0, false);
                        cm.npc_SetSpecialAction("oid=671831", "summon", 0, 0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671830"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671831"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(4, 1000);
                          cm.sendNormalTalk_Bottom("#face3#呼哧，呼哧，终于全消灭了。", 37, 3001354, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#在敌人力量的影响下，暂时无法移动。", 37, 3001300, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哇，伊利温！没有我你能行吗？", 37, 3001312, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然有些辛苦，不过没关系。", 37, 3001354, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#据推断，对方一定是打算趁我们不在时偷走古代水晶。", 37, 3001300, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3001311, "oid=671840", 1730, 65, 13, 1680, 1780, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=671840", "summon", 0, 0);
                                    cm.npc_SetForceMove('oid=671840', 1, 500, 170);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#希娜！到底怎么了？", 37, 3001354, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#你怎么回事啊！还不快点跟上我！？", 37, 3001311, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#因突发性攻击，目前无法移动。", 37, 3001300, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#可恶，水晶门消失了。", 37, 3001311, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#看来是特意制作一个类似的门来引我们上钩。", 37, 3001354, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#什么？真的吗？", 37, 3001311, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#幸好大家都没事。快离开这吧。", 37, 3001354, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else if (status === V++) {
                                                    cm.npc_LeaveField("oid=671830");
                                                    cm.npc_LeaveField("oid=671831");
                                                    cm.npc_LeaveField("oid=671840");
                                                    cm.dispose();
                                                    if (cm.getNumberFromQuestInfo(34836, "map") <= 0) {
                                                      cm.warp(100000000, 0);
                                                    } else {
                                                      cm.warp(cm.getNumberFromQuestInfo(34836, 'map'), 0);
                                                    }
                                                    cm.setStandAloneMode(false);
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