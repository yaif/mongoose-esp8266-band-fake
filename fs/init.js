load('api_mqtt.js');
load('api_sys.js');
load('api_timer.js');
load('api_aws.js');

let heart_rate = {
    broadcastId: "C594C6BBABDB",
    deltaUtc: 5,
    heartRate: 95,
    measureTime: "Oct 13, 2017 16:21:09",
    remainCount: 0,
    sendingPeriod: 0,
    type: 0,
    utc: 1507882499
};

Timer.set(5000, true, function() {
    heart_rate.heartRate = Math.floor(Math.random() * (90 - 60)) + 60;
    let time = Timer.now();
    heart_rate.measureTime = Timer.fmt("%b %d, %Y %H:%M:%S", time);
    heart_rate.utc = Math.round(time);
    MQTT.pub("LSBAND/HEARTRATE_FAKE", JSON.stringify(heart_rate), 1);
    print(JSON.stringify(heart_rate));
}, null);

