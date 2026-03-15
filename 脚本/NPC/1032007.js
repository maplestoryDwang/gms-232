var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.fieldEffect_PlayFieldSound("Sound/Object.img/Whistle", 100);
    cm.sendNormalTalk("你好？我是码头售票员。你想离开金银岛，到其他地方去吗？这里有开往秘岛大陆#b天空之城站#k的#b单人船随时待命#k，马上就可以送你过去。", 0, 1032007, false, true);
  } else {
    if (status === 1) {
      cm.sendNormalTalk("如果你想去天空之城，请和右边的#b检票员#k说话。", 0, 1032007, true, true);
    } else {
      if (status === 2) {
        cm.sendNormalTalk("事实上在不久之前，乘坐飞艇还必须花钱买票。但是玛加提亚的炼金术士们以惊人的魔力开发出了浮游石，因此我们才决定免费运行飞艇。嗯？我们职员靠什么生活？请别担心。政府会给我们补贴。", 0, 1032007, true, true);
      } else if (status === 3) {
        cm.dispose();
      }
    }
  }
}