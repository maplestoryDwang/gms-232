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
      cm.npc_ChangeController(1106000, "oid=227121", -257, 120, 12, -307, -207, 0, false, 0, false);
      cm.setSessionValue("kill_count", '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.playerMessage(-1, "林伯特的杂货店");
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.playerMessage(-1, "冒险岛历XXXX年3月4日……");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/0", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
          cm.emotion(6, 10000);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/1", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/2", "oid=16777215"], [3000, 0, -100, 1, 0, 156, 0, 0]);
              cm.emotion(4, 8000);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/3", "oid=16777215"], [3000, 0, -100, 1, 0, 156, 0, 0]);
                cm.emotion(6, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("你……你找我有事吗？", 3, 1106000, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你叫什么名字？", 1, 1106000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我……没有名字。你就叫我#b“小孩”#k好了。林伯特大叔就是这么叫我的。你想要什么东西呢？", 3, 1106000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("家人……没有家人吗？", 1, 1106000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我没有家人……#b\r\n(这个人是谁，为什么会问我这种问题？)#k\r\n你不想买东西的话……我……", 3, 1106000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你知道光之骑士库洛姆吗？", 1, 1106000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("库洛姆？嗯……我……#b\r\n(库洛姆是谁？这个人为什么要问我这种事情呢？)", 3, 1106000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#e小孩！\r\n我让你清理箱子，你在那跟谁聊天呢！！", 5, 1106002, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("是……是！！林伯特大叔！我正想清理呢！\r\n嗯，那我……就去……做事了……", 3, 1106000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.forceCompleteQuest(20030);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/4", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
                                      cm.emotion(6, 2000);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("那……那个人去哪儿了？\r\n对了！不想被林伯特大叔骂的话，得赶紧把箱子清理干净！", 3, 1106000, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(2);
                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                        } else if (status === V++) {
                                          cm.eventSKill(0);
                                          cm.updateInfoQuest(25980, "normal=#");
                                          cm.updateInfoQuest(25980, "normal=#;hard=#");
                                          cm.gainExp(15);
                                          cm.dispose();
                                          cm.warp(913070001, 0, false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
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