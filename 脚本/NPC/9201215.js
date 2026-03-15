var chat;
function start() {
  chat = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    chat++;
  } else {
    if (f == 0) {
      chat--;
    }
  }
  if (f == -1 || f == 0 && chat == -1) {
    cm.dispose();
    return;
  }
  startChat();
}
function startChat() {
  if (chat == 0) {
    cm.sendNext("Where is this? Maple Island? But something feels wrong....");
  } else {
    cm.dispose();
  }
}
var status = -1;