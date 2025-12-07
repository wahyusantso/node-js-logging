import winston from "winston";

test('Logging with format', () => {
    const logger = winston.createLogger({
        level: "info",
        //gabungkan beberapa format log
        format: winston.format.combine( //harus menentukan format akhir simple atau json, agar tidak undefined
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.simple()
        ),
        transports: [ 
            new winston.transports.Console({})
        ]
    });

    logger.info('Say Hello');
    logger.info('Hello World');
    logger.info('Great Job');
});