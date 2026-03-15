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
      cm.askMenu("嘿！我知道你在想什么！你想怎么样？\r\n#b#L0#我找到了一个未来气息十足的玩意儿！我觉得应该来问你，毕竟你可是个能时间旅行的科学家啊……#l#k", 0, 9201052);
    } else if (status === V++) {
      cm.sendNormalTalk("你手上的东西一点未来气息都没有好吗。只有充满未来气息的东西才能激起我的兴趣。等你找到了这种东西再回来找我！", 0, 9201052, false, false);
    } else {
      cm.dispose();
    }
  }
}