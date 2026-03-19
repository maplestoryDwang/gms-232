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
      cm.getMap().spawnReactorIfNotExist(3500017, 0, 1657, -83, 0, "box7");
      cm.getMap().spawnReactorIfNotExist(3500016, 0, 1171, -334, 0, "box6");
      cm.getMap().spawnReactorIfNotExist(3500015, 0, 1456, -335, 0, "box5");
      cm.getMap().spawnReactorIfNotExist(3500014, 0, 1831, -278, 0, "box4");
      cm.getMap().spawnReactorIfNotExist(3500013, 0, 1244, -40, 0, "box3");
      cm.getMap().spawnReactorIfNotExist(3500012, 0, 1948, -41, 0, "box2");
      cm.getMap().spawnReactorIfNotExist(3500011, 0, 1488, -42, 0, "box1");
      cm.getMap().getReactorByName("box1").setDelay(0);
      cm.getMap().getReactorByName("box2").setDelay(0);
      cm.getMap().getReactorByName("box3").setDelay(0);
      cm.getMap().getReactorByName("box4").setDelay(0);
      cm.getMap().getReactorByName("box5").setDelay(0);
      cm.getMap().getReactorByName('box6').setDelay(0);
      cm.getMap().getReactorByName("box7").setDelay(0);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001600, 350013500);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540500, "oid=13015049", -2630, 2, 183, -2680, -2580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=13015049", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("奥尔卡的意识不太寻常。\r\n这或许是可以见到的最后一个记忆了。", 37, 1540500, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=13015049");
            cm.npc_LeaveField("oid=13015049");
            cm.setInGameDirectionMode(false, true, false);
            cm.onHireTutorById(1, 80001600, 350013500);
            cm.updateInfoQuest(33159, "map=500");
            cm.getMap().setSpawn(true);
            cm.dispose();
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