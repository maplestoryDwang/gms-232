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
      if (cm.haveItem(5250500)) {
        cm.removeItem(5250500);
        cm.gainItem(5250504, 1);
      } else {
        if (cm.haveItem(5250501)) {
          cm.removeItem(5250501);
          cm.gainItem(5250504, 1);
        } else {
          if (cm.haveItem(5250502)) {
            cm.removeItem(5250502);
            cm.gainItem(5250504, 1);
          } else if (cm.haveItem(5250503)) {
            cm.removeItem(5250503);
            cm.gainItem(5250504, 1);
          } else {
            cm.sendNormalTalk("如需举行小屋婚礼，两位新人中的1人需要拥有#t5250500#。不过，#h0#你好像没有这个哦。如果结婚对象也没有#t5250500#，那请你们到商城购买后，再来找我吧。", 5, 9201594, false, false);
          }
        }
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}