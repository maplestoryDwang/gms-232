var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage19");
  if (V === 'start') {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(em);
    return;
  }
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 19 F\r\n\r\n#fs22#地下19层也有黄金海滩啊。据说冒险岛世界的黄金海滩已经被黑魔法师的力量封印了...不是吗？\r\n\r\n据说前往下一层的钥匙就在那个看上去很老练的冒险家手上。\r\n\r\n要不要求助一下引路向导？", 30000);
        } else if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          startMap(em);
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage19", "start");
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.getMap().getWeatherEffectNotice("嗯？你想知道走下这层的方法？呵呵……行~看你好像是新来的，我就告诉你秘诀吧。", 148, 60000, 1);
  cm.npc_ChangeController(2540004, -900, 116, 1);
  cm.npc_SetSpecialAction(2540004, "summon");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;