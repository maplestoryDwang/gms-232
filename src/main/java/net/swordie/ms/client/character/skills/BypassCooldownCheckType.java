package net.swordie.ms.client.character.skills;

/**
 * Created on 27/01/2021.
 *
 * @author Asura
 */
public enum BypassCooldownCheckType {
    Check, // Do not bypass check
    BypassCheck, // Bypass cooldown check only
    BypassCheckAndCooldown, // Bypass cooldown check and do not set cooldown
    ;
}
