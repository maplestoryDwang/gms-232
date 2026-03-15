var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestCustomData(28767) > 0) {
        cm.sendOkS("已经破坏了这个外星人的设备！下一步行动是什么来着？");
        cm.dispose();
        return;
      }
      if (!cm.isQuestActive(28748)) {
        cm.sendNormalTalk("这是外星人的设备！还是小心点好，免得被抓走了。", 3, 9201174, false, true);
        cm.dispose();
        return;
      }
      var w = cm.getPlayer().getPosition();
      if (Math.abs(w.x - 1230) > 200 || Math.abs(w.y + 661) > 200) {
        cm.sendNormalTalk("(太远了……我得离近点。)", 2, 9201162, false, false);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("(哟，这不是关于克拉齐亚的信息么。我看看……)", 3, 9201166, false, true);
      } else {
        if (status === V++) {
          cm.addNumberForQuestCustomData(28748, 1);
          cm.forceStartQuest(28767, '1');
          cm.playerMessage(-1, "破坏任务（信息解放）完成");
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("哈哈！有好戏看了！", 3, 9201174, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 0, -100, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(呃偶，外星人来了……我得藏起来！)", 3, 9201174, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(4);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [3000, 1156, -611, 1, 0, 1, 1, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 1156, -711, 1, 0, 1, 1, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [200, 1156, -611, 1, 0, 1, 1, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [200, 1156, -611, 1, 0, 1, 1, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [200, 1156, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [2000, 1156, -611, 1, 0, 1, 1, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我的账户被黑了！早知道就弄个复杂点儿的密码了！", 1, 9201174, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk('早知如此，何必当初！', 3, 9201174, false, true);
                                        } else if (status === V++) {
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