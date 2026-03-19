var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(9310561, "oid=96101", 1135, -5, 106, 1085, 1185, 1, false, false);
      cm.npc_ChangeController(9310540, "oid=39411299", -962, -8, 16, -1012, -912, 1, false, false);
      cm.npc_SetSpecialAction("oid=39411299", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_NormalSpeechBalloon("#fs20##e喂！你！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9310540, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
          cm.inGameDirectionEvent_AskAnswerTime(1);
          cm.effect_NormalSpeechBalloon("?... (左看右看)", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
              cm.inGameDirectionEvent_AskAnswerTime(1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon("(你在叫我吗？)", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("没错，我叫的就是你。\r\n你……看起来很面善啊……而且你那份善良中还透露出坚韧和清廉，你以后一定会成为英雄的！", 37, 9310540, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哈哈，谢谢。之前也有人这么说我。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=39411299", "fire", 0, 0);
                        cm.sendNormalTalk_Bottom("啊，忘了做自我介绍了。\r\n我呢，就是可以操控风与火的道士。我从朱元璋定都应天府那天起一直活到了现在。我是#p9310540#。很高兴见到你。", 37, 9310540, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你说你能够控制风与火，那你是魔法师吗？\r\n(……总感觉此人有些可疑。)", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("嗯，你这样理解也可以……", 37, 9310540, true, true);
                          } else {
                            if (status === V++) {
                              cm.askYesNo_Bottom("不过这不是重点，关键是你想不想成为英雄？\r\n如今的乱世急需一位英雄啊。竟让我遇到了像你这样具有英雄潜质的人，这难道不是命运的安排吗？", 37, 9310540);
                            } else {
                              if (status === V++) {
                                cm.forceCompleteQuest(62141);
                                cm.updateInfoQuest(62141, "chk=1");
                                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                                cm.sendNormalTalk_Bottom("虽然我不想当英雄，不过你有什么事情需要帮忙的话，我倒是可以帮你的。", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("强而不骄，帮困扶弱。你果然具有英雄的潜质啊！", 37, 9310540, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("要想成为英雄，首先要做的就是，去了解自己的敌人。\r\n等你做好充分的心理准备后，再来找我吧。到时候我会就敌人的情况为你进行详细说明。", 37, 9310540, true, true);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(701100000, 3);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;