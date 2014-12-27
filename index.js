/**
 * Classic "tissit" plugin for UniBot.
 *
 * @param  {Object} options Plugin options object, description below.
 *   db: {mongoose} the mongodb connection
 *   bot: {irc} the irc bot
 *   web: {connect} a connect + connect-rest webserver
 *   config: {object} UniBot configuration
 *
 * @return  {Function}  Init function to access shared resources
 */
module.exports = function init(options) {
    // Actual plugin implementation.
    return function plugin(channel) {
        return {
            "^(.*?)(tissi)(.*?)$": function lannistus(from, matches) {
                channel.say('Tissit mainittu!');
            }
        };
    };
};
