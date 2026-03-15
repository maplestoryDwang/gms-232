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
      cm.askMenu("#e<组队任务：侏儒怪皇帝的复活>#n\r\n你们来了啊，#b#h0##k。你们找我有什么事？呵呵呵#b\r\n#L0#我想去阻止侏儒怪皇帝莱格斯的复活。#l\r\n#L2#我想听取说明。#l\r\n#L3#我想领取道具。#l", 0, 2022003);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("侏儒怪皇帝#r#o9300281##k很快就会复活了。封印#r#o9300281##k的力量好像正在逐渐变弱。现在只能到封印#r#o9300281##k的地方去，阻止他复活了……如果你想去，我可以带你去。但是你必须把我安全地送到那里。\r\n - #e等级#n：170级以上#r（推荐等级：170 ～ 189 ）#k \r\n - #e限制时间#n：20分钟\r\n - #e参加人数#n：2～6名\r\n - #e获得道具#n：\r\n#i1032102:# #t1032102#\r\n#i1032103:# #t1032103#\r\n#i1032104:# #t1032104#\r\n#i1902048:# #t1902048#", 0, 2022003, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("你想要获得什么道具？我想要获得#b\r\n#L0##i1032102:# #t1032102#。我想要获得#l\r\n#L1##i1032103:# #t1032103#。我想要获得#l\r\n#L2##i1032104:# #t1032104#。我想要获得#l\r\n#L3##i1902048:# #t1902048#。#l", 0, 2022003);
  } else {
    if (status === V++) {
      if (cm.getItemQuantity(4001530) >= 5) {
        cm.gainItem(4001530, -5);
        var w = [1032102, 1032103, 1032104, 1902048];
        cm.gainItem(w[U], 1);
        cm.sendNormalTalk('给，这是#b#i' + w[U] + ":##t" + w[U] + "##k。", 0, 2022003, false, false);
      } else {
        cm.sendNormalTalk('要想获得#b#i' + w[U] + ":##t" + w[U] + "##k的话，需要#b5个#t4001530##k。你快去搜集吧。消灭莱格斯后，就可以弄到。", 0, 2022003, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}