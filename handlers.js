    const { GiveawaysManager } = require('discord-giveaways');
    const manager = new GiveawaysManager(client, {
        storage: './giveaways.json',
        updateCountdownEvery: 10000,
        hasGuildMembersIntent: false,
        default: {
            botsCanWin: false,
            embedColor: config.colors.yes,
            reaction: '🎉',
            messages: {
                giveaway: '🎉🎉 **GIVEAWAY** 🎉🎉',
                giveawayEnded: '🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
                timeRemaining: 'Time remaining: **{duration}**!',
                inviteToParticipate: 'React with 🎉 to participate!',
                winMessage: 'Congratulations, {winners}! You won **{prize}**!\n{messageURL}',
                embedFooter: 'STATİON',
                noWinner: 'Giveaway cancelled, no valid participations.',
                hostedBy: 'Hosted by: {user}',
                winners: 'winner(s)',
                endedAt: 'Ended at',
                units: {
                    seconds: 'Seconds',
                    minutes: 'Minutes',
                    hours: 'Hours',
                    days: 'Days',
                    pluralS: false
                }
            }
        }
    });
    client.giveawaysManager = manager;