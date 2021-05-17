// The object that settings are exported as
const settings = {


    // This changes the bot prefix, e.g. s!ping
    prefix: "s!",

    // This changes the UTC offset for the console log times
    offset: -5,

    // This changes the debug status (if to log things for debugging). Unless your debugging this should probably be off.
    debug: false,


    // This is the bots status settings
    status: {
        // This toggles the custom status (true = enable false = disable)
        enabled: true,
        // This sets the visibly. Options are 'online', 'idle', 'dnd', and 'offline'
        visibility: "idle",
        // This sets the words that go in the status
        name: "#support... and cute puppys",
        // This sets the game or thing its doing. As of making bots can not have custom status like users. Options are 'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING', and 'COMPETING'
        type: "WATCHING"
    },



    // This sets the support channel, must be a channel ID
    supportChannelID: "843596570859405354",

    // This is the role ID to give users if they request more support
    supportRoleID: "843597003094884372",

    // This is the role ID for your staff (this allows them to use commands such as s!support @user to add or remove the user from)
    staffRoleID: "707322848049364994",

    // This is the default staff perm needed to use commands like !support @user. To remove this replace it with 'null' without any quotation marks around it. Here is a list of all of the valid flags https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    staffPerm: "BAN_MEMBERS",

    // This is the error message when a invalid number is sent
    invalidNumber: "Invalid number! Please respond with a valid number. If you need something that is not listed above please respond with 0",

    // This sets the time to delete response messages. Time is in seconds.
    deleteTime: "30",


    // These are the responses that are replied in the support channel. You can add as many of these as you like but they must be real numbers. Also make sure you add a comma after each item.
    responses: {
        0: "SUPPORT",
        1: "Click this link to add Kettu into your server! <https://kettu.cc/invite> If you are having trouble finding Kettu in your server go to server settings -> members -> search for kettu.",
        2: "If Kettu is not responding make sure Kettu has view and send message permissions in that channel. If you can not see Kettu on the member bar he can not see into that channel! If you mention (@Kettu) Kettu he should respond. If he does make sure you are using the correct prefix. If you are still having issues please check out our status page: https://status.kettu.cc/",
        3: "Kettu does not require any set up to start working. That being said you can change Kettu's settings either on the dashboard (https://kettu.cc/dash) or by commands. See the settings module in the help command for more information.",
        4: "Run the command `k!socialImage` to disable socal images for your server. You can also find this setting on Kettu's dashboard: <https://kettu.cc/dash>",
        5 "Use the preference or pref command to opt out of commands.",
        6 "Kettu currently does not have reaction roles. Reaction roles or something similaris planned sometime after v4. Until then, you can use Kettu's self role commands `k!selfrole` and `k!setselfrole`.",
        7 "To change Kettu's prefix either use the `prefix` command or alternatively change it on Kettu's dashboard: https://kettu.cc/dash You can also just mention (@Kettu) as a prefix! ",
        8 "If you are in 'The Fox Den' then you are probably mistaking their private Kettu bot for this Kettu. Currently Kettu does not have a way to do rules like that, however with a quick google or ddg search you can easily find webhook embeds to use instead. ",
    },


    // This sets the support and info.
    supportResponses: {
        // Set to true to enable and set to false to disable
        enabled: true, 
        // What channel is the extra support channel, where you send the message to. If you put no channel it defaults to the support (supportChannelID).
        channelID: "695188468892041318",
        // What the message is!
        message: "Please ask your questions(s) here with as much detail possible and someone will assist you shortly!",
        // This sets how long to wait before deleting the support response message. To have none set simply put 0. Time is in seconds.
        deleteTime: "0",
    },


}



// Now lets export it! (so we can use it in other files, think of it as declaring this object as a public object)
module.exports = settings;
