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
  if (cm.getQuestStatus(35927) != 1 && cm.getQuestStatus(35928) != 0) {
    cm.dispose();
    return;
  }
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -975, 56);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 768000, 0, -293120, 68863);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(1013350, "oid=859635", -1096, 43, 2, -1146, -1046, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=859635', 'summon', 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1024000, 1, 512000, 1024000, -258560, 22015);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#片刻之后,意念之屋", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哈……真是太可怕了。差点就成了水鬼……\r\n要不是你灵光闪现……嘿,嘿……。", 37, 1013350, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不过总算是安全到达了目的地。\r\n……这里就是怪声的根源。", 37, 1013350, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3##b(在房间的中央,好像有什么东西在发光。\r\n走过去看看吧。)#k", 37, 1013358, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(768000, 1, 256000, 768000, -102400, -11265);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=859635", 1, 400, 150);
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你是沿着隐秘之路来到此地的人。\r\n你有资格成为那种力量的主人。", 37, 1013360, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##b(房间里响起了低沉的声音。\r\n如果可以对话,最好还是直接问问看。)#k", 37, 1013358, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.setStandAloneMode(false);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.forceCompleteQuest(35927);
                                              cm.updateInfoQuest(35947, "12=1;22=1;16=1;26=1;29=1;2=1;6=1");
                                              while (cm.getLevel() < 30) {
                                                cm.getPlayer().levelUp();
                                              }
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