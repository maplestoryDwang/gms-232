var status = -1;
function start(g, w, a) {
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNormalTalk("你好，#b#h0##k。你已经达到50级啦！达到#b30级#k的话，就可以获得特别的力量——#b内在能力#k。现在我就为你解放那种力量。", 0, 9010000, false, true);
  } else {
    if (status == 1) {
      cm.forceCompleteQuest(12396);
      cm.sendNormalTalk("就是现在~！你已经拥有了新的力量，内在能力。请通过角色属性栏确认~！", 0, 9010000, true, false);
    } else if (status == 2) {
      cm.getPlayer().getSkillStats().checkInnerSkill();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  cm.dispose();
}