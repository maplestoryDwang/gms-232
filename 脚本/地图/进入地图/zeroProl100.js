var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestCustomData(40005) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2410000, "oid=23572", -554, -80, 109, -604, -504, 0, false, 0, false);
      cm.npc_ChangeController(2410002, "oid=23573", -112, -213, 75, -162, -62, 0, false, 0, false);
      cm.npc_ChangeController(2410011, "oid=23574", 120, -213, 75, 70, 170, 1, false, 0, false);
      cm.npc_ChangeController(2410013, "oid=23575", 193, -64, 72, 143, 243, 1, false, 0, false);
      cm.npc_ChangeController(2410014, "oid=23576", -179, -6, 121, -229, -129, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_ScreenMsg("zero/before16hour");
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("紧急任务！", 33, 2410002, false, true);
            cm.effect_Voice("Voice.img/Layla/3", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("突然收到了#o9300744#出没的消息！目前确认共有9个！数量相当多！战斗马上开始，请做好心理准备！", 33, 2410002, true, true);
              cm.effect_Voice("Voice.img/Layla/4", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("已经没有时间再更换队形了，这次的战斗还是和以前一样！攻击的核心就交给骑士#p2410008#了！#p2410008#，你能做到吗？", 33, 2410002, true, true);
                cm.effect_Voice("Voice.img/Layla/5", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那么请#p2410008#到我这来听详细的内容！", 33, 2410002, true, true);
                  cm.effect_Voice("Voice.img/Layla/6", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face11# #b(果然，我就知道。突然出现了#o9300744#？如果是以前的话我早就上当了。)", 41, 2410008, false, true);
                      cm.effect_Voice("Voice.img/Alpha/13", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11# #b(他们只有在需要的时候才会去消灭#o9300744#，那就是现在，想转移我注意力的时候。)", 41, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/14", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11# #b(毫无意义的命令和作战……但是我也只能听命，直到我查清他们的目的为止……)", 41, 2410008, true, true);
                          cm.effect_Voice("Voice.img/Alpha/15", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.updateInfoQuest(40900, '');
                            cm.forceStartQuest(40900, '');
                            cm.forceStartQuest(40005, '1');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;