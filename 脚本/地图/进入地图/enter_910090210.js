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
        cm.sendNormalTalk("#b#h0##k！现在开始，我来简单说明一下神射手的技能。", 1, 1012100, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题。以下哪个技能是神射手的基本技能呢？\r\n\r\n#b#L0#三彩箭矢#l\r\n#L1#能量获得#l\r\n#L2#祈祷众生#l", 1, 1012100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("答对了！#b三彩箭矢#k！看来你平时非常留意神射手啊！", 1, 1012100, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/3101009"], [0, 130, -200, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("如你所见，#b三彩箭矢#k使用三种特殊的箭矢，非常有助于攻击。", 1, 1012100, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("好像有点难以理解？那我就来为你说明一下。", 1, 1012100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("在施展会消耗箭矢的技能时，3个箭筒中的箭矢会自然消耗。", 1, 1012100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("首先，造成持续伤害的剧毒箭矢是这种效果……", 1, 1012100, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Skill/310.img/skill/3101009/mode/1"], [560, 0, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("吸收敌人体力的吸血箭矢是这种效果……", 1, 1012100, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Skill/310.img/skill/3101009/mode/0"], [560, 0, 0, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("锁定敌人的魔法箭矢是这种效果。", 1, 1012100, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/310.img/skill/3101009/mode/2"], [560, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("通过按下三彩箭矢的技能键，可以改变箭筒。3种箭矢全部消耗完后，一下子全部重新装填。", 1, 1012100, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("例如，如果剧毒箭矢全部用完，而剩下的魔法箭矢和吸血箭矢还有余量的话，剧毒箭矢无法#r立即重新装填#k。", 1, 1012100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.askYesNo("那么，神射手技能的学习就到此为止了。如果还有疑问或想重新学习的话，请点击“否”！\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1012100);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.forceCompleteQuest(32226);
                                      cm.dispose();
                                      cm.warp(100000201, 2, false);
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