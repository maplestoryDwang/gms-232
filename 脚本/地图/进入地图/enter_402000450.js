var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(37117)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(37117)) {
    cm.Hidden_background("402000450_tag1", 1, 0, 0, 0);
    cm.Hidden_background("402000450_tag2", 1, 1, 0, 0);
    cm.dispose();
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
      cm.npc_ChangeController(3004010, "oid=62241", 752, -186, 10, 717, 802, 1, false, false);
      cm.npc_ChangeController(3004011, "oid=62242", -67, 64, 2, -117, -17, 1, false, false);
      cm.npc_ChangeController(3004012, "oid=62243", 1406, 64, 21, 1391, 1456, 1, false, false);
      cm.npc_ChangeController(3004013, "oid=62244", 228, 64, 4, 202, 278, 1, false, false);
      cm.npc_ChangeController(3004013, "oid=62245", 295, 64, 4, 245, 332, 1, false, false);
      cm.npc_ChangeController(3004013, "oid=62246", 1721, 64, 18, 1721, 1771, 1, false, false);
      cm.npc_ChangeController(3004007, "oid=62247", 949, 64, 13, 899, 999, 5, true, false);
      cm.npc_ChangeController(3004007, "oid=62248", 1047, 64, 14, 1047, 1097, 5, true, false);
      cm.npc_ChangeController(3004012, "oid=62249", 989, -186, 11, 939, 1018, 1, false, false);
      cm.npc_ChangeController(3004012, "oid=62250", 1039, -186, 12, 1039, 1089, 1, false, false);
      cm.npc_ChangeController(3004045, 'oid=62251', 530, -186, 9, 530, 580, 0, false, false);
      cm.npc_ChangeController(3004046, "oid=62252", 663, -186, 9, 613, 677, 0, false, false);
      cm.Hidden_background("402000450_tag1", 1, 1, 0, 0);
      cm.Hidden_background("402000450_tag2", 1, 0, 0, 0);
      cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;36=h1;46=h0;37=h1;47=h1;38=h1;39=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -110, -100);
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
            cm.sendNormalTalk_Bottom('这味道可真难闻……', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, 800, -100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(7000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#在那里！", 37, 3004000, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#咕噜咕噜？", 37, 3004007, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                          cm.effect_Text(["#fn黑体##fs18#另外，同一时间的豪华观光办公室……"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#大哥，据说斗战俱乐部出乱子了。", 37, 3004014, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face0#但是？', 37, 3004002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#总感觉是黑鸦那家伙把东西拿走的。", 37, 3004014, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……是吗？", 37, 3004002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那没办法了。只能用其他办法弥补损失了。", 37, 3004002, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#你不觉得吗，塞妮娅？", 37, 3004002, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#什么？", 37, 3004001, true, true);
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
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                  } else if (status === V++) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;45=h0;36=h1;46=h0;37=h1;47=h1;38=h1;39=h1");
                                                    cm.updateInfoQuest(37117, 'dir=off');
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