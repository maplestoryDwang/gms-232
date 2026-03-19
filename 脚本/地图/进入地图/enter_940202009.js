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
  } else if (status === V++) {
    cm.setPartner(1, 3001300, 80002330, 0);
    cm.addPopupSay(3001300, 2500, "#face0#若想获得所需配件,请移步前方", '', 0);
    cm.dispose();
  }
}