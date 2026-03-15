var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57109.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("不用多说，最重要的事当然是尽快恢复原本的力量。无论接下来要去做什么，凭借现在的这点本事都只会给大家拖后腿。不过，这并不是短时间内就能立刻解决的问题。我必须抓紧一切机会，努力投身于实践，力求恢复原本的力量才行。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("第二件要做的事情，就是找出姬儿的行踪。如果她遇到了什么麻烦事，就把她救出来，并带回枫叶山丘。姬儿在遭遇灭门灾祸后，被抓去当作宿敌信长的祭品。直到现在，我们都不知道她究竟身在何处……相信她一定已是身心俱疲了。我不能再耽误丝毫时间了。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("最后要做的，就是把握织田军的行踪。虽然我无法确定织田军是否也因为本能寺的异常情况而来到了“这边”，但这种可能性一定不小。而且，如果他们也过来了，那么依照信长的脾性，“这边”的世界一定也会陷入危险。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("唉……不过这些问题都不是立刻能够着手解决的，相信一定还有各种艰难险阻等待在我的面前。总之，先在枫叶山丘完成我力所能及的事情吧。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57109);
                            cm.gainItem(2001503, 100);
                            cm.gainItem(2001501, 100);
                            cm.gainExp(2000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};