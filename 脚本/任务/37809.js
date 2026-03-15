var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("但我停不下来。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("一边走一边继续思考吧。", 56, 0, true, true, 1);
      } else if (status === v++) {
        cm.forceStartQuest(37809, '');
        cm.dispose();
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("亚殷，你对黑魔法知道多少？", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#嗯……除了基本的之外……\r\n可以说几乎不知道。", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("如果是恶魔，#r非常强大的恶魔#k……\r\n他可以在多大的范围内施展逆转时间的诅咒呢？", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("可以将全世界的时间统统扭转的程度吗？", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#原来如此……。\r\n不管那家伙再怎么强大，从常识上来说，那是不可能的。", 36, 2570102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#确切地不好说，估计……能覆盖整个圣瑞尼亚。\r\n在此范围外的时间仍会正常流逝。", 36, 2570102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face5#这么看来那个日晕……。\r\n难道，是那样吗……。", 36, 2570102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#日晕？那是什么意思？", 36, 2570101, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#日晕是由魔法造成的#r时空间裕度#k的证据之一。", 36, 2570102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#即，受到诅咒的这个地方与未受诅咒的外头世界之间，被隔离开了。", 36, 2570102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face5#什么？那只要离开这里……！", 36, 2570103, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face1#不，靠我们自己的力量，是很难逃出这个空间的。\r\n因为这是#r恶魔的诅咒#k。", 36, 2570102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#就算真有可能办到，\r\n在此期间变得强大的艾里葛斯最终会毁灭圣瑞尼亚。", 36, 2570102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#呼……。", 36, 2570103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#但是，\r\n那不就意味着，外部的人可能会察觉到这种异常现象并介入吗？", 36, 2570105, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#或许在那之前，诅咒就会因为恶魔的力量耗尽而终结。", 36, 2570101, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom('这话说得有道理。', 56, 0, true, true, 1);
                                    } else if (status === v++) {
                                      cm.forceCompleteQuest(37809);
                                      cm.updateInfoQuest(37809, "exp=1");
                                      cm.gainExp(5872020);
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