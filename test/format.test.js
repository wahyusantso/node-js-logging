import winston from "winston";

test('Logging with format', () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.simple(), //secara default winston menggunakan format json
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({})
        ]
    });

    //untuk membuat logger minimal ada 1 transport agar tidak error.
    logger.info('Say Hello');
});


test('Logging with printf format', () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(log => {
            return `${new Date} : ${log.message}` //custom format log
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Say Hello from custom log');
});