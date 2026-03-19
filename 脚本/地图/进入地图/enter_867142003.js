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
      if (cm.getQuestStatus(64916) > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 2000, -3100, 3400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呼，终于到了……累死了……", 56, 0, 0, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 2000, -2160, 3250);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("在那儿呢！被丢弃的#b以前赛恩的本体#k。\r\n竟被丢在了这么深的地方。", 56, 0, 0, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#h0#，那边好像有人。", 36, 9400436, 0, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 2000, -2700, 3250);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("是逃离了赛恩魔爪的工作人员吗……？但看起来好小……\r\n反正在这里就会有危险。", 56, 0, 0, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
                                cm.forceCompleteQuest(64915);
                                cm.updateInfoQuest(64936, '64915=1');
                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                cm.gainItem(4310284, 400);
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