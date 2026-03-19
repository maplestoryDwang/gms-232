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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -270, 295);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400932, "oid=1706653", -200, 295, 5, -250, -150, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706653", "summon", 0, 0);
      cm.npc_ChangeController(9400935, "oid=1706654", -385, 295, 6, -435, -335, 0, true, false);
      cm.npc_SetSpecialAction("oid=1706654", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=1706655", -455, 295, 9, -505, -405, 0, true, false);
      cm.npc_SetSpecialAction("oid=1706655", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -300, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#哇啊啊，这么快就找齐了。凯蒂！不行，这不是吃的。", 37, 9400926, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=1706654"], [3000, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#谢谢你们，勇士~还有艾丹叔叔！\r\n我们一会儿见！", 37, 9400926, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=1706654", -1);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1706654", -1, 250, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.Npc_Fadeout("oid=1706654", 0, 1200);
                    cm.npc_setForceFlip("oid=1706655", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=1706655", -1, 250, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.Npc_Fadeout("oid=1706655", 0, 1200);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#啊啊……特鲁迪太可爱太善良了。嗯，我艾丹也不会再害怕幽灵了！", 37, 9400923, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#今晚就是万圣节派对了吧？我们晚上在凯尼斯家见吧。", 37, 9400923, false, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                cm.forceCompleteQuest(64697);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.gainItem(4036606, -10);
                                  cm.sendNormalTalk_Bottom("#face2##h0#！你准备好了吗？我带了好多糖果，我们快出发吧~~去玩了说不定会错过重要的节目哦！", 37, 9400920, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#我的放了大量大蒜和柠檬的南瓜蛋糕也烤好了。快走吧！", 37, 9400921, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else if (status === V++) {
                                      cm.warp(871000026, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=1706653");
                                      cm.npc_LeaveField("oid=1706654");
                                      cm.npc_LeaveField("oid=1706655");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;