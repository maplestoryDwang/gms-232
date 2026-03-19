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
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.onActionBarResult(5, 1010);
    cm.teachSkill(80011562, 1, 1);
    cm.teachSkill(80011565, 1, 1);
    cm.teachSkill(80011561, 1, 1);
    cm.teachSkill(80011567, 1, 1);
    cm.teachSkill(80011641, 1, 1);
    cm.updateInfoQuest(64001, "dir1=0;man=720;stage=0;enemy=401253;seq=0;mine=0;companion=108372654;dir0=0");
    cm.addPopupSay(9400602, 10000, "#face1##h0#，我负责的部分我一定会想办法拦住的……毕竟我可是凯恩骑士的大弟子！", '', 0);
    nextBattle(0);
    cm.dispose();
  }
}
function nextBattle(f) {
  var E = [];
  var e = 0;
  for (var V = 0; V <= 5; ++e, ++V) {
    if (cm.getNumberFromQuestInfo(10006400, "mob" + V) == 1) {
      continue;
    }
    E[e] = V;
  }
  var O = E.sort(function () {
    return Math.random() - 0.5;
  });
  var E = [];
  var e = 0;
  for (var V = 0; V <= 8; ++e, ++V) {
    if (cm.getNumberFromQuestInfo(10006400, 'npc' + V) == 1) {
      continue;
    }
    E[e] = V;
  }
  var b = E.sort(function () {
    return Math.random() - 0.5;
  });
  var w = cm.rand(30, 150);
  var L = cm.rand(30, 150);
  var S = cm.rand(30, 150);
  cm.setNumberForQuestInfo(64002, "man", w);
  cm.setNumberForQuestInfo(64003, "man0", L);
  cm.setNumberForQuestInfo(64003, "man1", S);
  cm.莫奈德_特效(null, [2, f, O[0], b[0], w, f, O[1], b[1], L, f, O[2], b[2], S]);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;