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
      if (cm.getQuestStatus(6201) == 1) {
        var w = cm.getEventManager("Relic");
        if (w != null) {
          w.startInstance(cm.getPlayer());
        } else {
          cm.sendOk("An unknown error occured.");
        }
        cm.dispose();
        return;
      }
      cm.askMenu("我们家族联盟是从很久以前就开始，一直在努力解读古代的遗物<祖母绿碑>。得到的结果是，我们了解这里沉睡着古代神秘圣瑞尼亚。而且还了解到传说中的宝石#t4001024#就在圣瑞尼亚的遗址中。因此，为了寻找#t4001024#，家族联盟开始了家族对抗战。\r\n#b#L0# 圣瑞尼亚是什么东西？#l \r\n#b#L1# #t4001024# 吗？#l\r\n#b#L2# 家族对抗战？#l\r\n#b#L3# 现在好了。#l", 0, 9040002);
    } else {
      var N = "action分支" + selectionLog[1];
      eval(N)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("圣瑞尼亚是曾经统治金银岛全境的古代文明国家。在石人寺院或森林深处的神殿之类的古代建筑物都是圣瑞尼亚的遗址。", 0, 9040002, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("圣瑞尼亚最后的王是锡安列三世，据说他非常聪明而又仁慈。但是在某一天突然灭亡了，其原因还没有弄清楚。", 0, 9040002, true, true);
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#t4001024#是传说中的能够使人永远年轻的宝石。听说拥有  #t4001024#的人都灭亡了，也许圣瑞尼亚的灭亡也于此有关。", 0, 9040002, false, true);
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("过去曾多次派勘探队到圣瑞尼亚。但是无人归还。所以我们这次决定展开公会对抗战。我相信你们这些一直在努力增强力量的公会。", 0, 9040002, false, true);
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("是吗？若有什么问题，请随时提出。", 0, 9040002, false, false);
    cm.dispose();
  }
}