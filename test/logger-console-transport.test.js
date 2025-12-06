import winston from "winston";

test('Create new logger with Console transport', () => {
    const logger = winston.createLogger({
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({})
        ]
    });

    //untuk membuat logger minimal ada 1 transport agar tidak error.
    logger.log({
        level: "info",
        message: "Logger created."
    });
});