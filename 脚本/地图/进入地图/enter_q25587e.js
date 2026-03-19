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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.npc_ChangeController(1032209, "oid=46451525", -15, -30, 3, -65, 35, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=46451525", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon40");
          cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene0", 0, 0, 0);
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("醒了吗？", 1, 1032209, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("怎么回事？我明明……", 3, 1032209, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("拉尼娅是谁啊？你喊着那个名字，就突然痛苦地晕倒了。", 1, 1032209, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("是我脱离封印，重回世界时遇到的少女。在我因黑暗力量暴走之前，和她一起度过了几年幸福的时光。", 3, 1032209, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("这样啊。这么说黑暗力量是在和黑魔法师战斗的时候侵入的？", 1, 1032209, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("准确的说，是封印黑魔法师的瞬间。在短短的时间里，我做了无法挽回的事。这就是黑暗力量的魔性吗？或者这才是我的本性？", 3, 1032209, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("夜光法师，我有话和你说。这几百年，我独自研究光之力量，发现了一件惊人的大事。那就是光和黑暗力量之间的关系，就好像是硬币的正反面一样。夜光法师拥有强大的光之力量，应该能够很容易了解黑暗力量。", 1, 1032209, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……你是说黑暗力量是光之力量的另一种形式？", 3, 1032209, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("对。准确地说，黑暗力量是光之力量消失后的状态。以此为基础，我设想了一种假说，但时间不足，没法亲自验证……也许能够控制夜光法师身体内的黑暗力量呢。请等等。", 1, 1032209, true, true);
                            } else if (status === V++) {
                              cm.forceCompleteQuest(25587);
                              cm.gainExp(10000);
                              cm.eventSKill(0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.npc_LeaveField("oid=46451525");
                              cm.npc_LeaveField("oid=46451525");
                              cm.dispose();
                              cm.warp(101000200, 0, false);
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