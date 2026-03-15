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
      if (cm.getNumberFromQuestCustomData(28758) > 0) {
        cm.sendOkS("已经破坏了这个外星人的设备！下一步行动是什么来着？");
        cm.dispose();
        return;
      }
      if (!cm.isQuestActive(28748)) {
        cm.sendOkS("这是外星人的设备！还是小心点好，免得被抓走了。");
        cm.dispose();
        return;
      }
      var w = cm.getPlayer().getPosition();
      if (Math.abs(w.x - 171) > 200 || Math.abs(w.y + 611) > 200) {
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
        cm.sendNormalTalk("吃我投石攻击，星际巨钻！", 3, 9201174, false, true);
      } else {
        if (status === V++) {
          cm.addNumberForQuestCustomData(28748, 1);
          cm.forceStartQuest(28758, '1');
          cm.playerMessage(-1, "破坏任务（星际巨钻上天）成功");
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
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(4);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [3000, 121, -611, 1, 0, 1, 1, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 121, -711, 1, 0, 1, 1, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [200, 121, -611, 1, 0, 1, 1, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [200, 121, -611, 1, 0, 1, 1, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [200, 121, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [2000, 121, -611, 1, 0, 1, 1, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("这星球上真的是什么都不好使！我感觉布莱萨克斯采矿公司的服务质量真是太差劲了。", 1, 9201174, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("谁说不是呢！哈哈哈！", 3, 9201174, false, true);
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