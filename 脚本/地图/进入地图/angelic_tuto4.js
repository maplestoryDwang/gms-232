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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.npc_ChangeController(3000141, "oid=2593096", -150, 220, 3, -200, -100, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2593096", 'summon', 0, 0);
        cm.npc_ChangeController(3000115, "oid=2593097", 200, 220, 7, 150, 250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2593097", "summon", 0, 0);
        cm.npc_ChangeController(3000111, "oid=2593098", 300, 220, 8, 250, 350, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2593098", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Kaiser_Transform4_S", "oid=2593096"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
          cm.sendNormalTalk("这……这不可能啊……", 1, 3000115, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("那……那种小屁孩儿能有什么力量……", 1, 3000111, true, true);
          } else {
            if (status === V++) {
              cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
              cm.sendNormalTalk("看样子是昏过去了，虚惊一场。", 1, 3000115, true, true);
            } else {
              if (status === V++) {
                cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                cm.sendNormalTalk("吓我一大跳。她应该看见我们的脸了，灭口吧！", 1, 3000111, true, true);
              } else {
                if (status === V++) {
                  cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/1"], [1200, 0, -100, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("她……她！起来了！", 1, 3000115, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(150);
                    } else {
                      if (status === V++) {
                        cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                        cm.inGameDirectionEvent_OneTimeAction(497, 0);
                        cm.inGameDirectionEvent_头顶图片(["Skill/6512.img/skill/65121002/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Angelicburster/65121002", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                          cm.npc_SetSpecialAction("oid=2593097", "die1", 0, 1);
                          cm.npc_SetSpecialAction("oid=2593098", "die1", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=2593097");
                            cm.npc_LeaveField("oid=2593098");
                            cm.inGameDirectionEvent_AskAnswerTime(720);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=2593096");
                            cm.dispose();
                            cm.warp(940011050, 0, false);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
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