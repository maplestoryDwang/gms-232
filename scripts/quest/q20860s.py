# The Five Paths - Cygnus 1st job advancement

sm.setSpeakerID(1101002)
sm.sendNext("你已经达到了10级，说明你很努力。很好。你现在已经超出了初心者的境界，我认可你有正式成为修炼骑士的资格。但在这之前，我想先问你一个问题。你想选择哪条骑士之路呢？")
sm.sendNext("骑士之路不止一条。在前面等待着你的，一共有五条路……选择哪条路是你的自由。但至少不要让自己后悔。")
sm.sendNext("看来你已经很清楚自己该走哪条路了。那很好。现在就看你自己的选择了。")
if sm.sendAskAccept("骑士团长们正在左边等你。先去听听他们的话，然后选择自己想要的路。因为一切都是为了你自己……"):
    sm.startQuest(parentID)