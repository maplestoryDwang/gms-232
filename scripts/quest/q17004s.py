# id 17004 ([Commerci] Making a Buck), field 865000001

from net.swordie.ms.constants import ItemConstants

sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("That's the very last contract we had. Aren't you lucky? Now, I'd better explain a few things.")
sm.sendSay("You have no money, right? Of course, you don't. You wouldn't be here if you were rich. Here's a welcome gift for joining the trading elite, #h0#. It contains a Cargo Skiff and some funds to get you started.")
if not sm.canHold(ItemConstants.COMMERCI_DENARO, 20):
    sm.sendSayOkay("You need some room in your inventory for your welcome gift!")
    sm.dispose()
sm.giveItem(ItemConstants.COMMERCI_DENARO, 20)
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(17005)  # Bon Voyage 1
sm.completeQuestNoCheck(17006)  # Bon Voyage 2
sm.completeQuestNoCheck(17007)  # Bon Voyage 3
sm.setParam(1)
sm.sendSay("You need gold to trade, so don't spend it all. Unless you want to quit trading for good.")
sm.sendSay("Learn more about your ship by clicking the icon on the lower left-hand corner on your character window. Before you know it, you'll be able to afford a bigger boat. ")
sm.sendPrev("Talk to me again when you're ready to start your very first voyage.")
