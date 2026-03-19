var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.npc_ChangeController(1531020, "oid=5566839", 270, 70, 32, 220, 320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5566839", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=5566839", "runaway", -1, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.setPartner(1, 1531003, 80001789, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 270, 50);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face0#等下，停住！那里面是陷坑！", 37, V, false, true);
          } else {
            if (status === O++) {
              cm.npc_setForceFlip("oid=5566839", -1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === O++) {
                cm.npc_setForceFlip("oid=5566839", 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === O++) {
                  cm.npc_setForceFlip("oid=5566839", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === O++) {
                    cm.npc_setForceFlip("oid=5566839", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === O++) {
                      cm.setNpcSpecialActionReset("oid=5566839");
                      cm.npc_SetSpecialAction("oid=5566839", 'gone', -1, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === O++) {
                        cm.npc_LeaveField("oid=5566839");
                        cm.npc_LeaveField("oid=5566839");
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face0#不可以！！！！！！！！", 37, V, false, true);
                            } else {
                              if (status === O++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face0#额……", 37, V, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face4#不进去吗？", 37, 1531003, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("#face0#这是陷阱，\r\n现在我控制自己力量的能力还不够完美，若是进去了，吸纳了我的力量的陷坑有可能会变成灾难。", 37, V, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face4#你，真的成长了嘛。\r\n若是在从前，你肯定不会瞻前顾后，立刻就会跳进去的。", 37, 1531003, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("#face0#……#r白魔法师#k。", 37, V, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.sendNormalTalk_Bottom("#face0#我不知道那家伙的真实身份，\r\n也不知道他到底为什么做出了这些事。", 37, V, true, true);
                                          } else {
                                            if (status === O++) {
                                              cm.sendNormalTalk_Bottom("#face0#但可以肯定的是，\r\n要是不在那家伙脸上留下一巴掌，是难平我心头怒火的，该死！！！！", 37, V, true, true);
                                            } else {
                                              if (status === O++) {
                                                cm.sendNormalTalk_Bottom("#face0#我得学会控制我的力量，而且要尽快！\r\n还有我得搞清楚那家伙到底盯上了什么。", 37, V, true, true);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("#face4#先去找汉斯吧，目前这个状况，他也许能给出建议。", 37, 1531003, true, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/news_04", 100);
                                                        cm.getTopMsgFont("新闻速报,  大都市中央的巨大陷坑中", 3, 20, 20, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.getTopMsgFont("正卷起了原因不明的旋风. ", 3, 20, 20, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.getTopMsgFont("附近居民正在快速撤离,  ", 3, 20, 20, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.getTopMsgFont("眼下短时间内大风不会平息. ", 3, 20, 20, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else if (status === O++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                              cm.forceCompleteQuest(22833);
                                                              cm.gainExp(41400);
                                                              cm.setStandAloneMode(false);
                                                              cm.eventSKill(0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.dispose();
                                                              cm.warp(101020400, 0, false);
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