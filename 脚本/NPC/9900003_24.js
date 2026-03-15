var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      var V = "您好，在这里可以制作140、150的装备，请选择您需要制作的装备类型：\r\n";
      V += "#b#L241#制作140级防具#l\r\n";
      V += "#b#L242#制作140级武器#l\r\n";
      V += "#b#L244#制作150级防具#l\r\n";
      V += "#b#L243#制作150级武器#l\r\n\r\n";
      cm.askMenu(V);
    } else if (status == 1) {
      cm.dispose();
      cm.openNpc(9900003, U);
    }
  }
}