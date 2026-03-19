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
      cm.gainSkillBuff(80001277);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("仔细听着，到岩壁巨人那里去的路上，一共有三个障碍！", 1, 2210002, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("前面有障碍物吗？按alt键，然后跳跃，朋友！我卡布的骑宠拥有惊人的跳跃力。", 1, 2210002, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("前方有佛罗拉？按ctrl键把它们砍倒，朋友！看到剪断一切的高性能剪刀的话，你一定会大吃一惊的！", 1, 2210002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("前方有黄蜂飞过来？按shift键喷火，朋友！把挡住我们的一切全都烧掉！", 1, 2210002, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我们的目标是在限定时间内到达目的地。要是因为碰到障碍我而耗尽了体力，任务就失败了。怎么样？很简单吧？", 1, 2210002, true, true);
            } else if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.forceStartQuest(31336, '');
              cm.dispose();
              cm.dispelBuff(80001277);
              cm.warp(240090000, 4, false);
            }
          }
        }
      }
    }
  }
}