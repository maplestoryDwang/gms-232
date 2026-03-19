var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("是这里吗？似乎移动了很远的距离…………", 17, 2540000, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("快过来。", 1, 2540000, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(7);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("？这是什么声音。", 17, 2540000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这边。", 1, 2540000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("再观察观察。", 17, 2540000, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("所谓世界的尽头…………真是与之相称的绝境啊。", 17, 2540000, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.npc_ChangeController(2540005, "oid=19891905", 1128, 48, 14, 1078, 1178, 1, false, false);
                        cm.npc_SetSpecialAction("oid=19891905", "summon", 0, 0);
                        cm.sendNormalTalk("啊，你是？！生命超越者，世界树阿丽莎？！", 17, 2540000, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("哼，看来你眼力不错嘛。真不知道我的真身到底都在外面做了些什么，怎么每个来到这儿的人都知道生命超越者的事实。", 1, 2540000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("？真身，这是什么意思？那么也就是说你是阿丽莎的分身？", 17, 2540000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("什么叫分身，说话小心点。我是阿丽莎的思念体。也是在黑魔法师被封印之前，那个像傻瓜一样的阿丽莎的思念体。", 1, 2540000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("黑魔法师被封印之前？", 17, 2540000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("是的。那时候的我是…………", 1, 2540000, true, true);
                                } else if (status === V++) {
                                  cm.warp(992000020, 0);
                                  cm.npc_LeaveField("oid=19891905");
                                  cm.npc_LeaveField("oid=19891905");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;