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
      cm.gainSkillBuff(80001631);
      cm.setAmbience("Ambience.img/warfare_far", 130, 60);
      cm.setAmbience("Ambience.img/flyingdeck_fire", 100, 60);
      cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
      cm.npc_ChangeController(1540499, "oid=286743772", 2100, -8, 17, 2050, 2150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286743772", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 2030, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#他吸入了很多格里梅尔的毒气。", 45, 1540499, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#肯定活不了多久了。", 45, 1540499, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#就算能活下来，也只会变成一副没有感情的躯壳。", 45, 1540499, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=286743772", 1, 10, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你打算去什么地方？", 45, 1540453, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这跟你好像没有关系吧？", 45, 1540499, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=286743772", 1, 50, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#最后……", 45, 1540499, false, true);
                            cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_4/30", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#斯乌想向你们表示感谢。\r\n他说感谢你们把他从格里梅尔那里解救出来。", 45, 1540499, true, true);
                              cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_4/31", 100);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=286743772", 1, 500, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=286743772");
                                  cm.npc_LeaveField("oid=286743772");
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.userSetFieldFloating(350063004, 5, 5, 20);
                                  cm.addPopupSay(1540453, 1000, "快走吧, 没有时间了. ", '', 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;