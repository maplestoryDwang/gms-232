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
      if (cm.haveItem(4033195)) {
        cm.sendOk("我最好回到楼下把药水箱子交给林伯特。");
        cm.dispose();
        return;
      }
      if (cm.isQuestActive(20031)) {
        cm.askYesNo("装满了药水，覆盖着一层灰尘的药水箱。让人怀疑还能不能出售。\r\n要把药水箱拿出来吗？", 0, 1106004);
      } else {
        cm.sendOk("你看起来并不需要我的药水！");
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("嗯？这封信是怎么回事？是林伯特大叔寄来的信吗？看上去好像很旧的样子。\r\n“库洛姆”寄……库洛姆是谁？好像在哪里听说过。记不起来了。没写收信人……先把他交给林伯特大叔看看吧。", 2, 1106004, false, true);
      } else if (status === V++) {
        cm.gainItem(4033194, 1);
        cm.gainItem(4033195, 1);
        cm.sendNormalTalk("药水箱清理好了，应该到1层去。不快点的话，又要被林伯特大叔骂了……", 2, 1106004, false, false);
        cm.dispose();
      }
    }
  }
}