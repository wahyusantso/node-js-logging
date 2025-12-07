import winston from "winston";
import TransportStream from "winston-transport"

//membuat transport manual
test('Create new logger with new transport', () => {

    class MyTransport extends TransportStream {
        constructor(option) {
            super(option); //kirim data ke parent class
        }

        log(info, next) {
            console.log(`${new Date} : ${info.level} : ${info.message}`); // pesan log
            next(); //log selanjutnya, jika tidak menggunakan maka hanya 1 log yang ditampilkan
        }
    }


    const logger = winston.createLogger({
        level: "silly",
        transports: [ //transport, desitinasi/tujuan log dikirim
            new MyTransport({})
        ]
    });

    //untuk membuat logger minimal ada 1 transport agar tidak error.
    logger.error("Logger Error");
    logger.warn("Logger Warn");
    logger.info("Logger Info");
    logger.http("Logger HTTP");
    logger.verbose("Logger Verbose");
    logger.debug("Logger Debug");
    logger.silly("Logger Silly");
});