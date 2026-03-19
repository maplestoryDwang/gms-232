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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b嗯……这是哪里……感觉很熟悉。这凝重的空气，令人不快的气氛……难道这里是……！！！", 3, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("lightning/screenMsg/2");
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Voice("Voice.img/DarkMage/0", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b黑魔法……！！！", 3, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ScreenMsg("Map/EffectPL.img/Afterland/yellow");
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9400311, "oid=22466106", 0, -360, 7, -50, 50, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=22466106", 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b……师……不对，有些细微的差异！", 3, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("放肆。你知道这里是什么地方吗，竟敢擅闯。休想活着回去", 5, 9400311, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b唔，虽然外表有点不同，但对方散发出和黑魔法师一样的灵气。我能战胜他吗……", 3, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
                            cm.setStandAloneMode(false);
                            cm.dispose();
                            cm.warp(867113750, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;