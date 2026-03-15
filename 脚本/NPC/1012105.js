var status = -1;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13);
var card = 0;
var ct = -1;
function start() {
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
      cm.sendNext("您好！欢迎来到护肤中心。您是否想拥有和我一样健康润泽的皮肤呢？只要有了#b#t5153015##k，我们就会给您想要的皮肤。请相信我们，一定会让您满意的！");
      break;
    case 1:
      cm.askAvatar("通过本店特殊开发的机器可以查看护肤后的样子。您想要哪种皮肤呢？请选择吧！", skin, 5153015);
      break;
    case 2:
      if (cm.setAvatar(5153015, skin[U]) == 1) {
        cm.dispose();
        cm.playerMessage(1, "好了，让朋友们赞叹您的新肤色吧！");
        card = 1;
      } else {
        if (cm.getPlayer().getCSPoints(1) >= 980) {
          ct = 1;
        }
        if (cm.getPlayer().getCSPoints(2) >= 980) {
          ct = 2;
        }
        if (ct != -1) {
          cm.getPlayer().modifyCSPoints(ct, -980);
          cm.gainItem(5153015, 1);
        } else {
          beauty = -1;
        }
        action(f, W, U);
      }
      break;
    case 3:
      if (card == 0) {
        if (cm.getPlayer().getCSPoints(1) >= 480) {
          if (cm.setAvatar(5153015, skin[U]) == 1) {
            cm.getPlayer().modifyCSPoints(1, -480);
            cm.dispose();
            cm.playerMessage(1, "好了，您的朋友们一定认不出您了！");
          }
        } else {
          cm.dispose();
          cm.sendOk("你好像没有足够的点卷/抵用卷!");
          card = 1;
        }
      }
      break;
    default:
      cm.dispose();
      break;
  }
}