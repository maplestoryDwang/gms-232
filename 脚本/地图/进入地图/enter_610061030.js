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
      cm.updateInfoQuest(61333, "act1=610061030");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201558, "oid=2808196", -1465, 114, 26, -1515, -1415, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808196", "summon", 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808197", -1212, -174, 218, -1262, -1162, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808197", "summon", 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808198", -1280, -339, 230, -1330, -1230, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808198", "summon", 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808199", -580, -339, 199, -630, -530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808199", 'summon', 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808200", -240, 0, 60, -290, -190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808200", 'summon', 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808201", -15, 0, 9, -65, 35, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808201", "summon", 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808202", 270, 0, 116, 220, 320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808202", 'summon', 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808203", 720, -45, 113, 670, 770, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808203", "summon", 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808204", 549, -590, 63, 499, 599, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808204", 'summon', 0, 0);
      cm.npc_ChangeController(9201558, "oid=2808205", 730, -590, 69, 680, 780, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2808205", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.inGameDirectionEvent_AskAnswerTime(5200);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs20#第1幕.被遗忘的战斗"], [100, 3000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(6200);
          cm.effect_Text(["#fn黑体##fs18#克拉齐亚 - 幽影森林"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("声音指引我来到这里。\r\n#b克拉齐亚#k吗……灵魂会失落在这里还真是够倒霉的。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 2000, -400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3911);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('我得尽快找到它们。', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -1890, 22);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2173);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("先处理掉挡我路的这帮家伙好了。", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else if (status === V++) {
                                cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                                cm.eventSKill(0);
                                cm.dispose();
                                cm.openNpc("克拉齐亚_第一幕_战斗1");
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=2808196");
                                cm.npc_LeaveField("oid=2808196");
                                cm.npc_LeaveField("oid=2808197");
                                cm.npc_LeaveField("oid=2808197");
                                cm.npc_LeaveField("oid=2808198");
                                cm.npc_LeaveField("oid=2808198");
                                cm.npc_LeaveField("oid=2808199");
                                cm.npc_LeaveField("oid=2808199");
                                cm.npc_LeaveField("oid=2808200");
                                cm.npc_LeaveField("oid=2808200");
                                cm.npc_LeaveField("oid=2808201");
                                cm.npc_LeaveField("oid=2808201");
                                cm.npc_LeaveField("oid=2808202");
                                cm.npc_LeaveField("oid=2808203");
                                cm.npc_LeaveField("oid=2808204");
                                cm.npc_LeaveField("oid=2808205");
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