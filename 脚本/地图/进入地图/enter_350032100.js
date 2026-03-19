var status = -1;
var selectionLog = [];
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
    cm.useItem(2023431);
    cm.useItem(2023432);
    cm.setPartner(1, 1540624, 80001615, 0);
    cm.setPartner(1, 1540640, 80001616, 0);
    cm.addPopupSay(1540612, 1500, "如果埃德尔斯坦得到解放, 我一定要在市中心开个派对. ", '', 0);
    cm.addPopupSay(1540611, 1500, "嗯, 那我就能看到你穿着漂亮的礼服了. ", '', 0);
    cm.addPopupSay(1540612, 1500, "哈啊……你所想象的派对究竟是什么派对啊?", '', 0);
    cm.addPopupSay(1540611, 1500, "贝尔, 你果然还是在拿起弓箭时最美了. ", '', 0);
    cm.addPopupSay(1540612, 1500, "韩利泰, 你不说话的时候最帅. ", '', 0);
    cm.addPopupSay(1540612, 1500, "你挺厉害的嘛, #h0#. 你比韩利泰好多了. ", '', 0);
    cm.addPopupSay(1540611, 1500, "你说这话真让我伤心. ", '', 0);
    cm.addPopupSay(1540612, 1000, "只要再搜集一些就行了. \r\n继续加油吧. ", '', 0);
    cm.addPopupSay(1540612, 1500, "呼, 真是恶心, 居然涌上来这么多!", '', 0);
    cm.addPopupSay(1540611, 1500, "淑女可不能那么说话. ", '', 0);
    cm.addPopupSay(1540612, 1500, "好好~爷爷. ", '', 0);
    cm.addPopupSay(1540611, 1500, "我一直十分好奇, 美洲豹究竟是如何饲养的?", '', 0);
    cm.addPopupSay(1540612, 1500, "和人一样. \r\n只要打打它, 它就乖了. ", '', 0);
    cm.addPopupSay(1540611, 1500, "不要开玩笑. ", '', 0);
    cm.addPopupSay(1540612, 1500, '我没有开玩笑啊?', '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;