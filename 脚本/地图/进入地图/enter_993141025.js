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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3004435, "oid=515664", 1031, 0, 1);
      cm.npc_ChangeController(3004430, "oid=515665", -428, -100, 5);
      cm.npc_SetSpecialAction("oid=515665", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=515666", -348, -100, 5);
      cm.npc_SetSpecialAction("oid=515666", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 951, 5);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1250, 0, 920, 50);
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
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯？那人是……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -500, 50);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#您看到敌人的分遣队了吗？\r\n他们一直在箭射不到的地方，时不时地对我们发起挑衅。", 37, 3004437, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然人数还不多，也没有构成太大威胁，\r\n但问题是……人数一直在增加。", 37, 3004437, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我知道了。还请你多加留意。", 37, 3004430, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那个剑之守护者好像正在负责调度守备队。", 37, 3004435, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#据说她那白色的翅膀就是天族的象征。", 37, 3004435, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("吼哦……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#听起来这里的居民似乎十分信任守护者。", 37, 3004435, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#然而她自己反倒像是被所属的教团疏远了？", 37, 3004435, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('嗯……', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=515665", -1, 80, 100);
                                            cm.npc_SetForceMove("oid=515666", -1, 80, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1250);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=515665", 0, 500);
                                              cm.Npc_Fadeout("oid=515666", 0, 500);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=515665");
                                                cm.npc_LeaveField("oid=515666");
                                                cm.sendNormalTalk_Bottom("啊，已经走了。", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你要是想帮助这里的人们，就去找#b西城墙#k的黎明祭司吧。", 37, 3004435, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那边好像出了什么问题。", 37, 3004435, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('那么胡克呢？', 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我……得收拾那些海鸥的粪便了。", 37, 3004435, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("通过右边的传送口去#b西城墙#k看看吧。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.forceCompleteQuest(39805);
                                                              cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                              cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1");
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.warp(410000590, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.setStandAloneMode(false);
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
}