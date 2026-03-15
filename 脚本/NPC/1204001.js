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
      cm.sendNormalTalk("我是黑色之翼的人偶师弗朗西斯。你把我安置的好几个人偶都给找出来了……坏了我的好事。虽然我很恼火，不过这次先放你一马。你要是再敢和我作对……我以黑魔法师大人的名义发誓，绝不放过你。", 9, 1204001, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b（……黑色之翼？作对？……到底是怎么回事？在怪兽的身上找到人偶与黑魔法师有什么关系？该去找特鲁商量商量。)#k", 3, 1204001, true, true);
      } else if (status === V++) {
        cm.setStandAloneMode(false);
        cm.forceStartQuest(21760, '0');
        cm.dispose();
        cm.warp(104000004, 0, false);
      }
    }
  }
}