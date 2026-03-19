var status = 0;
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.setStandAloneMode(false);
        cm.setInGameDirectionMode(false, true, false);
        cm.enterMaze();
        cm.setPartner(1, 3003700, 80002575, 0);
        cm.setPartner(1, 3003759, 80002577, 0);
        cm.setPartner(1, 3003760, 80002579, 0);
        if (cm.isQuestActive(35706)) {
          cm.setPartner(1, 3003763, 80002578, 0);
          cm.setPartner(1, 3003764, 80002580, 0);
          cm.setPartner(1, 3003761, 80002581, 0);
        }
        cm.addNumberForQuestInfo(16926, "missionClearCount", 1);
        var O = cm.addNumberForQuestInfo(35706, "info", 1);
        if (cm.isQuestActive(35706)) {
          if (O == 1) {
            cm.addPopupSay(0, 2500, "#face0#路很复杂啊", '', 0);
            cm.addPopupSay(3003759, 2500, "#face0#朝着有光的地方走应该就可以了！", '', 0);
            cm.addPopupSay(0, 2000, "感觉不到有任何动静……", '', 0);
          } else {
            if (O == 2) {
              cm.addPopupSay(0, 2500, "#face0#绳索断了，不过还有些断断续续的绳索，应该不会迷路的。", '', 0);
              cm.addPopupSay(0, 2000, "感觉不到有任何动静。", '', 0);
            } else if (O == 3) {
              cm.addPopupSay(0, 2500, "#face0#小心地追着痕迹走吧。", '', 0);
              cm.addPopupSay(3003760, 2500, "#face0#是！", '', 0);
            }
          }
        }
        if (940303500 == cm.getMapId()) {
          cm.getWeatherEffectNotice("迷宫的碎片四散在各处。", 253, 10000, true);
          cm.setNumberForQuestInfo(35706, "crack", 0);
        } else {
          var b = ["up00", "down00", "left00", "right00", 'exit00'];
          b.forEach(function (w) {
            if (cm.getMap().getReactorByName(w).getState() == 1) {
              cm.getMap().getReactorByName(w).forceHitReactor(cm.getPlayer(), 2);
            }
          });
          if (cm.getNumberFromQuestInfo(35706, "guide") == 0 || cm.getMazeDestination() == cm.getMapId()) {
            cm.getWeatherEffectNotice("迷宫的门打开了。", 253, 15000, 1);
          } else {
            cm.getWeatherEffectNotice("突然有人出现了。", 253, 10000, true);
          }
          if (940303600 == cm.getMapId()) {
            cm.addPopupSay(0, 2000, '感觉不到有任何动静。', '', 0);
            cm.addPopupSay(0, 2000, "在这种地方竟然有个墓碑……", '', 0);
          }
        }
        cm.dispose();
      }
    }
  }
}