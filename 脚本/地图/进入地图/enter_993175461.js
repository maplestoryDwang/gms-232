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
  if (cm.getQuestStatus(100438) != 1) {
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
      cm.curNodeEventEnd(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -5, 192);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这里就是#b没有主人的房间#k吗？", 56, 0, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("是谁呢？是在这个宅子里生活的孩子吗？可为什么有这么多蜘蛛网……", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#是和妈妈爸爸一起幸福地生活着的#b小女孩#k", 36, 9062263, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……？', 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9062263, "oid=13965867", 194, 214, 1, 144, 244, 1, true, 1500, false);
                        cm.npc_SetSpecialAction("oid=13965867", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#虽然因为诅咒的关系被囚禁在这宅子里，每晚还因为#b恐惧#k而哭个不停，", 36, 9062263, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.sendNormalTalk_Bottom("假……假面？是另一个客人吗？", 56, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#即便过了漫长的时间，也看不到夜的尽头，#b长成大人的少女#k停止了哭泣。", 36, 9062263, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("是谁……呢？", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#看来你顺利通过了#b女仆的测验#k。", 36, 9062263, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……！", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是我邀请你来舞会的。", 36, 9062263, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=13965867", "special", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我叫作#b苏菲莉亚#k。我被困在这间宅子里，做着永无止尽的#b噩梦#k。", 36, 9062255, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.setAccountQuestInfo(238, "count=796;T=20201027090436");
                                            cm.forceCompleteQuest(100438);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
                                            cm.npc_LeaveField("oid=13965867");
                                            cm.dispose();
                                            cm.warp(993175460, 0, false);
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