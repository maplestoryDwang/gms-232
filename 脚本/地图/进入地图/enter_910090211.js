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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("#b#h0##k！现在开始，我来简单说明一下箭神的技能。", 1, 1012100, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先来提一个问题。以下哪个技能是箭神的基本技能？\r\n\r\n#b#L0#远近效应#l\r\n#L1#灵魂助力#l\r\n#L2#斗气集中#l", 1, 1012100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("答对了！#b远近效应#k！看来你平时非常留意箭神啊！", 1, 1012100, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/3200009"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("正如你看到的，#b远近效应#k在距离拉近时可以无视敌人的防御，拉远了，可以提升伤害。", 1, 1012100, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你比较难理解所谓的远近程度吗？那么……", 1, 1012100, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/box"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("在刚才显示的白色箱子里有敌人的情况下，敌人与#b#h0##k你的距离越近，你的无视防御率就越高……", 1, 1012100, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/box"], [0, 250, 0, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("在刚才显示的白色箱子里有敌人的情况下，敌人与#b#h0##k你的距离越远，最终伤害也会随之增加。", 1, 1012100, false, true);
                          } else {
                            if (status === V++) {
                              cm.askYesNo("那么，箭神技能的学习就到此为止了。如果还有疑问或想重新学习的话，请点击“否”！\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1012100);
                            } else if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.forceCompleteQuest(32227);
                              cm.dispose();
                              cm.warp(100000201, 0, false);
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