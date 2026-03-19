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
    cm.setPartner(1, 2155104, 80001702, 0);
    cm.sendNormalTalk_Bottom("#face0#这里尽头是，主机房内。\r\n这里…嗯，我之前偶尔到过一次这里…\r\n没错，当时我也是这么慌张…", 37, 2155121, false, false);
    cm.dispose();
  }
}