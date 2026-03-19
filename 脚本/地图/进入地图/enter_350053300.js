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
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500024, 0, 583, -461, 0, "box2");
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 1311, -286, 0, "wall");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500024, 0, 303, -541, 0, 'box1');
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, "graph");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, "light1");
      cm.getMap().spawnReactorIfNotExist(3500024, 0, 863, -541, 0, 'box3');
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;act5=350053300");
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.npc_ChangeController(1540703, "oid=1540703", 1200, -10, 12, 1150, 1250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1540703", "summon", 0, 0);
      cm.npc_ChangeController(1540708, "oid=284818652", 746, -297, 11, 696, 796, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=284818652", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1540703", 'off', -1, 1);
      cm.npc_setForceFlip("oid=1540703", -1);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
      cm.getMap().getReactorByName('light1').forceHitReactor(null, 0, 431, -277, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 0, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
      cm.getMap().getReactorByName("box1").forceHitReactor(null, 1, 303, -541, 0);
      cm.getMap().getReactorByName("box2").forceHitReactor(null, 1, 583, -461, 0);
      cm.getMap().getReactorByName("box3").forceHitReactor(null, 1, 863, -541, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
      cm.getMap().getReactorByName('light2').forceHitReactor(null, 0, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
      cm.npc_ChangeController(1540490, "oid=284818653", 470, -5, 12, 420, 520, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284818653", 'summon', 0, 0);
      cm.updateInfoQuest(33235, "start=1;puzzleNotice=0;puzzleNotice2=0");
      cm.sendNormalTalk_Bottom("（塞好了管道碎片。）", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("灯……没有亮啊？\r\n无法启动。", 37, 1540490, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯……你等一下。", 57, 0, true, true);
        } else if (status === V++) {
          cm.getTopMsgFont("拼好管道, 以便开门的机器能够启动吧. ", 3, 20, 20, 0);
          cm.addPopupSay(1540490, 1500, "这里, 你看看这个机器. ", '', 0);
          cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
          cm.getMap().getReactorByName("light2").forceHitReactor(null, 0, 568, -360, 0);
          cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
          cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
          cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
          cm.npc_SetSpecialAction("oid=1540703", "off", -1, 1);
          cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=0;act5=350053300");
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/mOff", 100);
          cm.dispose();
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