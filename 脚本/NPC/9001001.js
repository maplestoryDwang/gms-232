function start() {
  cm.askMenu("#b\r\n#L0#Sweet Cake Hill 1#l\r\n#L1#Sweet Cake Hill 2#l#k");
}
function action(f, W, U) {
  if (f == 1) {
    switch (U) {
      case 0:
        cm.warp(683000000, 0);
        break;
      case 1:
        cm.warp(684000000, 0);
        break;
    }
  }
  cm.dispose();
}
var status = -1;