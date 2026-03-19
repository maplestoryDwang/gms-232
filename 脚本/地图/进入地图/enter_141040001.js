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
      cm.inGameDirectionEvent_PushMoveInfo(0, 180, -200, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3125);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("哎？你们突然一大帮人闯进来，要做什么？", 5, 1510008, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("咳咳……嗯……咳咳。要从哪里说起好呢。", 5, 1510000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那个嘛……嗯……", 5, 1510005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("要说什么就快说！我正忙着要做饭！", 5, 1510008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我是来道歉的。很抱歉之前误会了你。", 5, 1510002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("一切都是场误会。你不是魔女，你既没破坏冰川，也没害得海平面升高。反而还照顾了我们那些失去家园的孩子们。", 5, 1510003, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哈，你明白得还真早啊。", 5, 1510008, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("总之，真是很抱歉。你应该早点儿说清楚啊。要是那样的话，不就不会发生什么误会了嘛。", 5, 1510000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("真是可笑。我怎么会伤害你们这些我数十年来照顾的孩子呢？", 5, 1510008, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("啊……？", 5, 1510000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我不是这地方的人。在故乡失去丈夫和孩子后……我本不想活了。为了在临死前好好看看我喜欢的雪，才来到这里的。", 5, 1510008, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("可就在那时，我看见了在大海上漂浮的你们。", 5, 1510008, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("一群小家伙眼中带着求生欲望，紧紧抓着我的衣角……我忍不下心不管啊。所以就带回家，自己抚养喽。", 5, 1510008, true, true);
                                  } else if (status === V++) {
                                    cm.eventSKill(0);
                                    cm.dispose();
                                    cm.warp(141040002, 0, false);
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