import winston from "winston";

test('Logging with Level', () => {
    const logger = winston.createLogger({
        level: "debug", //menentukan batas level yang akan ditampilkan
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({})
        ]
    });


    logger.log({level: "error", message: "Logger Error"}); // level paling tinggi.
    logger.log({level: "warn", message: "Logger Warn"});
    logger.log({level: "info", message: "Logger Info"});
    //secara default log hanya menampilkan level info ke atas, jadi log dibawah ini tidak akan tampil
    logger.log({level: "http", message: "Logger HTTP"});
    logger.log({level: "verbose", message: "Logger Verbose"});
    logger.log({level: "debug", message: "Logger Debug"});
    logger.log({level: "silly", message: "Logger Silly"});
});


test('Logging with Shortcut function', () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({})
        ]
    });

    logger.error("Logger Error");
    logger.warn("Logger Warn");
    logger.info("Logger Info");
    logger.http("Logger HTTP");
    logger.verbose("Logger Verbose");
    logger.debug("Logger Debug");
    logger.silly("Logger Silly");
});