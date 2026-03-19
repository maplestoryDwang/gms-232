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
      cm.hideNpc(1012108);
      cm.Hidden_background("2018TreeBuff", 1, 0, 0, 0);
      cm.Hidden_background("2018Tree", 1, 0, 0, 0);
      if (cm.getNumberFromQuestInfo(34124, "000") >= 2) {
        cm.dispose();
        return;
      }
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -2234, 18);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.Hidden_background("2018TreeBuff", 1, 0, 0, 0);
      cm.Hidden_background("2018Tree", 1, 0, 0, 0);
      cm.updateInfoQuest(34124, '000=2');
    } else {
      if (status === V++) {
        cm.playVideoByScript("V5.avi");
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1634, -440);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
              cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -1334, -48);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.addPopupSay(3003101, 1000, "...所有的一切都... 结束了... 记忆之树... 我珍贵的记忆...", '', 0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -1034, -48);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.addPopupSay(3003100, 1000, "异邦人... 这都是因为你...", '', 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3500, 1000, 3500, -34, -48);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 680);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.addPopupSay(3003111, 1000, "你...那时的那个人... 不对，虽然长得很像，但是总感觉不一样...", '', 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.setStandAloneMode(false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;