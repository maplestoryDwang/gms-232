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
      cm.askMenu("嘿，你好。我叫斯宾德尔，专门修理坏掉的东西，做出新的东西。你有什么需要？没有的话，我先去忙了……\r\n#b#L0#没啥要紧事，就是想认识一下你。#l", 0, 9201082);
    } else if (status === V++) {
      cm.sendNormalTalk("看你也不像接了约翰·巴里凯德或是狐智教授委托的样子，回见！", 0, 9201082, false, true);
    } else {
      cm.dispose();
    }
  }
}