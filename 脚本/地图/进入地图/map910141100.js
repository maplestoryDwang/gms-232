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
      cm.killAllMobNoExp();
      cm.npc_ChangeController(2159465, "oid=217012", -428, -32, 3, -478, -411, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(50);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("原来幻影和夜光法师从一开始关系就不怎么好啊。对了，夜光法师经常提起有关幻影的事情。说即使几百年时间没见，也绝对没办法和他亲近起来。他们在战争中到底发生了什么事？", 1, 2159465, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("是啊，我认为那些家伙可是很亲近的。当然，我也同意它们并不是相互喜欢。虽然两个家伙看上去完全不同，可是心性却出奇地相似。所以我也不知道它们会不会继续争吵下去。", 3, 2159465, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("听你这么一说，我更想亲眼见见幻影了。一定会有机会的吧……啊，那个！", 1, 2159465, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 600, 400, -34);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1193);
                } else {
                  if (status === V++) {
                    cm.spawnMobLimit(9300873, 1, 0, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 0, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 150, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 150, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 300, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 300, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 450, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 450, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 600, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 600, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 750, -32, 100);
                    cm.spawnMobLimit(9300873, 1, 750, -32, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(0);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("是猴子。那些家伙非常可恶，专做一些可恶的恶作剧。但是回家的路只有这一条，这可怎么办呢？早知道这样的话，就把守护者机器人带过来了。", 1, 2159465, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我来处理。可能会有危险，你先退到一边。", 3, 2159465, true, true);
                          } else if (status === V++) {
                            cm.updateInfoQuest(38058, '');
                            cm.forceStartQuest(38058, '');
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceStartQuest(38058, "clear");
                            cm.dispose();
                            cm.warp(910141101, 0, false);
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