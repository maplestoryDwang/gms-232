var status = 0;
function start() {
  status = -1;
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
  if (status == 0) {
    text = "你好哇～！你问我来做什么？？也没什么要紧事，我是受圣地那边的委托，来这里制作#i4033611##t4033611##k的。你前往那些鲁塔比斯的封印守护者所在的地方时，肯定要用到这个的，这点常识你有的哦？";
    text += "\r\n我每天可以送给你5个#b#z4033611##k，你看看收件箱里应该就能找到了。不过再多的钥匙我就得收费啦。暂定一把#b5000点卷#k，因为供不应求嘛。";
    text += "\r\n\r\n";
    text += "#L1#我要再额外购买一把#i4033611##t4033611##k。（交出#b5000点卷#k）#l";
    cm.sendNext(text);
  } else if (status == 1) {
    if (cm.getPlayer().getCSPoints(1) >= 5000) {
      cm.sendOk("嘿嘿～！给你。你记住，这是用魔法制作的，所以#r过了一天之后#k，就会因为魔法力量耗尽而#r消失#k。");
      cm.gainItemPeriod(4033611, 1, 24, true);
      cm.getPlayer().modifyCSPoints(1, -5000);
    } else {
      cm.sendOk("你的点券不够呀。等准备好了#b5000点卷#k再来找我吧，我得继续开工了！");
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}