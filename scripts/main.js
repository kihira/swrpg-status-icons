Hooks.once("init", async function ()
{
    game.settings.register("swrpg-status-icons", "disableStatusEffectBackground", {
        name: game.i18n.localize("swrpg-status-icons.disablestatusEffectBackground.name"),
        hint: game.i18n.localize("swrpg-status-icons.disablestatusEffectBackground.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: (rule) => window.location.reload(),
    });


    if (game.settings.get("swrpg-status-icons", "disableStatusEffectBackground"))
    {
        // Effectively hook at the end of the drawEffects call to remove the background before it's actually rendered
        const originalDrawEffect = Token.prototype.drawEffects;
        
        Token.prototype.drawEffects = function()
        {
            originalDrawEffect.call(this);

            // If there are any effects being drawn, the first display object in effects will always be the background 
            if (this.effects.children.length > 0)
            {
                this.effects.removeChildAt(0);
            }
        };
    }
});

CONFIG.statusEffects.push(
    {
        id: "Add Ability",
        label: "swrpg-status-icons.AddAbility",
        icon: "modules/swrpg-status-icons/images/markers/AddAbility.png"
    },
    {
        id: "Add Boost",
        label: "swrpg-status-icons.AddBoost",
        icon: "modules/swrpg-status-icons/images/markers/AddBoost.png"
    },
    {
        id: "Add Challenge",
        label: "swrpg-status-icons.AddChallenge",
        icon: "modules/swrpg-status-icons/images/markers/AddChallenge.png"
    },
    {
        id: "Add Difficulty",
        label: "swrpg-status-icons.AddDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/AddDifficulty.png"
    },
    {
        id: "Add Proficiency",
        label: "swrpg-status-icons.AddProficiency",
        icon: "modules/swrpg-status-icons/images/markers/AddProficiency.png"
    },
    {
        id: "Add Setback",
        label: "swrpg-status-icons.AddSetback",
        icon: "modules/swrpg-status-icons/images/markers/AddSetback.png"
    },
    {
        id: "Downgrade Ability",
        label: "swrpg-status-icons.DowngradeAbility",
        icon: "modules/swrpg-status-icons/images/markers/DowngradeAbility.png"
    },
    {
        id: "Downgrade Difficulty",
        label: "swrpg-status-icons.DowngradeDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/DowngradeDifficulty.png"
    },
    {
        id: "Reduce Ability",
        label: "swrpg-status-icons.ReduceAbility",
        icon: "modules/swrpg-status-icons/images/markers/ReduceAbility.png"
    },
    {
        id: "Reduce Boost",
        label: "swrpg-status-icons.ReduceBoost",
        icon: "modules/swrpg-status-icons/images/markers/ReduceBoost.png"
    },
    {
        id: "Reduce Challenge",
        label: "swrpg-status-icons.ReduceChallenge",
        icon: "modules/swrpg-status-icons/images/markers/ReduceChallenge.png"
    },
    {
        id: "Reduce Difficulty",
        label: "swrpg-status-icons.ReduceDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/ReduceDifficulty.png"
    },
    {
        id: "Reduce Proficiency",
        label: "swrpg-status-icons.ReduceProficiency",
        icon: "modules/swrpg-status-icons/images/markers/ReduceProficiency.png"
    },
    {
        id: "Reduce Setback",
        label: "swrpg-status-icons.ReduceSetback",
        icon: "modules/swrpg-status-icons/images/markers/ReduceSetback.png"
    },
    {
        id: "Upgrade Ability",
        label: "swrpg-status-icons.UpgradeAbility",
        icon: "modules/swrpg-status-icons/images/markers/UpgradeAbility.png"
    },
    {
        id: "Upgrade Difficulty",
        label: "swrpg-status-icons.UpgradeDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/UpgradeDifficulty.png"
    },
    {
        id: "No Action",
        label: "swrpg-status-icons.NoAction",
        icon: "modules/swrpg-status-icons/images/markers/NoAction.png"
    },
    {
        id: "No Manuever",
        label: "swrpg-status-icons.NoManeuver",
        icon: "modules/swrpg-status-icons/images/markers/NoManeuver.png"
    },
);