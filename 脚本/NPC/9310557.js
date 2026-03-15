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
      if (cm.isQuestFinished(62151)) {
        var w = "我是天才服装设计师，王~都桑。\r\n你想要定制一套最时尚的前卫奢华套装吗？";
        w += "\r\n#k#L1#使用#b10个#i4009375:##t4009375##k和#b10个#i4310177:##t4310177##k交换#b#i2434594:##t2434594##l";
        w += "\r\n#k#L2#使用#b10个#i4009376:##t4009376##k和#b5个#i4310177:##t4310177##k交换#b#i2434595:##t2434595##l";
        cm.sendNextNoESC_Bottom(w);
      } else {
        cm.sendNormalTalk_Bottom("我是天才服装设计师，王~都桑。\r\n什么？你说有个人和我很像？我很想见见他啊。居然还有人像我这么帅气又优~雅，他的运气真是太好了。", 37, 9310557, false, false);
        cm.dispose();
      }
    } else {
      if (U == 1) {
        if (cm.haveItem(4009375, 10) && cm.haveItem(4310177, 10)) {
          cm.gainItem(4009375, -10);
          cm.gainItem(4310177, -10);
          cm.gainItem(2434594, 1);
          cm.sendOk_Bottom('好的，请收好~');
        } else {
          cm.sendOk_Bottom("哎呀，你的材料不够呢~");
        }
      } else if (cm.haveItem(4009376, 10) && cm.haveItem(4310177, 5)) {
        cm.gainItem(4009376, -10);
        cm.gainItem(4310177, 5);
        cm.gainItem(2434595, 1);
        cm.sendOk_Bottom('好的，请收好~');
      } else {
        cm.sendOk_Bottom("哎呀，你的材料不够呢~");
      }
      cm.dispose();
    }
  }
}