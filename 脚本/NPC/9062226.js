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
      cm.askMenu("愉快的中秋！金币叮咚！#b金币哗啦啦云朵怪！！#k\r\n\r\n#L0##b 我想坐金币哗啦啦云朵怪！#k#l\r\n\r\n#L1# 我想了解搭乘守则。#l\r\n#L2# 以后再乘坐。#l\r\n", 4, 9062225);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("确定搭乘金币哗啦啦云朵怪 ？\r\n\r\n#r※ 注意事项#k\r\n搭乘金币哗啦啦云朵怪，需要\r\n#b费用1亿金币#k，以及与其他勇士分享的#b2亿金币#k\r\n，共计#fs14##r#e3亿金币#k#n#fs12#！\r\n\r\n另外，如果途中#b执行任务或前往其他区域#k，将会#b离开骑宠#k！\r\n\r\n#fs14##r#e确认搭乘吗？#k#n", 5, 9062225);
  } else {
    if (status === V++) {
      cm.dispose();
      if (cm.getMeso() < 300000000) {
        cm.sendOk("你的金币不够啊！共计需要#fs14##r#e3亿金币#k#n#fs12#！", 9062225);
        return;
      }
      cm.gainMeso(-300000000);
      cm.addNumberForQuestInfo(100369, 'useMeso', 200000000);
      cm.setNumberForQuestInfo(100369, "curMeso", 200000000);
      cm.addNumberForQuestInfo(100368, "aNum", 1);
      cm.addNumberForQuestInfo(100368, 'num', 1);
      cm.addNumberForQuestInfo(100368, 'useMeso', 2);
      cm.setNumberForQuestInfo(100369, "start", 1);
      cm.playerMessage(-1, "你已经搭乘金币哗啦啦云朵怪，30秒后将开启金币哗啦啦活动！");
      cm.playerMessage(5, "你已经搭乘金币哗啦啦云朵怪，30秒后将开始分享哗啦啦金币袋！");
      cm.addPopupSay(9062225, 4000, "使用#b二阶跳#k开始高空飞行！！\r\n点击#b方向键#k向各个方向移动吧！！", '', 0);
      cm.addPopupSay(9062225, 4000, "使用#b空格键#k分享更多的哗啦啦金币袋，哐哐！！", '', 0);
      cm.addPopupSay(9062225, 4000, "将#b空格键#k设置为#b空格键#k? 后将无法跳跃。\r\n更改#r快捷键设置#k吧！！", '', 0);
      cm.addPopupSay(9062225, 4000, "准备结束！！\r\n#b金币哗啦啦云朵怪#k出发！！", '', 0);
      cm.gainSkillBuff(80002854);
      cm.金币哗啦啦();
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    cm.startQuestScript(0, 100366);
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}