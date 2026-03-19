function action(f, E, e) {
  var V = cm.getJob();
  if (V == 4002 || V == 4200 || V == 4210 || V == 4211 || V == 4212) {
    cm.hideNpc(9130024);
  } else {
    cm.hideNpc(9130083);
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;