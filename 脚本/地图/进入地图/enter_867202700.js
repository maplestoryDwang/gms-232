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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400669, "oid=7537769", 265, 150, 19, 215, 315, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537769", "summon", 0, 0);
      cm.npc_ChangeController(9400590, "oid=7537770", -970, 150, 2, -1020, -920, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537770", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7537771", -1040, 150, 4, -1090, -990, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537771", "summon", 0, 0);
      cm.npc_ChangeController(9400632, "oid=7537772", -260, 150, 14, -310, -210, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537772", "summon", 0, 0);
      cm.npc_ChangeController(9400633, "oid=7537773", -140, 150, 15, -190, -90, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537773", 'summon', 0, 0);
      cm.npc_ChangeController(9400634, "oid=7537774", -240, 150, 14, -290, -190, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537774", 'summon', 0, 0);
      cm.npc_ChangeController(9400632, "oid=7537775", -180, 150, 14, -230, -130, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537775", 'summon', 0, 0);
      cm.npc_ChangeController(9400633, "oid=7537776", -100, 150, 15, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537776", 'summon', 0, 0);
      cm.npc_ChangeController(9400634, "oid=7537777", -50, 150, 16, -100, 0, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537777", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7537769", "claw", 0, 1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=7537772", -1, 2000, 210);
        cm.npc_SetForceMove("oid=7537773", -1, 2000, 300);
        cm.npc_SetForceMove("oid=7537774", -1, 2000, 270);
        cm.npc_SetForceMove("oid=7537775", -1, 2000, 230);
        cm.npc_SetForceMove("oid=7537776", -1, 2000, 200);
        cm.npc_SetForceMove("oid=7537777", -1, 2000, 250);
        cm.npc_SetSpecialAction("oid=7537769", "breathe", 0, 1);
        cm.sendNormalTalk_Bottom("呀啊啊啊啊！", 37, 9400599, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 3000, 265, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=7537772");
              cm.npc_LeaveField("oid=7537772");
              cm.npc_LeaveField("oid=7537773");
              cm.npc_LeaveField("oid=7537773");
              cm.npc_LeaveField("oid=7537774");
              cm.npc_LeaveField("oid=7537774");
              cm.npc_LeaveField("oid=7537775");
              cm.npc_LeaveField("oid=7537775");
              cm.npc_LeaveField("oid=7537776");
              cm.npc_LeaveField("oid=7537776");
              cm.npc_LeaveField("oid=7537777");
              cm.npc_LeaveField("oid=7537777");
              cm.npc_SetSpecialAction("oid=7537769", "flame", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_Text(["#r#fn黑体##fs26#芬里斯#k"], [100, 4000, 4, 80, 200, 1, 4, 0, 0, 0]);
              cm.effect_Text(["#fn黑体##fs16#传说中的狼"], [100, 1500, 4, 80, 250, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(867202700, 3, 3, 2);
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(867202700, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 3000, -860, 150);
                  } else {
                    if (status === V++) {
                      cm.playerMessage(-1, "保护居民并消灭芬里斯。");
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我们是不是要去帮一下？！", 37, 9400597, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#可…可恶！你不知道那家伙有多厉害，给我乖乖的待着！", 37, 9400590, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这片森林马上就要变成火海了！", 37, 9400590, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你在说什么？！", 37, 9400597, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=7537770", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7537770", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=7537770", -1);
                                      cm.sendNormalTalk_Bottom("#face0#可恶可恶可恶，该怎么办？", 37, 9400590, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#芬里斯出现的地方，就… 就会出现那个巨大身影！！快，赶紧逃吧！", 37, 9400590, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=7537769");
                                          cm.npc_LeaveField("oid=7537769");
                                          cm.npc_LeaveField("oid=7537770");
                                          cm.npc_LeaveField("oid=7537770");
                                          cm.npc_LeaveField("oid=7537771");
                                          cm.npc_LeaveField("oid=7537771");
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.spawnMobLimit(9402266, 1, 944, 105, 1);
                                          cm.addPopupSay(9400599, 3000, "村长！我准备好渔网了！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#唉- 我数一二三就扔过去！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#一！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#二！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#三！", '', 0);
                                          cm.spawnMobLimit(9402318, 1, 150, 105, 1);
                                          cm.addPopupSay(9400599, 3000, "呜哇哇哇！成功了！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#咔哈哈哈，再来！", '', 0);
                                          cm.addPopupSay(9400597, 3000, "#face0#一！", '', 0);
                                          cm.addPopupSay(9400597, 3000, '#face0#二！', '', 0);
                                          cm.addPopupSay(9400597, 3000, '#face0#三！', '', 0);
                                          cm.dispose();
                                          cm.forceJoinEvent("莫奈德_地图_Act3.7_野战火狼");
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