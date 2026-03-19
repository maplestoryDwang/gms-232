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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs35#异逝界\r\n#fs20#财物之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, -820, 100);
      } else {
        if (status === V++) {
          cm.addPopupSay(9400205, 2000, "这地方景色非常美吧？", '', 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 850, 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(8356);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 100000, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
                    cm.inGameDirectionEvent_AskAnswerTime(1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 100, 0, 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(8158);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 2000, 280, 150);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.addPopupSay(9400205, 2000, "这里好像能爬进去？", '', 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else if (status === V++) {
                                cm.updateInfoQuest(63098, "FirstEnter1=1;FirstEnter2=1;FirstEnter=1;FirstEnterC=1");
                                cm.setStandAloneMode(false);
                                cm.dispose();
                                cm.warp(867113300, 0, true);
                                cm.setInGameDirectionMode(false, true, false);
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