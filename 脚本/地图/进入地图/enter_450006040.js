var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34252) && !cm.isQuestFinished(34253)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34240) && !cm.isQuestFinished(34241)) {
    action3(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003436, "oid=49537", 1225, 63, 41, 1175, 1275, 1, false, false);
      cm.npc_ChangeController(3003473, "oid=49538", 1499, 63, 46, 1449, 1549, 1, false, false);
      cm.monadForceMove('exist', 0, 0);
      cm.monadForceMove("exist2", 0, 0);
      cm.monadForceMove("after", 1, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003409, "oid=1819468", 1320, 0, 31, 1270, 1370, 1, true, false);
      cm.npc_SetSpecialAction("oid=1819468", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 960, -27);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1129, -1300);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, 1129, -50);
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
                cm.inGameDirectionEvent_AskAnswerTime(5500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这里很安全。", 37, 3003409, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("怎么回事？那难道是克里蒂亚斯的封印之城？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是#b沼泽#k，城堡只是个驱壳。", 37, 3003409, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("沼泽？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#已经在名为#b塔纳#k的少女的记忆中显现出来了。\r\n实际上那只不过是#b珊瑚礁群落#k。", 37, 3003409, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("模仿记忆？\r\n我充其量只能变身为怪物。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#没错。#fs20##r黑魔法师#k#fs16#也不至于到这种程度啊。", 37, 3003409, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('你……你说什么？！！', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##fs18#她的力量能#b撼动艾尔达#k。", 37, 3003409, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我认为……这就是黑魔法师想要得到她的原因。", 37, 3003409, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗯……那个名叫塔纳的少女和那个老头好像往那边走了。", 37, 3003409, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("必须抓紧了。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.npc_LeaveField("oid=1819468");
                                              cm.npc_ChangeController(3003409, "oid=1819473", 2000, -272, 12, 1950, 2050, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=1819473", "summon", 0, 0);
                                              cm.setStandAloneMode(false);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.updateInfoQuest(34252, "enter2=1;enter=1");
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3003436, "oid=49537", 1225, 63, 41, 1175, 1275, 1, false, false);
    cm.npc_ChangeController(3003473, 'oid=49538', 1499, 63, 46, 1449, 1549, 1, false, false);
    cm.monadForceMove("exist", 0, 0);
    cm.monadForceMove('exist2', 0, 0);
    cm.monadForceMove('after', 1, 0);
    cm.dispose();
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestActive(34241)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003436, "oid=49537", 1225, 63, 41, 1175, 1275, 1, false, false);
      cm.npc_ChangeController(3003473, 'oid=49538', 1499, 63, 46, 1449, 1549, 1, false, false);
      cm.monadForceMove("exist", 0, 0);
      cm.monadForceMove("exist2", 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 960, -27);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(25, 99999);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 929, 50);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呃……刚才……是怎么回事？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('江，你没事吧？', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(2, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("咦……是掉到其他地方去了吗？#fs22#江！你在哪儿！#fs16#", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [3000, 0, -120, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1500, 50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是飞鱼！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.updateInfoQuest(34241, 'first=fin');
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.setStandAloneMode(false);
                                          cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;