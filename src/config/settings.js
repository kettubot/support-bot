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
        1: "This is the responses for the #1 thingy",
        2: "This is yet another example responses for #2",
        // Put 'SUPPORT' to signal that triggers adding or removing the support role from a user. This has to be a number but sometime in the future you should be able to do something else instead of a number.
        3: "SUPPORT",
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
