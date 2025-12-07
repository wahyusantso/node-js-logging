import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test('Logging with daily rotate file', () => {
    //memisahkan beberapa level log di transport
    const logger = winston.createLogger({
        level: "info",
        transports: [ //transport, desitinasi/tujuan log dikirim
            new winston.transports.Console({}), //menampilkan log dengan level info ke atas
            new winston.transports.DailyRotateFile({
                filename: 'rotate-file-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: true,
                maxSize: '20m', // 20 mega untuk maksimal ukuran file
                maxFiles: '14d' //menentukan berapa lama file disimpan
            })
        ]
    });

    for (let i = 0; i < 10.000; i++) {
         //untuk membuat logger minimal ada 1 transport agar tidak error.
        logger.info('Great Job!');
        logger.info('Great Job!');
        logger.info('Great Job!');
        logger.error('Someting went wrong!');   
    }
});