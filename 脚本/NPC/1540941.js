var status;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.sendOk("这个传送口有着奇妙的能量流动。通过这个传送口，应该能到达其他地方。\r\n\r\n#b(请按下向上按钮，进入传送口。)#k");
      cm.dispose();
      break;
    case 1:
      cm.dispose();
      break;
    case 2:
    case 3:
      cm.dispose();
      break;
  }
}
var status = -1;