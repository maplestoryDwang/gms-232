var status = -1;
var selectionLog = [];
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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.forceStartQuest(33534, '');
      cm.forceCompleteQuest(33535);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(10, 1500, 10, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.npc_ChangeController(1530612, "oid=40457413", 0, 0, 142, -50, 50, 1, false, false);
        cm.npc_SetSpecialAction("oid=40457413", "summon", 0, 0);
        cm.npc_ChangeController(1530613, "oid=40457414", 240, 0, 130, 190, 290, 1, false, false);
        cm.npc_SetSpecialAction("oid=40457414", "summon", 0, 0);
        cm.npc_ChangeController(1530614, "oid=40457415", 240, 0, 130, 190, 290, 1, false, false);
        cm.npc_SetSpecialAction("oid=40457415", 'summon', 0, 0);
        cm.npc_ChangeController(1530615, "oid=40457416", 0, 70, 2, -50, 50, 1, false, false);
        cm.npc_SetSpecialAction("oid=40457416", "summon", 0, 0);
        cm.setAmbience("SoundEff.img/Freinds/crowd", 200, 60);
        cm.npcMove(1530614, -360, -30, 0);
        cm.npcMove(1530615, 0, -147, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/spinoff2/6", 0, 0, 0, 0, 15, 4, 1);
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
              cm.sendNormalTalk_Bottom("为什么不开始呢？", 37, 1530270, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不会是吓得逃跑了吧？", 37, 1530280, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("说谎！我的伊莉娜是不会那样的！！", 37, 1530270, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("但是，戴米安乐队太厉害了。", 37, 1530280, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#希拉老师，我好怕~太黑了。", 37, 1530150, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#你，你就不能忍一下吗！同学们都还在呢，你都不觉得羞愧吗？！", 37, 1530160, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('……', 37, 1530120, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("伊莉娜，你在干嘛啊！", 37, 1530100, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_09/4", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#等一下，就一下。", 37, 1530604, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_09/5", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("伊莉娜姐姐，为什么啊~", 37, 1530607, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_09/6", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#伊莉娜！", 37, 1530100, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH6_09/8", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#她会来的。布吉一定会来的。", 37, 1530604, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH6_09/9", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#fs28#伊莉娜啊啊啊！！！加油！！！", 37, 1530600, false, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_09/10", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#fs28#胡克！奥兹！伊卡尔特！加油！！！", 37, 1530600, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH6_09/11", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("布吉！是布吉的声音！", 37, 1530120, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH6_09/12", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("开始吧，伊莉娜，你们的庆典从现在开始。", 37, 1530090, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH6_09/13", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.playSoundEffDirectly("SoundEff.img/Freinds/crowd");
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 10, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                  cm.fieldEffect_PlayFieldSound("Sound/Bgm42.img/Catch Your Dreams！intro", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=40457413", "sing", -1, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(15000, 1200, 15000, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(11000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_OneTimeAction("好友故事_弹吉他", 1000000);
                                                          cm.forceCompleteQuest(33534);
                                                          cm.forceStartQuest(33535, '');
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd3", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.npc_LeaveField("oid=40457413");
                                                              cm.npc_LeaveField("oid=40457413");
                                                              cm.npc_LeaveField("oid=40457414");
                                                              cm.npc_LeaveField("oid=40457414");
                                                              cm.npc_LeaveField("oid=40457415");
                                                              cm.npc_LeaveField("oid=40457415");
                                                              cm.npc_LeaveField("oid=40457416");
                                                              cm.npc_LeaveField("oid=40457416");
                                                              cm.npc_ChangeController(1530652, "oid=40472859", 0, 0, 142, -50, 50, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=40472859", "summon", 0, 0);
                                                              cm.npc_ChangeController(1530653, "oid=40472860", 240, 0, 130, 190, 290, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=40472860", 'summon', 0, 0);
                                                              cm.npc_ChangeController(1530654, "oid=40472861", 240, 0, 130, 190, 290, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=40472861", 'summon', 0, 0);
                                                              cm.npc_ChangeController(1530655, "oid=40472862", 0, 70, 2, -50, 50, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=40472862", "summon", 0, 0);
                                                              cm.npcMove(1530654, -360, -30, 0);
                                                              cm.npcMove(1530655, 0, -147, 0);
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.userSetFieldFloating(330002623, 0, 80, 3000);
                                                              cm.onScriptMessage_音乐游戏('', 0, 370, 60);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.onScriptMessage_音乐游戏("Sound/Bgm42.img/Catch Your Dreams！play", 1, 1, 0);
                                                              } else if (status === V++) {
                                                                if (f <= 0) {
                                                                  cm.warp(330002623, 0);
                                                                } else {
                                                                  cm.warp(330002627, 0);
                                                                  cm.playerMessage(-1, "同步率 " + f + '%');
                                                                }
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