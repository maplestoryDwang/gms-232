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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004851, "oid=2710424", 266, 154, 4, 216, 316, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710424", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -370, 123);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 120, 210);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3##fs22#你~听不见~我说话吗~？", 36, 3004851, false, true, 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004851, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3##fs22##h0#~，休麦~~！！", 36, 3004851, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#嗯……首先我应该还活着……", 36, 3004851, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#好像和冥界也没什么区别。", 36, 3004851, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#底部软乎乎的……。", 36, 3004851, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4##h0#……休麦……", 36, 3004851, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#在大海里，越胆大的家伙越早死。", 36, 3004850, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#我该把那话听进去的。", 36, 3004851, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#(咕噜噜噜！)", 36, 3004851, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#……。", 36, 3004851, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4##h0#，幸好你没听到这个。\r\n否则我还没饿死就要羞死了。", 36, 3004851, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -100, 210);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setNpcSpecialActionReset("oid=2710424");
                                                    cm.sendNormalTalk_Bottom("#face1##h0#？！！！", 36, 3004851, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("沃莉！", 56, 0, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#你该不是听……听到了吧？", 36, 3004851, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askMenu_Bottom("嗯……\r\n\r\n#b#L0# 听到了 #l\r\n#L1# 没听到 #l\r\n#L2# 那重要吗", 57, 0, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face1#……。', 37, 3004851, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#额……暂且先沉浸在重逢的喜悦中吧。", 36, 3004851, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……？", 56, 0, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#比起这个，到底怎么回事？\r\n虽说#h0#实力过人，但我没想到他会跑到这里来救人。", 36, 3004851, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#好了，我们快回去吧，省得休麦担心。", 36, 3004851, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("但是……怎么回去呢？", 56, 0, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('#face1#……。', 36, 3004851, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#……诶？", 36, 3004851, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(3004864, "oid=2710551", -169, 179, 3, -219, -119, 1, false, 1500, false);
                                                                              cm.npc_SetSpecialAction("oid=2710551", "summon", 0, 0);
                                                                              cm.npc_ChangeController(3004864, "oid=2710552", 46, 166, 3, -4, 96, 0, false, 1500, false);
                                                                              cm.npc_SetSpecialAction("oid=2710552", "summon", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.setAccountQuestInfo(252, "count=4508;T=20210402124635");
                                                                                cm.sendNormalTalk_Bottom("啊，这种时候……。", 56, 0, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.forceCompleteQuest(37918);
                                                                                  cm.gainExp(265476362);
                                                                                  cm.npc_LeaveField("oid=2710424");
                                                                                  cm.npc_LeaveField("oid=2710551");
                                                                                  cm.npc_LeaveField("oid=2710552");
                                                                                  cm.dispose();
                                                                                  cm.warp(450016270, 0, false);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.setStandAloneMode(false);
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
              }
            }
          }
        }
      }
    }
  }
}