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
      cm.getMap().spawnReactorIfNotExist(8659132, 0, -1645, 371, 0, "64014_chk2");
      cm.npc_ChangeController(9400580, 'oid=200857', 3567, -1264, 64, 3521, 3617, 1, true, false);
      cm.npc_ChangeController(9400593, "oid=200858", 3512, -1257, 64, 3512, 3562, 1, true, false);
      cm.npc_ChangeController(9400595, "oid=200859", 3668, -1273, 66, 3618, 3701, 0, true, false);
      cm.Hidden_background("guide0", 0);
      cm.Hidden_background("guide1", 0);
      cm.Hidden_background('guide2', 0);
      cm.updateInfoQuest(64015, "chk1=0;chk2=0;slaDir=0;chk3=0;chk4=0;chk5=0;chk6=0;chk7=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400585, "oid=2278124", -2050, 330, 5, -2100, -2000, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278124", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=2278125", -1950, 330, 6, -2000, -1900, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278125", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=2278126", -2100, 250, 5, -2150, -2050, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278126", 'summon', 0, 0);
      cm.npc_ChangeController(9400641, "oid=2278127", -2150, 250, 5, -2200, -2100, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278127", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=2278128", -1850, 330, 6, -1900, -1800, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278128", 'summon', 0, 0);
      cm.npc_setForceFlip("oid=2278124", -1);
      cm.npc_SetSpecialAction("oid=2278124", "attack1", -1, 1);
      cm.npc_setForceFlip("oid=2278125", 1);
      cm.npc_SetSpecialAction("oid=2278125", 'attack1', -1, 1);
      cm.npc_setForceFlip("oid=2278126", 1);
      cm.npc_SetSpecialAction("oid=2278126", "attack1", -1, 1);
      cm.npc_setForceFlip("oid=2278127", 1);
      cm.npc_SetSpecialAction("oid=2278127", "attack1", -1, 1);
      cm.npc_setForceFlip("oid=2278128", -1);
      cm.npc_SetSpecialAction("oid=2278128", "attack1", -1, 1);
      cm.npc_ChangeController(9400666, "oid=2278129", -120, 320, 15, -170, -70, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278129", "summon", 0, 0);
      cm.npc_setForceFlip("oid=2278129", 1);
      cm.npc_ChangeController(9400596, "oid=2278130", 410, 75, 51, 360, 460, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278130", 'summon', 0, 0);
      cm.npc_ChangeController(9400581, "oid=2278131", -620, 360, 13, -670, -570, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278131", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=2278132", -800, 320, 12, -850, -750, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278132", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=2278133", -400, 330, 14, -450, -350, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278133", "summon", 0, 0);
      cm.npc_setForceFlip("oid=2278131", -1);
      cm.npc_SetSpecialAction("oid=2278131", "attack1", -1, 1);
      cm.npc_setForceFlip("oid=2278132", 1);
      cm.npc_SetSpecialAction("oid=2278132", 'attack1', -1, 1);
      cm.npc_setForceFlip("oid=2278133", -1);
      cm.npc_SetSpecialAction("oid=2278133", "jumpattack", -1, 1);
      cm.npc_ChangeController(9400667, "oid=2278134", 993, 97, 55, 943, 1043, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278134", 'summon', 0, 0);
      cm.npc_ChangeController(9400587, "oid=2278135", 1800, 300, 33, 1750, 1850, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278135", "summon", 0, 0);
      cm.npc_ChangeController(9400596, "oid=2278136", 1900, 300, 33, 1850, 1950, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278136", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=2278137", 1600, 300, 32, 1550, 1650, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278137", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=2278138", 1520, 300, 32, 1470, 1570, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278138", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=2278139", 1450, 300, 32, 1400, 1500, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278139", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=2278140", 1400, 300, 32, 1350, 1450, 1, true, false);
      cm.npc_SetSpecialAction("oid=2278140", 'summon', 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 2000, 366);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(8000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402249/Attack2", 128);
              cm.npc_SetSpecialAction("oid=2278129", "flame", 2000, 1);
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2278130", 1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2278130", 'die', 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=2278130");
                    cm.npc_SetForceMove("oid=2278134", 1, 1000, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2278134", 'ear', 2000, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2278135", 1, 2000, 300);
                        cm.npc_SetForceMove("oid=2278136", 1, 2000, 300);
                        cm.npc_SetForceMove("oid=2278137", 1, 2000, 300);
                        cm.npc_SetForceMove("oid=2278138", 1, 2000, 300);
                        cm.npc_SetForceMove("oid=2278139", 1, 2000, 300);
                        cm.npc_SetForceMove("oid=2278140", 1, 2000, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.addPopupSay(9400585, 2000, '当心背后！', '', 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.npc_LeaveField("oid=2278124");
                              cm.npc_LeaveField("oid=2278124");
                              cm.npc_LeaveField("oid=2278125");
                              cm.npc_LeaveField("oid=2278125");
                              cm.npc_LeaveField("oid=2278126");
                              cm.npc_LeaveField("oid=2278126");
                              cm.npc_LeaveField("oid=2278127");
                              cm.npc_LeaveField("oid=2278127");
                              cm.npc_LeaveField("oid=2278128");
                              cm.npc_LeaveField("oid=2278128");
                              cm.npc_LeaveField("oid=2278129");
                              cm.npc_LeaveField("oid=2278131");
                              cm.npc_LeaveField("oid=2278132");
                              cm.npc_LeaveField("oid=2278133");
                              cm.npc_LeaveField("oid=2278134");
                              cm.npc_LeaveField("oid=2278135");
                              cm.npc_LeaveField("oid=2278137");
                              cm.npc_LeaveField("oid=2278139");
                              cm.npc_LeaveField("oid=2278138");
                              cm.npc_LeaveField("oid=2278140");
                              cm.setStandAloneMode(false);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.forceStartQuest(64015, '');
                              cm.playerMessage(-1, "去帮助被怪物包围的骑士！");
                              cm.Hidden_background("guide0", 1);
                              cm.getPlayer().addHP(500000);
                              cm.getPlayer().addMP(500000);
                              cm.playerMessage(-1, "靠着亚皮纳斯的祝福，以体力全满的状态复活。");
                              cm.addPopupSay(9400584, 1000, "#face0#亚皮纳斯的祝福与你同在……。", '', 0);
                              cm.spawnMob(9402314, 1, -2050, 159);
                              cm.spawnMob(9402314, 1, -1950, 171);
                              cm.spawnMobLimit(9402245, 1, -2500, 255, 100);
                              cm.spawnMobLimit(9402246, 1, -2600, 244, 100);
                              cm.spawnMobLimit(9402245, 1, -1650, 374, 100);
                              cm.spawnMobLimit(9402246, 1, -1750, 377, 100);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;