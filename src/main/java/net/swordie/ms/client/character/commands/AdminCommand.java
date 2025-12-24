package net.swordie.ms.client.character.commands;

import net.swordie.ms.client.character.Char;

/**
 * Created on 12/22/2017.
 */
public abstract class AdminCommand implements ICommand {

    public AdminCommand() {
    }

    private static char prefix = '!';

    public static char getPrefix() {
        return prefix;
    }

}
