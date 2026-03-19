var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if ("dir=on;NpcSpeech=30012191" === cm.getInfoQuest(37107)) {
    action0(f, E, e);
  } else {
    cm.dispose();
  }
}
function action0(f, E, e) {
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
      cm.npc_ChangeController(3001550, 'oid=62108', 395, 45, 68, 345, 445, 1, false, false);
      cm.npc_ChangeController(3001218, "oid=62109", -594, 45, 67, -644, -544, 1, false, false);
      cm.npc_ChangeController(3004040, "oid=62110", -760, 45, 67, -810, -710, 0, false, false);
      cm.npc_ChangeController(3004038, "oid=62111", 839, 33, 71, 789, 889, 1, false, false);
      cm.npc_ChangeController(3004051, "oid=62112", 592, 45, 68, 542, 635, 0, false, false);
      cm.npc_ChangeController(3004052, 'oid=62113', 700, 45, 70, 675, 750, 0, false, false);
      cm.npc_ChangeController(3004052, "oid=62114", 970, 45, 70, 920, 1020, 1, false, false);
      cm.npc_ChangeController(3004052, "oid=62115", 1080, 45, 70, 1030, 1130, 1, false, false);
      cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;33=h1;dir=off;35=h1;36=h1;37=h1;38=h1");
      cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;dir=off;35=h1;36=h1;37=h1;38=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004006, "oid=7106521", 838, 11, 71, 788, 888, 0, false, false);
      cm.npc_SetSpecialAction("oid=7106521", "summon", 0, 0);
      cm.npc_ChangeController(3004007, "oid=7106522", 970, 11, 70, 920, 1020, 1, true, false);
      cm.npc_SetSpecialAction("oid=7106522", "summon", 0, 0);
      cm.npc_ChangeController(3004007, "oid=7106523", 1080, 11, 70, 1030, 1130, 1, true, false);
      cm.npc_SetSpecialAction("oid=7106523", 'summon', 0, 0);
      cm.npc_ChangeController(3004007, "oid=7106524", 700, 11, 70, 650, 750, 0, true, false);
      cm.npc_SetSpecialAction("oid=7106524", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -861, -118);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, -45, -118);
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
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这里是黑市吗？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是的，这也是许多家伙来到荒蛮终点站的原因。", 37, 3004000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#所有稀有的动植物、食物材料、艺术品、机器配置，还有改造的武器等等。\r\n应有尽有，不过大部分都是赃物。", 37, 3004000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这里的商人也都很粗暴危险，你还是小心为妙。", 37, 3004000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我们在这里要找的人是……", 37, 3004000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#还不快滚？还要我告诉你怎么滚吗？", 37, 3004006, true, true);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 868, 19);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#武器商人佩隆，最危险的类型", 37, 3004000, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#咕噜咕噜。", 37, 3004007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('鱼？', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#都是住在下水道的一群家伙。\r\n最近数量急剧增长，全跑到这里来了。", 37, 3004000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我打算偷点值钱的东西，去换点吃的。", 37, 3004000, true, true);
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
                                                    cm.npc_LeaveField("oid=7106521");
                                                    cm.npc_LeaveField("oid=7106522");
                                                    cm.npc_LeaveField("oid=7106523");
                                                    cm.npc_LeaveField("oid=7106524");
                                                    cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h0;33=h1;dir=off;35=h1;36=h1;37=h1;38=h1");
                                                    cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h0;33=h1;dir=off;35=h1;36=h1;37=h1;38=h0");
                                                    cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h0;33=h1;52=h0;dir=off;35=h1;36=h1;37=h1;38=h0");
                                                    cm.updateInfoQuest(37107, "dir=off;NpcSpeech=30012191");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;