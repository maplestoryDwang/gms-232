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
      cm.npc_ChangeController(3001684, "oid=375528", 835, -31, 31, 779, 879, 4, true, 0, false);
      cm.npc_ChangeController(3001684, "oid=375529", 370, -31, 14, 345, 445, 4, true, 0, false);
      cm.npc_ChangeController(3001684, "oid=375530", 612, -31, 24, 545, 645, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375531', -889, 29, 5, -938, -838, 4, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375532', -725, 29, 21, -777, -677, 5, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375533", -511, 29, 17, -519, -419, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375534', -430, 29, 16, -436, -336, 3, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375535", 41, 29, 6, -49, 51, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375536', 342, -31, 34, 254, 354, 4, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375537', 509, -31, 26, 409, 509, 4, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375538', 977, -31, 32, 893, 993, 4, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375539", 1041, -31, 33, 977, 1077, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
      cm.npc_ChangeController(3001661, "oid=2967158", -254, 10, 7, -304, -204, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2967158", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2967158", "special0", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 477, -374);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -223, -81);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（大白天的，寺院里却是人迹罕至，冷冷清清，\r\n看样子被绑架的修行者不止一二。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -223, 40);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#呼……俊秀法师到底什么时候才能祈祷完出来啊……\r\n整个村庄和寺院都人心惶惶啊。", 36, 3001661, false, true);
                            } else {
                              if (status === V++) {
                                cm.playSoundEffDirectly("Ambience.img/bell1");
                                cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -574, 40);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -304, 40);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 377);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=2967158");
                                                cm.npc_SetSpecialAction("oid=2967158", "stand", -1, 0);
                                                cm.sendNormalTalk_Bottom("#face0#……啊，有客人到了。", 36, 3001661, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face12#啊，我是收到委托后前来的解决师，我叫虎影。\r\n对了，我可是青云谷最出色的解决师。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这项链太过奢华，不太适合修行者呢，\r\n啊哈，我懂了，这是失踪和绑架之间的关联。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(39520, "dir=1");
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
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else if (status === V++) {
                                                                cm.setStandAloneMode(false);
                                                                cm.warp(410000230, 0, false);
                                                                cm.eventSKill(0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=2967158");
                                                                cm.npc_LeaveField("oid=2967158");
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