package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.container.Tuple;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MobTransformInfo {
    private int transformCooltime;
    private int transformHPTriggerOn;
    private int transformHPTriggerOff;
    private boolean linkHP;
    private LocalDateTime lastTransformTime;
    private List<Integer> transformTargets = new ArrayList<>(); //possible mobs to transform into
    private Map<Integer, Tuple<Integer, Integer>> transformSkills = new HashMap<>();

    public List<Integer> getTransformTargets() {
        return transformTargets;
    }

    public void setTransformTargets(List<Integer> transformTargets) {
        this.transformTargets = transformTargets;
    }

    public int getTransformCooltime() {
        return transformCooltime;
    }

    public void setTransformCooltime(int transformCooltime) {
        this.transformCooltime = transformCooltime;
    }

    public int getTransformHPTriggerOn() {
        return transformHPTriggerOn;
    }

    public void setTransformHPTriggerOn(int transformHPTriggerOn) {
        this.transformHPTriggerOn = transformHPTriggerOn;
    }

    public int getTransformHPTriggerOff() {
        return transformHPTriggerOff;
    }

    public void setTransformHPTriggerOff(int transformHPTriggerOff) {
        this.transformHPTriggerOff = transformHPTriggerOff;
    }

    public boolean isLinkHP() {
        return linkHP;
    }

    public void setLinkHP(boolean linkHP) {
        this.linkHP = linkHP;
    }

    public Map<Integer, Tuple<Integer, Integer>> getTransformSkills() {
        return transformSkills;
    }

    public void setTransformSkills(Map<Integer, Tuple<Integer, Integer>> transformSkills) {
        this.transformSkills = transformSkills;
    }

    public LocalDateTime getLastTransformTime() {
        return lastTransformTime;
    }

    public void setLastTransformTime(LocalDateTime lastTransformTime) {
        this.lastTransformTime = lastTransformTime;
    }

    public boolean canTransform(double mobHPPerc){
        if(lastTransformTime == null) return true;
        return ChronoUnit.SECONDS.between(lastTransformTime, LocalDateTime.now()) > transformCooltime && mobHPPerc > transformHPTriggerOff && mobHPPerc < transformHPTriggerOn;
    }
}
