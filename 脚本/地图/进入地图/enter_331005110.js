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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/subway2", 150, 60);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onSetMapObjectMove("subway_bg", "outside", [3, 1]);
      cm.onSetMapObjectMove("subway_main", "outside", [3, 1]);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face4#怪物居然会对所有人发起攻击……\r\n今晚的头条新闻算是明确了呢。", 37, V, false, true);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("#face11#凯内西斯，你还好吗？", 37, 1531001, true, true);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("是啊，\r\n杰，你那边没什么事情吧？", 37, V, true, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face9#没什么大事，\r\n除了你带来的猫不见了……", 37, 1531001, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("你说内罗不见了？", 37, V, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face9#嗯，自从你走了之后就不见了。\r\n我看应该是跟着你走了。", 37, 1531001, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("该死！你该抓住它的啊，杰。", 37, V, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face9#我是努力去抓过，但是那家伙却要狂抓我的手背，\r\n要是被抓到了，肯定会被感染上病菌的。", 37, 1531001, true, true);
                        } else {
                          if (status === O++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/subway_04", 100);
                            cm.getTopMsgFont("此次车辆在这一站停止运行. ", 3, 20, 20, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === O++) {
                              cm.getTopMsgFont("电车要是停了,  也请您不要惊慌,  希望各位能够按照乘务员的指示,  从紧急出口逃生. ", 3, 20, 20, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("……总之，这么一来，也许周围的人就都知道你的长相了。", 37, 1531001, false, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("无所谓，一直以来你见我在意过这种事情了吗？\r\n等在下一站下车后就回归。", 37, V, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === O++) {
                                      cm.setAmbience("Ambience.img/gal_fire", 100, 60);
                                      cm.onSetMapObjectMove("subway_bg", "insiding", [2, 0]);
                                      cm.onSetMapObjectMove("subway_main", "insiding", [2, 0]);
                                      cm.onSetMapObjectMove("subway_bg", "inside", [3, 1]);
                                      cm.onSetMapObjectMove("subway_main", "inside", [3, 1]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("……真是奇怪，地铁没有停下来。", 37, V, false, true);
                                      } else {
                                        if (status === O++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === O++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                            cm.userSetFieldFloating(331005110, 1, 5, 20);
                                            cm.setAmbience("SoundEff.img/blackHeaven/scanner_alert", 100, 60);
                                            cm.fieldEffect_PlayBGM("Bgm41.img/BigMachine_mission", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === O++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/subway_05", 100);
                                              cm.getTopMsgFont("目前电车发生了异常,  无法正常运行. ", 3, 20, 20, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            } else {
                                              if (status === O++) {
                                                cm.getTopMsgFont("希望各位乘客能够注意安全. ", 3, 20, 20, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("！！等一下，凯内西斯？前方有奇怪的能量……？在这里没法识别。", 37, 1531001, false, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom("前方？什么都……", 37, V, true, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom("#face0#呃……呃啊！！！！", 37, V, true, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.userSetFieldFloating(331005110, 20, 20, 100);
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.userSetFieldFloating(331005110, 1, 5, 200);
                                                                    cm.setAmbience("Ambience.img/heart", 200, 60);
                                                                    cm.sendNormalTalk_Bottom("#face1#凯内西斯？凯内西斯？！发生什么事情了！", 37, 1531001, false, true);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#呃，头……！", 37, V, true, true);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_alert");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#实际碰到面这可还是头一次，\r\n该说这是种荣幸吗？超能力者。", 37, 1531005, false, true);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.npc_ChangeController(1531005, "oid=196591686", 627, 48, 32, 577, 677, 1, true, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=196591686", 'summon', 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              cm.userSetFieldFloating(331005110, 0, 0, 0);
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 530, 0);
                                                                            } else {
                                                                              if (status === O++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use", 100);
                                                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/kinesis/chaWhite", 0, 500, 800, 0, 12, 5, 1, -1, 0, 0, 0);
                                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 1, 300, -800, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === O++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m", 100);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 1, 100, 800, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === O++) {
                                                                                    cm.sendNormalTalk_Bottom("不是那个世界的异邦人，而是在这个世界最先拥有特殊能力的人类……", 37, 1531005, false, true);
                                                                                  } else {
                                                                                    if (status === O++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#你就是我在寻找的引爆剂。", 37, 1531005, true, true);
                                                                                    } else {
                                                                                      if (status === O++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#呃，那到底是什么……！", 37, V, true, true);
                                                                                      } else {
                                                                                        if (status === O++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === O++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                          } else {
                                                                                            if (status === O++) {
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else {
                                                                                              if (status === O++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === O++) {
                                                                                                  cm.playVideoByScript("Kinesis2.avi");
                                                                                                } else if (status === O++) {
                                                                                                  cm.forceCompleteQuest(22733);
                                                                                                  cm.forceCompleteQuest(22734);
                                                                                                  cm.gainExp(2500);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                  cm.eventSKill(0);
                                                                                                  cm.warp(331005120, 0, false);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                  cm.npc_LeaveField("oid=196591686");
                                                                                                  cm.npc_LeaveField("oid=196591686");
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