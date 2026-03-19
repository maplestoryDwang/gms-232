var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setPartner(1, 1531006, 80001788, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.playVideoByScript("Kinesis3.avi");
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.playerMessage(-1, "视频回放失败. ");
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === O++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === O++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face2#啊，吓死我了！！\r\n突然一把抓住是要怎样！！", 37, 1531003, false, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("你这是偷偷摸摸往哪儿逃呢，内罗。\r\n你也当然要一起来啊。", 37, V, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face2#你，你现在是要明目张胆地使唤我吗？！", 37, 1531003, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("不，\r\n要是我有个万一，至少也要救出尤娜逃出去啊。", 37, V, true, true);
                        } else {
                          if (status === O++) {
                            cm.sendNormalTalk_Bottom("#face2#……你……", 37, 1531003, true, true);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face2#当然我是不可能输的，\r\n那就走吧？", 37, V, true, true);
                            } else {
                              if (status === O++) {
                                cm.cameraSwitch_PushSwitchMoveInfo("pt_VP", 1000);
                                cm.spawnMobLimit(2700315, 1, 0, 149, 100);
                                cm.spawnMobLimit(2700315, 1, 100, 161, 100);
                                cm.spawnMobLimit(2700315, 1, 200, 157, 100);
                                cm.spawnMobLimit(2700315, 1, 300, 149, 100);
                                cm.spawnMobLimit(2700315, 1, 400, 151, 100);
                                cm.spawnMobLimit(2700315, 1, 500, 150, 100);
                                cm.spawnMobLimit(2700315, 1, 600, 153, 100);
                                cm.spawnMobLimit(2700315, 1, 700, 155, 100);
                                cm.spawnMobLimit(2700315, 1, 800, 154, 100);
                                cm.spawnMobLimit(2700315, 1, 900, 149, 100);
                                cm.spawnMobLimit(2700315, 1, 1000, 151, 100);
                                cm.spawnMobLimit(2700315, 1, 1100, 150, 100);
                                cm.spawnMobLimit(2700315, 1, 1200, 147, 100);
                                cm.spawnMobLimit(2700315, 1, 1300, 155, 100);
                                cm.spawnMobLimit(2700315, 1, 1400, 157, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face2#超能力者，小心点！是一群没见过的怪物！", 37, 1531003, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("没问题，\r\n全都给撂倒就行！", 37, V, true, true);
                                  } else if (status === O++) {
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