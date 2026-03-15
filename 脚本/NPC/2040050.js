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
      cm.sendNormalTalk("把拨鼠的舌头和猫头鹰的嘴按照1:1的比例混合……对了！我忘记放那些散发微弱光芒的粉末了~差点出大事……哎呦？你站在那儿多久了啊？啊……看来是我工作得太全神贯注了。嘿嘿~", 0, 2040050, false, true);
    } else if (status === V++) {
      cm.askMenu("你也看见了，我是一名流浪炼金术士。虽然我还处于修行阶段，但说不定也能为你制作几样需要的东西呢。你先随便看看吧！\r\n\r\n制作#b#L0# #t4006000##l\r\n制作#b#L1# #t4006001##l", 0, 2040050);
      cm.dispose();
    }
  }
}