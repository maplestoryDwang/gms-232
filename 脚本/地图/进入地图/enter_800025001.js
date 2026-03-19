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
      cm.forceStartQuest(58781, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111065, "oid=3975334", 520, 85, 28, 470, 570, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3975334", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 170, -220);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('竹野子！', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#咯咯咯咯咯咯咯……瞧瞧谁来了。\r\n你不是那个#r帮傻瓜姐妹替我收集五行的人类#k嘛？哇咔咔", 37, 9111065, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1000, 159, -50);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('马上把竹野子放了！', 57, 0, false, true);
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#咯咯咯咯咯咯咯……\r\n你来晚了。这少女只不过是我的垫脚石。", 37, 9111065, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(750);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("混蛋……不可原谅！", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嘻嘻嘻嘻，有种你就来阻止我呀！！", 37, 9111065, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(750);
                              } else if (status === V++) {
                                cm.warp(800025002, 0, true);
                                cm.npc_LeaveField("oid=3975334");
                                cm.npc_LeaveField("oid=3975334");
                                cm.eventSKill(0);
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
  }
}