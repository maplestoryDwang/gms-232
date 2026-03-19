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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk("喂！#h0#！你别哭了。", 1, 3000101, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("呜呜……可是孩子们又嘲笑我。", 1, 3000100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你的名字#h0#是白叫的吗？他们每次嘲笑你没有魔力你就哭，这怎么行。", 1, 3000101, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("贝德罗斯，你别这么严厉。 #h #你不是出生的时候就没有魔力吗。", 1, 3000106, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("可是……我既讨厌看#h #被欺负，也讨厌看你哭", 1, 3000101, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("贝德罗斯……别说了。那些孩子都走了。", 1, 3000102, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嗯……知道了，我以后不哭了。", 1, 3000100, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("(可怜的#h0#……)", 1, 3000106, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("不管怎么说，#h0#还有我们呢。", 1, 3000102, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我们到村外玩儿去吧？去换换心情。", 1, 3000101, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('嗯！', 1, 3000100, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#h0#，你笑起来多好看。", 1, 3000101, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我也同意。", 1, 3000102, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你们干嘛啊，别笑我了。", 1, 3000100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(940011010, 0, false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
      }
    }
  }
}