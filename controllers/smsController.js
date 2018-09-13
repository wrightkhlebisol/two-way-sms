// Define application constants
const message = 'I am a fisherman. I sleep all day and work all night!';

// Your login credentials
const shortcode = `7000`;
const username = 'sandbox';
const apiKey = `b6dda730b29431be3a51a2b55034c2f86a7b6074ac1e3f30473e03c225e1dbbe`;
const options = {
    apiKey, username
}

const africasTalking = require('africastalking')(options);
const sms = africasTalking.SMS
exports.received = (req, res) => {
    // select needed properties from post object
    var body = req.body;

    // Respond to message if from appropriate shortcode
    if(body.to == '41919'){
        sendResponse(body.from, message)
    }else{
        console.log(`Something is wrong with the incoming message`)
    }
}

function sendResponse(recipient, message){
    var opts = {
        from: shortcode,
        to: recipient,
        message
    }

    sms.send(opts).then(
        console.log('Message sent successfully')
    ).catch(
        console.log('Something went wrong with the message sending')
    )
}