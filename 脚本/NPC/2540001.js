var status = -1;
var itemid = [4009237, 4009238];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = parseInt(em.getProperty("stage7_count"));
  if (status < 0) {
    cm.dispose();
  } else if (status === 0) {
    if (V >= 8) {
      cm.sendOk("太，太谢谢你了。我感觉我已经恢复得差不多了。这就帮你打开通往下一层的大门。\r\n\r\n#b#e[恢复状况]#B" + V * 100 / 8 + "#\r\n");
      em.setProperty("stage7", "clear");
      cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
      cm.dispose();
    } else {
      cm.sendOk("嗨，能、能帮我驱赶一下这里无穷无尽的猴子吗？一不留神被这些疯狂的猴子打伤了，我需要稍微休息一下……很快就好！\r\n\r\n你说大、大门？#b我知道怎么离开这一层！#k等我缓过来就帮你打开，我们一起离开这里。\r\n\r\n#b#e[恢复状况]#B" + V * 100 / 8 + "#\r\n");
      em.schedule("stage7_Fight", 15000);
      cm.dispose();
    }
  } else {
    cm.dispose();
  }
}