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
      cm.forceCompleteQuest(23203);
      cm.forceForfeitQuest(23203);
      cm.npc_ChangeController(2159309, 'oid=923701', 500, 50, 5, 450, 550, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=923701', "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("你的实力总是让我大吃一惊啊…其实这不是个很好的机会吗？我一直都想和军团长一决高下。来，比比你的气场和我的魔法谁更强！ ", 1, 2159308, false, true);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/4", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/9"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_OneTimeAction(376, 0);
          cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121000/effect", "oid=0"], [0, 321, 83, 1, 0, 1, 1, 0, 0]);
          cm.fieldEffect_PlayFieldSound("demonSlayer/31121000", 100);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/9"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", 'oid=923701'], [1000, 0, -150, 1, 0, 1, 0, 0, 0]);
            cm.fieldEffect_PlayFieldSound("demonSlayer/31121000h", 100);
            cm.npc_SetSpecialAction('oid=923701', "teleportation", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(570);
          } else {
            if (status === V++) {
              cm.npc_LeaveField('oid=923701');
              cm.npc_ChangeController(2159309, "oid=923716", 620, 50, 6, 570, 670, 1, false, 0, false);
              cm.npc_SetSpecialAction('oid=923716', 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("挺有本事的嘛…有意思，哈哈哈哈！", 1, 2159308, false, true);
                cm.effect_Voice("Voice.img/DemonSlayertutorial_B/5", 100);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=923716", "resolve", 0, 1);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/10", "oid=923716"], [2000, 0, -150, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/11"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121005/effect", "oid=0"], [0, 321, 71, 1, 1, 1, 0, 1, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121005/effect0", "oid=0"], [0, 321, 71, 1, -1, 1, 0, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("demonSlayer/31121005", 100);
                      cm.inGameDirectionEvent_OneTimeAction(370, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1980);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/gateOpen/0", "oid=0"], [2100, 918, -195, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/gateLight/0", "oid=0"], [2100, 926, -390, 1, 0, 1, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/gateStair/0", "oid=0"], [2100, 879, 30, 1, 1, 1, 1, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("demonSlayer/openGate", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1950);
                      } else {
                        if (status === V++) {
                          cm.forceStartQuest(23203, '');
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/0", "oid=923716"], [2000, 0, -150, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("…哦哦，黑魔法师大人要亲自会会你了。虽然可惜，但今天就到此为止吧。我要去给那些叫英雄的家伙们露露脸了。", 1, 2159308, false, true);
                            cm.effect_Voice("Voice.img/DemonSlayertutorial_B/6", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("我应该不用再见到你了，#h0#。能被大人亲手杀死，这是你的荣耀！哈哈哈哈！", 1, 2159308, true, true);
                              cm.effect_Voice("Voice.img/DemonSlayertutorial_B/7", 100);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=923716", "teleportation", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(570);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=923716");
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg2/2"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_MoveAction(2);
                                  cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                  cm.inGameDirectionEvent_AskAnswerTime(1950);
                                } else if (status === V++) {
                                  cm.forceCompleteQuest(23203);
                                  cm.forceForfeitQuest(23203);
                                  cm.curNodeEventEnd(true);
                                  cm.dispose();
                                  cm.warp(931050300, 0, false);
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