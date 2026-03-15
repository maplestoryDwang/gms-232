var maps = Array(103000000, 190000000, 191000000, 192000000, 195000000, 196000000, 197000000, 600010000, 880000000, 881000000, 809020000, 922220000, 924000100, 925010300, 950000100, 970020001, 970020002, 970020003, 970020004, 910300000, 910210000, 910500000, 910500100, 910500200, 922020100);
function start() {
  var f = "Select your desired map exclusively for you!#b";
  for (var W = 0; W < maps.length; W++) {
    f += "\r\n#L" + W + "##m" + maps[W] + "# " + (W >= 1 ? W == maps.length - 1 ? "(Level " + (W * 5 - 4) + '+)' : "(Levels " + (W * 5 - 4) + " to " + W * 5 + ')' : '') + '#l';
  }
  cm.askMenu(f);
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(maps[U], 0);
  }
  cm.dispose();
}
var status = -1;