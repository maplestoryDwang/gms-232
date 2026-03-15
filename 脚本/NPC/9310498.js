var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(Q, X, H) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var P = "#g#e                  天涯花园\r\n";
    P += "#n#b#L0##fEffect/CharacterEff/1082565/2/0#了解什么是花园？#l\r\n";
    P += "#b#L2##fEffect/CharacterEff/1082565/2/0# 领取今日免费活力#l\r\n";
    P += "#e#r#L1##fEffect/CharacterEff/1082565/4/0# 进入我的花园#l\r\n\r\n\r\n\r\n";
    P += "#n#k(爱花，爱草，更爱自己的秘密花园!记得浇花施肥哦)\r\n";
    P += "#k每个人都有一个属于自己的秘密花园，外人不可轻易触碰哟!\r\n";
    P += "#k                                         ——天涯传媒\r\n";
    cm.askMenu(P);
  } else {
    if (status == 1) {
      switch (H) {
        case 0:
          var P = "\t每个角色初生花园技术等级为1级。可以拥有1个花盆，提升等级之后可以扩建花园增加花盆，花园技术等级决定你能种植的花种。每当收获时可以获得种植经验和花的产物。任何的花只要超过一天没有采摘就会枯萎。\r\n";
          P += "\t每天可以为种植的花进行一次浇水、施肥，浇水消耗10点活力，可以减少1小时的作物成长时间，施肥消耗20点活力，可以减少2小时的作物成长时间。";
          status -= 2;
          cm.sendNext(P);
          break;
        case 1:
          cm.dispose();
          cm.openNpc(9330065, 100);
          break;
        case 2:
          if (cm.getPlayerLog("花园活力") == 0) {
            cm.addPlayerLog("花园活力", 0, 50);
            cm.sendOk("成功领取了50点活力值，更多活力值请通过完成组队任务#b<抢占海盗船>、<拯救罗和朱>、<扫荡秦皇陵>、#k获取。每天一次");
            cm.dispose();
          } else {
            cm.sendOk("您今天已经领取过了活力值！");
            cm.dispose();
          }
      }
    }
  }
}