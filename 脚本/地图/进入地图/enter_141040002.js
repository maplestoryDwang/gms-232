var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("小家伙们……肚子饿不？", 5, 1514003, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("汪汪！", 5, 1514005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呱呱呱呱！", 5, 1514004, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("唔唔！", 5, 1514006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("什么，你们说话我听不懂啊。唉……", 5, 1514003, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这些稚嫩的小家伙那么渴望生存……都大张着嘴等着食物。", 5, 1514003, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('汪汪！', 5, 1514005, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("叽叽……", 5, 1514004, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('嗡嗡？', 5, 1514006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("好，好，知道了。我这就给你们找吃的。我想想，这附近有没有好钓到鱼的地方呢？", 5, 1514003, true, true);
                            } else if (status === V++) {
                              cm.inGameDirectionEvent_SetHideEffect(0);
                              cm.eventSKill(0);
                              cm.dispose();
                              cm.warp(141040003, 0, false);
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