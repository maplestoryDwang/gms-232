var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getQuestStatus(39205) > 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155122, "oid=1280782", 700, 0, 29, 650, 750, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280782", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280783", 1500, 0, 14, 1450, 1550, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280783", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280784", 1530, 0, 14, 1480, 1580, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280784", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280785", 1570, 0, 15, 1520, 1620, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280785", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280786", 1600, 0, 15, 1550, 1650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280786", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280787", 1630, 0, 3, 1580, 1680, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280787", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1280788", 1660, 0, 3, 1610, 1710, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1280788", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("呼呜…你真强！", 37, 2155122, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那些家伙无论来多少，肯定都赢不了你。\r\n你真是可靠。", 37, 2155122, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 300, 1350, 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("后续小组到达。\r\n先遣小组全部被歼灭。\r\n再次开始清除。", 37, 2155113, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=1280782", -1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 20);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呃啊！我现在真的完了！", 37, 2155123, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("(看来得先返回村庄了)", 57, 0, true, true);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.warp(310070001, 0, false);
                    cm.npc_LeaveField("oid=1280782");
                    cm.npc_LeaveField("oid=1280782");
                    cm.npc_LeaveField("oid=1280783");
                    cm.npc_LeaveField("oid=1280783");
                    cm.npc_LeaveField("oid=1280784");
                    cm.npc_LeaveField("oid=1280784");
                    cm.npc_LeaveField("oid=1280785");
                    cm.npc_LeaveField("oid=1280785");
                    cm.npc_LeaveField("oid=1280786");
                    cm.npc_LeaveField("oid=1280786");
                    cm.npc_LeaveField("oid=1280787");
                    cm.npc_LeaveField("oid=1280787");
                    cm.npc_LeaveField("oid=1280788");
                    cm.npc_LeaveField("oid=1280788");
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
function action2(f, E, e) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm40.img/JunkYard", 0, 0);
        cm.npc_ChangeController(2155104, "oid=6559748", 700, 0, 29, 650, 750, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6559748", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#g(地面上插着类似铁板的东西)", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯？这是什么？", 37, 2155104, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=6559748", 'knee', -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust0", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                  cm.fieldEffect_ProcessOnOffLayer("pan", "Map/Effect2.img/FieldgraveStory/illust1", 0, 500, 0, 0, 13, 4, 1, -1, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("数字…100000？十万？\r\n或者是，英语？…… IOOOOO？", 37, 2155104, false, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer("pan", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, 700, 50);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=6559748"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#这是…嗯…没错。\r\n我所寻找的珍贵的…她的…\r\n啊！呃啊啊！", 37, 2155121, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=6559748", "pain", -1, 1);
                                cm.sendNormalTalk_Bottom('你没事吧？', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2500, 300, 700, 70);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#这是…她的，额…\r\n快想起来！拜托…\r\n啊啊啊啊啊！！！", 37, 2155121, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("(该死，看来得先把它带回村庄了)", 57, 0, true, true);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.warp(310070000, 4, false);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=1;1q=1;2q=1;3q=1;4q=1;dqCount=1;story=1");
                                      cm.forceStartQuest(39205, '');
                                      cm.npc_LeaveField("oid=6559748");
                                      cm.npc_LeaveField("oid=6559748");
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