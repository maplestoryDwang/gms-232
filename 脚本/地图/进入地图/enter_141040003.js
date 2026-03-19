var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 180, -200, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3125);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("真不敢相信……我都想不起来了，你竟是小时候救了我们的大恩人啊！", 5, 1510000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我隐隐约约能记起来，被温暖的大手照料的那种感觉……但没想到她竟是人类，甚至还被我们称作魔女。", 5, 1510003, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这么说，你在这里做这样的善事已经至少有数十年了。天啊……对我们种族来说，你是像母亲一样的恩人啊！", 5, 1510005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("真让人感动啊，老奶奶。", 5, 1510007, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("少肉麻，好久不见，吃顿饭再走吧。", 5, 1510008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("还有，你们这帮家伙，别再相互斗了……", 5, 1510008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('…？', 5, 1510000, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#r#e见到你们那样，我这老婆子都要伤心死了！#n#k", 5, 1510008, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("呃……知道了！", 5, 1510000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 180, -600, 70);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2223);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("太好了。今后三个种族之间再不会互相斗了吧？", 5, 1510007, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("哈哈，这全要归功于航海士啊。", 5, 1510006, true, true);
                                  } else if (status === V++) {
                                    cm.forceStartQuest(32192, '');
                                    cm.eventSKill(0);
                                    cm.warp(141000000, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;