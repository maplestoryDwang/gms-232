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
      cm.sendNormalTalk("喂~ 仔细听我说。其实我是个生意人，就靠把这里的东西卖到其他村子去为生。可最近这里怪物好厉害呀，生意清淡啊………你愿不愿意跟我交易呢？", 0, 2010000, false, true);
    } else {
      if (status === V++) {
        cm.askYesNo("交易其实很简单的，你只要给我我需要的东西，我就把我所有的东西给你选。不过我也会与其他人交易，所以可能每次身上带的货物都不一样哦。别想了，跟我交易保你赚钱。", 0, 2010000);
      } else if (status === V++) {
        cm.askMenu("好，你先决定拿什么东西换吧。你给我好东西就能换的更好的东西，信不信由你。\r\n#b#L0# #t4000073# 100个#l\r\n#L1# #t4000059# 100个#l\r\n#L2# #t4000076# 100个#l\r\n#L3# #t4000058# 100个#l\r\n#L4# #t4000078# 100个#l\r\n#L5# #t4000060# 100个#l\r\n#L6# #t4000062# 100个#l\r\n#L7# #t4000048# 100个#l\r\n#L8# #t4000081# 100个#l\r\n#L9# #t4000061# 100个#l\r\n#L10# #t4000070# 100个#l\r\n#L11# #t4000071# 100个#l\r\n#L12# #t4000072# 100个#l\r\n#L13# #t4000051# 100个#l\r\n#L14# #t4000055# 100个#l\r\n#L15# #t4000069# 100个#l\r\n#L16# #t4000052# 100个#l\r\n#L17# #t4000050# 100个#l\r\n#L18# #t4000057# 100个#l\r\n#L19# #t4000049# 100个#l\r\n#L20# #t4000056# 100个#l\r\n#L21# #t4000079# 100个#l\r\n#L22# #t4000053# 100个#l\r\n#L23# #t4000054# 100个#l\r\n#L24# #t4000080# 100个#l", 0, 2010000);
        cm.dispose();
      }
    }
  }
}