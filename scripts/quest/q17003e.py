# id 17003 ([Commerci] Get Rich Quick), field 865000001
sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("Welcome to Commerci, the place where pockets are sewn with gold thread and buttons are made of gold nuggets. In other words, we're rich.")
sm.sendSay("To start trading, just sign your life away on this contract. Then you'll be one of us. Whoo.")
res = sm.sendAskYesNo("You want to be rich, right?")
sm.setParam(1)
sm.sendNext("Ha! Great choice, #h0#! You won't regret this. Wait... Where'd the contract go?")
sm.completeQuestNoCheck(parentID)
