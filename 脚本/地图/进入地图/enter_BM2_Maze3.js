var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.setStandAloneMode(false);
                cm.setInGameDirectionMode(false, true, false);
                cm.enterMaze();
                cm.addNumberForQuestInfo(16926, "missionClearCount", 1);
                if (V % 300 == 0 && cm.getMap().getReactorByName("altar") != null) {
                  if (cm.getMap().getReactorByName('altar').getState() < 5) {
                    cm.npc_ChangeController(3003801, 'oid=altar', 500, -300, 90, 450, 550, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=altar", "summon", 0, 0);
                    cm.getWeatherEffectNotice("看到了一个倒在地上的联盟成员。必须去帮帮他。", 253, 10000, 1);
                    cm.updateInfoQuest(16925, 'desc=0');
                    cm.addPopupSay(0, 2000, "好像有人倒在那里……？必须确认一下有没有事！", '', 0);
                    cm.playerMessage(5, "去确认倒下的联盟成员是否没事。");
                    cm.forceStartQuest(16925, '');
                    for (var O = 0; cm.getMap().getNumMonsters() < 50; O++) {
                      map.spawnMonsterOnGroundBelow(em.getMonster(rand(9833301, 9833302)), new java.awt.Point(rand(map.getLeft(), map.getRight()), rand(map.getTop(), map.getBottom() - 200)));
                    }
                  }
                } else {
                  if (940504600 == cm.getMapId()) {
                    cm.getWeatherEffectNotice("迷宫的碎片四散在各处。", 253, 10000, true);
                    cm.setNumberForQuestInfo(35706, 'crack', 0);
                  } else {
                    if (cm.getNumberFromQuestInfo(35706, 'guide') == 1 && cm.getMazeDestination() != cm.getMapId()) {
                      cm.getWeatherEffectNotice('突然有人出现了。', 253, 10000, true);
                    } else {
                      if (validMobs() == 0) {
                        cm.getWeatherEffectNotice("迷宫的门打开了。", 253, 15000, 1);
                        var b = ["up00", "down00", "left00", "right00", "exit00"];
                        b.forEach(function (w) {
                          if (cm.getMap().getReactorByName(w).getState() == 1) {
                            cm.getMap().getReactorByName(w).forceHitReactor(cm.getPlayer(), 2);
                          }
                        });
                      } else {
                        cm.obstacleFallRepeat(3, "痛苦迷宫_绿色魔球", "痛苦迷宫_绿色魔球II", 3);
                      }
                    }
                  }
                }
                if (940504900 == cm.getMapId()) {
                  cm.addPopupSay(0, 2000, "感觉不到有任何动静。", '', 0);
                  cm.addPopupSay(0, 2000, "在这种地方竟然有个墓碑……", '', 0);
                }
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
var mobs = [9833290, 9833289, 9833301, 9833302, 9833303, 9833304, 9833311, 9833312];
function validMobs() {
  var f = 0;
  for (var E = 0; E < mobs.length; E++) {
    f += cm.getMap().countMonsterById(mobs[E]);
  }
  return f;
}