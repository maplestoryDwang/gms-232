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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("那么，#b#h0##k! 现在开始，我来简单说明一下侠盗的技能。", 1, 1052001, false, true);
        } else {
          if (status === V++) {
            cm.askMenu("我先来提一个问题！你是否知道以下哪个是侠盗的基本技能呢？\r\n\r\n#b#L0#爆击蓄能#l\r\n#L1#冰冻强袭#l\r\n#L2#斗气集中#l", 1, 1052001);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很好，答对了！就是#b爆击蓄能#k！", 1, 1052001, false, true);
            } else {
              if (status === V++) {
                cm.setAccountQuestInfo(238, "count=302;T=20201007121854");
                cm.sendNormalTalk("你很好奇这是个什么技能吗？那我来为你进行一下技能说明。", 1, 1052001, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/4200013"], [0, -450, -200, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2520);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("如你所见，这种技能的作用是持续增加爆击率！", 1, 1052001, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("基本技能非常重要……不过，你知道侠盗技能中#r最强大的技能#k是什么吗？", 3, 1052001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那么，我来告诉你吧！那就是#r暗杀#k技能和#r侠盗本能#k技能。", 1, 1052001, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/4221001"], [0, -460, -200, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/4221013"], [0, -135, -200, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2520);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("这两个技能并不是单纯的攻击和增益技能。正如你刚才看到的，这两种技能在积累了#b击杀点数#k后，会变得非常强大。", 1, 1052001, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b击杀点数#k？", 3, 1052001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("是的，击杀点数是可通过攻击敌人进行积累的点数。通过右上方的增益图标可以查看积累的情况。", 1, 1052001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#i3800573#、#i3800574#、#i3800575#、#i3800576#和#i3800577#！", 1, 1052001, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("请记住，显示#i3800577#这个图标时，使用#b暗杀#k和#b侠盗本能#k的话，可以提升相当大的效果。", 1, 1052001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.askYesNo("那么，侠盗技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1052001);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.forceCompleteQuest(32229);
                                      cm.dispose();
                                      cm.warp(103000003, 1, false);
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