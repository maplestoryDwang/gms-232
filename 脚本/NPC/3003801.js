var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.haveItem(4036445)) {
        cm.sendNormalTalk("这个……有了这个的话，也许就能把同伴们救活。", 1, 3003801, false, true);
        cm.getWeatherEffectNotice("迷宫的门打开了。", 253, 15000, 1);
        cm.npc_LeaveField('oid=altar');
        cm.forceForfeitQuest(16925);
        cm.updateInfoQuest(16925, '');
        cm.removeAll(4036445);
        cm.getMap().getReactorByName('up00').forceHitReactor(cm.getPlayer(), 2);
        em.setProperty("mgate", 1);
        cm.playerMessage(-1, '迷宫的门打开了');
        cm.dispose();
      } else {
        cm.sendNormalTalk("呃……请帮帮我……", 1, 3003801, false, true);
        if (cm.getNumberFromQuestInfo(16925, 'desc') > 0) {
          cm.dispose();
        }
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……迷宫……把同伴们……", 1, 3003801, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你没事吧？", 3, 3003801, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("迷宫正在吞噬灵魂……这里的怪物们……\r\n搜集分散的灵魂碎片，带到祭坛去的话，也许可以让他们活过来……", 1, 3003801, true, true);
          } else if (status === V++) {
            cm.getMap().getReactorByName("altar").forceHitReactor(cm.getPlayer(), 5);
            cm.playerMessage(5, "必须把分散的灵魂碎片带到祭坛，制作成凝聚的灵魂之力。");
            cm.updateInfoQuest(16925, 'desc=1');
            cm.dispose();
          }
        }
      }
    }
  }
}