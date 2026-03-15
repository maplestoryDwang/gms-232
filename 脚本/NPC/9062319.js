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
      if (cm.getNumberFromQuestInfo(501094, "shop0") > 0) {
        cm.dispose();
        cm.openShop(cm.getNpc() + 1);
        return;
      }
      cm.sendNormalTalk("#e#b#h0##k#n！\r\n你有吃过#r#e觉醒山#n#k上长的#b#e竹笋#n#k吗？", 4, 9062319, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("与其他地方相比，这里的竹笋格外好吃！\r\n有传闻说，#b#e武公#n#k会经常送竹笋给徒弟，以此奖励他们的辛劳……", 4, 9062319, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("给我带来#b#e竹笋#n#k，我就给你个#r#e特殊道具#n#k！", 4, 9062319, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呵呵，尤其是天才陈道人制作的#r#e神丹妙药#n#k，具有非常卓越的效果！", 4, 9062319, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.setNumberForQuestInfo(501094, "shop0", 1);
          }
        }
      }
    }
  }
}