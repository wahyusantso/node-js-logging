import winston from "winston";

test('Create new logger with Console and file transport', () => {
    const logger = winston.createLogger({
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({}),
            new winston.transports.File({ //log akan disimpan di file
                filename: "file-transport.log"
            })
        ]
    });

    //untuk membuat logger minimal ada 1 transport agar tidak error.
    logger.info('Great Job!');
    logger.info('Great Job!');
    logger.info('Great Job!');
});