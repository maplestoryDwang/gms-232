MOONBEAM = 3002000

sm.setSpeakerID(2007)
if sm.sendAskYesNo("其实我已经知道了。隐月你总有一天会离开。因为在隐月身上有着风的味道。"):
    sm.createQuestWithQRValue(37999, "SKIP_38027")

if sm.getQRValue(37999) != "SKIP_38027":
    sm.lockInGameUI(True)
    sm.forcedInput(0)

    sm.removeEscapeButton()
    sm.setSpeakerID(MOONBEAM)
    sm.sendNext("我把精灵送给你，其实是不想让你走。让你在旁边保护我，那样你就不会走了。你不是答应我的吗？要保护我。所以，所以……")

    sm.setPlayerAsSpeaker()
    sm.sendSay("……我有个朋友。他是最先向我伸出手的人。他告诉认为自己没有理由活下去的我，你也没有理由要去死，让我们一起去寻找活下去的理由。")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("在来到这里之前，我最后一个见到的人也是他。虽然做出选择的人是我，但最痛苦的人应该是他。他可能以为我已经死了，一定生活在负罪感之中。")

    sm.setPlayerAsSpeaker()
    sm.sendSay("我必须得回去。必须回去告诉那些还在等着我的人、正在经受痛苦的人，我还活着。而且我还要守护住他们所深爱的家园。还有…………当我处理完所有的事情后…………那时候，我会再回来。")
    sm.sendSay("……我也是隐月的朋友，对吧？我也是那么重要的人……对吧？")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("……当然。")

    sm.setPlayerAsSpeaker()
    sm.sendSay("我们狐狸把这叫做伙伴。伙伴。隐月和阿琅是伙伴，所以你必须快点回来。我会非常想念隐月，所以我会很难过的。明白了吗？")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("不对，隐月是个笨蛋，也许会全部忘掉。所以，这样……")

    sm.setPlayerAsSpeaker()
    sm.sendSay("来，这是作为朋友的证物。你既然对着狐狸树立下约定，就一定要遵守。如果违背的话，狐神就会震怒，并对你处以可怕惩罚的！")

    sm.setSpeakerID(MOONBEAM)
    sm.sendSay("呃啊，我肚子好饿啊。我先走了，慢腾腾的隐月跟在我后面把！拜~")
    sm.sendSay("雨……下个不停。")
    sm.sendDelay(500)

    sm.showEffect("Effect/Direction15.img/effect/story/tatoo/0", 0, -54, -300)
    sm.sendDelay(2400)

sm.startQuest(38901)

if sm.getQRValue(37999) != "SKIP_38027":
    sm.sendDelay(1000)

    sm.sendNext("This is a mark of companionship. We made our promise under the Fox Tree, so you have to keep your promise. Otherwise the fox god is gonna be really mad!")
    sm.sendSay("Ah! I'm really hungry all of a sudden. I'm gonna head home first. Catch me if you can, slowpoke!")
    sm.sendDelay(500)

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(6000)

if sm.getQRValue(37999) != "SKIP_38027":
    sm.setPlayerAsSpeaker()
    sm.sendNext("The rain... It's not stopping.")
sm.lockInGameUI(False)
