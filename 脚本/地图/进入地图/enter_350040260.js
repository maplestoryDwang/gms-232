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
      cm.npc_ChangeController(1540446, "oid=36162", 541, 52, 30, 491, 591, 0, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040260");
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      cm.getMap().resetFully();
      cm.getMap().spawnReactorIfNotExist(3500022, 0, -370, 52, 0, '测试拼图');
      cm.getMap().spawnReactorIfNotExist(3500023, 0, -20, 52, 0, "传送装置");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -611, -21);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(0);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
          cm.addPopupSay(1540503, 2000, '我登场啦!!!', '', 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_PushMoveInfo(1, 300, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(10);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(10);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("队长，门好像锁住了呢？\r\n要把它摧毁吗？", 37, 1540503, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#不行，哥哥！\r\n如果把传送装置也毁掉怎么办！！", 37, 1540504, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("队长，那个显示器好像是#b开启门的装置#k。\r\n看起来像是一种暗号，你知道是什么意思吗？", 37, 1540502, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;