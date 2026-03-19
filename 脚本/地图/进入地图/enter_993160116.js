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
      cm.npc_ChangeController(3001680, "oid=375385", 265, 135, 1, 215, 315, 1, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375386', 339, 135, 1, 289, 389, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375387", 465, 135, 1, 415, 515, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375388", 518, 61, 5, 468, 568, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375389", 582, 61, 5, 532, 632, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375390", 660, 61, 5, 610, 710, 1, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375391', -341, 135, 1, -391, -291, 0, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375392', -442, 135, 1, -492, -392, 0, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375393', -265, 135, 1, -315, -215, 0, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375394', -639, 61, 2, -689, -589, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375395", -572, 61, 2, -622, -522, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375396", -512, 61, 2, -562, -462, 0, false, 0, false);
      cm.npc_ChangeController(3001665, "oid=375397", 65, 35, 3, 15, 115, 5, true, 0, false);
      cm.npc_ChangeController(3001681, "oid=375398", -348, 35, 3, -398, -298, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375399", 289, 35, 3, 239, 339, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375400", -276, 35, 3, -326, -226, 0, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375401', 363, 35, 3, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 449, 150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#真美啊……俊秀法师。", 37, 3001661, false, true);
              cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#为了老鼠的世界……", 37, 3001661, true, true);
                cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 18, 60);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#呵呵……月亮已经慢慢升起，\r\n很快这座村庄的所有气息都会尽数掌握在我的手中吧？", 37, 3001665, false, true);
                      cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#不过……如此大喜的日子，这是哪儿来的不速之客啊。\r\n一脸可怕的表情……看样子并非善类。", 37, 3001665, true, true);
                        cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, -150);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#我是来……给你点颜色瞧瞧的。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#哼……可笑至极。", 37, 3001665, true, true);
                                  cm.effect_Voice("Voice5.img/hoyoung/K-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.forceForfeitQuest(39596);
                                        cm.forceStartQuest(39599, '');
                                        cm.forceCompleteQuest(39538);
                                        cm.gainExp(635);
                                        cm.gainExp(7744);
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                            } else if (status === V++) {
                                              cm.warp(410000251, 0, false);
                                              cm.setStandAloneMode(false);
                                              cm.eventSKill(0);
                                              cm.setInGameDirectionMode(false, true, false);
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