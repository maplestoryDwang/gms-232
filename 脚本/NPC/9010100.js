var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (!cm.isQuestFinished(34331)) {
      cm.dispose();
      cm.openNpc(3003208);
    } else {
      action1(f, W, U);
    }
  }
}
function action0(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}
function action1(f, W, U) {
  if (status == 0) {
    cm.updateInfoQuest(15901, "toDayCCoin=0;dream=0");
    cm.updateInfoQuest(15900, "count=0;pCount=0;stageRecord=1;medal=00000000;coin=0");
    cm.sendNormalTalk("额~难听的声音……", 0, 9010100, false, true);
  } else {
    if (status == 1) {
      cm.sendNormalTalk("得赶紧入睡才幸福……嘤嘤……", 0, 9010100, true, true);
    } else {
      if (status == 2) {
        cm.sendNormalTalk('？', 2, 9010100, true, true);
      } else {
        if (status == 3) {
          cm.sendNormalTalk("那个！你能来帮帮我吗？", 0, 9010100, true, true);
        } else {
          if (status == 4) {
            cm.sendNormalTalk("你是哪位？", 2, 9010100, true, true);
          } else {
            if (status == 5) {
              cm.sendNormalTalk("我是在这个梦的世界里负责#b睡眠和休息#k的布娃娃。", 0, 9010100, true, true);
            } else {
              if (status == 6) {
                cm.sendNormalTalk("啊，路西德的又一个手下？！", 2, 9010100, true, true);
              } else {
                if (status == 7) {
                  cm.sendNormalTalk("不是，不是，我和那些清道夫不一样，\r\n那些人在这个梦的世界忙得不可开交。", 0, 9010100, true, true);
                } else {
                  if (status == 8) {
                    cm.sendNormalTalk("而我的工作……", 0, 9010100, true, true);
                  } else {
                    if (status == 9) {
                      cm.sendNormalTalk("就是以舒适的姿势，毫无杂念地#b睡觉#k。", 0, 9010100, true, true);
                    } else {
                      if (status == 10) {
                        cm.sendNormalTalk("也就是说，让这个#b梦的世界停下来#k就是我的工作。", 0, 9010100, true, true);
                      } else {
                        if (status == 11) {
                          cm.sendNormalTalk("一旦我入睡了，#b这个世界上的其他人也都会#k昏昏沉沉摇摆不定，最后昏睡过去的。", 0, 9010100, true, true);
                        } else {
                          if (status == 12) {
                            cm.sendNormalTalk("我住在我自己的#b塔#k里，只要有需要，我随时都可以睡。\r\n可是#r不久前#k，塔的边界变得模糊起来，外面的人这才闯进塔里来了啊？", 0, 9010100, true, true);
                          } else {
                            if (status == 13) {
                              cm.sendNormalTalk("再然后就摧毁了我的#b沉睡音乐盒#k，安装了奇怪的#r噩梦音乐盒#k。", 0, 9010100, true, true);
                            } else {
                              if (status == 14) {
                                cm.sendNormalTalk("我因为这奇怪的音乐盒的声音，#b实在是无法入睡#k，这才第一次来到了塔外的世界。", 0, 9010100, true, true);
                              } else {
                                if (status == 15) {
                                  cm.sendNormalTalk("看来这应该是路西德的#b另一个潜意识#k，\r\n如果这家伙说的是真的，那它应该就是路西德自己#b为了停止清醒梦#k而创造出来的一种#b保护机制#k。", 2, 9010100, true, true);
                                } else {
                                  if (status == 16) {
                                    cm.sendNormalTalk("看上去#b软软的#k，抱在怀里一定可以睡个好觉……", 2, 9010100, true, true);
                                  } else {
                                    if (status == 17) {
                                      cm.sendNormalTalk("你就别一个人嘀嘀咕咕的了，来帮帮我吧！\r\n我好想睡觉啊，呜呜……", 0, 9010100, true, true);
                                    } else {
                                      if (status == 18) {
                                        cm.sendNormalTalk("啊，抱歉，抱歉，我来帮你！", 2, 9010100, true, true);
                                      } else {
                                        if (status == 19) {
                                          cm.sendNormalTalk("哇！谢谢！\r\n麻烦你再来找我一下吧，我带你去塔里！", 0, 9010100, true, true);
                                        } else {
                                          if (status == 20) {
                                            cm.sendNormalTalk("若是能帮助这个家伙，#r路西德的梦#k也就能够弱化了，\r\n好吧，我就让你#r痛快睡一场#k吧！", 2, 9010100, true, false);
                                          } else if (status == 21) {
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
}