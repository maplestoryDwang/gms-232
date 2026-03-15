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
      cm.sendNormalTalk_Bottom("#face0#领主不是会将他抢走的贵重物品存放在他的个人仓库里嘛？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#去领主仓库看看吧，格里被抢走的，父亲的遗物肯定也在那里。", 36, 3005100, true, true, 1);
      } else if (status === v++) {
        cm.forceStartQuest(36228, '');
        cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h1;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
        cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h1;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;66=h1;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
        cm.OnStartNavigation(410004000, 0, 'in08', 36228);
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
      cm.sendNormalTalk_Bottom("#face1#这里只有一些契约书和从其他人那里抢来的宝贝。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#那个遗物，具体是长什么样的？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#这里应该不会有。", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#既然说是一个隐藏的地方，若是明目张胆地存放在这种地方，\r\n也就不会用那种方式威胁了吧。", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#切，都有那么多的宝物了，还是欲壑难填啊。", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face4#那一刻，当那个从心愿出发的梦想变成了欲望……", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#除此以外的其他路都被抹掉了，只能看到那个。", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#心愿和欲望有什么不同？", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#那些只求自己胜过别人的瞬间便会化为欲望。", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#那你的心愿……是什么？", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face4#我……嗯……", 36, 3005100, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face6#我一直都希望你能自由！", 36, 3005100, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#……这件事刚刚已经实现了啊。", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#啊，确实呢！这么说，唔……", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#当初制作这个铃铛的那些人在制作它的时候应该也满怀迫切的心愿吧？", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face4#那我想要替他们实现心愿，那就是我的心愿。", 36, 3005100, true, true, 1);
                                  } else if (status === v++) {
                                    cm.forceCompleteQuest(36228);
                                    cm.gainExp(2673);
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