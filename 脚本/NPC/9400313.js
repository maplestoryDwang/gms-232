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
  if (!cm.isQuestActive(63100)) {
    cm.sendOk("我的！所有财富都是我的！你们休想拿走一分钱！");
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
      cm.sendNormalTalk("#b你就是#r阿尔玛因#b吗？", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("是的。我就是阿尔玛因。你是谁？我以前没见过你。", 5, 9400313, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b我叫#h0#，刚来这里没多久。我听人们说那边高高挂着的宝物是你的，对吗？", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("没错。这地方谁也没有我富有。", 5, 9400313, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b请问你为什么要把宝物挂那么高？", 3, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你真是明知故问。那当然是为了防止别人偷走我的宝物啊。", 5, 9400313, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("挂在那么高的地方很方便监视，谅谁也不敢打我宝物的主意。", 5, 9400313, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b可是挂那么高就没法使用了，不是失去了宝物的意义吗。", 3, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你说什么傻话！宝物才不是拿来用的，光看看就心满意足了。", 5, 9400313, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b这说不通啊……）呃，再问一下……", 3, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("什么？你怎么还在这？你为什么老缠着我？", 5, 9400313, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b我听说你收集的财物中大部分都是从这地方的人们手上攫取得来的。能否请你将其中哪怕一部分也好，还给人们呢？", 3, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("什么？你在哪里听来这种谣言。那些宝物都是我靠自己的努力挣来的。", 5, 9400313, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("绝对不行！我为什么要把宝物分给别人！", 5, 9400313, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#b(你说这是通过正当途径获得的财物？)嗯，我知道了。", 3, 0, true, true);
                                } else if (status === V++) {
                                  cm.forceCompleteQuest(63100);
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