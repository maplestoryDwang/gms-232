var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.getMap().setSpawn(true);
  if (cm.getNumberFromQuestInfo(33181, "army") >= 9) {
    action3(f, E, e);
  } else if (cm.getNumberFromQuestInfo(33181, "army") >= 7) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, true);
      cm.setPartner(1, 1540618, 80001613, 0);
      cm.setPartner(1, 1540619, 80001613, 0);
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.setPartner(1, 1540634, 80001613, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 3000, 2160, 48);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5785);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("！！怪物从摧毁的墙壁中进来了！！#h0#！！展现你实力的时候到了！", 37, 1540624, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else if (status === V++) {
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
function action2(f, E, e) {
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
      cm.setPartner(1, 1540618, 80001613, 0);
      cm.setPartner(1, 1540619, 80001613, 0);
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.setPartner(1, 1540634, 80001613, 0);
      cm.setPartner(1, 1540617, 80001612, 0);
      cm.setPartner(1, 1540629, 80001612, 0);
      cm.setPartner(1, 1540630, 80001612, 0);
      cm.setPartner(1, 1540631, 80001612, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 3000, 2160, 48);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5785);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("又出现了！\r\n必须先消灭这些家伙，才能继续营救士兵！", 37, 1540624, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.addPopupSay(1540618, 1500, "我刚刚做梦我被敌人抓去, 严刑拷打呢. ", '', 0);
                    cm.addPopupSay(1540617, 1000, "啊?你也是?我也是呢. ", '', 0);
                    cm.addPopupSay(1540618, 1500, "你应该觉得庆幸. 如果由贝尔来喊醒我们, 那我们可能就再也无法睁开眼睛了. ", '', 0);
                    cm.addPopupSay(1540624, 1500, "士兵们?看来你们想重新变回眩晕状态啊?", '', 0);
                    cm.addPopupSay(1540618, 1000, "......", '', 0);
                    cm.addPopupSay(1540617, 1500, "你努力战斗的身姿真是太帅了!", '', 0);
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
function action3(f, E, e) {
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
      cm.setPartner(1, 1540618, 80001613, 0);
      cm.setPartner(1, 1540619, 80001613, 0);
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.setPartner(1, 1540634, 80001613, 0);
      cm.setPartner(1, 1540617, 80001612, 0);
      cm.setPartner(1, 1540629, 80001612, 0);
      cm.setPartner(1, 1540630, 80001612, 0);
      cm.setPartner(1, 1540631, 80001612, 0);
      cm.setPartner(1, 1540632, 80001613, 0);
      cm.setPartner(1, 1540633, 80001613, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 3000, 2160, 48);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5785);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("还真是没完没了！！很好，上吧！！", 37, 1540624, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.addPopupSay(1540618, 1500, "噢, 那家伙踩了我的脚!", '', 0);
                    cm.addPopupSay(1540617, 1500, "你在说什么啊!我踩的明明是黑色之翼那些家伙的脚!", '', 0);
                    cm.addPopupSay(1540618, 1500, "噢?是吗?那我的脚怎么会痛呢……?", '', 0);
                    cm.addPopupSay(1540624, 1500, "士兵们?要不要让你们重新晕倒, 然后再喊醒你们啊?", '', 0);
                    cm.addPopupSay(1540618, 1000, '......', '', 0);
                    cm.addPopupSay(1540617, 1500, "你骑乘美洲豹战斗的样子!真是太酷了!!", '', 0);
                    cm.addPopupSay(1540624, 1500, "话说, 你不是去救小鸡三兄妹和布吉了吗?", '', 0);
                    cm.addPopupSay(1540617, 1000, "那个……它们不是小鸡哦……", '', 0);
                    cm.addPopupSay(1540624, 1000, "……什么?!!不是小鸡?", '', 0);
                    cm.addPopupSay(1540618, 1000, '......', '', 0);
                    cm.addPopupSay(1540624, 1000, "你问切奇玩具熊里究竟装的是什么?", '', 0);
                    cm.addPopupSay(1540624, 1000, "哈哈!你是傻瓜吗?", '', 0);
                    cm.addPopupSay(1540624, 1000, "切奇玩具熊里当然装的是切奇, 还能装什么啊?!", '', 0);
                    cm.addPopupSay(1540624, 1500, "吉格蒙特?吉格蒙特当然是最棒的啦!她绝对信得过. 你看她那冷静的样子!难道不酷吗?", '', 0);
                    cm.addPopupSay(1540624, 1500, "韩利泰现在应该还好吧. 甲板上面应该乱作一团了. 呃, 那家伙应该没事的. ", '', 0);
                    cm.addPopupSay(1540624, 1500, "即使现在就像在地狱, 但只要能和朋友们重新过上平静的日子, 我就能够忍耐!", '', 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;