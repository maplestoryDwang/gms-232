var status = -1;
function action(f, W, U) {
  cm.sendOk("空空荡荡的垃圾箱，里面什么也没有。谁说里面可能有好东西的？");
  cm.dispose();
}
function randomNum(f, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (W - f + 1) + f, 10);
      break;
    default:
      return 0;
      break;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;