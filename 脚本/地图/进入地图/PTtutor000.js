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
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.teachSkill(20031211, 0, -1);
      cm.teachSkill(20031211, 1, 0);
      cm.teachSkill(20031212, 0, -1);
      cm.teachSkill(20031212, 1, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.playVideoByScript("phantom_memory.avi");
      cm.getPlayer().addHP(500000);
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("phantom/mapname1");
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("决定的时间终于到了吗？", 17, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("还挺紧张的。是因为好久没活动了吗？当然，并不是说没有自信。", 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("准备应该全部结束了吧？要是再拖下去，耽误了时机的话，那就太丢脸了。虽然感觉还有点生疏，不过还是去试试看吧。", 17, 0, true, true);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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