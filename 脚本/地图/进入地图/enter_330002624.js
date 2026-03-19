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
      cm.forceCompleteQuest(33534);
      cm.forceCompleteQuest(33535);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2500, 10, 0, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1530604, "oid=40581464", 0, 0, 142, -50, 50, 1, true, false);
        cm.npc_SetSpecialAction("oid=40581464", 'summon', 0, 0);
        cm.npc_ChangeController(1530613, "oid=40581465", 240, 0, 130, 190, 290, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581465", 'summon', 0, 0);
        cm.npc_ChangeController(1530614, "oid=40581466", 240, 0, 130, 190, 290, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581466", 'summon', 0, 0);
        cm.npc_ChangeController(1530615, "oid=40581467", 0, 85, 2, -50, 50, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581467", 'summon', 0, 0);
        cm.npc_ChangeController(1530645, "oid=40581468", 642, -40, 175, 592, 692, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581468", "summon", 0, 0);
        cm.npc_ChangeController(1530644, "oid=40581469", 731, -40, 147, 681, 781, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581469", 'summon', 0, 0);
        cm.npc_ChangeController(1530643, "oid=40581470", 827, -40, 144, 777, 877, 1, false, false);
        cm.npc_SetSpecialAction("oid=40581470", "summon", 0, 0);
        cm.npc_ChangeController(1530621, "oid=40581471", -145, 20, 138, -195, -95, 0, true, false);
        cm.npc_SetSpecialAction("oid=40581471", 'summon', 0, 0);
        cm.npc_ChangeController(1530600, "oid=40581472", 300, 20, 130, 250, 350, 1, true, false);
        cm.npc_SetSpecialAction("oid=40581472", "summon", 0, 0);
        cm.npcMove(1530614, -120, -30, 0);
        cm.npcMove(1530615, 0, -107, 0);
        cm.npcMove(1530645, 0, 10, 0);
        cm.npcMove(1530644, -10, 20, 0);
        cm.npcMove(1530643, -35, 10, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎么回事？", 37, 1530100, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不知道，大概是暂时休战吧~", 37, 1530607, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('有点奇怪啊……', 37, 1530090, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=40581464", -1, 10, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("好，那我们赢了，你们要遵守约定吧？", 37, 1530604, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH6_10/1", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(1500, 2700, 1500, -70, 50);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('#face7#……', 37, 1530621, false, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_10/2", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#话虽如此……\r\n反正我也不想看你的屁股在那里晃来晃去的，\r\n不如就让你给布吉道个歉吧。布吉，你上舞台来吧？", 37, 1530120, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_10/3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 2700, 1500, 0, 50);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=40581472", -1, 115, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face7#我不可能道歉。这怎么看都应该是我们赢。\r\n特别是那个胡古还是什么的，你弹得也太烂了。", 37, 1530621, false, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH6_10/4", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("什么，你这小子！！喂，你……", 37, 1530100, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH6_10/5", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嘘，你先别吵。", 37, 1530090, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH6_10/7", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#但是，我承认，\r\n这个曲子还不错。", 37, 1530621, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_10/8", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=40581471", -1, 200, 100);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2700, 1500, 30, 50);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哦哦哦哦哦哦！！", 37, 1530280, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(330002625, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;