var status = -1;
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("背着大人偷偷地出来，我有点紧张。虽然可能会被骂，但好不容易有哥哥姐姐陪我玩，就算被骂也没关系。");
    } else if (status === V++) {
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;