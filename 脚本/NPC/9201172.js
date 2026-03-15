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
      if (cm.getNumberFromQuestCustomData(28764) > 0) {
        cm.sendOkS("已经解救了这里的人质！下一步行动是什么来着？");
        cm.dispose();
        return;
      }
      if (cm.getNumberFromQuestCustomData(28749) < 4) {
        cm.sendOkS("这里防卫看上去特别的森严！我先探一探其他地方情况再来这里吧！");
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("救命！我骂那些外星人无证采矿，结果被它们关起来了！这不公平啊！", 1, 9201172, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("(锁被你打碎了。)", 3, 9201172, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("用这返回卷轴回新叶都市去！", 3, 9201172, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你救了我！我下次再也不敢骂外星人了！", 1, 9201172, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("市民们都安全了。该去找市长了。", 3, 9201172, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你！你就是那个在我们这儿捣蛋的家伙！", 1, 9201174, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("如果周围的外星人不多，我就会说：“给我滚出这里，你们这帮外星杂种。”……你好啊，外星人们，近来如何？", 3, 9201174, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("外星人把我们包围了！", 1, 9201172, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("没办法了！用我给你的那个返回卷轴回城里吧！", 3, 9201172, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那——那你怎么办？！", 1, 9201172, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("对付这几个弱小的外星人还不是手到擒来！", 3, 9201172, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(4);
                                cm.sendNormalTalk("我们抓到这个冒险岛人了！把他关起来，到时候洗脑成奴隶！", 1, 9201174, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("遵命，长官！洗脑机器最棒了！", 1, 9201174, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不不不！我的脑子不用洗！干净得很，我保证！", 3, 9201174, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你们这种人的脑子都不干净！给我打昏这个原始人！", 1, 9201174, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/CannonJump"], [0, 0, -50, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                        cm.sendNormalTalk('我的脑啊啊啊啊啊……', 3, 9201174, true, true);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(28749);
                                        cm.setStandAloneMode(false);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.dispose();
                                        cm.warp(610040500, 0, false);
                                        cm.forceStartQuest(28764, '1');
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