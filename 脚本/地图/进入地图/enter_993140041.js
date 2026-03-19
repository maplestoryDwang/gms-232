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
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getQuestStatus(39809) > 0) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3004431, "oid=533534", -220, -50, 7, -270, -170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=533534", "summon", 0, 0);
      cm.npc_ChangeController(3004439, 'oid=533535', 96, -50, 12, 46, 146, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=533535", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=533536", 160, -50, 12, 110, 210, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=533536", "summon", 0, 0);
      if (cm.isQuestFinished(39808)) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(39800, "10=h1;01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -310, -50);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这里是……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 16, -102);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#如果塞伦大人知晓此事，肯定会大发雷霆的……", 37, 3004439, false, true);
                      cm.effect_Voice("Voice5.img/CH2/Knight/6", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#既然王子殿下执意如此，属下惟有从命。", 37, 3004439, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Knight/7", 128);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove('oid=533535', 1, 200, 70);
                            cm.npc_SetForceMove("oid=533536", 1, 200, 70);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.Npc_Fadeout('oid=533535', 0, 1000);
                              cm.Npc_Fadeout("oid=533536", 0, 1000);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#好了，现在这里只剩我们几个了。", 37, 3004433, false, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/34", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#没关系吗？如果被教团知道的话，可能不会轻易了事的。", 37, 3004431, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Idea/30", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#身为王子的贵宾，二位无需多虑。", 37, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/35", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
                                          cm.updateInfoQuest(39808, 'dir=1');
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