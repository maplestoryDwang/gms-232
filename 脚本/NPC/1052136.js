var names = Array("Kerning Square Lobby", "F1/F2: Bubble Tea Shop", "F3/F4: Doll Shop", "F5/F6: Costume & Perfume Shop", "F7/F8: Music Shop & VIP Zone", "Exit Kerning Square");
var mid = Array('103040000', "103040100", "103040200", "103040300", '103040400', '103020020');
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      text = "You can take the elevator to get around quick. Select a destination.\r\n";
      for (var V = 0; V < names.length; text += '#L' + V + '##b' + names[V] + "#k\r\n#l", V++) {
        ;
      }
      cm.askMenu(text);
    } else {
      if (status == 1) {
        cm.sendNext("Moving to " + names[U] + ". Press Escape to cancel.");
        map = mid[U];
      } else if (status == 2) {
        cm.warp(map, "enter00");
        cm.dispose();
      }
    }
  }
}
var status = -1;