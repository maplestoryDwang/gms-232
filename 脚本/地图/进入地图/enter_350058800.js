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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1540498, "oid=285957717", 116, -33, 1, 66, 166, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=285957717", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 5000, 0, -30);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我感受到了。\r\n核心越来越近了。", 37, 1540453, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……格里梅尔，在那个从小就是天才的家伙眼中……\r\n我们不值一提吗？", 37, 1540453, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("格里梅尔想要的是进化人类。\r\n他只是在追求自己的理想而已。", 37, 1540453, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你是让我体谅格里梅尔吗？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我不是这个意思。\r\n不过，在事情变成这样之前…… ", 37, 1540453, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("如果有人在格里梅尔身边，告诉他这么做是不对的……\r\n他应该不会这么做的。", 37, 1540453, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1540497, "oid=285962842", 0, -33, 1, -50, 50, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=285962842", "summon", 0, 0);
                            cm.npcMove(1540497, 0, -220, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                              cm.npc_SetSpecialAction("oid=285962842", 'appear', -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=285962842", "saying", -1, 1);
                                cm.fieldEffect_PlayBGM("Bgm41.img/BigMachine_mission", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=285957717"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("格里梅尔……！", 37, 1540453, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嘻嘻，最后的晚餐的嘉宾终于来啦。\r\n我们来玩最后一个游戏吧？", 37, 1540470, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(1540496, "oid=285965103", 0, -33, 1, -50, 50, 1, false, 1000, false);
                                      cm.npc_SetSpecialAction("oid=285965103", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我的晚餐入场费非常贵呢。\r\n让我看看你能撑多久！嘻嘻嘻！！", 37, 1540470, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.spawnMobSchedule(8240107, 1, 72, -2, 5000);
                                          cm.spawnMobSchedule(8240107, 1, 29, -2, 10000);
                                          cm.spawnMobSchedule(8240107, 1, 131, -2, 12000);
                                          cm.spawnMobSchedule(8240107, 1, -165, -2, 12000);
                                          cm.spawnMobSchedule(8240107, 1, 209, -2, 16000);
                                          cm.spawnMobSchedule(8240107, 1, -167, -2, 16000);
                                          cm.spawnMobSchedule(8240107, 1, -59, -2, 20000);
                                          cm.spawnMobSchedule(8240107, 1, 113, -2, 20000);
                                          cm.spawnMobSchedule(8240107, 1, 205, -2, 25000);
                                          cm.spawnMobSchedule(8240108, 1, -198, -2, 25000);
                                          cm.spawnMobSchedule(8240107, 1, -4, -2, 29000);
                                          cm.spawnMobSchedule(8240108, 1, 205, -2, 29000);
                                          cm.spawnMobSchedule(8240107, 1, -77, -2, 32000);
                                          cm.spawnMobSchedule(8240108, 1, -184, -2, 32000);
                                          cm.spawnMobSchedule(8240107, 1, -52, -2, 37000);
                                          cm.spawnMobSchedule(8240108, 1, 79, -2, 37000);
                                          cm.spawnMobSchedule(8240107, 1, -93, -2, 40000);
                                          cm.spawnMobSchedule(8240108, 1, -200, -2, 40000);
                                          cm.spawnMobSchedule(8240108, 1, 153, -2, 42000);
                                          cm.spawnMobSchedule(8240108, 1, -2, -2, 42000);
                                          cm.spawnMobSchedule(8240108, 1, -141, -2, 45000);
                                          cm.spawnMobSchedule(8240108, 1, -11, -2, 45000);
                                          cm.spawnMobSchedule(8240108, 1, 37, -2, 48000);
                                          cm.spawnMobSchedule(8240108, 1, 165, -2, 49000);
                                          cm.spawnMobSchedule(8240108, 1, -123, -2, 51000);
                                          cm.spawnMobSchedule(8240108, 1, 83, -2, 51000);
                                          cm.spawnMobSchedule(8240108, 1, -68, -2, 54000);
                                          cm.spawnMobSchedule(8240108, 1, -186, -2, 54000);
                                          cm.spawnMobSchedule(8240108, 1, -125, -2, 57000);
                                          cm.spawnMobSchedule(8240108, 1, 119, -2, 57000);
                                          cm.spawnMobSchedule(8240108, 1, -117, -2, 61000);
                                          cm.spawnMobSchedule(8240107, 1, 78, -2, 61000);
                                          cm.spawnMobSchedule(8240108, 1, -20, -2, 63000);
                                          cm.spawnMobSchedule(8240107, 1, 114, -2, 63000);
                                          cm.spawnMobSchedule(8240108, 1, -143, -2, 66000);
                                          cm.spawnMobSchedule(8240107, 1, 100, -2, 66000);
                                          cm.spawnMobSchedule(8240108, 1, 20, -2, 69000);
                                          cm.spawnMobSchedule(8240107, 1, -158, -2, 69000);
                                          cm.spawnMobSchedule(8240109, 1, 182, -2, 71000);
                                          cm.spawnMobSchedule(8240107, 1, -158, -2, 71000);
                                          cm.spawnMobSchedule(8240109, 1, -208, -2, 72000);
                                          cm.spawnMobSchedule(8240107, 1, -6, -2, 72000);
                                          cm.spawnMobSchedule(8240109, 1, -28, -2, 74000);
                                          cm.spawnMobSchedule(8240107, 1, -207, -2, 74000);
                                          cm.spawnMobSchedule(8240109, 1, 85, -2, 76000);
                                          cm.spawnMobSchedule(8240107, 1, -183, -2, 76000);
                                          cm.spawnMobSchedule(8240109, 1, 84, -2, 78000);
                                          cm.spawnMobSchedule(8240107, 1, -61, -2, 78000);
                                          cm.npc_SetSpecialAction("oid=285962842", "laugh", -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=285962842", "disappear", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=285962842");
                                            cm.npc_LeaveField("oid=285962842");
                                            cm.npc_LeaveField("oid=285957717");
                                            cm.npc_LeaveField("oid=285957717");
                                            cm.setPartner(1, 1540722, 80001602, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.scheduleWarpTask(81, 350058850, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;