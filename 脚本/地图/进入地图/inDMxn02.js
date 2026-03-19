var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(23676)) {
    action23676(f, E, e);
  } else {
    cm.dispose();
  }
}
function action23676(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159394, "oid=217899", 319, 260, 51, 269, 369, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("呜呜呜，竟然抛下我们两个逃走了。#p2159395#，你这个坏蛋，呜呜呜……", 1, 2159394, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("别哭了，快说。", 3, 2159394, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("被打了又打，打了又打，然后再打！有谁会不哭！这个世界上喜欢用暴力解决问题的人怎么这么多？呜哇哇哇哇啊啊啊……", 1, 2159394, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("只要你把#p2154009#的事情告诉我，我就不打你了。", 3, 2159394, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("呃，你的表情那么可怕，让我怎么相信你！", 1, 2159394, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯，我的表情好像很诚恳啊……好吧，那我和你一起哭，请你相信我。", 3, 2159394, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("什，什么嘛？奇怪的家伙！别哭了，感觉怪怪的！……啊啊啊！好了，我告诉你，别哭了！", 1, 2159394, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哭果然很有用。看来我得记着。好了，快说格里梅尔命令你们干什么？", 3, 2159394, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("是个有点奇怪的命令。让我们去找一个拿着可以伸长的剑，到处飞来飞去的奇怪家伙……。\r\n呃，说的好像就是你。", 1, 2159394, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("还有他说这次的命令必须跟所有人保密，连奥尔卡都不能告诉。", 1, 2159394, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("奥尔卡？黑色之翼的首领奥尔卡吗？", 3, 2159394, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("嗯，听说连奥尔卡都要保密，我觉得很奇怪。#p2154009#一定是在打什么鬼主意。不过我这个天才人偶术士#p2159394#只听从奥尔卡的命令！", 1, 2159394, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("那抓我的命令应该不是奥尔卡下达的，而是#p2154009#的命令。那就不用服从这个指令吧？", 3, 2159394, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk('没，没关系吗？', 1, 2159394, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("嗯，刚才那家伙已经看见了我，不能让你装作没看到……你回去向#p2154009#报告，说差点就抓住我了，但还是被我逃走了。说你打败了我也没关系。", 3, 2159394, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("真，真的吗？好的！你对我做的这些，我就当作什么都没有发生！嗯哼！你应该谢谢我！", 1, 2159394, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("嗯，谢谢。", 3, 2159394, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("呵呵，这点小事算什么！嘿嘿。", 1, 2159394, true, true);
                                        } else if (status === V++) {
                                          cm.forceCompleteQuest(23675);
                                          cm.forceCompleteQuest(23676);
                                          cm.forceCompleteQuest(23677);
                                          cm.gainExp(50000);
                                          cm.warp(230050000, 0, false);
                                          cm.forceStartQuest(23720, '1');
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}