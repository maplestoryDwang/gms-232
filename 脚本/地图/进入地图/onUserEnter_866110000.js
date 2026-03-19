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
      cm.sendNormalTalk("老大！怎么样？现在感受下我#b拉伊的力量#k吧！", 5, 9390302, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#s110001510#\r\n施展保存在#b[Shift]#k键上的#b‘模式变更技能’#k，按下#b'向右方向键'#k，老大！那样就能变更为雪豹模式了！\r\n shake it out！", 5, 9390302, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("在那之后，按#b[ctrl]#k按钮，使用雪豹突击技能", 5, 9390302, true, true);
        } else if (status === V++) {
          cm.teachSkill(110001510, 1, 1);
          cm.teachSkill(110001500, 0, -1);
          cm.teachSkill(110001500, 1, 1);
          cm.teachSkill(110001502, 0, -1);
          cm.teachSkill(110001502, 1, 1);
          cm.teachSkill(112100000, 1, 20);
          cm.funckeySetByScript(1, 110001510, 42);
          cm.spawnMobLimit(9390927, 1, 461, 31, 5);
          cm.spawnMobLimit(9390927, 1, 561, 31, 5);
          cm.spawnMobLimit(9390927, 1, 661, 31, 5);
          cm.spawnMobLimit(9390927, 1, 761, 31, 5);
          cm.spawnMobLimit(9390927, 1, 861, 31, 5);
          cm.forceStartQuest(59009, '');
          cm.showMapEffect(true, 5120116, '高级', 5, false);
          cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/ChapterA/27");
          cm.dispose();
        }
      }
    }
  }
}