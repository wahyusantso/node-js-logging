import winston from "winston";

test('Create new logger with transport level', () => {
    //memisahkan beberapa level log di transport
    const logger = winston.createLogger({
        level: "info",
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({}), //menampilkan log dengan level info ke atas
            new winston.transports.File({ //hanya menyimpan log dengan level error
                level: "error",
                filename: "transport-level.log"
            })
        ]
    });

    //untuk membuat logger minimal ada 1 transport agar tidak error.
    logger.info('Great Job!');
    logger.info('Great Job!');
    logger.info('Great Job!');
    logger.error('Someting went wrong!');
});