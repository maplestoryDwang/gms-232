var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getInfoQuest(32344) === '4' && cm.isQuestFinished(32344)) {
    action第六次进入(f, E, e);
  } else {
    if (cm.getInfoQuest(32344) === '0') {
      action1(f, E, e);
    } else {
      if (cm.getInfoQuest(32344) === '1') {
        action1(f, E, e);
      } else {
        if (cm.getInfoQuest(32344) === '2') {
          action第三次进入(f, E, e);
        } else {
          if (cm.getInfoQuest(32344) === '3') {
            action1(f, E, e);
          } else if (cm.getInfoQuest(32344) === '4') {
            action第五次进入(f, E, e);
          } else {
            cm.npc_ChangeController(1520048, "oid=266843", 409, -32, 12, 359, 459, 1, false, 0, false);
            cm.dispose();
          }
        }
      }
    }
  }
}
function action第六次进入(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1520048, "oid=266843", 409, -32, 12, 359, 459, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.npc_ChangeController(1520047, "oid=1949283", 50, -50, 8, 0, 100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1949283", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 300, 50, -101);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1868);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("那个，不是机器人吗？这里为何会存在与森林毫不相配的机器人呢？", 3, 1520047, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("发现身份不明的人员。要求认证。", 1, 1520047, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("身份不明的人，指的是我吗？还说需要什么认证......", 3, 1520047, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("5秒内不进行认证的话，将被视作入侵者并进行驱逐。", 1, 1520047, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("5... 4...", 1, 1520047, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('怎，怎么进行认证啊？', 3, 1520047, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("2……1……开始驱逐。", 1, 1520047, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我都不知道该怎么认证，你就开始驱逐吗？我不管了，既然要攻击我，那我只好将你打倒！", 3, 1520047, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=1949283");
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else if (status === V++) {
                              cm.playerMessage(-1, '请击倒守护者机器人。');
                              cm.forceStartQuest(32345, '');
                              cm.updateInfoQuest(32345, "meetrobot=1");
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.spawnMobLimit(9300805, 1, 50, -32, 100);
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
function action第五次进入(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1520048, "oid=266843", 409, -32, 12, 359, 459, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.sendNormalTalk("好像不是这里啊？我怎么感觉好像一直在原地绕圈呢。", 3, 1520047, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk(".......这里就是最后一个地方了。过去看看吧！", 3, 1520047, true, true);
      } else if (status === V++) {
        cm.forceCompleteQuest(32344);
        cm.gainExp(150000);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}
function action第三次进入(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1520048, "oid=266843", 409, -32, 12, 359, 459, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.sendNormalTalk("奇怪了。刚刚是不是又去了相同的地方呢？", 3, 1520047, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk(".......难道是我的错觉吗？不过，独自一人不断在森林小路中行走，肯定会产生错觉的吧。", 3, 1520047, true, true);
      } else if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(1520048, 'oid=266843', 409, -32, 12, 359, 459, 1, false, 0, false);
    cm.dispose();
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